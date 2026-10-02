'use strict';
// Practice windows have their own preferences/layout cache as well as log library.
if(window.TuneLabPractice){
 const values=new Map();
 Object.defineProperty(window,'localStorage',{value:{getItem:key=>values.get(String(key))??null,setItem:(key,value)=>values.set(String(key),String(value)),removeItem:key=>values.delete(String(key)),clear:()=>values.clear(),key:index=>[...values.keys()][index]??null,get length(){return values.size;}}});
}
