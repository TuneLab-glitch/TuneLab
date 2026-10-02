'use strict';
(function(root){
 const scenarios=[
  {id:'afm',name:'Warm steady driving · AFM baseline and validation',purpose:'Compare a +4-point trim baseline with a +1-point validation. Explore supported airflow bins; these logs do not establish a real calibration match.',page:'afm'},
  {id:'sparse',name:'Sparse / transient driving · AFM coverage gaps',purpose:'See why cold, open-loop and changing-pedal samples cannot support a steady AFM correction.',page:'afm'},
  {id:'boost',name:'Loaded pull · spool and boost error',purpose:'Inspect command versus measured boost, a short overshoot and the steady portion of one synthetic third-gear pull.',page:'logs'},
  {id:'gears',name:'Gear limits · intentional lower-gear restriction',purpose:'Compare synthetic gear limits and pressure representations. Values are examples, never factory or recommended settings.',page:'gears'},
  {id:'startup',name:'Cold startup / idle · capture context',purpose:'Inspect cranking-to-idle context and raw channels. Startup fueling diagnosis and arbitrary-channel plots are outside the current viewer.',page:'logs'}
 ];
 function csv(id,validation=false){if(!scenarios.some(x=>x.id===id))throw Error('Unknown demo scenario');const lines=['time_ms,AFM Hz,ECT,TPedal,MAP,AFCMD,S.TRIM,Trim,Fuel Status,AF,RPM,BP,BP CMD,Gear,WGCMD,Battery V,IAT'];
  for(let j=0;j<2400;j++){const t=j*.05,phase=j%400/400;let rpm=2000+phase*2500,hz=3000+phase*6500,pedal=12,ect=185,cmd=14.7,trim=validation?1:4,status=2,bp=1,target=1,gear=3,battery=14.1;
   if(id==='sparse'){hz=4400+phase*80;ect=j%3===0?110:185;pedal=j%2?5:40;status=j%5===0?1:2;}
   if(id==='boost'||id==='gears'){const p=Math.min(1,t/12);rpm=2200+p*4000;hz=4500+p*5000;pedal=t<12?95:10;cmd=pedal>80?12:14.7;status=pedal>80?1:2;target=pedal>80?20:1;bp=pedal>80?20*(1-Math.exp(-t/1.2))+3*Math.exp(-Math.pow((t-4)/.6,2)):1;}
   if(id==='startup'){rpm=t<1?0:t<3?240:950+450*Math.exp(-(t-3)/12);hz=1100+rpm;pedal=0;ect=65+t*.2;cmd=13.5;status=1;bp=target=0;gear=0;battery=t<1?12.4:t<3?10.7:14.1;}
   lines.push([j*50,hz,ect,pedal,-5,cmd,0,trim,status,cmd,rpm,bp,target,gear,30,battery,75].join(','));
  }return lines.join('\n');
 }
 const api={scenarios,csv};if(typeof module==='object'&&module.exports)module.exports=api;else root.TuneLabDemos=api;
})(typeof globalThis==='object'?globalThis:this);
