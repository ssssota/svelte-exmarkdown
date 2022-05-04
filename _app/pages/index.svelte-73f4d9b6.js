import{S as Ee,i as ye,s as je,e as r,t as P,k as x,c as l,a as c,h as S,d as o,m as I,b as m,g as be,H as e,T as ke,U as ne,o as se,p as Ae,q as re,V as De,n as xe,w as Ie,x as Me,y as Te,B as qe,j as He,E as we}from"../chunks/index-c6f1ae3b.js";import{b as Pe}from"../chunks/paths-396f020f.js";import{g as Se,h as Ve,c as Ne,E as ze}from"../chunks/index-d5bc2cd8.js";import"../chunks/index-a4fe4242.js";var Ge=`# svelte-exmarkdown

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
`;function Re(i){let t,n;return t=new ze({props:{md:i[3],plugins:i[1]}}),{c(){Ie(t.$$.fragment)},l(a){Me(t.$$.fragment,a)},m(a,s){Te(t,a,s),n=!0},p(a,s){const d={};s&8&&(d.md=a[3]),s&2&&(d.plugins=a[1]),t.$set(d)},i(a){n||(re(t.$$.fragment,a),n=!0)},o(a){se(t.$$.fragment,a),n=!1},d(a){qe(t,a)}}}function $e(i){let t,n=JSON.stringify(i[4](i[3]),i[8],"  ")+"",a;return{c(){t=r("pre"),a=P(n)},l(s){t=l(s,"PRE",{});var d=c(t);a=S(d,n),d.forEach(o)},m(s,d){be(s,t,d),e(t,a)},p(s,d){d&24&&n!==(n=JSON.stringify(s[4](s[3]),s[8],"  ")+"")&&He(a,n)},i:we,o:we,d(s){s&&o(t)}}}function Le(i){let t,n,a,s,d,k,V,p,M,b,w,z,G,R,N,T,O,X,$,q,C,J,L,E,Y,K,U,y,W,Q,j,A,Z,H,v,f,B,ee,le;const oe=[$e,Re],D=[];function ie(u,h){return u[2]?0:1}return v=ie(i),f=D[v]=oe[v](i),{c(){t=r("div"),n=r("header"),a=r("h1"),s=P("svelte-exmarkdown"),d=x(),k=r("div"),V=x(),p=r("nav"),M=r("div"),b=r("label"),w=r("input"),z=P("GFM"),G=x(),R=r("div"),N=r("label"),T=r("input"),O=P("AST"),X=x(),$=r("div"),q=r("a"),C=P("Docs"),J=x(),L=r("div"),E=r("a"),Y=P("npm"),K=x(),U=r("div"),y=r("a"),W=P("GitHub"),Q=x(),j=r("main"),A=r("textarea"),Z=x(),H=r("section"),f.c(),this.h()},l(u){t=l(u,"DIV",{class:!0});var h=c(t);n=l(h,"HEADER",{class:!0});var _=c(n);a=l(_,"H1",{});var ce=c(a);s=S(ce,"svelte-exmarkdown"),ce.forEach(o),d=I(_),k=l(_,"DIV",{class:!0}),c(k).forEach(o),V=I(_),p=l(_,"NAV",{class:!0});var g=c(p);M=l(g,"DIV",{});var de=c(M);b=l(de,"LABEL",{});var te=c(b);w=l(te,"INPUT",{type:!0}),z=S(te,"GFM"),te.forEach(o),de.forEach(o),G=I(g),R=l(g,"DIV",{});var ue=c(R);N=l(ue,"LABEL",{});var ae=c(N);T=l(ae,"INPUT",{type:!0}),O=S(ae,"AST"),ae.forEach(o),ue.forEach(o),X=I(g),$=l(g,"DIV",{});var me=c($);q=l(me,"A",{class:!0,href:!0});var pe=c(q);C=S(pe,"Docs"),pe.forEach(o),me.forEach(o),J=I(g),L=l(g,"DIV",{});var he=c(L);E=l(he,"A",{class:!0,target:!0,href:!0});var ve=c(E);Y=S(ve,"npm"),ve.forEach(o),he.forEach(o),K=I(g),U=l(g,"DIV",{});var fe=c(U);y=l(fe,"A",{class:!0,target:!0,href:!0});var _e=c(y);W=S(_e,"GitHub"),_e.forEach(o),fe.forEach(o),g.forEach(o),_.forEach(o),Q=I(h),j=l(h,"MAIN",{class:!0});var F=c(j);A=l(F,"TEXTAREA",{class:!0}),c(A).forEach(o),Z=I(F),H=l(F,"SECTION",{class:!0});var ge=c(H);f.l(ge),ge.forEach(o),F.forEach(o),h.forEach(o),this.h()},h(){m(k,"class","spacer svelte-3jzqc2"),m(w,"type","checkbox"),m(T,"type","checkbox"),m(q,"class","link"),m(q,"href",Pe+"/docs"),m(E,"class","link"),m(E,"target","_blank"),m(E,"href","https://www.npmjs.com/package/svelte-exmarkdown"),m(y,"class","link"),m(y,"target","_blank"),m(y,"href","https://github.com/ssssota/svelte-exmarkdown"),m(p,"class","right svelte-3jzqc2"),m(n,"class","svelte-3jzqc2"),m(A,"class","input svelte-3jzqc2"),m(H,"class","output svelte-3jzqc2"),m(j,"class","svelte-3jzqc2"),m(t,"class","wrapper svelte-3jzqc2")},m(u,h){be(u,t,h),e(t,n),e(n,a),e(a,s),e(n,d),e(n,k),e(n,V),e(n,p),e(p,M),e(M,b),e(b,w),w.checked=i[0],e(b,z),e(p,G),e(p,R),e(R,N),e(N,T),T.checked=i[2],e(N,O),e(p,X),e(p,$),e($,q),e(q,C),e(p,J),e(p,L),e(L,E),e(E,Y),e(p,K),e(p,U),e(U,y),e(y,W),e(t,Q),e(t,j),e(j,A),ke(A,i[3]),e(j,Z),e(j,H),D[v].m(H,null),B=!0,ee||(le=[ne(w,"change",i[5]),ne(T,"change",i[6]),ne(A,"input",i[7])],ee=!0)},p(u,[h]){h&1&&(w.checked=u[0]),h&4&&(T.checked=u[2]),h&8&&ke(A,u[3]);let _=v;v=ie(u),v===_?D[v].p(u,h):(xe(),se(D[_],1,1,()=>{D[_]=null}),Ae(),f=D[v],f?f.p(u,h):(f=D[v]=oe[v](u),f.c()),re(f,1),f.m(H,null))},i(u){B||(re(f),B=!0)},o(u){se(f),B=!1},d(u){u&&o(t),D[v].d(),ee=!1,De(le)}}}function Ue(i,t,n){let a=!0,s=!1,d=Ge,k,V;function p(){a=this.checked,n(0,a)}function M(){s=this.checked,n(2,s)}function b(){d=this.value,n(3,d)}const w=(z,G)=>z==="position"?void 0:G;return i.$$.update=()=>{i.$$.dirty&1&&n(1,k=[...a?[Se]:[],Ve]),i.$$.dirty&2&&n(4,V=Ne(k))},[a,k,s,d,V,p,M,b,w]}class Ce extends Ee{constructor(t){super(),ye(this,t,Ue,Le,je,{})}}export{Ce as default};
