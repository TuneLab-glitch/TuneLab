(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.TuneLabEngine=api;})(globalThis,()=>{
 'use strict';
 const BAR=14.5038,STD=14.6959;
 const finite=Number.isFinite,clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
 function round(x,n){const f=10**n;return Math.sign(x)*Math.floor(Math.abs(x)*f+.50000000001)/f;}
 function numeric(x){if(x===null||x===undefined||String(x).trim()==='')return NaN;const v=Number(x);return finite(v)?v:NaN;}
 function psi(bar,mode='ktuner',pa=.98,offset=0){return bar*BAR-(mode==='ktuner'?STD:pa*BAR)+(mode==='ktuner'?offset:0);}
 function toBar(v,units='bar',offset=0,pa=.98){if(units==='bar')return v;if(units==='kpa')return v/100;if(units==='psiAbs')return v/BAR;if(units==='psiGauge')return v/BAR+pa;if(units==='ratio')return v*pa;return(v-offset+STD)/BAR;}
 function fromBar(v,units,offset=0,pa=.98){if(units==='bar')return v;if(units==='kpa')return v*100;if(units==='psiAbs')return v*BAR;if(units==='psiGauge')return(v-pa)*BAR;if(units==='ratio')return v/pa;return v*BAR-STD+offset;}
 function distance(v,f){if(f.rule==='Any')return 0;if(f.rule==='At or above')return Math.max(0,f.min-v);if(f.rule==='At or below')return Math.max(0,v-f.min);if(f.rule==='Between')return Math.max(0,f.min-v,v-f.max);throw Error('Unknown selection rule');}
 function weight(v,f){const d=distance(v,f);if(f.width===0)return d===0?1:0;const t=clamp(1-d/f.width,0,1);return t*t*(3-2*t);}
 function validateFilter(f){if(!['Any','At or above','At or below','Between'].includes(f.rule)||!finite(f.min)||!finite(f.max)||!finite(f.width)||f.width<0||(f.rule==='Between'&&f.min>f.max))throw Error('Check selection thresholds and smoothing widths');}
 function increasing(a){return a.length>0&&a.every((v,j)=>finite(v)&&(j===0||v>a[j-1]));}
 function validateTable(t,allowRepeatedPa=t.kind==='mpr'){const axisOk=allowRepeatedPa?t.axis.length>0&&t.axis.every((v,j)=>finite(v)&&v>0&&(j===0||v>=t.axis[j-1])):increasing(t.axis);if(!increasing(t.rpm)||!axisOk||t.values.length!==t.rpm.length||t.values.some(r=>r.length!==t.axis.length||r.some(v=>!finite(v))))throw Error('Table needs ordered numeric axes and a complete numeric body');}
 function bracket(a,x){if(x<a[0]||x>a[a.length-1])throw Error('Reference PA is outside the table');let lo=0;for(let j=0;j<a.length;j++){if(a[j]<=x)lo=j;else break;}if(a[lo]===x||lo===a.length-1)return[lo,lo,0];return[lo,lo+1,(x-a[lo])/(a[lo+1]-a[lo])];}
 function adjust(t,o){
  validateTable(t,o.kind==='mpr');validateFilter(o.rpmFilter);validateFilter(o.axisFilter);
  if(!finite(o.amount)||!finite(o.pa)||o.pa<=0||!finite(o.offset)||!['bar','psi','kpa','psiAbs','psiGauge','ratio'].includes(o.sourceUnits)||!['bar','psi','kpa','psiAbs','psiGauge','ratio'].includes(o.outputUnits)||!['ktuner','pa'].includes(o.analysis)||!['Add PSI','Scale to peak'].includes(o.mode)||!Number.isInteger(o.decimals)||o.decimals<0||o.decimals>6)throw Error('Check units, target and reference pressure');
  const abs=t.values.map(r=>r.map(v=>toBar(v,o.sourceUnits,o.offset,o.pa))),src=abs.map(r=>r.map(v=>psi(v,o.analysis,o.pa,o.offset)));
  let peaks=[];
  if(o.kind==='mpr'){
   const [lo,hi,m]=bracket(t.axis,o.pa);
   if(distance(t.axis[lo],o.axisFilter)!==0||distance(t.axis[hi],o.axisFilter)!==0)throw Error('Reference PA brackets are excluded by the PA selection');
   peaks=src.filter((_,j)=>distance(t.rpm[j],o.rpmFilter)===0).map(r=>r[lo]*(1-m)+r[hi]*m);
  }else src.forEach((r,j)=>r.forEach((v,k)=>{if(distance(t.rpm[j],o.rpmFilter)===0&&distance(t.axis[k],o.axisFilter)===0)peaks.push(v);}));
  if(!peaks.length)throw Error('No cells selected; source is unchanged');
  const selectedPeak=Math.max(...peaks);
  if(o.mode==='Scale to peak'&&(selectedPeak<=0||o.amount<0))throw Error('Scale to peak needs a positive source peak and nonnegative target');
  const factor=o.mode==='Scale to peak'?o.amount/selectedPeak:1;
  let changed=0,reversals=0;
  const weights=src.map((r,j)=>r.map((_,k)=>t.protect?.[j]?.[k]?0:weight(t.rpm[j],o.rpmFilter)*weight(t.axis[k],o.axisFilter)));
  const values=src.map((r,j)=>r.map((v,k)=>{
   const w=weights[j][k],p=v+(o.mode==='Add PSI'?o.amount:v*(factor-1))*w;
   const base=o.analysis==='ktuner'?STD/BAR:o.pa,add=o.analysis==='ktuner'?o.offset:0;
   const bar=base+(p-add)/BAR;
   const unchanged=w===0||(o.mode==='Add PSI'?o.amount===0:factor===1);
   let output=unchanged&&o.sourceUnits===o.outputUnits?t.values[j][k]:round(fromBar(unchanged?abs[j][k]:bar,o.outputUnits,o.offset,o.pa),o.decimals);
   if(Math.abs(toBar(output,o.outputUnits,o.offset,o.pa)-abs[j][k])>1e-9)changed++;
   return output;
  }));
  values.forEach(r=>r.forEach((v,k)=>{if(k&&v<r[k-1])reversals++;}));
  const outPsi=values.map(r=>r.map(v=>psi(toBar(v,o.outputUnits,o.offset,o.pa),o.analysis,o.pa,o.offset)));
  let proposedPeak;
  if(o.kind==='mpr'){const[lo,hi,m]=bracket(t.axis,o.pa);proposedPeak=Math.max(...outPsi.filter((_,j)=>distance(t.rpm[j],o.rpmFilter)===0).map(r=>r[lo]*(1-m)+r[hi]*m));}
  else {const p=[];outPsi.forEach((r,j)=>r.forEach((v,k)=>{if(distance(t.rpm[j],o.rpmFilter)===0&&distance(t.axis[k],o.axisFilter)===0)p.push(v);}));proposedPeak=Math.max(...p);}
  return{...t,values,weights,selectedPeak,proposedPeak,factor,changed,reversals,highestPsi:Math.max(...outPsi.flat())};
 }
 function csvRows(text){
  const rows=[];let row=[],cell='',quoted=false;
  text=text.replace(/^\uFEFF/,'');
  for(let j=0;j<text.length;j++){const ch=text[j];if(ch==='"'){if(quoted&&text[j+1]==='"'){cell+='"';j++;}else quoted=!quoted;}else if(ch===','&&!quoted){row.push(cell);cell='';}else if((ch==='\n'||ch==='\r')&&!quoted){if(ch==='\r'&&text[j+1]==='\n')j++;row.push(cell);if(row.some(x=>x.trim()!==''))rows.push(row);row=[];cell='';}else cell+=ch;}
  if(quoted)throw Error('CSV has an unterminated quoted field');if(cell||row.length){row.push(cell);rows.push(row);}return rows;
 }
 function parseLog(text,name='Log'){
  if(text.includes('\\r\\nframe,'))text=text.replaceAll('\\r\\n','\n');
  const rows=csvRows(text),h=rows.findIndex(r=>r.some(x=>/^(time_ms|time|time_s|time_seconds|Time\s*\(s\)|Time\s*\(ms\))$/i.test(x.trim()))&&r.some(x=>/^(RPM|AFM Hz|Engine Speed|Engine Speed \(rpm\)|MAF Frequency|MAF Frequency \(Hz\))$/i.test(x.trim())));
  if(h<0)throw Error('No data header found. Expected time_ms (or time) and RPM / AFM Hz.');
  const headers=rows[h].map(x=>x.trim());if(new Set(headers.map(x=>x.toLowerCase())).size!==headers.length)throw Error('Duplicate channel headers; resolve before importing');
  let rejected=0;const data=[];for(const r of rows.slice(h+1)){if(r.length!==headers.length){rejected++;continue;}data.push(Float64Array.from(r,numeric));}
  if(!data.length)throw Error('No numeric data rows found');
  return{name,headers,data,rejectedRows:rejected,metadata:rows.slice(0,h).map(r=>r.join(',')).join('\n')};
 }
 function index(log,channel){return log.headers.findIndex(x=>x.toLowerCase()===String(channel).trim().toLowerCase());}
 const AFM_DEFAULTS={bandwidth:350,strength:.75,minSamples:100,cap:2,observationCap:7,rejectTrim:15,minEct:170,minPedal:2,minCmd:14,maxCmd:15.2,pedalDelta:1,mapDelta:.5,cmdDelta:.15,maxGap:250,radius:3,minHz:2031,maxHz:10000,precision:2,ectUnit:'F',timeUnit:'ms',trimUnit:'points',confirmed:false,channels:{time:'time_ms',hz:'AFM Hz',ect:'ECT',pedal:'TPedal',map:'MAP',cmd:'AFCMD',trim:'Trim',fuel:'Fuel Status',af:'AF',rpm:'RPM'}};
 function observations(log,opt){
  if(!log)return{samples:[],accepted:0,rejected:0,reasons:{},enriched:{count:0,mean:null,meanAbs:null,outside:0}};
  const ids=Object.fromEntries(Object.entries(opt.channels).map(([k,v])=>[k,index(log,v)]));
  const required=['time','hz','ect','pedal','map','cmd','trim','fuel'];
  const missing=required.filter(k=>ids[k]<0);if(missing.length)throw Error('Missing mapped channels: '+missing.map(k=>opt.channels[k]).join(', '));
  const get=(r,k)=>ids[k]<0?NaN:r[ids[k]],samples=[],reasons={};let enriched=0,afrSum=0,absSum=0,outside=0;
  const timeFactor=opt.timeUnit==='s'?1000:1,trimFactor=opt.trimUnit==='fraction'?100:1;
  for(let j=0;j<log.data.length;j++){
   const r=log.data[j],p=j?log.data[j-1]:null;
   const t=get(r,'time'),hz=get(r,'hz'),ect=get(r,'ect'),pedal=get(r,'pedal'),map=get(r,'map'),cmd=get(r,'cmd'),trim=get(r,'trim')*trimFactor,fuel=get(r,'fuel');
   const dt=p?(t-get(p,'time'))*timeFactor:NaN,warm=opt.ectUnit==='C'?(ect*9/5+32):ect;
   const af=get(r,'af');
   if(finite(dt)&&dt>0&&dt<=opt.maxGap&&warm>=opt.minEct&&pedal>=80&&cmd>0&&cmd<14&&af>0&&get(r,'rpm')>0){const e=af/cmd-1;enriched++;afrSum+=e;absSum+=Math.abs(e);if(Math.abs(e)>.03)outside++;}
   let reason=null;
   if(![t,hz,ect,pedal,map,cmd,trim,fuel].every(finite))reason='Missing numeric channels';
   else if(hz<0||hz>10000)reason='Hz out of range';else if(warm<opt.minEct)reason='Cold';else if(fuel!==2)reason='Not closed loop';else if(pedal<=opt.minPedal)reason='Low pedal';else if(cmd<opt.minCmd||cmd>opt.maxCmd)reason='Command outside window';else if(Math.abs(trim)>opt.rejectTrim)reason='Trim rejected';else if(!finite(dt))reason='New block / missing time';else if(dt<=0||dt>opt.maxGap)reason='Time gap';else if(!finite(get(p,'pedal'))||Math.abs(pedal-get(p,'pedal'))>opt.pedalDelta)reason='Pedal transient';else if(!finite(get(p,'map'))||Math.abs(map-get(p,'map'))>opt.mapDelta)reason='MAP transient';else if(!finite(get(p,'cmd'))||Math.abs(cmd-get(p,'cmd'))>opt.cmdDelta)reason='AFR command transient';
   if(reason){reasons[reason]=(reasons[reason]||0)+1;continue;}
   samples.push({sourceIndex:j,hz,trim:clamp(trim,-opt.observationCap,opt.observationCap)});
  }
  return{samples,accepted:samples.length,rejected:log.data.length-samples.length,reasons,enriched:{count:enriched,mean:enriched?afrSum/enriched:null,meanAbs:enriched?absSum/enriched:null,outside}};
 }
 function validateAfm(table,o){
  if(!increasing(table.map(x=>x.hz))||table.some(x=>!finite(x.flow)))throw Error('AFM frequencies must increase and all flows must be numeric');
  for(const k of ['bandwidth','strength','minSamples','cap','observationCap','rejectTrim','minEct','minPedal','minCmd','maxCmd','pedalDelta','mapDelta','cmdDelta','maxGap','radius','minHz','maxHz','precision'])if(!finite(o[k]))throw Error('Invalid AFM control: '+k);
  if(o.bandwidth<50||o.bandwidth>500||o.radius<1||o.radius>3||o.strength<0||o.strength>1||o.minSamples<1||o.cap<0||o.cap>10||o.observationCap<=0||o.rejectTrim<o.observationCap||o.maxGap<=0||o.minHz>o.maxHz||o.minCmd>o.maxCmd||!Number.isInteger(o.precision)||o.precision<0||o.precision>6||[o.pedalDelta,o.mapDelta,o.cmdDelta].some(x=>x<0))throw Error('Check AFM control ranges');
 }
 function stats(table,obs,o){
  const bins=Array.from({length:201},()=>({n:0,sum:0}));for(const s of obs.samples){const b=bins[Math.floor(s.hz/50)];if(b){b.n++;b.sum+=s.trim;}}
  const sorted=[...obs.samples].sort((a,b)=>a.hz-b.hz);
  const hz=sorted.map(s=>s.hz),sums=[0],sq=[0];for(const s of sorted){sums.push(sums.at(-1)+s.trim);sq.push(sq.at(-1)+s.trim*s.trim);}
  function bound(x,upper){let a=0,b=hz.length;while(a<b){let m=(a+b)>>1;if(hz[m]<x||(upper&&hz[m]===x))a=m+1;else b=m;}return a;}
  return table.map(t=>{
   const lo=bound(t.hz-o.bandwidth,false),hi=bound(t.hz+o.bandwidth,true),n=hi-lo,sum=sums[hi]-sums[lo],sumSq=sq[hi]-sq[lo];let weighted=0,total=0;
   for(let b=Math.max(0,Math.floor((t.hz-o.bandwidth*o.radius-25)/50));b<=Math.min(200,Math.ceil((t.hz+o.bandwidth*o.radius-25)/50));b++){const d=t.hz-(b*50+25);if(Math.abs(d)>o.bandwidth*o.radius)continue;const w=Math.exp(-.5*(d/o.bandwidth)**2);weighted+=w*bins[b].sum;total+=w*bins[b].n;}
   return{samples:n,mean:n?sum/n:null,sd:n>1?Math.sqrt(Math.max(0,(sumSq-sum*sum/n)/(n-1))):null,gaussian:total?weighted/total:null};
  });
 }
 function analyzeAfm(table,baseline,validation,options={}){
  const o={...AFM_DEFAULTS,...options,channels:{...AFM_DEFAULTS.channels,...options.channels}};validateAfm(table,o);
  const b=observations(baseline,o),v=observations(validation,o),bs=stats(table,b,o),vs=stats(table,v,o);
  const cells=table.map((t,j)=>{const s=bs[j],val=vs[j];let status=t.flow<=0?'Nonpositive preserved':t.protect?'Protected':t.hz<o.minHz||t.hz>o.maxHz?'Outside range':!o.confirmed?'Confirm baseline':s.samples<o.minSamples?'Low coverage':'Supported';
   const correction=status==='Supported'?clamp((s.gaussian??0)*o.strength,-o.cap,o.cap):0;
   const proposed=correction===0?t.flow:round(t.flow*(1+correction/100),o.precision);
   const comparable=!!o.confirmed&&!!o.validationConfirmed&&s.samples>=o.minSamples&&val.samples>=o.minSamples;
   return{...t,...s,correction,proposed,status,validation:val,trimDelta:comparable?val.gaussian-s.gaussian:null,factoryDelta:t.factory>0?proposed/t.factory-1:null};
  });
  let reversals=0;cells.forEach((t,j)=>{t.reversal=!!(j&&t.flow>0&&cells[j-1].flow>0&&t.proposed<cells[j-1].proposed);if(t.reversal)reversals++;t.slopeChange=j?(t.proposed-cells[j-1].proposed-t.flow+cells[j-1].flow)/(t.hz-cells[j-1].hz):null;});
  return{cells,baseline:b,validation:v,reversals,changed:cells.filter(x=>x.proposed!==x.flow).length};
 }
 function parseTable(text,current){
  const lines=text.trim().split(/\r?\n/).filter(x=>x.trim()),rows=lines.map(l=>l.includes('\t')?l.split('\t'):l.includes(',')?csvRows(l)[0]:l.trim().split(/\s+/));
  if(current&&rows.length===current.rpm.length&&rows.every(r=>r.length===current.axis.length)){const t={...current,values:rows.map(r=>r.map(numeric)),protect:undefined};validateTable(t);return t;}
  if(rows.length<2||rows[0].length<2)throw Error('Paste axes plus body, or a body matching the current dimensions');
  const t={name:current?.name??'Imported',kind:current?.kind,axis:rows[0].slice(1).map(numeric),rpm:rows.slice(1).map(r=>numeric(r[0])),values:rows.slice(1).map(r=>r.slice(1).map(numeric))};validateTable(t);return t;
 }
 function parseAfm(text){
  const lines=text.trim().split(/\r?\n/).filter(x=>x.trim()),rows=lines.map(l=>l.includes('\t')?l.split('\t'):l.includes(',')?csvRows(l)[0]:l.trim().split(/\s+/));
  const frequencies=rows[0].map(numeric);const labelledHorizontal=!finite(frequencies[0])&&rows[0].slice(1).every(x=>finite(numeric(x)));
  const horizontal=rows.length===2&&rows[0].length>2&&(labelledHorizontal||increasing(frequencies))&&rows[1].slice(1).every(x=>finite(numeric(x)));
  let cells;if(horizontal){const strip=r=>finite(numeric(r[0]))?r:r.slice(1);const h=strip(rows[0]),v=strip(rows[1]);if(h.length!==v.length)throw Error('AFM row lengths differ');cells=h.map((x,j)=>({hz:numeric(x),flow:numeric(v[j]),protect:false}));}
  else{if(!finite(numeric(rows[0]?.[0])))rows.shift();cells=rows.map(r=>({hz:numeric(r[0]),flow:numeric(r[1]),factory:finite(numeric(r[2]))?numeric(r[2]):null,protect:numeric(r[3])===1}));}
  validateAfm(cells,AFM_DEFAULTS);return cells;
 }
 function logSeries(log,mapping={time:'time_ms',rpm:'RPM',bp:'BP',cmd:'BP CMD',gear:'Gear',wg:'WGCMD',pedal:'TPedal'},units='psi',timeUnit='ms',pa=.98){
  const ids=Object.fromEntries(Object.entries(mapping).map(([k,v])=>[k,index(log,v)]));if(['time','rpm','bp','cmd'].some(k=>ids[k]<0))throw Error('Map time, RPM, actual boost and boost command');
  const conv=x=>units==='bar'?x*BAR-STD:units==='kpa'?x/100*BAR-STD:x;
  const rows=log.data.map(r=>{const get=k=>ids[k]<0?NaN:r[ids[k]];return{time:get('time')/(timeUnit==='ms'?1000:1),rpm:get('rpm'),bp:conv(get('bp')),cmd:conv(get('cmd')),gear:get('gear'),wg:get('wg'),pedal:get('pedal')};}).filter(r=>[r.time,r.rpm,r.bp,r.cmd].every(finite));
  const events=[];let group=[];
  function flush(){if(group.length>=2&&group.at(-1).time-group[0].time>=.25){const peak=group.reduce((a,b)=>b.bp>a.bp?b:a);events.push({start:group[0].time,end:group.at(-1).time,gear:group[0].gear,startRpm:group[0].rpm,endRpm:group.at(-1).rpm,peak:peak.bp,cmdAtPeak:peak.cmd,peakCommand:group.reduce((v,r)=>Math.max(v,r.cmd),-Infinity),overshoot:group.reduce((v,r)=>Math.max(v,r.bp-r.cmd),-Infinity),minWg:group.reduce((v,r)=>finite(r.wg)?Math.min(v,r.wg):v,Infinity)});}group=[];}
  rows.forEach((r,j)=>{if(group.length&&(r.time<=rows[j-1].time||r.time-rows[j-1].time>.25||(finite(r.gear)&&finite(group.at(-1).gear)&&r.gear!==group.at(-1).gear)))flush();if(r.pedal>=80&&r.rpm>=2000&&r.cmd>0)group.push(r);else flush();});flush();
  return{rows,events};
 }
 return{BAR,STD,round,numeric,psi,toBar,fromBar,distance,weight,bracket,adjust,parseLog,parseTable,parseAfm,index,AFM_DEFAULTS,observations,analyzeAfm,logSeries,validateTable};
});
