import"../chunks/Bg9kRutz.js";import{C as Y,t as d,q as $,s as p,m as e,x as a,v,D as q,H as f,y as s,F as A,p as j}from"../chunks/BPsHi6Kl.js";import{r as K,s as O}from"../chunks/CwvRqbQL.js";import{i as U}from"../chunks/BxgibUCL.js";import{t as y,a as b}from"../chunks/CYcWNX3S.js";import{r as x}from"../chunks/gs2t8OIk.js";import{a as _,b as W,M as z,c as B}from"../chunks/5k4lUJNr.js";import{a as Q}from"../chunks/DbiTEzCB.js";import{aE as V,aF as Z,aG as ee,aH as te}from"../chunks/D2d1d49a.js";import{H as ae}from"../chunks/C_CbIzc6.js";const se=`# svelte-exmarkdown

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
`;var ne=y('<div><label><input type="checkbox">HTML</label></div> <div><label><input type="checkbox">GFM</label></div> <div><label><input type="checkbox">AST</label></div>',1),oe=y("<pre> </pre>"),re=y('<div class="wrapper svelte-1omid97"><!> <main class="svelte-1omid97"><textarea class="input svelte-1omid97"></textarea> <section class="output svelte-1omid97"><!></section></main></div>');function he(C,G){Y(G,!0);let c=d(!1),g=d(!0),u=d(!1),r=d(Q(se)),M=j(()=>[...e(g)?[V()]:[],...e(c)?[{rehypePlugin:Z}]:[],ee,te]),L=j(()=>B(e(M)));var w=re(),H=a(w);ae(H,{children:(t,i)=>{var l=ne(),n=$(l),m=a(n),E=a(m);x(E),f(),s(m),s(n);var k=p(n,2),F=a(k),I=a(F);x(I),f(),s(F),s(k);var N=p(k,2),S=a(N),T=a(S);x(T),f(),s(S),s(N),_(E,()=>e(c),o=>v(c,o)),_(I,()=>e(g),o=>v(g,o)),_(T,()=>e(u),o=>v(u,o)),b(t,l)}});var P=p(H,2),h=a(P);K(h);var D=p(h,2),R=a(D);{var J=t=>{var i=oe(),l=a(i,!0);s(i),A(n=>O(l,n),[()=>JSON.stringify(e(L)(e(r)),(n,m)=>n==="position"?void 0:m,"  ")]),b(t,i)},X=t=>{z(t,{get md(){return e(r)},get plugins(){return e(M)}})};U(R,t=>{e(u)?t(J):t(X,!1)})}s(D),s(P),s(w),W(h,()=>e(r),t=>v(r,t)),b(C,w),q()}export{he as component};
