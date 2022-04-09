import{S as de,i as ue,s as pe,e as i,t as V,k as S,c,a as u,h as R,d,m as P,b as h,g as ce,H as a,U as oe,V as W,o as K,p as me,q as Y,W as fe,n as ve,w as he,x as _e,y as ke,B as ge,j as we,E as ie}from"../chunks/index-6b8e1633.js";import{b as be}from"../chunks/paths-396f020f.js";import{g as Ee,f as ye,E as je}from"../chunks/index-cdc5acdb.js";import"../chunks/index-51394b6b.js";var Me=`# svelte-exmarkdown

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
`;function De(r){let e,n;return e=new je({props:{md:r[3],plugins:r[1]}}),{c(){he(e.$$.fragment)},l(t){_e(e.$$.fragment,t)},m(t,s){ke(e,t,s),n=!0},p(t,s){const l={};s&8&&(l.md=t[3]),s&2&&(l.plugins=t[1]),e.$set(l)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){ge(e,t)}}}function Ie(r){let e,n=JSON.stringify(r[4](r[3]),r[8],"  ")+"",t;return{c(){e=i("pre"),t=V(n)},l(s){e=c(s,"PRE",{});var l=u(e);t=R(l,n),l.forEach(d)},m(s,l){ce(s,e,l),a(e,t)},p(s,l){l&24&&n!==(n=JSON.stringify(s[4](s[3]),s[8],"  ")+"")&&we(t,n)},i:ie,o:ie,d(s){s&&d(e)}}}function qe(r){let e,n,t,s,l,k,q,m,j,w,g,T,z,H,x,M,U,B,N,D,F,G,b,E,O,I,f,v,$,X,Q;const Z=[Ie,De],y=[];function ee(o,p){return o[2]?0:1}return f=ee(r),v=y[f]=Z[f](r),{c(){e=i("div"),n=i("header"),t=i("h1"),s=V("svelte-exmarkdown"),l=S(),k=i("div"),q=S(),m=i("div"),j=i("div"),w=i("label"),g=i("input"),T=V("GFM"),z=S(),H=i("div"),x=i("label"),M=i("input"),U=V("AST"),B=S(),N=i("div"),D=i("a"),F=V("Docs"),G=S(),b=i("main"),E=i("textarea"),O=S(),I=i("section"),v.c(),this.h()},l(o){e=c(o,"DIV",{class:!0});var p=u(e);n=c(p,"HEADER",{class:!0});var _=u(n);t=c(_,"H1",{});var te=u(t);s=R(te,"svelte-exmarkdown"),te.forEach(d),l=P(_),k=c(_,"DIV",{class:!0}),u(k).forEach(d),q=P(_),m=c(_,"DIV",{class:!0});var A=u(m);j=c(A,"DIV",{});var ne=u(j);w=c(ne,"LABEL",{});var C=u(w);g=c(C,"INPUT",{type:!0}),T=R(C,"GFM"),C.forEach(d),ne.forEach(d),z=P(A),H=c(A,"DIV",{});var ae=u(H);x=c(ae,"LABEL",{});var J=u(x);M=c(J,"INPUT",{type:!0}),U=R(J,"AST"),J.forEach(d),ae.forEach(d),B=P(A),N=c(A,"DIV",{});var se=u(N);D=c(se,"A",{class:!0,href:!0});var re=u(D);F=R(re,"Docs"),re.forEach(d),se.forEach(d),A.forEach(d),_.forEach(d),G=P(p),b=c(p,"MAIN",{class:!0});var L=u(b);E=c(L,"TEXTAREA",{class:!0}),u(E).forEach(d),O=P(L),I=c(L,"SECTION",{class:!0});var le=u(I);v.l(le),le.forEach(d),L.forEach(d),p.forEach(d),this.h()},h(){h(k,"class","spacer svelte-3jzqc2"),h(g,"type","checkbox"),h(M,"type","checkbox"),h(D,"class","link"),h(D,"href",be+"/docs"),h(m,"class","right svelte-3jzqc2"),h(n,"class","svelte-3jzqc2"),h(E,"class","input svelte-3jzqc2"),h(I,"class","output svelte-3jzqc2"),h(b,"class","svelte-3jzqc2"),h(e,"class","wrapper svelte-3jzqc2")},m(o,p){ce(o,e,p),a(e,n),a(n,t),a(t,s),a(n,l),a(n,k),a(n,q),a(n,m),a(m,j),a(j,w),a(w,g),g.checked=r[0],a(w,T),a(m,z),a(m,H),a(H,x),a(x,M),M.checked=r[2],a(x,U),a(m,B),a(m,N),a(N,D),a(D,F),a(e,G),a(e,b),a(b,E),oe(E,r[3]),a(b,O),a(b,I),y[f].m(I,null),$=!0,X||(Q=[W(g,"change",r[5]),W(M,"change",r[6]),W(E,"input",r[7])],X=!0)},p(o,[p]){p&1&&(g.checked=o[0]),p&4&&(M.checked=o[2]),p&8&&oe(E,o[3]);let _=f;f=ee(o),f===_?y[f].p(o,p):(ve(),K(y[_],1,1,()=>{y[_]=null}),me(),v=y[f],v?v.p(o,p):(v=y[f]=Z[f](o),v.c()),Y(v,1),v.m(I,null))},i(o){$||(Y(v),$=!0)},o(o){K(v),$=!1},d(o){o&&d(e),y[f].d(),X=!1,fe(Q)}}}function xe(r,e,n){let t=!0,s=!1,l=Me,k,q;function m(){t=this.checked,n(0,t)}function j(){s=this.checked,n(2,s)}function w(){l=this.value,n(3,l)}const g=(T,z)=>T==="position"?void 0:z;return r.$$.update=()=>{r.$$.dirty&1&&n(1,k=[...t?[Ee]:[]]),r.$$.dirty&2&&n(4,q=ye(k))},[t,k,s,l,q,m,j,w,g]}class ze extends de{constructor(e){super(),ue(this,e,xe,qe,pe,{})}}export{ze as default};
