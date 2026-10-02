 'use strict';
// Share a parsed CSV only within one synchronous restore transaction. Validation
// and rollback still run; the cache is discarded on both success and failure.
const efficientLoadBase=loadProject;loadProject=function(project){const parseBase=E.parseLog,parsed=new Map();E.parseLog=function(text,name){let files=parsed.get(name);if(!files){files=new Map();parsed.set(name,files);}if(!files.has(text))files.set(text,parseBase(text,name));return files.get(text);};try{return efficientLoadBase(project);}finally{E.parseLog=parseBase;parsed.clear();}};
