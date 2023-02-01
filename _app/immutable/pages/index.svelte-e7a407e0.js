import{S as Ee,i as ye,s as xe,l as r,r as H,a as D,m as o,n as c,u as P,h as l,c as M,p as u,b as be,H as e,T as ke,U as ne,t as ae,d as Ie,f as re,V as Ae,g as De,w as Me,x as je,y as Te,B as Ne,v as Se,E as we}from"../chunks/index-32cb88cc.js";import{b as He}from"../chunks/paths-b9644fda.js";import{g as Pe,h as Ve,c as qe,E as ze}from"../chunks/index-017944d7.js";import"../chunks/index-c4a0f989.js";const Le=`# svelte-exmarkdown

[![CI](https://github.com/ssssota/svelte-exmarkdown/actions/workflows/ci.yml/badge.svg)](https://github.com/ssssota/svelte-exmarkdown/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ssssota/svelte-exmarkdown/branch/main/graph/badge.svg?token=5I9YNJ57R3)](https://codecov.io/gh/ssssota/svelte-exmarkdown)
[![License MIT](https://img.shields.io/npm/l/svelte-exmarkdown)](https://github.com/ssssota/svelte-exmarkdown/blob/main/LICENSE)

Svelte component to render markdown.

## Motivation

[svelte-markdown](https://www.npmjs.com/package/svelte-markdown) is a good component package.
However, it is not extensible. You cannot use custom syntax(e.g. KaTeX).

[MDsveX](https://www.npmjs.com/package/mdsvex) is another good package.
However, it is a preprocessor. Not suitable for dynamic rendering.

We need **pluggable** and **dynamic** markdown renderer in svelte like [react-markdown](https://www.npmjs.com/package/react-markdown).

## Usage

You must **use svelte@3.47 or higher version**.
This library uses \`<svelte:element />\`.

\`\`\`svelte
<script>
	import Markdown from 'svelte-exmarkdown';
	let md = '# Hello world!';
<\/script>

<textarea bind:value={md} />
<Markdown {md} />
\`\`\`

with GFM

\`\`\`svelte
<script>
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	let md = '# Hello world!';
<\/script>

<textarea bind:value={md} />
<Markdown {md} plugins={[gfmPlugin]} />
\`\`\`

## Playground & Documents

https://ssssota.github.io/svelte-exmarkdown
`;function Re(i){let t,n;return t=new ze({props:{md:i[3],plugins:i[1]}}),{c(){Me(t.$$.fragment)},l(s){je(t.$$.fragment,s)},m(s,a){Te(t,s,a),n=!0},p(s,a){const d={};a&8&&(d.md=s[3]),a&2&&(d.plugins=s[1]),t.$set(d)},i(s){n||(re(t.$$.fragment,s),n=!0)},o(s){ae(t.$$.fragment,s),n=!1},d(s){Ne(t,s)}}}function Ge(i){let t,n=JSON.stringify(i[4](i[3]),i[8],"  ")+"",s;return{c(){t=r("pre"),s=H(n)},l(a){t=o(a,"PRE",{});var d=c(t);s=P(d,n),d.forEach(l)},m(a,d){be(a,t,d),e(t,s)},p(a,d){d&24&&n!==(n=JSON.stringify(a[4](a[3]),a[8],"  ")+"")&&Se(s,n)},i:we,o:we,d(a){a&&l(t)}}}function $e(i){let t,n,s,a,d,k,V,p,j,b,w,z,L,R,q,T,F,J,G,N,O,X,$,E,Y,K,C,y,W,Q,x,I,Z,S,v,f,U,ee,oe;const le=[Ge,Re],A=[];function ie(m,h){return m[2]?0:1}return v=ie(i),f=A[v]=le[v](i),{c(){t=r("div"),n=r("header"),s=r("h1"),a=H("svelte-exmarkdown"),d=D(),k=r("div"),V=D(),p=r("nav"),j=r("div"),b=r("label"),w=r("input"),z=H("GFM"),L=D(),R=r("div"),q=r("label"),T=r("input"),F=H("AST"),J=D(),G=r("div"),N=r("a"),O=H("Docs"),X=D(),$=r("div"),E=r("a"),Y=H("npm"),K=D(),C=r("div"),y=r("a"),W=H("GitHub"),Q=D(),x=r("main"),I=r("textarea"),Z=D(),S=r("section"),f.c(),this.h()},l(m){t=o(m,"DIV",{class:!0});var h=c(t);n=o(h,"HEADER",{class:!0});var _=c(n);s=o(_,"H1",{});var ce=c(s);a=P(ce,"svelte-exmarkdown"),ce.forEach(l),d=M(_),k=o(_,"DIV",{class:!0}),c(k).forEach(l),V=M(_),p=o(_,"NAV",{class:!0});var g=c(p);j=o(g,"DIV",{});var de=c(j);b=o(de,"LABEL",{});var te=c(b);w=o(te,"INPUT",{type:!0}),z=P(te,"GFM"),te.forEach(l),de.forEach(l),L=M(g),R=o(g,"DIV",{});var me=c(R);q=o(me,"LABEL",{});var se=c(q);T=o(se,"INPUT",{type:!0}),F=P(se,"AST"),se.forEach(l),me.forEach(l),J=M(g),G=o(g,"DIV",{});var ue=c(G);N=o(ue,"A",{class:!0,href:!0});var pe=c(N);O=P(pe,"Docs"),pe.forEach(l),ue.forEach(l),X=M(g),$=o(g,"DIV",{});var he=c($);E=o(he,"A",{class:!0,target:!0,href:!0});var ve=c(E);Y=P(ve,"npm"),ve.forEach(l),he.forEach(l),K=M(g),C=o(g,"DIV",{});var fe=c(C);y=o(fe,"A",{class:!0,target:!0,href:!0});var _e=c(y);W=P(_e,"GitHub"),_e.forEach(l),fe.forEach(l),g.forEach(l),_.forEach(l),Q=M(h),x=o(h,"MAIN",{class:!0});var B=c(x);I=o(B,"TEXTAREA",{class:!0}),c(I).forEach(l),Z=M(B),S=o(B,"SECTION",{class:!0});var ge=c(S);f.l(ge),ge.forEach(l),B.forEach(l),h.forEach(l),this.h()},h(){u(k,"class","spacer svelte-3jzqc2"),u(w,"type","checkbox"),u(T,"type","checkbox"),u(N,"class","link"),u(N,"href",He+"/docs"),u(E,"class","link"),u(E,"target","_blank"),u(E,"href","https://www.npmjs.com/package/svelte-exmarkdown"),u(y,"class","link"),u(y,"target","_blank"),u(y,"href","https://github.com/ssssota/svelte-exmarkdown"),u(p,"class","right svelte-3jzqc2"),u(n,"class","svelte-3jzqc2"),u(I,"class","input svelte-3jzqc2"),u(S,"class","output svelte-3jzqc2"),u(x,"class","svelte-3jzqc2"),u(t,"class","wrapper svelte-3jzqc2")},m(m,h){be(m,t,h),e(t,n),e(n,s),e(s,a),e(n,d),e(n,k),e(n,V),e(n,p),e(p,j),e(j,b),e(b,w),w.checked=i[0],e(b,z),e(p,L),e(p,R),e(R,q),e(q,T),T.checked=i[2],e(q,F),e(p,J),e(p,G),e(G,N),e(N,O),e(p,X),e(p,$),e($,E),e(E,Y),e(p,K),e(p,C),e(C,y),e(y,W),e(t,Q),e(t,x),e(x,I),ke(I,i[3]),e(x,Z),e(x,S),A[v].m(S,null),U=!0,ee||(oe=[ne(w,"change",i[5]),ne(T,"change",i[6]),ne(I,"input",i[7])],ee=!0)},p(m,[h]){h&1&&(w.checked=m[0]),h&4&&(T.checked=m[2]),h&8&&ke(I,m[3]);let _=v;v=ie(m),v===_?A[v].p(m,h):(De(),ae(A[_],1,1,()=>{A[_]=null}),Ie(),f=A[v],f?f.p(m,h):(f=A[v]=le[v](m),f.c()),re(f,1),f.m(S,null))},i(m){U||(re(f),U=!0)},o(m){ae(f),U=!1},d(m){m&&l(t),A[v].d(),ee=!1,Ae(oe)}}}function Ce(i,t,n){let s=!0,a=!1,d=Le,k,V;function p(){s=this.checked,n(0,s)}function j(){a=this.checked,n(2,a)}function b(){d=this.value,n(3,d)}const w=(z,L)=>z==="position"?void 0:L;return i.$$.update=()=>{i.$$.dirty&1&&n(1,k=[...s?[Pe]:[],Ve]),i.$$.dirty&2&&n(4,V=qe(k))},[s,k,a,d,V,p,j,b,w]}class Oe extends Ee{constructor(t){super(),ye(this,t,Ce,$e,xe,{})}}export{Oe as default};
