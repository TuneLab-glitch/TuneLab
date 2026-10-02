'use strict';
// Navigation preference belongs to this browser's main window, not a project
// or the editing lease. Detached windows never replace it.
function navigationCollapsed(collapsed,persist=false){document.body.classList.toggle('compact-navigation',collapsed);$('toggleNavigation').textContent=collapsed?'Show menu':'Collapse menu';$('toggleNavigation').setAttribute('aria-expanded',String(!collapsed));if(persist&&windowRole==='main'){try{localStorage.setItem('TuneLabNavigationV9',JSON.stringify({schema:1,collapsed}));}catch{}}}
if(windowRole==='main'){try{const saved=JSON.parse(localStorage.getItem('TuneLabNavigationV9'));if(saved?.schema===1&&typeof saved.collapsed==='boolean')navigationCollapsed(saved.collapsed);}catch{}}
$('toggleNavigation').onclick=()=>navigationCollapsed(!document.body.classList.contains('compact-navigation'),true);

// Respond to available card-grid width, including a narrow workspace inside
// a wide browser. Removing ancestor containment lets expanded cards use the
// actual viewport rather than being trapped inside their workspace.
function reflowPanelGrids(){for(const grid of gridDefaults.keys()){const width=grid.getBoundingClientRect().width;if(width>0)grid.dataset.columns=width<=650?'1':'2';}}
if(window.ResizeObserver){const gridObserver=new ResizeObserver(reflowPanelGrids);for(const grid of gridDefaults.keys())gridObserver.observe(grid);}
window.addEventListener('resize',reflowPanelGrids);
reflowPanelGrids();

let keyboardFocus=false,helpInvoker=null;
document.addEventListener('keydown',e=>{if(!e.ctrlKey&&!e.metaKey)keyboardFocus=true;},true);
document.addEventListener('pointerdown',()=>keyboardFocus=false,true);
function revealFocus(node){node?.scrollIntoView?.({block:'nearest',inline:'nearest'});}
document.addEventListener('focusin',e=>{if(keyboardFocus)revealFocus(e.target);});
function navigationStatus(){for(const button of document.querySelectorAll('nav [data-tab]')){if(button.dataset.tab===currentPage())button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');}reflowPanelGrids();}
function focusWorkspaceHeading(){const title=$('pageTitle');title.tabIndex=-1;title.focus({preventScroll:true});revealFocus(title);}
document.querySelector('nav').addEventListener('click',e=>{if(!e.target.closest('[data-tab]'))return;navigationStatus();if(e.detail===0&&!windowApplying)focusWorkspaceHeading();});
$('workspaceSelect').addEventListener('change',()=>{navigationStatus();if(!windowApplying)focusWorkspaceHeading();});
const navigatePolishBase=goPage;goPage=function(id){navigatePolishBase(id);navigationStatus();};
const activatePolishBase=activatePage;activatePage=function(){activatePolishBase();navigationStatus();};
const movePolishBase=moveCard;moveCard=function(card,direction){movePolishBase(card,direction);revealFocus(card.querySelector('.panel-handle'));};

const helpPolishBase=showHelp;showHelp=function(title,text){helpInvoker=document.activeElement;helpPolishBase(title,text);$('closeHelp').focus();revealFocus($('closeHelp'));};
function returnHelpFocus(){if(helpInvoker?.isConnected&&!helpInvoker.closest('[inert]')){helpInvoker.focus({preventScroll:true});revealFocus(helpInvoker);}helpInvoker=null;}
$('helpDialog').addEventListener('close',returnHelpFocus);
$('closeHelp').addEventListener('click',returnHelpFocus);
navigationStatus();
