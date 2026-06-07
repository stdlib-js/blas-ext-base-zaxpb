"use strict";var z=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var x=z(function(S,g){
var k=require('@stdlib/strided-base-reinterpret-complex128/dist'),j=require('@stdlib/complex-float64-real/dist'),l=require('@stdlib/complex-float64-imag/dist'),A=require('@stdlib/blas-ext-base-zapx/dist').ndarray,B=require('@stdlib/blas-base-zscal/dist').ndarray,f=require('@stdlib/complex-float64-base-mul-add/dist').assign,c=5;function C(a,i,p,u,o,y){var e,v,n,t,q,r,d,m,s;if(a<=0)return u;if(v=j(i),n=l(i),t=j(p),q=l(p),v===1&&n===0)return A(a,p,u,o,y);if(t===0&&q===0)return B(a,i,u,o,y);if(e=k(u,0),r=y*2,d=o*2,o===1){if(m=a%c,m>0)for(s=0;s<m;s++)f(v,n,e[r],e[r+1],t,q,e,1,r),r+=d;if(a<c)return u;for(s=m;s<a;s+=c)f(v,n,e[r],e[r+1],t,q,e,1,r),f(v,n,e[r+2],e[r+3],t,q,e,1,r+2),f(v,n,e[r+4],e[r+5],t,q,e,1,r+4),f(v,n,e[r+6],e[r+7],t,q,e,1,r+6),f(v,n,e[r+8],e[r+9],t,q,e,1,r+8),r+=c*2;return u}for(s=0;s<a;s++)f(v,n,e[r],e[r+1],t,q,e,1,r),r+=d;return u}g.exports=C
});var _=z(function(T,R){
var D=require('@stdlib/strided-base-stride2offset/dist'),F=x();function G(a,i,p,u,o){return F(a,i,p,u,o,D(a,o))}R.exports=G
});var M=z(function(U,E){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=_(),I=x();H(w,"ndarray",I);E.exports=w
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),P=M(),b,O=K(J(__dirname,"./native.js"));L(O)?b=P:b=O;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
