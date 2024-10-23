import"../chunks/disclose-version.Bg9kRutz.js";import{p as C,a as J,o as d,f as X,j as e,t as Y,n as p,m as E,c as t,w as f,r as a,s as v}from"../chunks/runtime.DFhqK77Z.js";import{s as A}from"../chunks/render.Csq-lVGY.js";import{i as K}from"../chunks/svelte-component.CTLjTiV2.js";import{a as b,t as y}from"../chunks/template.DikEpHXd.js";import{c as x,r as O}from"../chunks/attributes.BsRq9-LA.js";import{b as U,a as _,M as W,c as q}from"../chunks/Markdown.-TBoBUVH.js";import{a as z}from"../chunks/props.BJdcwnPm.js";import{aF as B,aG as Q,aH as V,aI as Z}from"../chunks/index.PHt_qCN3.js";import{H as ee}from"../chunks/Header.CNNgaqW3.js";const te=`# svelte-exmarkdown

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
`;var ae=y('<div><label><input type="checkbox">HTML</label></div> <div><label><input type="checkbox">GFM</label></div> <div><label><input type="checkbox">AST</label></div>',1),se=y("<pre> </pre>"),ne=y('<div class="wrapper svelte-1omid97"><!> <main class="svelte-1omid97"><textarea class="input svelte-1omid97"></textarea> <section class="output svelte-1omid97"><!></section></main></div>');function ue(F,G){C(G,!0);let c=d(!1),g=d(!0),u=d(!1),r=d(z(te)),M=E(()=>[...e(g)?[B()]:[],...e(c)?[{rehypePlugin:Q}]:[],V,Z]),L=E(()=>q(e(M)));var w=ne(),P=t(w);ee(P,{children:(s,i)=>{var l=ae(),n=X(l),m=t(n),I=t(m);x(I),f(),a(m),a(n);var k=v(n,2),j=t(k),N=t(j);x(N),f(),a(j),a(k);var S=v(k,2),T=t(S),D=t(T);x(D),f(),a(T),a(S),_(I,()=>e(c),o=>p(c,o)),_(N,()=>e(g),o=>p(g,o)),_(D,()=>e(u),o=>p(u,o)),b(s,l)},$$slots:{default:!0}});var H=v(P,2),h=t(H);O(h);var $=v(h,2),R=t($);K(R,()=>e(u),s=>{var i=se(),l=t(i);Y(()=>A(l,JSON.stringify(e(L)(e(r)),(n,m)=>n==="position"?void 0:m,"  "))),a(i),b(s,i)},s=>{W(s,{get md(){return e(r)},get plugins(){return e(M)}})}),a($),a(H),a(w),U(h,()=>e(r),s=>p(r,s)),b(F,w),J()}export{ue as component};
