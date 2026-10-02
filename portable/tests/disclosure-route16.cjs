// Legacy interaction fixtures open newly disclosed setup before their original action.
module.exports=async function reveal16(page,selector){const n=page.locator(selector).first();if(await n.count())await n.evaluate(n=>{for(let d=n.parentElement;d;d=d.parentElement)if(d.tagName==='DETAILS'&&!(n.tagName==='SUMMARY'&&n.parentElement===d))d.open=true;});};
