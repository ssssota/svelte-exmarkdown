import"../chunks/CWj6FrbW.js";import{J as Y,s as h,y as q,a4 as H,k as A,m as w,g as e,p as t,n as b,K as O,N,q as a,M as D,G as F}from"../chunks/C4kDlRsD.js";import{r as U,s as W}from"../chunks/CAVA1lbZ.js";import{i as z}from"../chunks/DNyNCCyK.js";import{t as f,a as k}from"../chunks/BMdBb6lm.js";import{r as $,a as B,b as Q}from"../chunks/5q_4QxgC.js";import{a as E,b as V,c as Z,M as ee}from"../chunks/Dok1rpG9.js";import{aE as te,aF as ae,aG as se,aH as ne}from"../chunks/BZd2EeP_.js";import{H as oe}from"../chunks/CYLKlJNT.js";const re=`# svelte-exmarkdown

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
`;var ie=f('<div><label><input type="checkbox">HTML</label></div> <div><label><input type="checkbox">GFM</label></div> <div><label><input type="checkbox">AST</label></div>',1),le=f("<pre> </pre>"),me=f("<h1><!></h1>"),de=f('<div class="wrapper svelte-1omid97"><!> <main class="svelte-1omid97"><textarea class="input svelte-1omid97"></textarea> <section class="output svelte-1omid97"><!></section></main></div>');function fe(J,L){Y(L,!0);let x=h(!1),_=h(!0),y=h(!1),p=h(q(re)),G=H(()=>[...e(_)?[te()]:[],...e(x)?[{rehypePlugin:ae}]:[],se,ne]),R=H(()=>Z(e(G)));var M=de(),I=t(M);oe(I,{children:(s,m)=>{var r=ie(),n=A(r),o=t(n),i=t(o);$(i),N(),a(o),a(n);var l=w(n,2),v=t(l),c=t(v);$(c),N(),a(v),a(l);var g=w(l,2),u=t(g),j=t(u);$(j),N(),a(u),a(g),E(i,()=>e(x),d=>b(x,d)),E(c,()=>e(_),d=>b(_,d)),E(j,()=>e(y),d=>b(y,d)),k(s,r)}});var S=w(I,2),P=t(S);U(P);var T=w(P,2),C=t(T);{var K=s=>{var m=le(),r=t(m,!0);a(m),D(n=>W(r,n),[()=>JSON.stringify(e(R)(e(p)),(n,o)=>n==="position"?void 0:o,"  ")]),k(s,m)},X=s=>{ee(s,{get md(){return e(p)},get plugins(){return e(G)},h1:(r,n=F)=>{var o=me();const i=H(()=>{const{children:c,style:g,...u}=n();return{children:c,style:g,rest:u}});let l;var v=t(o);B(v,()=>e(i).children??F),a(o),D(()=>l=Q(o,l,{style:`border-bottom:1px solid #999;${e(i).style??""}`,...e(i).rest},"svelte-1omid97")),k(r,o)},$$slots:{h1:!0}})};z(C,s=>{e(y)?s(K):s(X,!1)})}a(T),a(S),a(M),V(P,()=>e(p),s=>b(p,s)),k(J,M),O()}export{fe as component};
