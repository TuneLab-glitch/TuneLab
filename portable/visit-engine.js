(function(root,factory){const api=factory();if(typeof module==='object')module.exports=api;else root.TuneLabVisits=api;})(globalThis,()=>{
'use strict';
// Each original sample is visited once. Dwell never bridges missing/reset/gap time.
function summarize(rows,locate,{maxGap=1}={}){
 const cells=new Map();let mapped=0,unmapped=0,excludedIntervals=0;
 for(let i=0;i<rows.length;i++){
  const row=rows[i],points=locate(row.sourceIndex),unique=new Map(points.map(p=>[p.r+':'+p.c,p]));
  if(unique.size)mapped++;else unmapped++;
  const next=rows[i+1],dt=next?next.time-row.time:0;
  const dwell=next&&next.sourceIndex===row.sourceIndex+1&&Number.isFinite(dt)&&dt>0&&dt<=maxGap?dt:0;
  if(next&&!dwell)excludedIntervals++;
  const total=[...unique.values()].reduce((s,p)=>s+(p.weight??1),0);
  for(const [key,p]of unique){if(!cells.has(key))cells.set(key,{r:p.r,c:p.c,count:0,seconds:0});const cell=cells.get(key);cell.count++;cell.seconds+=total>0?dwell*(p.weight??1)/total:0;}
 }
 return{cells:[...cells.values()],rows:rows.length,mapped,unmapped,excludedIntervals};
}
function maxima(summary,metric){if(!['count','seconds'].includes(metric))throw Error('Unknown visit metric');const max=Math.max(0,...summary.cells.map(c=>c[metric]));return{max,cells:max>0?summary.cells.filter(c=>Math.abs(c[metric]-max)<1e-9):[]};}
return{summarize,maxima};
});
