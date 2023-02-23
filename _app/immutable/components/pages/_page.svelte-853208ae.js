import{S as B,i as F,s as G,k as _,w as C,a as S,l as v,m as w,x as J,c as T,h as p,n as y,b as M,y as R,E as g,J as D,K as N,t as I,d as O,f as P,z as j,q as A,r as L,L as U,g as V,u as X,B as H}from"../../chunks/index-74e050de.js";import{g as Y,h as q,c as K,E as z}from"../../chunks/index-214607c1.js";import{H as W}from"../../chunks/Header-abfdc992.js";const Q=`# svelte-exmarkdown

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
`;function Z(o){let e,n,t,s,a,d,m,r,c,k,b;return{c(){e=_("div"),n=_("label"),t=_("input"),s=A("GFM"),a=S(),d=_("div"),m=_("label"),r=_("input"),c=A("AST"),this.h()},l(i){e=v(i,"DIV",{});var u=w(e);n=v(u,"LABEL",{});var h=w(n);t=v(h,"INPUT",{type:!0}),s=L(h,"GFM"),h.forEach(p),u.forEach(p),a=T(i),d=v(i,"DIV",{});var x=w(d);m=v(x,"LABEL",{});var l=w(m);r=v(l,"INPUT",{type:!0}),c=L(l,"AST"),l.forEach(p),x.forEach(p),this.h()},h(){y(t,"type","checkbox"),y(r,"type","checkbox")},m(i,u){M(i,e,u),g(e,n),g(n,t),t.checked=o[0],g(n,s),M(i,a,u),M(i,d,u),g(d,m),g(m,r),r.checked=o[2],g(m,c),k||(b=[N(t,"change",o[5]),N(r,"change",o[6])],k=!0)},p(i,u){u&1&&(t.checked=i[0]),u&4&&(r.checked=i[2])},d(i){i&&p(e),i&&p(a),i&&p(d),k=!1,U(b)}}}function ee(o){let e,n;return e=new z({props:{md:o[3],plugins:o[1]}}),{c(){C(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,s){R(e,t,s),n=!0},p(t,s){const a={};s&8&&(a.md=t[3]),s&2&&(a.plugins=t[1]),e.$set(a)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function te(o){let e,n=JSON.stringify(o[4](o[3]),o[8],"  ")+"",t;return{c(){e=_("pre"),t=A(n)},l(s){e=v(s,"PRE",{});var a=w(e);t=L(a,n),a.forEach(p)},m(s,a){M(s,e,a),g(e,t)},p(s,a){a&24&&n!==(n=JSON.stringify(s[4](s[3]),s[8],"  ")+"")&&X(t,n)},i:H,o:H,d(s){s&&p(e)}}}function ne(o){let e,n,t,s,a,d,m,r,c,k,b,i;n=new W({props:{$$slots:{default:[Z]},$$scope:{ctx:o}}});const u=[te,ee],h=[];function x(l,f){return l[2]?0:1}return r=x(o),c=h[r]=u[r](o),{c(){e=_("div"),C(n.$$.fragment),t=S(),s=_("main"),a=_("textarea"),d=S(),m=_("section"),c.c(),this.h()},l(l){e=v(l,"DIV",{class:!0});var f=w(e);J(n.$$.fragment,f),t=T(f),s=v(f,"MAIN",{class:!0});var E=w(s);a=v(E,"TEXTAREA",{class:!0}),w(a).forEach(p),d=T(E),m=v(E,"SECTION",{class:!0});var $=w(m);c.l($),$.forEach(p),E.forEach(p),f.forEach(p),this.h()},h(){y(a,"class","input svelte-1omid97"),y(m,"class","output svelte-1omid97"),y(s,"class","svelte-1omid97"),y(e,"class","wrapper svelte-1omid97")},m(l,f){M(l,e,f),R(n,e,null),g(e,t),g(e,s),g(s,a),D(a,o[3]),g(s,d),g(s,m),h[r].m(m,null),k=!0,b||(i=N(a,"input",o[7]),b=!0)},p(l,[f]){const E={};f&517&&(E.$$scope={dirty:f,ctx:l}),n.$set(E),f&8&&D(a,l[3]);let $=r;r=x(l),r===$?h[r].p(l,f):(V(),I(h[$],1,1,()=>{h[$]=null}),O(),c=h[r],c?c.p(l,f):(c=h[r]=u[r](l),c.c()),P(c,1),c.m(m,null))},i(l){k||(P(n.$$.fragment,l),P(c),k=!0)},o(l){I(n.$$.fragment,l),I(c),k=!1},d(l){l&&p(e),j(n),h[r].d(),b=!1,i()}}}function se(o,e,n){let t=!0,s=!1,a=Q,d,m;function r(){t=this.checked,n(0,t)}function c(){s=this.checked,n(2,s)}function k(){a=this.value,n(3,a)}const b=(i,u)=>i==="position"?void 0:u;return o.$$.update=()=>{o.$$.dirty&1&&n(1,d=[...t?[Y]:[],q]),o.$$.dirty&2&&n(4,m=K(d))},[t,d,s,a,m,r,c,k,b]}class le extends B{constructor(e){super(),F(this,e,se,ne,G,{})}}export{le as default};
