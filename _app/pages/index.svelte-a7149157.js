import{S as de,i as ue,s as me,e as i,t as V,k as A,c,a as u,h as R,d,m as P,b as v,g as ce,H as a,T as oe,U as Y,o as K,p as pe,q as W,V as fe,n as he,w as ve,x as _e,y as ge,B as ke,j as we,E as ie}from"../chunks/index-c6f1ae3b.js";import{b as be}from"../chunks/paths-396f020f.js";import{g as Ee,h as ye,c as je,E as De}from"../chunks/index-de48f8df.js";import"../chunks/index-a4fe4242.js";var Me=`# svelte-exmarkdown

Svelte component to render markdown.

## Motivation

[svelte-markdown](https://www.npmjs.com/package/svelte-markdown) is a good component package.
However, it is not extensible. You cannot use custom syntax(e.g. KaTeX).

[MDsveX](https://www.npmjs.com/package/mdsvex) is another good package.
However, it is a preprocessor. Not suitable for dynamic rendering.

We need **pluggable** and **dynamic** markdown renderer in svelte like [react-markdown](https://www.npmjs.com/package/react-markdown).

## Usage

You must **use svelte@3.47 or higher version**.
This library is use \`<svelte:element />\`.

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
`;function Ie(r){let e,n;return e=new De({props:{md:r[3],plugins:r[1]}}),{c(){ve(e.$$.fragment)},l(t){_e(e.$$.fragment,t)},m(t,s){ge(e,t,s),n=!0},p(t,s){const l={};s&8&&(l.md=t[3]),s&2&&(l.plugins=t[1]),e.$set(l)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){ke(e,t)}}}function Te(r){let e,n=JSON.stringify(r[4](r[3]),r[8],"  ")+"",t;return{c(){e=i("pre"),t=V(n)},l(s){e=c(s,"PRE",{});var l=u(e);t=R(l,n),l.forEach(d)},m(s,l){ce(s,e,l),a(e,t)},p(s,l){l&24&&n!==(n=JSON.stringify(s[4](s[3]),s[8],"  ")+"")&&we(t,n)},i:ie,o:ie,d(s){s&&d(e)}}}function qe(r){let e,n,t,s,l,g,T,p,j,w,k,S,z,H,q,D,U,B,N,M,F,G,b,E,O,I,f,h,$,X,Q;const Z=[Te,Ie],y=[];function ee(o,m){return o[2]?0:1}return f=ee(r),h=y[f]=Z[f](r),{c(){e=i("div"),n=i("header"),t=i("h1"),s=V("svelte-exmarkdown"),l=A(),g=i("div"),T=A(),p=i("div"),j=i("div"),w=i("label"),k=i("input"),S=V("GFM"),z=A(),H=i("div"),q=i("label"),D=i("input"),U=V("AST"),B=A(),N=i("div"),M=i("a"),F=V("Docs"),G=A(),b=i("main"),E=i("textarea"),O=A(),I=i("section"),h.c(),this.h()},l(o){e=c(o,"DIV",{class:!0});var m=u(e);n=c(m,"HEADER",{class:!0});var _=u(n);t=c(_,"H1",{});var te=u(t);s=R(te,"svelte-exmarkdown"),te.forEach(d),l=P(_),g=c(_,"DIV",{class:!0}),u(g).forEach(d),T=P(_),p=c(_,"DIV",{class:!0});var x=u(p);j=c(x,"DIV",{});var ne=u(j);w=c(ne,"LABEL",{});var C=u(w);k=c(C,"INPUT",{type:!0}),S=R(C,"GFM"),C.forEach(d),ne.forEach(d),z=P(x),H=c(x,"DIV",{});var ae=u(H);q=c(ae,"LABEL",{});var J=u(q);D=c(J,"INPUT",{type:!0}),U=R(J,"AST"),J.forEach(d),ae.forEach(d),B=P(x),N=c(x,"DIV",{});var se=u(N);M=c(se,"A",{class:!0,href:!0});var re=u(M);F=R(re,"Docs"),re.forEach(d),se.forEach(d),x.forEach(d),_.forEach(d),G=P(m),b=c(m,"MAIN",{class:!0});var L=u(b);E=c(L,"TEXTAREA",{class:!0}),u(E).forEach(d),O=P(L),I=c(L,"SECTION",{class:!0});var le=u(I);h.l(le),le.forEach(d),L.forEach(d),m.forEach(d),this.h()},h(){v(g,"class","spacer svelte-3jzqc2"),v(k,"type","checkbox"),v(D,"type","checkbox"),v(M,"class","link"),v(M,"href",be+"/docs"),v(p,"class","right svelte-3jzqc2"),v(n,"class","svelte-3jzqc2"),v(E,"class","input svelte-3jzqc2"),v(I,"class","output svelte-3jzqc2"),v(b,"class","svelte-3jzqc2"),v(e,"class","wrapper svelte-3jzqc2")},m(o,m){ce(o,e,m),a(e,n),a(n,t),a(t,s),a(n,l),a(n,g),a(n,T),a(n,p),a(p,j),a(j,w),a(w,k),k.checked=r[0],a(w,S),a(p,z),a(p,H),a(H,q),a(q,D),D.checked=r[2],a(q,U),a(p,B),a(p,N),a(N,M),a(M,F),a(e,G),a(e,b),a(b,E),oe(E,r[3]),a(b,O),a(b,I),y[f].m(I,null),$=!0,X||(Q=[Y(k,"change",r[5]),Y(D,"change",r[6]),Y(E,"input",r[7])],X=!0)},p(o,[m]){m&1&&(k.checked=o[0]),m&4&&(D.checked=o[2]),m&8&&oe(E,o[3]);let _=f;f=ee(o),f===_?y[f].p(o,m):(he(),K(y[_],1,1,()=>{y[_]=null}),pe(),h=y[f],h?h.p(o,m):(h=y[f]=Z[f](o),h.c()),W(h,1),h.m(I,null))},i(o){$||(W(h),$=!0)},o(o){K(h),$=!1},d(o){o&&d(e),y[f].d(),X=!1,fe(Q)}}}function xe(r,e,n){let t=!0,s=!1,l=Me,g,T;function p(){t=this.checked,n(0,t)}function j(){s=this.checked,n(2,s)}function w(){l=this.value,n(3,l)}const k=(S,z)=>S==="position"?void 0:z;return r.$$.update=()=>{r.$$.dirty&1&&n(1,g=[...t?[Ee]:[],ye]),r.$$.dirty&2&&n(4,T=je(g))},[t,g,s,l,T,p,j,w,k]}class He extends de{constructor(e){super(),ue(this,e,xe,qe,me,{})}}export{He as default};
