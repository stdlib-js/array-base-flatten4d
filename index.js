// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,o=Object.prototype,n=o.toString,f=o.__defineGetter__,i=o.__defineSetter__,a=o.__lookupGetter__,l=o.__lookupSetter__;function u(e,r,t){var o,n,f,i,a,l,u,c,p,_,d,s;if(n=r[3],f=r[2],i=r[1],a=r[0],o=[],t){for(l=0;l<n;l++)for(u=0;u<f;u++)for(c=0;c<i;c++)for(p=0;p<a;p++)o.push(e[p][c][u][l]);return o}for(p=0;p<a;p++)for(s=e[p],c=0;c<i;c++)for(d=s[c],u=0;u<f;u++)for(_=d[u],l=0;l<n;l++)o.push(_[l]);return o}return e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var u,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||l.call(e,r)?(u=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=u):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&f&&f.call(e,r,t.get),_&&i&&i.call(e,r,t.set),e},e(u,"assign",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,o,n,f){var i,a,l,u,c,p,_,d,s,b,y,v;if(i=r[3],a=r[2],l=r[1],u=r[0],v=f,t){for(c=0;c<i;c++)for(p=0;p<a;p++)for(_=0;_<l;_++)for(d=0;d<u;d++)o[v]=e[d][_][p][c],v+=n;return o}for(d=0;d<u;d++)for(y=e[d],_=0;_<l;_++)for(b=y[_],p=0;p<a;p++)for(s=b[p],c=0;c<i;c++)o[v]=s[c],v+=n;return o}}),u},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).flatten4d=r();
//# sourceMappingURL=index.js.map
