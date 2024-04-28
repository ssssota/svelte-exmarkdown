import{e as ct}from"../chunks/index.g5YcAAdQ.js";import{s as v,a as ft,u as dt,g as ht,b as gt,d as et,e as nt,n as j,c as $t}from"../chunks/scheduler.Cok7TgDu.js";import{S as b,i as M,q as P,r as N,e as k,s as E,k as S,c as _,a as y,d as c,f as F,l as A,g as $,n as x,o as C,p as D,u as z,t as U,b as G,h as B,j as Q,m as H}from"../chunks/index.DfJ3r8Mo.js";import{b as L}from"../chunks/paths.MkV5tr54.js";import{M as R,d as wt,e as xt,f as kt,v as _t,S as yt,h as V,m as O}from"../chunks/Markdown.LgPksr5g.js";import{av as vt,aw as bt,ax as J,ay as Mt,az as Tt,aA as Et,aB as I,aC as Ft,ab as Pt,a8 as Nt,aa as St,a9 as At}from"../chunks/index.BsnaWi7F.js";import rt from"../chunks/katex.TTlFrSdt.js";import{g as K}from"../chunks/utils.P31UkBtv.js";function Ct(n){let t;const i=n[1].default,e=ft(i,n,n[0],null);return{c(){e&&e.c()},l(a){e&&e.l(a)},m(a,s){e&&e.m(a,s),t=!0},p(a,[s]){e&&e.p&&(!t||s&1)&&dt(e,i,a,a[0],t?gt(i,a[0],s,null):ht(a[0]),null)},i(a){t||(P(e,a),t=!0)},o(a){N(e,a),t=!1},d(a){e&&e.d(a)}}}function zt(n,t,i){let{$$slots:e={},$$scope:a}=t;return n.$$set=s=>{i(2,t=et(et({},t),nt(s))),"$$scope"in s&&i(0,a=s.$$scope)},t=nt(t),[a,e]}class at extends b{constructor(t){super(),M(this,t,zt,Ct,v,{})}}const Rt=async({parent:n,params:t})=>{var s;const i=await n(),e=i.docs.findIndex(o=>o.slug===t.slug),a=(s=i.docs[e])==null?void 0:s.markdown;return a||ct(404),{markdown:a,prev:i.docs[e-1],next:i.docs[e+1]}},sn=Object.freeze(Object.defineProperty({__proto__:null,load:Rt},Symbol.toStringTag,{value:"Module"}));function Dt(n){let t,i,e,a,s,o;return e=new R({props:{md:n[0],plugins:n[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(r){t=_(r,"TEXTAREA",{}),y(t).forEach(c),i=F(r),A(e.$$.fragment,r)},m(r,l){$(r,t,l),x(t,n[0]),$(r,i,l),C(e,r,l),a=!0,s||(o=D(t,"input",n[2]),s=!0)},p(r,[l]){l&1&&x(t,r[0]);const u={};l&1&&(u.md=r[0]),e.$set(u)},i(r){a||(P(e.$$.fragment,r),a=!0)},o(r){N(e.$$.fragment,r),a=!1},d(r){r&&(c(t),c(i)),z(e,r),s=!1,o()}}}function qt(n,t,i){let e=`# Skipped

Only paragraph, *em*, **strong** and [link](https://example.com) are rendered`;const a=[wt(["p","em","strong","a"])];function s(){e=this.value,i(0,e)}return[e,a,s]}class Ot extends b{constructor(t){super(),M(this,t,qt,Dt,v,{})}}const Ht=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { allowlist } from '$lib';

	let md =
		'# Skipped\\n\\nOnly paragraph, *em*, **strong** and [link](https://example.com) are rendered';
	const plugins: Plugin[] = [allowlist(['p', 'em', 'strong', 'a'])];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function It(n){let t,i=JSON.stringify(n[0],null,2)+"",e;return{c(){t=k("pre"),e=U(i)},l(a){t=_(a,"PRE",{});var s=y(t);e=G(s,i),s.forEach(c)},m(a,s){$(a,t,s),B(t,e)},p(a,[s]){s&1&&i!==(i=JSON.stringify(a[0],null,2)+"")&&Q(e,i)},i:j,o:j,d(a){a&&c(t)}}}function Xt(n,t,i){let e;const a=xt();return $t(n,a,s=>i(0,e=s)),[e,a]}class Vt extends b{constructor(t){super(),M(this,t,Xt,It,v,{})}}function jt(n){let t,i,e,a,s,o;return e=new R({props:{md:n[0],plugins:n[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(r){t=_(r,"TEXTAREA",{}),y(t).forEach(c),i=F(r),A(e.$$.fragment,r)},m(r,l){$(r,t,l),x(t,n[0]),$(r,i,l),C(e,r,l),a=!0,s||(o=D(t,"input",n[2]),s=!0)},p(r,[l]){l&1&&x(t,r[0]);const u={};l&1&&(u.md=r[0]),e.$set(u)},i(r){a||(P(e.$$.fragment,r),a=!0)},o(r){N(e.$$.fragment,r),a=!1},d(r){r&&(c(t),c(i)),z(e,r),s=!1,o()}}}function Lt(n,t,i){let e="# Hello World";const a=[{renderer:{h1:Vt}}];function s(){e=this.value,i(0,e)}return[e,a,s]}class Kt extends b{constructor(t){super(),M(this,t,Lt,jt,v,{})}}const Bt=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import DumpAst from './DumpAst.svelte';

	let md = '# Hello World';
	const plugins: Plugin[] = [{ renderer: { h1: DumpAst } }];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function Jt(n){let t,i,e,a,s,o;return e=new R({props:{md:n[0],plugins:n[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(r){t=_(r,"TEXTAREA",{}),y(t).forEach(c),i=F(r),A(e.$$.fragment,r)},m(r,l){$(r,t,l),x(t,n[0]),$(r,i,l),C(e,r,l),a=!0,s||(o=D(t,"input",n[2]),s=!0)},p(r,[l]){l&1&&x(t,r[0]);const u={};l&1&&(u.md=r[0]),e.$set(u)},i(r){a||(P(e.$$.fragment,r),a=!0)},o(r){N(e.$$.fragment,r),a=!1},d(r){r&&(c(t),c(i)),z(e,r),s=!1,o()}}}function Wt(n,t,i){let e="```typescript\nconsole.log('Hello, world!');\n```";const a=[{rehypePlugin:[vt,{ignoreMissing:!0,languages:{typescript:bt}}]}];function s(){e=this.value,i(0,e)}return[e,a,s]}class Ut extends b{constructor(t){super(),M(this,t,Wt,Jt,v,{})}}const Gt=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import typescript from 'highlight.js/lib/languages/typescript';
	import 'highlight.js/styles/github.css';
	import rehypeHighlight from 'rehype-highlight';

	let md = "\`\`\`typescript\\nconsole.log('Hello, world!');\\n\`\`\`";
	const plugins: Plugin[] = [
		{
			rehypePlugin: [
				rehypeHighlight,
				{ ignoreMissing: true, languages: { typescript } }
			]
		}
	];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function Qt(n){let t,i,e,a,s,o;return e=new R({props:{md:n[0],plugins:n[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(r){t=_(r,"TEXTAREA",{}),y(t).forEach(c),i=F(r),A(e.$$.fragment,r)},m(r,l){$(r,t,l),x(t,n[0]),$(r,i,l),C(e,r,l),a=!0,s||(o=D(t,"input",n[2]),s=!0)},p(r,[l]){l&1&&x(t,r[0]);const u={};l&1&&(u.md=r[0]),e.$set(u)},i(r){a||(P(e.$$.fragment,r),a=!0)},o(r){N(e.$$.fragment,r),a=!1},d(r){r&&(c(t),c(i)),z(e,r),s=!1,o()}}}function Yt(n,t,i){let e=`# h1 but rendered as h2

## Same size with above`;const a=[{renderer:{h1:"h2"}}];function s(){e=this.value,i(0,e)}return[e,a,s]}class Zt extends b{constructor(t){super(),M(this,t,Yt,Qt,v,{})}}const te=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';

	let md = '# h1 but rendered as h2\\n\\n## Same size with above';
	const plugins: Plugin[] = [{ renderer: { h1: 'h2' } }];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function ee(n){let t,i,e,a,s,o;return e=new R({props:{md:n[0],plugins:n[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(r){t=_(r,"TEXTAREA",{}),y(t).forEach(c),i=F(r),A(e.$$.fragment,r)},m(r,l){$(r,t,l),x(t,n[0]),$(r,i,l),C(e,r,l),a=!0,s||(o=D(t,"input",n[2]),s=!0)},p(r,[l]){l&1&&x(t,r[0]);const u={};l&1&&(u.md=r[0]),e.$set(u)},i(r){a||(P(e.$$.fragment,r),a=!0)},o(r){N(e.$$.fragment,r),a=!1},d(r){r&&(c(t),c(i)),z(e,r),s=!1,o()}}}function ne(n,t,i){let e=`# Skipped

## Rendered`;const a=[kt(["h1"])];function s(){e=this.value,i(0,e)}return[e,a,s]}class re extends b{constructor(t){super(),M(this,t,ne,ee,v,{})}}const ae=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { denylist } from '$lib';

	let md = '# Skipped\\n\\n## Rendered';
	const plugins: Plugin[] = [denylist(['h1'])];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function ie(n,t){return lt(n,t||{})||{type:"root",children:[]}}function lt(n,t){const i=se(n,t);return i&&t.afterTransform&&t.afterTransform(n,i),i}function se(n,t){switch(n.nodeType){case 1:return me(n,t);case 3:return oe(n);case 8:return ue(n);case 9:return it(n,t);case 10:return le();case 11:return it(n,t);default:return}}function it(n,t){return{type:"root",children:ot(n,t)}}function le(){return{type:"doctype"}}function oe(n){return{type:"text",value:n.nodeValue||""}}function ue(n){return{type:"comment",value:n.nodeValue||""}}function me(n,t){const i=n.namespaceURI,e=i===J.svg?Mt:Tt,a=i===J.html?n.tagName.toLowerCase():n.tagName,s=i===J.html&&a==="template"?n.content:n,o=n.getAttributeNames(),r={};let l=-1;for(;++l<o.length;)r[o[l]]=n.getAttribute(o[l])||"";return e(a,r,ot(s,t))}function ot(n,t){const i=n.childNodes,e=[];let a=-1;for(;++a<i.length;){const s=lt(i[a],t);s!==void 0&&e.push(s)}return e}const pe=new DOMParser;function ce(n,t){const i=t!=null&&t.fragment?fe(n):pe.parseFromString(n,"text/html");return ie(i)}function fe(n){const t=document.createElement("template");return t.innerHTML=n,t.content}const de={},he=[];function ge(n){const t=n||de;return function(i,e){_t(i,"element",function(a,s){const o=Array.isArray(a.properties.className)?a.properties.className:he,r=o.includes("language-math"),l=o.includes("math-display"),u=o.includes("math-inline");let g=l;if(!r&&!l&&!u)return;let d=s[s.length-1],p=a;if(a.tagName==="code"&&r&&d&&d.type==="element"&&d.tagName==="pre"&&(p=d,d=s[s.length-2],g=!0),!d)return;const h=Et(p,{whitespace:"pre"});let w;try{w=rt.renderToString(h,{...t,displayMode:g,throwOnError:!0})}catch(q){const X=q,m=X.name.toLowerCase();e.message("Could not render math with KaTeX",{ancestors:[...s,a],cause:X,place:a.position,ruleId:m,source:"rehype-katex"}),m==="parseerror"?w=rt.renderToString(h,{...t,displayMode:g,strict:"ignore",throwOnError:!1}):w=[{type:"element",tagName:"span",properties:{className:["katex-error"],style:"color:"+(t.errorColor||"#cc0000"),title:String(q)},children:[{type:"text",value:h}]}]}typeof w=="string"&&(w=ce(w,{fragment:!0}).children);const f=d.children.indexOf(p);return d.children.splice(f,1,...w),yt})}}function $e(){return{enter:{mathFlow:n,mathFlowFenceMeta:t,mathText:s},exit:{mathFlow:a,mathFlowFence:e,mathFlowFenceMeta:i,mathFlowValue:r,mathText:o,mathTextData:r}};function n(l){const u={type:"element",tagName:"code",properties:{className:["language-math","math-display"]},children:[]};this.enter({type:"math",meta:null,value:"",data:{hName:"pre",hChildren:[u]}},l)}function t(){this.buffer()}function i(){const l=this.resume(),u=this.stack[this.stack.length-1];I(u.type==="math"),u.meta=l}function e(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function a(l){const u=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),g=this.stack[this.stack.length-1];I(g.type==="math"),this.exit(l),g.value=u;const d=g.data.hChildren[0];I(d.type==="element"),I(d.tagName==="code"),d.children.push({type:"text",value:u}),this.data.mathFlowInside=void 0}function s(l){this.enter({type:"inlineMath",value:"",data:{hName:"code",hProperties:{className:["language-math","math-inline"]},hChildren:[]}},l),this.buffer()}function o(l){const u=this.resume(),g=this.stack[this.stack.length-1];I(g.type==="inlineMath"),this.exit(l),g.value=u,g.data.hChildren.push({type:"text",value:u})}function r(l){this.config.enter.data.call(this,l),this.config.exit.data.call(this,l)}}function we(n){let t=(n||{}).singleDollarTextMath;return t==null&&(t=!0),e.peek=a,{unsafe:[{character:"\r",inConstruct:"mathFlowMeta"},{character:`
`,inConstruct:"mathFlowMeta"},{character:"$",after:t?void 0:"\\$",inConstruct:"phrasing"},{character:"$",inConstruct:"mathFlowMeta"},{atBreak:!0,character:"$",after:"\\$"}],handlers:{math:i,inlineMath:e}};function i(s,o,r,l){const u=s.value||"",g=r.createTracker(l),d="$".repeat(Math.max(Ft(u,"$")+1,2)),p=r.enter("mathFlow");let h=g.move(d);if(s.meta){const w=r.enter("mathFlowMeta");h+=g.move(r.safe(s.meta,{after:`
`,before:h,encode:["$"],...g.current()})),w()}return h+=g.move(`
`),u&&(h+=g.move(u+`
`)),h+=g.move(d),p(),h}function e(s,o,r){let l=s.value||"",u=1;for(t||u++;new RegExp("(^|[^$])"+"\\$".repeat(u)+"([^$]|$)").test(l);)u++;const g="$".repeat(u);/[^ \r\n]/.test(l)&&(/^[ \r\n]/.test(l)&&/[ \r\n]$/.test(l)||/^\$|\$$/.test(l))&&(l=" "+l+" ");let d=-1;for(;++d<r.unsafe.length;){const p=r.unsafe[d];if(!p.atBreak)continue;const h=r.compilePattern(p);let w;for(;w=h.exec(l);){let f=w.index;l.codePointAt(f)===10&&l.codePointAt(f-1)===13&&f--,l=l.slice(0,f)+" "+l.slice(w.index+1)}}return g+l+g}function a(){return"$"}}const xe={tokenize:ke,concrete:!0},st={tokenize:_e,partial:!0};function ke(n,t,i){const e=this,a=e.events[e.events.length-1],s=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0;let o=0;return r;function r(m){return n.enter("mathFlow"),n.enter("mathFlowFence"),n.enter("mathFlowFenceSequence"),l(m)}function l(m){return m===36?(n.consume(m),o++,l):o<2?i(m):(n.exit("mathFlowFenceSequence"),V(n,u,"whitespace")(m))}function u(m){return m===null||O(m)?d(m):(n.enter("mathFlowFenceMeta"),n.enter("chunkString",{contentType:"string"}),g(m))}function g(m){return m===null||O(m)?(n.exit("chunkString"),n.exit("mathFlowFenceMeta"),d(m)):m===36?i(m):(n.consume(m),g)}function d(m){return n.exit("mathFlowFence"),e.interrupt?t(m):n.attempt(st,p,q)(m)}function p(m){return n.attempt({tokenize:X,partial:!0},q,h)(m)}function h(m){return(s?V(n,w,"linePrefix",s+1):w)(m)}function w(m){return m===null?q(m):O(m)?n.attempt(st,p,q)(m):(n.enter("mathFlowValue"),f(m))}function f(m){return m===null||O(m)?(n.exit("mathFlowValue"),w(m)):(n.consume(m),f)}function q(m){return n.exit("mathFlow"),t(m)}function X(m,ut,Y){let Z=0;return V(m,mt,"linePrefix",e.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function mt(T){return m.enter("mathFlowFence"),m.enter("mathFlowFenceSequence"),tt(T)}function tt(T){return T===36?(Z++,m.consume(T),tt):Z<o?Y(T):(m.exit("mathFlowFenceSequence"),V(m,pt,"whitespace")(T))}function pt(T){return T===null||O(T)?(m.exit("mathFlowFence"),ut(T)):Y(T)}}}function _e(n,t,i){const e=this;return a;function a(o){return o===null?t(o):(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),s)}function s(o){return e.parser.lazy[e.now().line]?i(o):t(o)}}function ye(n){let i=(n||{}).singleDollarTextMath;return i==null&&(i=!0),{tokenize:e,resolve:ve,previous:be};function e(a,s,o){let r=0,l,u;return g;function g(f){return a.enter("mathText"),a.enter("mathTextSequence"),d(f)}function d(f){return f===36?(a.consume(f),r++,d):r<2&&!i?o(f):(a.exit("mathTextSequence"),p(f))}function p(f){return f===null?o(f):f===36?(u=a.enter("mathTextSequence"),l=0,w(f)):f===32?(a.enter("space"),a.consume(f),a.exit("space"),p):O(f)?(a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),p):(a.enter("mathTextData"),h(f))}function h(f){return f===null||f===32||f===36||O(f)?(a.exit("mathTextData"),p(f)):(a.consume(f),h)}function w(f){return f===36?(a.consume(f),l++,w):l===r?(a.exit("mathTextSequence"),a.exit("mathText"),s(f)):(u.type="mathTextData",h(f))}}}function ve(n){let t=n.length-4,i=3,e,a;if((n[i][1].type==="lineEnding"||n[i][1].type==="space")&&(n[t][1].type==="lineEnding"||n[t][1].type==="space")){for(e=i;++e<t;)if(n[e][1].type==="mathTextData"){n[t][1].type="mathTextPadding",n[i][1].type="mathTextPadding",i+=2,t-=2;break}}for(e=i-1,t++;++e<=t;)a===void 0?e!==t&&n[e][1].type!=="lineEnding"&&(a=e):(e===t||n[e][1].type==="lineEnding")&&(n[a][1].type="mathTextData",e!==a+2&&(n[a][1].end=n[e-1][1].end,n.splice(a+2,e-a-2),t-=e-a-2,e=a+2),a=void 0);return n}function be(n){return n!==36||this.events[this.events.length-1][1].type==="characterEscape"}function Me(n){return{flow:{36:xe},text:{36:ye(n)}}}const Te={};function Ee(n){const t=this,i=n||Te,e=t.data(),a=e.micromarkExtensions||(e.micromarkExtensions=[]),s=e.fromMarkdownExtensions||(e.fromMarkdownExtensions=[]),o=e.toMarkdownExtensions||(e.toMarkdownExtensions=[]);a.push(Me(i)),s.push($e()),o.push(we(i))}function Fe(n){let t,i,e,a,s,o;return e=new R({props:{md:n[0],plugins:n[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(r){t=_(r,"TEXTAREA",{}),y(t).forEach(c),i=F(r),A(e.$$.fragment,r)},m(r,l){$(r,t,l),x(t,n[0]),$(r,i,l),C(e,r,l),a=!0,s||(o=D(t,"input",n[2]),s=!0)},p(r,[l]){l&1&&x(t,r[0]);const u={};l&1&&(u.md=r[0]),e.$set(u)},i(r){a||(P(e.$$.fragment,r),a=!0)},o(r){N(e.$$.fragment,r),a=!1},d(r){r&&(c(t),c(i)),z(e,r),s=!1,o()}}}function Pe(n,t,i){let e=`$$
\\int_0^\\infty x^2 dx
$$`;const a=[{remarkPlugin:[Ee],rehypePlugin:[ge]}];function s(){e=this.value,i(0,e)}return[e,a,s]}class Ne extends b{constructor(t){super(),M(this,t,Pe,Fe,v,{})}}const Se=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import 'katex/dist/katex.min.css';
	import rehypeKatex from 'rehype-katex';
	import remarkMath from 'remark-math';

	let md = '$$\\n\\\\int_0^\\\\infty x^2 dx\\n$$';
	const plugins: Plugin[] = [
		{ remarkPlugin: [remarkMath], rehypePlugin: [rehypeKatex] }
	];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function Ae(n){let t,i,e,a,s,o;return e=new R({props:{md:n[0],plugins:n[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(r){t=_(r,"TEXTAREA",{}),y(t).forEach(c),i=F(r),A(e.$$.fragment,r)},m(r,l){$(r,t,l),x(t,n[0]),$(r,i,l),C(e,r,l),a=!0,s||(o=D(t,"input",n[2]),s=!0)},p(r,[l]){l&1&&x(t,r[0]);const u={};l&1&&(u.md=r[0]),e.$set(u)},i(r){a||(P(e.$$.fragment,r),a=!0)},o(r){N(e.$$.fragment,r),a=!1},d(r){r&&(c(t),c(i)),z(e,r),s=!1,o()}}}function Ce(n,t,i){let e="<div style='color: red;'>Hello, world!</div>";const a=[{rehypePlugin:[Pt]}];function s(){e=this.value,i(0,e)}return[e,a,s]}class ze extends b{constructor(t){super(),M(this,t,Ce,Ae,v,{})}}const Re=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import rehypeRaw from 'rehype-raw';

	let md = "<div style='color: red;'>Hello, world!</div>";
	const plugins: Plugin[] = [{ rehypePlugin: [rehypeRaw] }];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function De(n){let t,i,e,a,s,o;return e=new R({props:{md:n[0],plugins:n[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(r){t=_(r,"TEXTAREA",{}),y(t).forEach(c),i=F(r),A(e.$$.fragment,r)},m(r,l){$(r,t,l),x(t,n[0]),$(r,i,l),C(e,r,l),a=!0,s||(o=D(t,"input",n[2]),s=!0)},p(r,[l]){l&1&&x(t,r[0]);const u={};l&1&&(u.md=r[0]),e.$set(u)},i(r){a||(P(e.$$.fragment,r),a=!0)},o(r){N(e.$$.fragment,r),a=!1},d(r){r&&(c(t),c(i)),z(e,r),s=!1,o()}}}function qe(n,t,i){let e=`# Skipped

## Rendered`;const a=[{renderer:{h1:null}}];function s(){e=this.value,i(0,e)}return[e,a,s]}class Oe extends b{constructor(t){super(),M(this,t,qe,De,v,{})}}const He=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';

	let md = '# Skipped\\n\\n## Rendered';
	const plugins: Plugin[] = [{ renderer: { h1: null } }];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function Ie(n){let t,i,e,a,s,o;return e=new R({props:{md:n[0],plugins:n[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(r){t=_(r,"TEXTAREA",{}),y(t).forEach(c),i=F(r),A(e.$$.fragment,r)},m(r,l){$(r,t,l),x(t,n[0]),$(r,i,l),C(e,r,l),a=!0,s||(o=D(t,"input",n[2]),s=!0)},p(r,[l]){l&1&&x(t,r[0]);const u={};l&1&&(u.md=r[0]),e.$set(u)},i(r){a||(P(e.$$.fragment,r),a=!0)},o(r){N(e.$$.fragment,r),a=!1},d(r){r&&(c(t),c(i)),z(e,r),s=!1,o()}}}function Xe(n,t,i){let e="This example is not support **strong** and *em* syntax.";const a=[{renderer:{strong:at,em:at}}];function s(){e=this.value,i(0,e)}return[e,a,s]}class Ve extends b{constructor(t){super(),M(this,t,Xe,Ie,v,{})}}const je=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { Transparent } from '$lib';
	let md = 'This example is not support **strong** and *em* syntax.';
	const plugins: Plugin[] = [
		{ renderer: { strong: Transparent, em: Transparent } }
	];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`,W={"raw-html":{raw:Re,component:ze},"code-highlight":{raw:Gt,component:Ut},"math-formula":{raw:Se,component:Ne},"skip-rendering":{raw:He,component:Oe},denylist:{raw:ae,component:re},allowlist:{raw:Ht,component:Ot},transparent:{raw:je,component:Ve},"components-map":{raw:te,component:Zt},ast:{raw:Bt,component:Kt}},Le={remarkPlugin:()=>n=>{n.children=n.children.flatMap(t=>{var s;if(t.type!=="paragraph"||t.children.length!==1)return t;const[i]=t.children;if(i===void 0||i.type!=="text")return t;const e=(s=i.value.match(/^:([a-z-]+)$/))==null?void 0:s[1];if(e===void 0)return t;const a=W[e];return a===void 0?t:[{type:"code",lang:"svelte",value:a.raw.replace(/import (.+) from '\$lib';/gm,"import $1 from 'svelte-exmarkdown';")},{type:"text",value:"",data:{hName:e}}]})},rehypePlugin:()=>n=>{var t;n.children=(t=n.children)==null?void 0:t.flatMap(i=>i.type!=="element"||W[i.tagName]===void 0?i:{type:"element",tagName:"section",properties:{className:["example-output"]},children:[{type:"element",tagName:i.tagName,children:[]}]})},renderer:Object.fromEntries(Object.entries(W).map(([n,{component:t}])=>[n,t]))};function Ke(n){let t;return{c(){t=k("div")},l(i){t=_(i,"DIV",{}),y(t).forEach(c)},m(i,e){$(i,t,e)},p:j,d(i){i&&c(t)}}}function Be(n){let t,i=K(n[0].prev.markdown)+"",e,a;return{c(){t=k("a"),e=U(i),this.h()},l(s){t=_(s,"A",{href:!0,class:!0});var o=y(t);e=G(o,i),o.forEach(c),this.h()},h(){H(t,"href",a=L+"/docs/"+n[0].prev.slug),H(t,"class","svelte-1fbyvs7")},m(s,o){$(s,t,o),B(t,e)},p(s,o){o&1&&i!==(i=K(s[0].prev.markdown)+"")&&Q(e,i),o&1&&a!==(a=L+"/docs/"+s[0].prev.slug)&&H(t,"href",a)},d(s){s&&c(t)}}}function Je(n){let t;return{c(){t=k("div")},l(i){t=_(i,"DIV",{}),y(t).forEach(c)},m(i,e){$(i,t,e)},p:j,d(i){i&&c(t)}}}function We(n){let t,i=K(n[0].next.markdown)+"",e,a;return{c(){t=k("a"),e=U(i),this.h()},l(s){t=_(s,"A",{href:!0,class:!0});var o=y(t);e=G(o,i),o.forEach(c),this.h()},h(){H(t,"href",a=L+"/docs/"+n[0].next.slug),H(t,"class","svelte-1fbyvs7")},m(s,o){$(s,t,o),B(t,e)},p(s,o){o&1&&i!==(i=K(s[0].next.markdown)+"")&&Q(e,i),o&1&&a!==(a=L+"/docs/"+s[0].next.slug)&&H(t,"href",a)},d(s){s&&c(t)}}}function Ue(n){let t,i,e,a,s;t=new R({props:{md:n[0].markdown,plugins:n[1]}});function o(p,h){return p[0].prev?Be:Ke}let r=o(n),l=r(n);function u(p,h){return p[0].next?We:Je}let g=u(n),d=g(n);return{c(){S(t.$$.fragment),i=E(),e=k("nav"),l.c(),a=E(),d.c(),this.h()},l(p){A(t.$$.fragment,p),i=F(p),e=_(p,"NAV",{class:!0});var h=y(e);l.l(h),a=F(h),d.l(h),h.forEach(c),this.h()},h(){H(e,"class","svelte-1fbyvs7")},m(p,h){C(t,p,h),$(p,i,h),$(p,e,h),l.m(e,null),B(e,a),d.m(e,null),s=!0},p(p,[h]){const w={};h&1&&(w.md=p[0].markdown),t.$set(w),r===(r=o(p))&&l?l.p(p,h):(l.d(1),l=r(p),l&&(l.c(),l.m(e,a))),g===(g=u(p))&&d?d.p(p,h):(d.d(1),d=g(p),d&&(d.c(),d.m(e,null)))},i(p){s||(P(t.$$.fragment,p),s=!0)},o(p){N(t.$$.fragment,p),s=!1},d(p){p&&(c(i),c(e)),z(t,p),l.d(),d.d()}}}function Ge(n,t,i){let{data:e}=t;const a=[Le,Nt(),St,At];return n.$$set=s=>{"data"in s&&i(0,e=s.data)},[e,a]}class ln extends b{constructor(t){super(),M(this,t,Ge,Ue,v,{data:0})}}export{ln as component,sn as universal};
