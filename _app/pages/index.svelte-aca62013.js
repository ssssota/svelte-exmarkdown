import{S as Ee,i as ye,s as xe,e as r,t as q,k as A,c as o,a as c,h as H,d as l,m as D,b as u,g as be,H as e,T as ke,U as ae,o as ne,p as Ie,q as re,V as je,n as Ae,w as De,x as Me,y as Te,B as Ne,j as Se,E as we}from"../chunks/index-7b7f98ce.js";import{b as qe}from"../chunks/paths-396f020f.js";import{g as He,h as Pe,c as Ve,E as ze}from"../chunks/index-ec7cdd0a.js";import"../chunks/index-8c5a7fb1.js";var Le=`# svelte-exmarkdown

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
`;function Re(i){let t,a;return t=new ze({props:{md:i[3],plugins:i[1]}}),{c(){De(t.$$.fragment)},l(s){Me(t.$$.fragment,s)},m(s,n){Te(t,s,n),a=!0},p(s,n){const d={};n&8&&(d.md=s[3]),n&2&&(d.plugins=s[1]),t.$set(d)},i(s){a||(re(t.$$.fragment,s),a=!0)},o(s){ne(t.$$.fragment,s),a=!1},d(s){Ne(t,s)}}}function Ge(i){let t,a=JSON.stringify(i[4](i[3]),i[8],"  ")+"",s;return{c(){t=r("pre"),s=q(a)},l(n){t=o(n,"PRE",{});var d=c(t);s=H(d,a),d.forEach(l)},m(n,d){be(n,t,d),e(t,s)},p(n,d){d&24&&a!==(a=JSON.stringify(n[4](n[3]),n[8],"  ")+"")&&Se(s,a)},i:we,o:we,d(n){n&&l(t)}}}function $e(i){let t,a,s,n,d,k,P,p,M,b,w,z,L,R,V,T,F,J,G,N,O,X,$,E,Y,K,C,y,W,Q,x,I,Z,S,v,f,U,ee,oe;const le=[Ge,Re],j=[];function ie(m,h){return m[2]?0:1}return v=ie(i),f=j[v]=le[v](i),{c(){t=r("div"),a=r("header"),s=r("h1"),n=q("svelte-exmarkdown"),d=A(),k=r("div"),P=A(),p=r("nav"),M=r("div"),b=r("label"),w=r("input"),z=q("GFM"),L=A(),R=r("div"),V=r("label"),T=r("input"),F=q("AST"),J=A(),G=r("div"),N=r("a"),O=q("Docs"),X=A(),$=r("div"),E=r("a"),Y=q("npm"),K=A(),C=r("div"),y=r("a"),W=q("GitHub"),Q=A(),x=r("main"),I=r("textarea"),Z=A(),S=r("section"),f.c(),this.h()},l(m){t=o(m,"DIV",{class:!0});var h=c(t);a=o(h,"HEADER",{class:!0});var _=c(a);s=o(_,"H1",{});var ce=c(s);n=H(ce,"svelte-exmarkdown"),ce.forEach(l),d=D(_),k=o(_,"DIV",{class:!0}),c(k).forEach(l),P=D(_),p=o(_,"NAV",{class:!0});var g=c(p);M=o(g,"DIV",{});var de=c(M);b=o(de,"LABEL",{});var te=c(b);w=o(te,"INPUT",{type:!0}),z=H(te,"GFM"),te.forEach(l),de.forEach(l),L=D(g),R=o(g,"DIV",{});var me=c(R);V=o(me,"LABEL",{});var se=c(V);T=o(se,"INPUT",{type:!0}),F=H(se,"AST"),se.forEach(l),me.forEach(l),J=D(g),G=o(g,"DIV",{});var ue=c(G);N=o(ue,"A",{class:!0,href:!0});var pe=c(N);O=H(pe,"Docs"),pe.forEach(l),ue.forEach(l),X=D(g),$=o(g,"DIV",{});var he=c($);E=o(he,"A",{class:!0,target:!0,href:!0});var ve=c(E);Y=H(ve,"npm"),ve.forEach(l),he.forEach(l),K=D(g),C=o(g,"DIV",{});var fe=c(C);y=o(fe,"A",{class:!0,target:!0,href:!0});var _e=c(y);W=H(_e,"GitHub"),_e.forEach(l),fe.forEach(l),g.forEach(l),_.forEach(l),Q=D(h),x=o(h,"MAIN",{class:!0});var B=c(x);I=o(B,"TEXTAREA",{class:!0}),c(I).forEach(l),Z=D(B),S=o(B,"SECTION",{class:!0});var ge=c(S);f.l(ge),ge.forEach(l),B.forEach(l),h.forEach(l),this.h()},h(){u(k,"class","spacer svelte-3jzqc2"),u(w,"type","checkbox"),u(T,"type","checkbox"),u(N,"class","link"),u(N,"href",qe+"/docs"),u(E,"class","link"),u(E,"target","_blank"),u(E,"href","https://www.npmjs.com/package/svelte-exmarkdown"),u(y,"class","link"),u(y,"target","_blank"),u(y,"href","https://github.com/ssssota/svelte-exmarkdown"),u(p,"class","right svelte-3jzqc2"),u(a,"class","svelte-3jzqc2"),u(I,"class","input svelte-3jzqc2"),u(S,"class","output svelte-3jzqc2"),u(x,"class","svelte-3jzqc2"),u(t,"class","wrapper svelte-3jzqc2")},m(m,h){be(m,t,h),e(t,a),e(a,s),e(s,n),e(a,d),e(a,k),e(a,P),e(a,p),e(p,M),e(M,b),e(b,w),w.checked=i[0],e(b,z),e(p,L),e(p,R),e(R,V),e(V,T),T.checked=i[2],e(V,F),e(p,J),e(p,G),e(G,N),e(N,O),e(p,X),e(p,$),e($,E),e(E,Y),e(p,K),e(p,C),e(C,y),e(y,W),e(t,Q),e(t,x),e(x,I),ke(I,i[3]),e(x,Z),e(x,S),j[v].m(S,null),U=!0,ee||(oe=[ae(w,"change",i[5]),ae(T,"change",i[6]),ae(I,"input",i[7])],ee=!0)},p(m,[h]){h&1&&(w.checked=m[0]),h&4&&(T.checked=m[2]),h&8&&ke(I,m[3]);let _=v;v=ie(m),v===_?j[v].p(m,h):(Ae(),ne(j[_],1,1,()=>{j[_]=null}),Ie(),f=j[v],f?f.p(m,h):(f=j[v]=le[v](m),f.c()),re(f,1),f.m(S,null))},i(m){U||(re(f),U=!0)},o(m){ne(f),U=!1},d(m){m&&l(t),j[v].d(),ee=!1,je(oe)}}}function Ce(i,t,a){let s=!0,n=!1,d=Le,k,P;function p(){s=this.checked,a(0,s)}function M(){n=this.checked,a(2,n)}function b(){d=this.value,a(3,d)}const w=(z,L)=>z==="position"?void 0:L;return i.$$.update=()=>{i.$$.dirty&1&&a(1,k=[...s?[He]:[],Pe]),i.$$.dirty&2&&a(4,P=Ve(k))},[s,k,n,d,P,p,M,b,w]}class Oe extends Ee{constructor(t){super(),ye(this,t,Ce,$e,xe,{})}}export{Oe as default};
