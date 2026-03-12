import"../chunks/DsnmJJEf.js";import{p as X,o as h,_ as Y,f as q,s as u,i as e,c as t,n as f,a as A,J as P,r as a,q as O,t as U,I as E,af as H}from"../chunks/bPLJODco.js";import{s as W}from"../chunks/Cp8jdx-q.js";import{s as z}from"../chunks/dbZFaeLF.js";import{i as B}from"../chunks/CYyMRtVv.js";import{a as w,f as b}from"../chunks/DT07Cs9B.js";import{r as $,a as Q}from"../chunks/lnUld-rb.js";import{a as I,b as V,M as Z,c as ee}from"../chunks/Baw94ZEg.js";import{aH as te,aI as ae,aJ as se,aK as ne}from"../chunks/BnxzI3vJ.js";import{H as oe}from"../chunks/clHeH7s5.js";const re=`# svelte-exmarkdown

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
`;var ie=b('<div><label><input type="checkbox"/>HTML</label></div> <div><label><input type="checkbox"/>GFM</label></div> <div><label><input type="checkbox"/>AST</label></div>',1),le=b("<pre> </pre>"),me=b("<h1><!></h1>"),de=b('<div class="wrapper svelte-1uha8ag"><!> <main class="svelte-1uha8ag"><textarea class="input svelte-1uha8ag"></textarea> <section class="output svelte-1uha8ag"><!></section></main></div>');function xe(L,R){X(R,!0);let k=h(!1),x=h(!0),_=h(!1),p=h(Y(re)),J=H(()=>[...e(x)?[ne()]:[],...e(k)?[{rehypePlugin:te}]:[],ae,se]),C=H(()=>ee(e(J)));var y=de(),N=t(y);oe(N,{children:(s,l)=>{var i=ie(),n=q(i),o=t(n),r=t(o);$(r),P(),a(o),a(n);var m=u(n,2),v=t(m),c=t(v);$(c),P(),a(v),a(m);var g=u(m,2),j=t(g),D=t(j);$(D),P(),a(j),a(g),I(r,()=>e(k),d=>f(k,d)),I(c,()=>e(x),d=>f(x,d)),I(D,()=>e(_),d=>f(_,d)),w(s,i)},$$slots:{default:!0}});var S=u(N,2),M=t(S);O(M);var T=u(M,2),F=t(T);{var G=s=>{var l=le(),i=t(l,!0);a(l),U(n=>W(i,n),[()=>JSON.stringify(e(C)(e(p)),(n,o)=>n==="position"?void 0:o,"  ")]),w(s,l)},K=s=>{Z(s,{get md(){return e(p)},get plugins(){return e(J)},h1:(i,n=E)=>{const o=H(()=>{const{children:v,style:c,...g}=n();return{children:v,style:c,rest:g}});var r=me();Q(r,()=>({style:`border-bottom:1px solid #999;${e(o).style??""}`,...e(o).rest}),void 0,void 0,void 0,"svelte-1uha8ag");var m=t(r);z(m,()=>e(o).children??E),a(r),w(i,r)},$$slots:{h1:!0}})};B(F,s=>{e(_)?s(G):s(K,-1)})}a(T),a(S),a(y),V(M,()=>e(p),s=>f(p,s)),w(L,y),A()}export{xe as component};
