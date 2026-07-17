import{$ as e,B as t,D as n,G as r,H as i,I as a,J as o,K as s,Q as c,S as l,T as u,U as d,V as f,Y as p,_ as m,d as h,f as g,it as _,j as v,l as y,nt as b,rt as x,u as S,w as C}from"../chunks/Crgtcipn.js";import"../chunks/xihTtKlq.js";import{t as w}from"../chunks/CckpKPfj.js";import{i as T,t as E}from"../chunks/D3XV9fJM.js";import{f as D,s as O,t as k,u as A}from"../chunks/Bo2Kik8c.js";var j=`# svelte-exmarkdown

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
`,M=n(`<div><label><input type="checkbox"/>HTML</label></div> <div><label><input type="checkbox"/>GFM</label></div> <div><label><input type="checkbox"/>AST</label></div>`,1),N=n(`<pre> </pre>`),P=n(`<h1><!></h1>`),F=n(`<div class="wrapper svelte-1uha8ag"><!> <main class="svelte-1uha8ag"><textarea class="input svelte-1uha8ag"></textarea> <section class="output svelte-1uha8ag"><!></section></main></div>`);function I(n,I){e(I,!0);let L=s(!1),R=s(!0),z=s(!1),B=s(d(j)),V=o(()=>[...v(R)?[D()]:[],...v(L)?[{rehypePlugin:A}]:[],O,k]),H=o(()=>T(v(V)));var U=F(),W=t(U);w(W,{children:(e,n)=>{var a=M(),o=f(a),s=t(o),c=t(s);g(c),b(),x(s),x(o);var l=i(o,2),d=t(l),p=t(d);g(p),b(),x(d),x(l);var m=i(l,2),h=t(m),_=t(h);g(_),b(),x(h),x(m),y(c,()=>v(L),e=>r(L,e)),y(p,()=>v(R),e=>r(R,e)),y(_,()=>v(z),e=>r(z,e)),u(e,a)},$$slots:{default:!0}});var G=i(W,2),K=t(G);p(K);var q=i(K,2),J=t(q),Y=e=>{var n=N(),r=t(n,!0);x(n),a(e=>C(r,e),[()=>JSON.stringify(v(H)(v(B)),(e,t)=>e===`position`?void 0:t,`  `)]),u(e,n)},X=e=>{E(e,{get md(){return v(B)},get plugins(){return v(V)},h1:(e,n=_)=>{let r=o(()=>{let{children:e,style:t,...r}=n();return{children:e,style:t,rest:r}});var i=P();h(i,()=>({style:`border-bottom:1px solid #999;${v(r).style??``}`,...v(r).rest}),void 0,void 0,void 0,`svelte-1uha8ag`),m(t(i),()=>v(r).children??_),x(i),u(e,i)},$$slots:{h1:!0}})};l(J,e=>{v(z)?e(Y):e(X,-1)}),x(q),x(G),x(U),S(K,()=>v(B),e=>r(B,e)),u(n,U),c()}export{I as component};