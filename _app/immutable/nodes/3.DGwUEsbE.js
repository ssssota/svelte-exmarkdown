import"../chunks/DsnmJJEf.js";import{_ as K,B as g,K as W,y as b,z as X,A as h,v as e,D as w,F as t,C as k,$ as Y,a1 as P,G as a,a0 as z,ak as H,W as j}from"../chunks/3ovp1dbD.js";import{r as B,a as O,b as U}from"../chunks/B6ZnJnuI.js";import{i as q}from"../chunks/ae2UYbbQ.js";import{r as $,a as Q}from"../chunks/BtJvjrOb.js";import{a as I,b as V,M as Z,c as ee}from"../chunks/B9gOfnBN.js";import{aF as te,aG as ae,aH as se,aI as ne}from"../chunks/DNSSWhcu.js";import{H as oe}from"../chunks/Dr0eSZam.js";const re=`# svelte-exmarkdown

[![CI](https://github.com/ssssota/svelte-exmarkdown/actions/workflows/ci.yml/badge.svg)](https://github.com/ssssota/svelte-exmarkdown/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ssssota/svelte-exmarkdown/branch/main/graph/badge.svg?token=5I9YNJ57R3)](https://codecov.io/gh/ssssota/svelte-exmarkdown)
[![License MIT](https://img.shields.io/npm/l/svelte-exmarkdown)](https://github.com/ssssota/svelte-exmarkdown/blob/main/LICENSE)

Svelte component to render markdown. Dynamic and Extensible.

## Motivation

[svelte-markdown](https://www.npmjs.com/package/svelte-markdown) is a good component package.
However, it is not extensible. You cannot use custom syntax(e.g. KaTeX).

[MDsveX](https://www.npmjs.com/package/mdsvex) is another good package.
However, it is a preprocessor. Not suitable for dynamic rendering.

We need **pluggable** and **dynamic** markdown renderer in svelte like [react-markdown](https://www.npmjs.com/package/react-markdown).

## Usage

\`\`\`svelte
<script>
	import Markdown from 'svelte-exmarkdown';
	let md = $state('# Hello world!');
<\/script>

<textarea bind:value={md}></textarea>
<Markdown {md} />
\`\`\`

with GFM

\`\`\`svelte
<script>
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	let md = $state('# Hello world!');
	const plugins = [gfmPlugin()];
<\/script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
\`\`\`

## Playground & Documents

https://ssssota.github.io/svelte-exmarkdown
`;var ie=b('<div><label><input type="checkbox"/>HTML</label></div> <div><label><input type="checkbox"/>GFM</label></div> <div><label><input type="checkbox"/>AST</label></div>',1),le=b("<pre> </pre>"),de=b("<h1><!></h1>"),me=b('<div class="wrapper svelte-1omid97"><!> <main class="svelte-1omid97"><textarea class="input svelte-1omid97"></textarea> <section class="output svelte-1omid97"><!></section></main></div>');function be(C,E){K(E,!0);let f=g(!1),x=g(!0),_=g(!1),p=g(W(re)),D=H(()=>[...e(x)?[te()]:[],...e(f)?[{rehypePlugin:ae}]:[],se,ne]),L=H(()=>ee(e(D)));var y=me(),F=t(y);oe(F,{children:(s,l)=>{var i=ie(),n=X(i),o=t(n),r=t(o);$(r),P(),a(o),a(n);var d=h(n,2),v=t(d),c=t(v);$(c),P(),a(v),a(d);var u=h(d,2),S=t(u),T=t(S);$(T),P(),a(S),a(u),I(r,()=>e(f),m=>k(f,m)),I(c,()=>e(x),m=>k(x,m)),I(T,()=>e(_),m=>k(_,m)),w(s,i)}});var G=h(F,2),M=t(G);B(M);var N=h(M,2),R=t(N);{var A=s=>{var l=le(),i=t(l,!0);a(l),z(n=>O(i,n),[()=>JSON.stringify(e(L)(e(p)),(n,o)=>n==="position"?void 0:o,"  ")]),w(s,l)},J=s=>{Z(s,{get md(){return e(p)},get plugins(){return e(D)},h1:(i,n=j)=>{const o=H(()=>{const{children:v,style:c,...u}=n();return{children:v,style:c,rest:u}});var r=de();Q(r,()=>({style:`border-bottom:1px solid #999;${e(o).style??""}`,...e(o).rest}),void 0,void 0,"svelte-1omid97");var d=t(r);U(d,()=>e(o).children??j),a(r),w(i,r)},$$slots:{h1:!0}})};q(R,s=>{e(_)?s(A):s(J,!1)})}a(N),a(G),a(y),V(M,()=>e(p),s=>k(p,s)),w(C,y),Y()}export{be as component};
