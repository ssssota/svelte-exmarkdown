import"../chunks/DsnmJJEf.js";import{K as O,n as h,w as X,k as Y,s as u,g as e,p as t,m as w,M as q,O as P,q as a,N as A,G as E,a8 as H}from"../chunks/DaK1Wl1G.js";import{r as U,s as W}from"../chunks/CVObIhvU.js";import{r as I,b as z,a as B}from"../chunks/CRlfEPxp.js";import{i as Q}from"../chunks/VBSzeeZ8.js";import{a as f,f as b}from"../chunks/B_e28Md_.js";import{a as N,b as V,M as Z,c as ee}from"../chunks/BHVxNcgu.js";import{aF as te,aG as ae,aH as se,aI as ne}from"../chunks/DIfC8bB2.js";import{H as oe}from"../chunks/Zqf8AZCK.js";const re=`# svelte-exmarkdown

[![CI](https://github.com/ssssota/svelte-exmarkdown/actions/workflows/ci.yml/badge.svg)](https://github.com/ssssota/svelte-exmarkdown/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ssssota/svelte-exmarkdown/branch/main/graph/badge.svg?token=5I9YNJ57R3)](https://codecov.io/gh/ssssota/svelte-exmarkdown)
[![License MIT](https://img.shields.io/npm/l/svelte-exmarkdown)](https://github.com/ssssota/svelte-exmarkdown/blob/main/LICENSE)
<a href="https://flatt.tech/oss/gmo/trampoline" target="_blank"><img src="https://flatt.tech/assets/images/badges/gmo-oss.svg" height="21px"/></a>

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
`;var ie=b('<div><label><input type="checkbox"/>HTML</label></div> <div><label><input type="checkbox"/>GFM</label></div> <div><label><input type="checkbox"/>AST</label></div>',1),le=b("<pre> </pre>"),me=b("<h1><!></h1>"),de=b('<div class="wrapper svelte-1omid97"><!> <main class="svelte-1omid97"><textarea class="input svelte-1omid97"></textarea> <section class="output svelte-1omid97"><!></section></main></div>');function ke(F,L){O(L,!0);let k=h(!1),x=h(!0),_=h(!1),p=h(X(re)),$=H(()=>[...e(x)?[ne()]:[],...e(k)?[{rehypePlugin:te}]:[],ae,se]),R=H(()=>ee(e($)));var y=de(),G=t(y);oe(G,{children:(s,l)=>{var i=ie(),n=Y(i),o=t(n),r=t(o);I(r),P(),a(o),a(n);var m=u(n,2),v=t(m),c=t(v);I(c),P(),a(v),a(m);var g=u(m,2),j=t(g),D=t(j);I(D),P(),a(j),a(g),N(r,()=>e(k),d=>w(k,d)),N(c,()=>e(x),d=>w(x,d)),N(D,()=>e(_),d=>w(_,d)),f(s,i)}});var S=u(G,2),M=t(S);U(M);var T=u(M,2),C=t(T);{var J=s=>{var l=le(),i=t(l,!0);a(l),A(n=>W(i,n),[()=>JSON.stringify(e(R)(e(p)),(n,o)=>n==="position"?void 0:o,"  ")]),f(s,l)},K=s=>{Z(s,{get md(){return e(p)},get plugins(){return e($)},h1:(i,n=E)=>{const o=H(()=>{const{children:v,style:c,...g}=n();return{children:v,style:c,rest:g}});var r=me();z(r,()=>({style:`border-bottom:1px solid #999;${e(o).style??""}`,...e(o).rest}),void 0,void 0,"svelte-1omid97");var m=t(r);B(m,()=>e(o).children??E),a(r),f(i,r)},$$slots:{h1:!0}})};Q(C,s=>{e(_)?s(J):s(K,!1)})}a(T),a(S),a(y),V(M,()=>e(p),s=>w(p,s)),f(F,y),q()}export{ke as component};
