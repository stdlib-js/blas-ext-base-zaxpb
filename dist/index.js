"use strict";var z=function(a,i){return function(){try{return i||a((i={exports:{}}).exports,i),i.exports}catch(o){throw (i=0, o)}};};var x=z(function(S,g){
var k=require('@stdlib/strided-base-reinterpret-complex128/dist'),j=require('@stdlib/complex-float64-real/dist'),l=require('@stdlib/complex-float64-imag/dist'),A=require('@stdlib/blas-ext-base-zapx/dist').ndarray,B=require('@stdlib/blas-base-zscal/dist').ndarray,p=require('@stdlib/complex-float64-base-mul-add/dist').assign,c=5;function C(a,i,o,u,f,y){var e,v,n,t,q,r,d,m,s;if(a<=0)return u;if(v=j(i),n=l(i),t=j(o),q=l(o),v===1&&n===0)return A(a,o,u,f,y);if(t===0&&q===0)return B(a,i,u,f,y);if(e=k(u,0),r=y*2,d=f*2,f===1){if(m=a%c,m>0)for(s=0;s<m;s++)p(v,n,e[r],e[r+1],t,q,e,1,r),r+=d;if(a<c)return u;for(s=m;s<a;s+=c)p(v,n,e[r],e[r+1],t,q,e,1,r),p(v,n,e[r+2],e[r+3],t,q,e,1,r+2),p(v,n,e[r+4],e[r+5],t,q,e,1,r+4),p(v,n,e[r+6],e[r+7],t,q,e,1,r+6),p(v,n,e[r+8],e[r+9],t,q,e,1,r+8),r+=c*2;return u}for(s=0;s<a;s++)p(v,n,e[r],e[r+1],t,q,e,1,r),r+=d;return u}g.exports=C
});var _=z(function(T,R){
var D=require('@stdlib/strided-base-stride2offset/dist'),F=x();function G(a,i,o,u,f){return F(a,i,o,u,f,D(a,f))}R.exports=G
});var M=z(function(U,E){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=_(),I=x();H(w,"ndarray",I);E.exports=w
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),P=M(),b,O=K(J(__dirname,"./native.js"));L(O)?b=P:b=O;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
