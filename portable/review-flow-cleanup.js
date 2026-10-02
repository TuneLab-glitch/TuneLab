'use strict';
// Keep legacy inputs for backup compatibility, but direct imports through the
// common session import path. AFM's role shortcuts already use that path.
$('reviewFile').closest('label').hidden=true;
const logsHeading=$('logs').querySelector('.panel-head h2');if(logsHeading)logsHeading.textContent='Boost-specific analysis';
const compareButton=document.querySelector('nav [data-tab="compare"]');compareButton.querySelector('span').textContent='Pressure Conversion';descriptions.compare=['Pressure Conversion','Convert the loaded source’s pressure representation; ECU equivalence is not established.'];for(const option of $('workspaceSelect').options)if(option.value==='compare')option.textContent='Pressure Conversion';
const notesHeading=$('learningList').closest('.panel').querySelector('h2');notesHeading.textContent='Review notes';$('recordInsight').textContent='Save boost review note';
const flowGuide=$('logs').querySelector('.guide-workflow');if(flowGuide){flowGuide.innerHTML='<h2>Purpose-based review checklist</h2><div class="actions"><button class="secondary" data-flow-step="mapping">1. Check readiness</button><button class="secondary" data-flow-step="setup">2. Apply purpose setup</button><button class="secondary" data-flow-step="inspect">3. Inspect channels</button><button class="secondary" data-flow-step="bookmark">4. Save evidence</button><button class="secondary" data-flow-step="compare">5. Compare validation</button></div><p>Follow the driving and review plan for the active log’s purpose. Steps do not automatically confirm calibration matches.</p>';flowGuide.onclick=e=>{const step=e.target.closest('[data-flow-step]')?.dataset.flowStep;if(!step)return;const target={mapping:reviewFlowPanel,setup:$('applyPurposeSetup'),inspect:rawPanel,bookmark:$('bookmarkNote'),compare:validationPanel}[step];target?.scrollIntoView?.({block:'start'});if(target?.tagName==='BUTTON')target.focus();};}
const flowStatusBase=updateStatusStrip;updateStatusStrip=function(){if(['logs','strategy','library'].includes(currentPage())){const item=flowItem();strip.textContent=(item?.name??'No active log')+' · '+(purposeNames[item?.purpose]??'Purpose not specified')+' · '+RF.readiness(item,item?.purpose).status+' · Revision: '+(item?.calibration||'unrecorded');}else flowStatusBase();};
function purposeVisibility(){const purpose=flowItem()?.purpose,showBoost=!purpose||['boost','validation','unknown'].includes(purpose);for(const id of ['logChart','errorHistogram','errorScatter','logMetrics','eventsGrid']){const panel=$(id)?.closest('.panel');if(panel&&panel!==rawPanel&&panel!==validationPanel&&panel!==reviewFlowPanel)panel.hidden=!showBoost;}if(logsHeading)logsHeading.textContent=showBoost?'Boost-specific analysis':'Legacy boost analysis · not needed for this purpose';}
const activeCleanupBase=setActive;setActive=function(id){activeCleanupBase(id);purposeVisibility();updateStatusStrip();if(['startup','afm'].includes(flowItem()?.purpose))message('Historical log selected. Use synchronized channels for raw context; readiness lists any analysis prerequisites.');};
document.addEventListener('change',()=>queueMicrotask(()=>{renderReadiness();purposeVisibility();updateStatusStrip();}));
purposeVisibility();updateStatusStrip();

const importCleanupBase=importSession;importSession=async function(...args){const item=await importCleanupBase(...args);if(item.id===activeSession)configureRaw();renderReadiness();purposeVisibility();refreshMatched();updateStatusStrip();return item;};
document.addEventListener('change',e=>{if(e.target.dataset.field==='purpose')queueMicrotask(configureRaw);});

const activateCleanupBase=activatePage;activatePage=function(){activateCleanupBase();if(currentPage()==='compare'){$('pageTitle').textContent='Pressure Conversion';$('pageDesc').textContent=descriptions.compare[1];}};
$('compare').querySelector('h2').textContent='Pressure Conversion of the loaded source';

$('browserStorage').closest('label').lastChild.textContent='Keep this workspace in this browser';
const storageExplanation=$('browserStorage').closest('.panel').querySelector('p');if(storageExplanation)storageExplanation.textContent='Browser storage restores calibration tables, proposals, raw logs, notes and project context together. Tables remain available without an active log. Download project JSON as the portable backup; browser storage can be unavailable or cleared.';

// All appearance targets follow current workspace names, including later tabs.
function syncAppearancePages(){const select=$('appearancePage'),picked=select.value,pages=[...document.querySelectorAll('.page')].filter(p=>p.id!=='settings'),html=pages.map(p=>`<option value="${p.id}">${esc(descriptions[p.id]?.[0]??p.id)}</option>`).join('');if(select.innerHTML===html)return;select.innerHTML=html;if(pages.some(p=>p.id===picked))select.value=picked;}
const appearanceNamesBase=activatePage;activatePage=function(){appearanceNamesBase();syncAppearancePages();};
const appearanceNameObserver=new MutationObserver(()=>syncAppearancePages());appearanceNameObserver.observe(document.querySelector('nav'),{subtree:true,childList:true,characterData:true});syncAppearancePages();
