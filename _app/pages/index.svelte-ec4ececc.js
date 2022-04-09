import{S as de,i as ue,s as pe,e as i,t as V,k as P,c,a as u,h as R,d,m as S,b as v,g as ce,H as a,T as oe,U as K,o as W,p as me,q as Y,V as fe,n as he,w as ve,x as _e,y as ge,B as ke,j as we,E as ie}from"../chunks/index-b63dd270.js";import{b as be}from"../chunks/paths-396f020f.js";import{g as Ee,h as ye,f as je,E as Me}from"../chunks/index-1751fd82.js";import"../chunks/index-62a5bd2c.js";var De=`# svelte-exmarkdown

Svelte component to render markdown.

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

## Playground

https://ssssota.github.io/svelte-exmarkdown
`;function Ie(r){let e,n;return e=new Me({props:{md:r[3],plugins:r[1]}}),{c(){ve(e.$$.fragment)},l(t){_e(e.$$.fragment,t)},m(t,s){ge(e,t,s),n=!0},p(t,s){const l={};s&8&&(l.md=t[3]),s&2&&(l.plugins=t[1]),e.$set(l)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){ke(e,t)}}}function qe(r){let e,n=JSON.stringify(r[4](r[3]),r[8],"  ")+"",t;return{c(){e=i("pre"),t=V(n)},l(s){e=c(s,"PRE",{});var l=u(e);t=R(l,n),l.forEach(d)},m(s,l){ce(s,e,l),a(e,t)},p(s,l){l&24&&n!==(n=JSON.stringify(s[4](s[3]),s[8],"  ")+"")&&we(t,n)},i:ie,o:ie,d(s){s&&d(e)}}}function xe(r){let e,n,t,s,l,g,q,m,j,w,k,T,z,H,x,M,U,B,N,D,F,G,b,E,O,I,f,h,$,X,Q;const Z=[qe,Ie],y=[];function ee(o,p){return o[2]?0:1}return f=ee(r),h=y[f]=Z[f](r),{c(){e=i("div"),n=i("header"),t=i("h1"),s=V("svelte-exmarkdown"),l=P(),g=i("div"),q=P(),m=i("div"),j=i("div"),w=i("label"),k=i("input"),T=V("GFM"),z=P(),H=i("div"),x=i("label"),M=i("input"),U=V("AST"),B=P(),N=i("div"),D=i("a"),F=V("Docs"),G=P(),b=i("main"),E=i("textarea"),O=P(),I=i("section"),h.c(),this.h()},l(o){e=c(o,"DIV",{class:!0});var p=u(e);n=c(p,"HEADER",{class:!0});var _=u(n);t=c(_,"H1",{});var te=u(t);s=R(te,"svelte-exmarkdown"),te.forEach(d),l=S(_),g=c(_,"DIV",{class:!0}),u(g).forEach(d),q=S(_),m=c(_,"DIV",{class:!0});var A=u(m);j=c(A,"DIV",{});var ne=u(j);w=c(ne,"LABEL",{});var C=u(w);k=c(C,"INPUT",{type:!0}),T=R(C,"GFM"),C.forEach(d),ne.forEach(d),z=S(A),H=c(A,"DIV",{});var ae=u(H);x=c(ae,"LABEL",{});var J=u(x);M=c(J,"INPUT",{type:!0}),U=R(J,"AST"),J.forEach(d),ae.forEach(d),B=S(A),N=c(A,"DIV",{});var se=u(N);D=c(se,"A",{class:!0,href:!0});var re=u(D);F=R(re,"Docs"),re.forEach(d),se.forEach(d),A.forEach(d),_.forEach(d),G=S(p),b=c(p,"MAIN",{class:!0});var L=u(b);E=c(L,"TEXTAREA",{class:!0}),u(E).forEach(d),O=S(L),I=c(L,"SECTION",{class:!0});var le=u(I);h.l(le),le.forEach(d),L.forEach(d),p.forEach(d),this.h()},h(){v(g,"class","spacer svelte-3jzqc2"),v(k,"type","checkbox"),v(M,"type","checkbox"),v(D,"class","link"),v(D,"href",be+"/docs"),v(m,"class","right svelte-3jzqc2"),v(n,"class","svelte-3jzqc2"),v(E,"class","input svelte-3jzqc2"),v(I,"class","output svelte-3jzqc2"),v(b,"class","svelte-3jzqc2"),v(e,"class","wrapper svelte-3jzqc2")},m(o,p){ce(o,e,p),a(e,n),a(n,t),a(t,s),a(n,l),a(n,g),a(n,q),a(n,m),a(m,j),a(j,w),a(w,k),k.checked=r[0],a(w,T),a(m,z),a(m,H),a(H,x),a(x,M),M.checked=r[2],a(x,U),a(m,B),a(m,N),a(N,D),a(D,F),a(e,G),a(e,b),a(b,E),oe(E,r[3]),a(b,O),a(b,I),y[f].m(I,null),$=!0,X||(Q=[K(k,"change",r[5]),K(M,"change",r[6]),K(E,"input",r[7])],X=!0)},p(o,[p]){p&1&&(k.checked=o[0]),p&4&&(M.checked=o[2]),p&8&&oe(E,o[3]);let _=f;f=ee(o),f===_?y[f].p(o,p):(he(),W(y[_],1,1,()=>{y[_]=null}),me(),h=y[f],h?h.p(o,p):(h=y[f]=Z[f](o),h.c()),Y(h,1),h.m(I,null))},i(o){$||(Y(h),$=!0)},o(o){W(h),$=!1},d(o){o&&d(e),y[f].d(),X=!1,fe(Q)}}}function Ae(r,e,n){let t=!0,s=!1,l=De,g,q;function m(){t=this.checked,n(0,t)}function j(){s=this.checked,n(2,s)}function w(){l=this.value,n(3,l)}const k=(T,z)=>T==="position"?void 0:z;return r.$$.update=()=>{r.$$.dirty&1&&n(1,g=[...t?[Ee]:[],ye]),r.$$.dirty&2&&n(4,q=je(g))},[t,g,s,l,q,m,j,w,k]}class He extends de{constructor(e){super(),ue(this,e,Ae,xe,pe,{})}}export{He as default};
