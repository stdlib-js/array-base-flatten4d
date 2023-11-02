"use strict";var x=function(e,v){return function(){return v||e((v={exports:{}}).exports,v),v.exports}};var O=x(function(C,y){
function k(e,v,d){var n,S,c,u,s,f,i,r,a,o,t,l;if(S=v[3],c=v[2],u=v[1],s=v[0],n=[],d){for(f=0;f<S;f++)for(i=0;i<c;i++)for(r=0;r<u;r++)for(a=0;a<s;a++)n.push(e[a][r][i][f]);return n}for(a=0;a<s;a++)for(l=e[a],r=0;r<u;r++)for(t=l[r],i=0;i<c;i++)for(o=t[i],f=0;f<S;f++)n.push(o[f]);return n}y.exports=k
});var b=x(function(D,R){
function w(e,v,d,n,S,c){var u,s,f,i,r,a,o,t,l,g,m,q;if(u=v[3],s=v[2],f=v[1],i=v[0],q=c,d){for(r=0;r<u;r++)for(a=0;a<s;a++)for(o=0;o<f;o++)for(t=0;t<i;t++)n[q]=e[t][o][a][r],q+=S;return n}for(t=0;t<i;t++)for(m=e[t],o=0;o<f;o++)for(g=m[o],a=0;a<s;a++)for(l=g[a],r=0;r<u;r++)n[q]=l[r],q+=S;return n}R.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=O(),A=b();z(j,"assign",A);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
