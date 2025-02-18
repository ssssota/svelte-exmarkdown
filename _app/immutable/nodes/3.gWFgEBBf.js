import"../chunks/disclose-version.Bg9kRutz.js";import{p as A,a as C,y as d,f as J,q as e,t as X,x as p,w as E,c as t,A as b,r as a,s as v}from"../chunks/runtime.CV3elkN-.js";import{s as Y}from"../chunks/render.DEfdxR0t.js";import{i as q}from"../chunks/svelte-component.BwLKpnFg.js";import{a as f,t as y}from"../chunks/template.C-tOna3O.js";import{b as x,r as K}from"../chunks/attributes.DC7X6D7E.js";import{b as O,a as _,M as U,c as W}from"../chunks/Markdown.BN9wVLv_.js";import{a as z}from"../chunks/props.DWNkkig2.js";import{aF as B,aG as Q,aH as V,aI as Z}from"../chunks/index.I-xa7eSS.js";import{H as ee}from"../chunks/Header.JUugQRLw.js";const te=`# svelte-exmarkdown

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
`;var ae=y('<div><label><input type="checkbox">HTML</label></div> <div><label><input type="checkbox">GFM</label></div> <div><label><input type="checkbox">AST</label></div>',1),se=y("<pre> </pre>"),ne=y('<div class="wrapper svelte-1omid97"><!> <main class="svelte-1omid97"><textarea class="input svelte-1omid97"></textarea> <section class="output svelte-1omid97"><!></section></main></div>');function ue(F,G){A(G,!0);let c=d(!1),g=d(!0),u=d(!1),r=d(z(te)),M=E(()=>[...e(g)?[B()]:[],...e(c)?[{rehypePlugin:Q}]:[],V,Z]),L=E(()=>W(e(M)));var w=ne(),P=t(w);ee(P,{children:(s,i)=>{var l=ae(),n=J(l),m=t(n),I=t(m);x(I),b(),a(m),a(n);var k=v(n,2),N=t(k),S=t(N);x(S),b(),a(N),a(k);var T=v(k,2),j=t(T),D=t(j);x(D),b(),a(j),a(T),_(I,()=>e(c),o=>p(c,o)),_(S,()=>e(g),o=>p(g,o)),_(D,()=>e(u),o=>p(u,o)),f(s,l)},$$slots:{default:!0}});var H=v(P,2),h=t(H);K(h);var $=v(h,2),R=t($);q(R,()=>e(u),s=>{var i=se(),l=t(i,!0);X(()=>Y(l,JSON.stringify(e(L)(e(r)),(n,m)=>n==="position"?void 0:m,"  "))),a(i),f(s,i)},s=>{U(s,{get md(){return e(r)},get plugins(){return e(M)}})}),a($),a(H),a(w),O(h,()=>e(r),s=>p(r,s)),f(F,w),C()}export{ue as component};
