import"../chunks/Bg9kRutz.js";import{y as Y,m as h,k as q,s as w,g as e,p as t,n as b,z,C as H,q as a,A as D,j as $,t as F}from"../chunks/BZIwDeuG.js";import{r as K,s as O}from"../chunks/Ci-oUFVK.js";import{i as U}from"../chunks/LFYQ992y.js";import{t as f,a as k}from"../chunks/QZQWCxZ4.js";import{r as j,a as W,b as B}from"../chunks/BSzLcK9J.js";import{a as E,b as Q,M as V,c as Z}from"../chunks/1VrzQugo.js";import{a as ee}from"../chunks/CK2ftL8m.js";import{aE as te,aF as ae,aG as se,aH as ne}from"../chunks/CjSKRh22.js";import{H as oe}from"../chunks/CGGSIUub.js";const re=`# svelte-exmarkdown

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
`;var ie=f('<div><label><input type="checkbox">HTML</label></div> <div><label><input type="checkbox">GFM</label></div> <div><label><input type="checkbox">AST</label></div>',1),le=f("<pre> </pre>"),me=f("<h1><!></h1>"),de=f('<div class="wrapper svelte-1omid97"><!> <main class="svelte-1omid97"><textarea class="input svelte-1omid97"></textarea> <section class="output svelte-1omid97"><!></section></main></div>');function xe(G,L){Y(L,!0);let x=h(!1),_=h(!0),y=h(!1),p=h(ee(re)),I=$(()=>[...e(_)?[te()]:[],...e(x)?[{rehypePlugin:ae}]:[],se,ne]),R=$(()=>Z(e(I)));var M=de(),N=t(M);oe(N,{children:(s,m)=>{var r=ie(),n=q(r),o=t(n),i=t(o);j(i),H(),a(o),a(n);var l=w(n,2),v=t(l),c=t(v);j(c),H(),a(v),a(l);var g=w(l,2),u=t(g),C=t(u);j(C),H(),a(u),a(g),E(i,()=>e(x),d=>b(x,d)),E(c,()=>e(_),d=>b(_,d)),E(C,()=>e(y),d=>b(y,d)),k(s,r)}});var S=w(N,2),P=t(S);K(P);var T=w(P,2),A=t(T);{var J=s=>{var m=le(),r=t(m,!0);a(m),D(n=>O(r,n),[()=>JSON.stringify(e(R)(e(p)),(n,o)=>n==="position"?void 0:o,"  ")]),k(s,m)},X=s=>{V(s,{get md(){return e(p)},get plugins(){return e(I)},h1:(r,n=F)=>{var o=me();const i=$(()=>{const{children:c,style:g,...u}=n();return{children:c,style:g,rest:u}});let l;var v=t(o);W(v,()=>e(i).children??F),a(o),D(()=>l=B(o,l,{style:`border-bottom:1px solid #999;${e(i).style??""}`,...e(i).rest},"svelte-1omid97")),k(r,o)},$$slots:{h1:!0}})};U(A,s=>{e(y)?s(J):s(X,!1)})}a(T),a(S),a(M),Q(P,()=>e(p),s=>b(p,s)),k(G,M),z()}export{xe as component};
