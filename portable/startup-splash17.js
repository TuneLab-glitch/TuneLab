'use strict';
window.TuneLabStartup={ready:false,restore:Promise.resolve(),stage(text){if(this.failed&&!document.getElementById('startupReload17').hidden)return;document.getElementById('startupText17').textContent=text;}};
const startupRoots17=new Map(),splash17=document.getElementById('startupSplash17');
function lockStartup17(){for(const n of document.body.children)if(n!==splash17&&!['SCRIPT','STYLE'].includes(n.tagName)&&!startupRoots17.has(n)){startupRoots17.set(n,n.inert);n.inert=true;}}
const startupObserver17=new MutationObserver(lockStartup17);startupObserver17.observe(document.body,{childList:true});lockStartup17();
for(const type of ['click','pointerdown','keydown','drop','wheel'])document.addEventListener(type,e=>{if(!TuneLabStartup.ready&&e.isTrusted&&!splash17.contains(e.target)){e.preventDefault();e.stopImmediatePropagation();}},{capture:true,passive:false});
window.addEventListener('error',e=>{if(!TuneLabStartup.ready){TuneLabStartup.failed=true;TuneLabStartup.stage('TuneLab could not finish loading. Reload the app. Your saved project has not been replaced.');document.getElementById('startupReload17').hidden=false;}});
document.getElementById('startupReload17').onclick=()=>location.reload();

