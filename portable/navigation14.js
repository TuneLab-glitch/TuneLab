'use strict';
// Translate screen coordinates through the actual SVG transform, including letterboxing.
function svgPoint14(svg,x,y){const matrix=svg.getScreenCTM();if(!matrix)return null;const p=svg.createSVGPoint();p.x=x;p.y=y;return p.matrixTransform(matrix.inverse());}
function plotX14(svg,event,left,right,top,bottom){const p=svgPoint14(svg,event.clientX,event.clientY);return p&&p.x>=left&&p.x<=right&&p.y>=top&&p.y<=bottom?p.x:null;}
