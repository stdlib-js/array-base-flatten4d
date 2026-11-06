"use strict";var x=function(e,v){return function(){try{return v||e((v={exports:{}}).exports,v),v.exports}catch(c){throw (v=0, c)}};};var O=x(function(C,y){
function k(e,v,c){var n,S,l,u,s,f,i,r,a,o,t,q;if(S=v[3],l=v[2],u=v[1],s=v[0],n=[],c){for(f=0;f<S;f++)for(i=0;i<l;i++)for(r=0;r<u;r++)for(a=0;a<s;a++)n.push(e[a][r][i][f]);return n}for(a=0;a<s;a++)for(q=e[a],r=0;r<u;r++)for(t=q[r],i=0;i<l;i++)for(o=t[i],f=0;f<S;f++)n.push(o[f]);return n}y.exports=k
});var b=x(function(D,R){
function w(e,v,c,n,S,l){var u,s,f,i,r,a,o,t,q,g,m,d;if(u=v[3],s=v[2],f=v[1],i=v[0],d=l,c){for(r=0;r<u;r++)for(a=0;a<s;a++)for(o=0;o<f;o++)for(t=0;t<i;t++)n[d]=e[t][o][a][r],d+=S;return n}for(t=0;t<i;t++)for(m=e[t],o=0;o<f;o++)for(g=m[o],a=0;a<s;a++)for(q=g[a],r=0;r<u;r++)n[d]=q[r],d+=S;return n}R.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=O(),A=b();z(j,"assign",A);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
