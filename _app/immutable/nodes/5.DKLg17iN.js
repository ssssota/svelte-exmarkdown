import{e as ct}from"../chunks/index.g5YcAAdQ.js";import{s as v,a as ft,u as dt,g as ht,b as gt,d as et,e as nt,n as j,c as $t}from"../chunks/scheduler.Cok7TgDu.js";import{S as b,i as M,q as P,r as N,e as k,s as E,k as S,c as _,a as y,d as c,f as F,l as A,g as $,n as x,o as C,p as D,u as z,t as U,b as G,h as B,j as Q,m as H}from"../chunks/index.Df_VL2Gl.js";import{b as L}from"../chunks/paths.DDV1buk_.js";import{M as R,d as wt,e as xt,f as kt,v as _t,S as yt,h as V,m as O}from"../chunks/Markdown.DHEKdJ3w.js";import{av as vt,aw as bt,ax as J,ay as Mt,az as Tt,aA as Et,aB as I,aC as Ft,ab as Pt,a8 as Nt,aa as St,a9 as At}from"../chunks/index.C9XsxLjF.js";import rt from"../chunks/katex.rPiVaalG.js";import{g as K}from"../chunks/utils.P31UkBtv.js";function Ct(r){let t;const i=r[1].default,e=ft(i,r,r[0],null);return{c(){e&&e.c()},l(a){e&&e.l(a)},m(a,s){e&&e.m(a,s),t=!0},p(a,[s]){e&&e.p&&(!t||s&1)&&dt(e,i,a,a[0],t?gt(i,a[0],s,null):ht(a[0]),null)},i(a){t||(P(e,a),t=!0)},o(a){N(e,a),t=!1},d(a){e&&e.d(a)}}}function zt(r,t,i){let{$$slots:e={},$$scope:a}=t;return r.$$set=s=>{i(2,t=et(et({},t),nt(s))),"$$scope"in s&&i(0,a=s.$$scope)},t=nt(t),[a,e]}class at extends b{constructor(t){super(),M(this,t,zt,Ct,v,{})}}const Rt=async({parent:r,params:t})=>{var s;const i=await r(),e=i.docs.findIndex(l=>l.slug===t.slug),a=(s=i.docs[e])==null?void 0:s.markdown;return a||ct(404),{markdown:a,prev:i.docs[e-1],next:i.docs[e+1]}},an=Object.freeze(Object.defineProperty({__proto__:null,load:Rt},Symbol.toStringTag,{value:"Module"}));function Dt(r){let t,i,e,a,s,l;return e=new R({props:{md:r[0],plugins:r[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(n){t=_(n,"TEXTAREA",{}),y(t).forEach(c),i=F(n),A(e.$$.fragment,n)},m(n,o){$(n,t,o),x(t,r[0]),$(n,i,o),C(e,n,o),a=!0,s||(l=D(t,"input",r[2]),s=!0)},p(n,[o]){o&1&&x(t,n[0]);const u={};o&1&&(u.md=n[0]),e.$set(u)},i(n){a||(P(e.$$.fragment,n),a=!0)},o(n){N(e.$$.fragment,n),a=!1},d(n){n&&(c(t),c(i)),z(e,n),s=!1,l()}}}function qt(r,t,i){let e=`# Skipped

Only paragraph, *em*, **strong** and [link](https://example.com) are rendered`;const a=[wt(["p","em","strong","a"])];function s(){e=this.value,i(0,e)}return[e,a,s]}class Ot extends b{constructor(t){super(),M(this,t,qt,Dt,v,{})}}const Ht=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { allowlist } from '$lib';

	let md =
		'# Skipped\\n\\nOnly paragraph, *em*, **strong** and [link](https://example.com) are rendered';
	const plugins: Plugin[] = [allowlist(['p', 'em', 'strong', 'a'])];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function It(r){let t,i=JSON.stringify(r[0],null,2)+"",e;return{c(){t=k("pre"),e=U(i)},l(a){t=_(a,"PRE",{});var s=y(t);e=G(s,i),s.forEach(c)},m(a,s){$(a,t,s),B(t,e)},p(a,[s]){s&1&&i!==(i=JSON.stringify(a[0],null,2)+"")&&Q(e,i)},i:j,o:j,d(a){a&&c(t)}}}function Xt(r,t,i){let e;const a=xt();return $t(r,a,s=>i(0,e=s)),[e,a]}class Vt extends b{constructor(t){super(),M(this,t,Xt,It,v,{})}}function jt(r){let t,i,e,a,s,l;return e=new R({props:{md:r[0],plugins:r[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(n){t=_(n,"TEXTAREA",{}),y(t).forEach(c),i=F(n),A(e.$$.fragment,n)},m(n,o){$(n,t,o),x(t,r[0]),$(n,i,o),C(e,n,o),a=!0,s||(l=D(t,"input",r[2]),s=!0)},p(n,[o]){o&1&&x(t,n[0]);const u={};o&1&&(u.md=n[0]),e.$set(u)},i(n){a||(P(e.$$.fragment,n),a=!0)},o(n){N(e.$$.fragment,n),a=!1},d(n){n&&(c(t),c(i)),z(e,n),s=!1,l()}}}function Lt(r,t,i){let e="# Hello World";const a=[{renderer:{h1:Vt}}];function s(){e=this.value,i(0,e)}return[e,a,s]}class Kt extends b{constructor(t){super(),M(this,t,Lt,jt,v,{})}}const Bt=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import DumpAst from './DumpAst.svelte';

	let md = '# Hello World';
	const plugins: Plugin[] = [{ renderer: { h1: DumpAst } }];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function Jt(r){let t,i,e,a,s,l;return e=new R({props:{md:r[0],plugins:r[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(n){t=_(n,"TEXTAREA",{}),y(t).forEach(c),i=F(n),A(e.$$.fragment,n)},m(n,o){$(n,t,o),x(t,r[0]),$(n,i,o),C(e,n,o),a=!0,s||(l=D(t,"input",r[2]),s=!0)},p(n,[o]){o&1&&x(t,n[0]);const u={};o&1&&(u.md=n[0]),e.$set(u)},i(n){a||(P(e.$$.fragment,n),a=!0)},o(n){N(e.$$.fragment,n),a=!1},d(n){n&&(c(t),c(i)),z(e,n),s=!1,l()}}}function Wt(r,t,i){let e="```typescript\nconsole.log('Hello, world!');\n```";const a=[{rehypePlugin:[vt,{ignoreMissing:!0,languages:{typescript:bt}}]}];function s(){e=this.value,i(0,e)}return[e,a,s]}class Ut extends b{constructor(t){super(),M(this,t,Wt,Jt,v,{})}}const Gt=`<script lang="ts">
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
`;function Qt(r){let t,i,e,a,s,l;return e=new R({props:{md:r[0],plugins:r[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(n){t=_(n,"TEXTAREA",{}),y(t).forEach(c),i=F(n),A(e.$$.fragment,n)},m(n,o){$(n,t,o),x(t,r[0]),$(n,i,o),C(e,n,o),a=!0,s||(l=D(t,"input",r[2]),s=!0)},p(n,[o]){o&1&&x(t,n[0]);const u={};o&1&&(u.md=n[0]),e.$set(u)},i(n){a||(P(e.$$.fragment,n),a=!0)},o(n){N(e.$$.fragment,n),a=!1},d(n){n&&(c(t),c(i)),z(e,n),s=!1,l()}}}function Yt(r,t,i){let e=`# h1 but rendered as h2

## Same size with above`;const a=[{renderer:{h1:"h2"}}];function s(){e=this.value,i(0,e)}return[e,a,s]}class Zt extends b{constructor(t){super(),M(this,t,Yt,Qt,v,{})}}const te=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';

	let md = '# h1 but rendered as h2\\n\\n## Same size with above';
	const plugins: Plugin[] = [{ renderer: { h1: 'h2' } }];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function ee(r){let t,i,e,a,s,l;return e=new R({props:{md:r[0],plugins:r[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(n){t=_(n,"TEXTAREA",{}),y(t).forEach(c),i=F(n),A(e.$$.fragment,n)},m(n,o){$(n,t,o),x(t,r[0]),$(n,i,o),C(e,n,o),a=!0,s||(l=D(t,"input",r[2]),s=!0)},p(n,[o]){o&1&&x(t,n[0]);const u={};o&1&&(u.md=n[0]),e.$set(u)},i(n){a||(P(e.$$.fragment,n),a=!0)},o(n){N(e.$$.fragment,n),a=!1},d(n){n&&(c(t),c(i)),z(e,n),s=!1,l()}}}function ne(r,t,i){let e=`# Skipped

## Rendered`;const a=[kt(["h1"])];function s(){e=this.value,i(0,e)}return[e,a,s]}class re extends b{constructor(t){super(),M(this,t,ne,ee,v,{})}}const ae=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { denylist } from '$lib';

	let md = '# Skipped\\n\\n## Rendered';
	const plugins: Plugin[] = [denylist(['h1'])];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function ie(r,t){return ot(r,{})||{type:"root",children:[]}}function ot(r,t){const i=se(r,t);return i&&t.afterTransform&&t.afterTransform(r,i),i}function se(r,t){switch(r.nodeType){case 1:return me(r,t);case 3:return le(r);case 8:return ue(r);case 9:return it(r,t);case 10:return oe();case 11:return it(r,t);default:return}}function it(r,t){return{type:"root",children:lt(r,t)}}function oe(){return{type:"doctype"}}function le(r){return{type:"text",value:r.nodeValue||""}}function ue(r){return{type:"comment",value:r.nodeValue||""}}function me(r,t){const i=r.namespaceURI,e=i===J.svg?Mt:Tt,a=i===J.html?r.tagName.toLowerCase():r.tagName,s=i===J.html&&a==="template"?r.content:r,l=r.getAttributeNames(),n={};let o=-1;for(;++o<l.length;)n[l[o]]=r.getAttribute(l[o])||"";return e(a,n,lt(s,t))}function lt(r,t){const i=r.childNodes,e=[];let a=-1;for(;++a<i.length;){const s=ot(i[a],t);s!==void 0&&e.push(s)}return e}new DOMParser;function pe(r,t){const i=ce(r);return ie(i)}function ce(r){const t=document.createElement("template");return t.innerHTML=r,t.content}const fe={},de=[];function he(r){const t=r||fe;return function(i,e){_t(i,"element",function(a,s){const l=Array.isArray(a.properties.className)?a.properties.className:de,n=l.includes("language-math"),o=l.includes("math-display"),u=l.includes("math-inline");let g=o;if(!n&&!o&&!u)return;let d=s[s.length-1],p=a;if(a.tagName==="code"&&n&&d&&d.type==="element"&&d.tagName==="pre"&&(p=d,d=s[s.length-2],g=!0),!d)return;const h=Et(p,{whitespace:"pre"});let w;try{w=rt.renderToString(h,{...t,displayMode:g,throwOnError:!0})}catch(q){const X=q,m=X.name.toLowerCase();e.message("Could not render math with KaTeX",{ancestors:[...s,a],cause:X,place:a.position,ruleId:m,source:"rehype-katex"}),m==="parseerror"?w=rt.renderToString(h,{...t,displayMode:g,strict:"ignore",throwOnError:!1}):w=[{type:"element",tagName:"span",properties:{className:["katex-error"],style:"color:"+(t.errorColor||"#cc0000"),title:String(q)},children:[{type:"text",value:h}]}]}typeof w=="string"&&(w=pe(w).children);const f=d.children.indexOf(p);return d.children.splice(f,1,...w),yt})}}function ge(){return{enter:{mathFlow:r,mathFlowFenceMeta:t,mathText:s},exit:{mathFlow:a,mathFlowFence:e,mathFlowFenceMeta:i,mathFlowValue:n,mathText:l,mathTextData:n}};function r(o){const u={type:"element",tagName:"code",properties:{className:["language-math","math-display"]},children:[]};this.enter({type:"math",meta:null,value:"",data:{hName:"pre",hChildren:[u]}},o)}function t(){this.buffer()}function i(){const o=this.resume(),u=this.stack[this.stack.length-1];I(u.type==="math"),u.meta=o}function e(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function a(o){const u=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),g=this.stack[this.stack.length-1];I(g.type==="math"),this.exit(o),g.value=u;const d=g.data.hChildren[0];I(d.type==="element"),I(d.tagName==="code"),d.children.push({type:"text",value:u}),this.data.mathFlowInside=void 0}function s(o){this.enter({type:"inlineMath",value:"",data:{hName:"code",hProperties:{className:["language-math","math-inline"]},hChildren:[]}},o),this.buffer()}function l(o){const u=this.resume(),g=this.stack[this.stack.length-1];I(g.type==="inlineMath"),this.exit(o),g.value=u,g.data.hChildren.push({type:"text",value:u})}function n(o){this.config.enter.data.call(this,o),this.config.exit.data.call(this,o)}}function $e(r){let t=(r||{}).singleDollarTextMath;return t==null&&(t=!0),e.peek=a,{unsafe:[{character:"\r",inConstruct:"mathFlowMeta"},{character:`
`,inConstruct:"mathFlowMeta"},{character:"$",after:t?void 0:"\\$",inConstruct:"phrasing"},{character:"$",inConstruct:"mathFlowMeta"},{atBreak:!0,character:"$",after:"\\$"}],handlers:{math:i,inlineMath:e}};function i(s,l,n,o){const u=s.value||"",g=n.createTracker(o),d="$".repeat(Math.max(Ft(u,"$")+1,2)),p=n.enter("mathFlow");let h=g.move(d);if(s.meta){const w=n.enter("mathFlowMeta");h+=g.move(n.safe(s.meta,{after:`
`,before:h,encode:["$"],...g.current()})),w()}return h+=g.move(`
`),u&&(h+=g.move(u+`
`)),h+=g.move(d),p(),h}function e(s,l,n){let o=s.value||"",u=1;for(t||u++;new RegExp("(^|[^$])"+"\\$".repeat(u)+"([^$]|$)").test(o);)u++;const g="$".repeat(u);/[^ \r\n]/.test(o)&&(/^[ \r\n]/.test(o)&&/[ \r\n]$/.test(o)||/^\$|\$$/.test(o))&&(o=" "+o+" ");let d=-1;for(;++d<n.unsafe.length;){const p=n.unsafe[d];if(!p.atBreak)continue;const h=n.compilePattern(p);let w;for(;w=h.exec(o);){let f=w.index;o.codePointAt(f)===10&&o.codePointAt(f-1)===13&&f--,o=o.slice(0,f)+" "+o.slice(w.index+1)}}return g+o+g}function a(){return"$"}}const we={tokenize:xe,concrete:!0},st={tokenize:ke,partial:!0};function xe(r,t,i){const e=this,a=e.events[e.events.length-1],s=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0;let l=0;return n;function n(m){return r.enter("mathFlow"),r.enter("mathFlowFence"),r.enter("mathFlowFenceSequence"),o(m)}function o(m){return m===36?(r.consume(m),l++,o):l<2?i(m):(r.exit("mathFlowFenceSequence"),V(r,u,"whitespace")(m))}function u(m){return m===null||O(m)?d(m):(r.enter("mathFlowFenceMeta"),r.enter("chunkString",{contentType:"string"}),g(m))}function g(m){return m===null||O(m)?(r.exit("chunkString"),r.exit("mathFlowFenceMeta"),d(m)):m===36?i(m):(r.consume(m),g)}function d(m){return r.exit("mathFlowFence"),e.interrupt?t(m):r.attempt(st,p,q)(m)}function p(m){return r.attempt({tokenize:X,partial:!0},q,h)(m)}function h(m){return(s?V(r,w,"linePrefix",s+1):w)(m)}function w(m){return m===null?q(m):O(m)?r.attempt(st,p,q)(m):(r.enter("mathFlowValue"),f(m))}function f(m){return m===null||O(m)?(r.exit("mathFlowValue"),w(m)):(r.consume(m),f)}function q(m){return r.exit("mathFlow"),t(m)}function X(m,ut,Y){let Z=0;return V(m,mt,"linePrefix",e.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function mt(T){return m.enter("mathFlowFence"),m.enter("mathFlowFenceSequence"),tt(T)}function tt(T){return T===36?(Z++,m.consume(T),tt):Z<l?Y(T):(m.exit("mathFlowFenceSequence"),V(m,pt,"whitespace")(T))}function pt(T){return T===null||O(T)?(m.exit("mathFlowFence"),ut(T)):Y(T)}}}function ke(r,t,i){const e=this;return a;function a(l){return l===null?t(l):(r.enter("lineEnding"),r.consume(l),r.exit("lineEnding"),s)}function s(l){return e.parser.lazy[e.now().line]?i(l):t(l)}}function _e(r){let i=(r||{}).singleDollarTextMath;return i==null&&(i=!0),{tokenize:e,resolve:ye,previous:ve};function e(a,s,l){let n=0,o,u;return g;function g(f){return a.enter("mathText"),a.enter("mathTextSequence"),d(f)}function d(f){return f===36?(a.consume(f),n++,d):n<2&&!i?l(f):(a.exit("mathTextSequence"),p(f))}function p(f){return f===null?l(f):f===36?(u=a.enter("mathTextSequence"),o=0,w(f)):f===32?(a.enter("space"),a.consume(f),a.exit("space"),p):O(f)?(a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),p):(a.enter("mathTextData"),h(f))}function h(f){return f===null||f===32||f===36||O(f)?(a.exit("mathTextData"),p(f)):(a.consume(f),h)}function w(f){return f===36?(a.consume(f),o++,w):o===n?(a.exit("mathTextSequence"),a.exit("mathText"),s(f)):(u.type="mathTextData",h(f))}}}function ye(r){let t=r.length-4,i=3,e,a;if((r[i][1].type==="lineEnding"||r[i][1].type==="space")&&(r[t][1].type==="lineEnding"||r[t][1].type==="space")){for(e=i;++e<t;)if(r[e][1].type==="mathTextData"){r[t][1].type="mathTextPadding",r[i][1].type="mathTextPadding",i+=2,t-=2;break}}for(e=i-1,t++;++e<=t;)a===void 0?e!==t&&r[e][1].type!=="lineEnding"&&(a=e):(e===t||r[e][1].type==="lineEnding")&&(r[a][1].type="mathTextData",e!==a+2&&(r[a][1].end=r[e-1][1].end,r.splice(a+2,e-a-2),t-=e-a-2,e=a+2),a=void 0);return r}function ve(r){return r!==36||this.events[this.events.length-1][1].type==="characterEscape"}function be(r){return{flow:{36:we},text:{36:_e(r)}}}const Me={};function Te(r){const t=this,i=r||Me,e=t.data(),a=e.micromarkExtensions||(e.micromarkExtensions=[]),s=e.fromMarkdownExtensions||(e.fromMarkdownExtensions=[]),l=e.toMarkdownExtensions||(e.toMarkdownExtensions=[]);a.push(be(i)),s.push(ge()),l.push($e(i))}function Ee(r){let t,i,e,a,s,l;return e=new R({props:{md:r[0],plugins:r[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(n){t=_(n,"TEXTAREA",{}),y(t).forEach(c),i=F(n),A(e.$$.fragment,n)},m(n,o){$(n,t,o),x(t,r[0]),$(n,i,o),C(e,n,o),a=!0,s||(l=D(t,"input",r[2]),s=!0)},p(n,[o]){o&1&&x(t,n[0]);const u={};o&1&&(u.md=n[0]),e.$set(u)},i(n){a||(P(e.$$.fragment,n),a=!0)},o(n){N(e.$$.fragment,n),a=!1},d(n){n&&(c(t),c(i)),z(e,n),s=!1,l()}}}function Fe(r,t,i){let e=`$$
\\int_0^\\infty x^2 dx
$$`;const a=[{remarkPlugin:[Te],rehypePlugin:[he]}];function s(){e=this.value,i(0,e)}return[e,a,s]}class Pe extends b{constructor(t){super(),M(this,t,Fe,Ee,v,{})}}const Ne=`<script lang="ts">
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
`;function Se(r){let t,i,e,a,s,l;return e=new R({props:{md:r[0],plugins:r[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(n){t=_(n,"TEXTAREA",{}),y(t).forEach(c),i=F(n),A(e.$$.fragment,n)},m(n,o){$(n,t,o),x(t,r[0]),$(n,i,o),C(e,n,o),a=!0,s||(l=D(t,"input",r[2]),s=!0)},p(n,[o]){o&1&&x(t,n[0]);const u={};o&1&&(u.md=n[0]),e.$set(u)},i(n){a||(P(e.$$.fragment,n),a=!0)},o(n){N(e.$$.fragment,n),a=!1},d(n){n&&(c(t),c(i)),z(e,n),s=!1,l()}}}function Ae(r,t,i){let e="<div style='color: red;'>Hello, world!</div>";const a=[{rehypePlugin:[Pt]}];function s(){e=this.value,i(0,e)}return[e,a,s]}class Ce extends b{constructor(t){super(),M(this,t,Ae,Se,v,{})}}const ze=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import rehypeRaw from 'rehype-raw';

	let md = "<div style='color: red;'>Hello, world!</div>";
	const plugins: Plugin[] = [{ rehypePlugin: [rehypeRaw] }];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function Re(r){let t,i,e,a,s,l;return e=new R({props:{md:r[0],plugins:r[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(n){t=_(n,"TEXTAREA",{}),y(t).forEach(c),i=F(n),A(e.$$.fragment,n)},m(n,o){$(n,t,o),x(t,r[0]),$(n,i,o),C(e,n,o),a=!0,s||(l=D(t,"input",r[2]),s=!0)},p(n,[o]){o&1&&x(t,n[0]);const u={};o&1&&(u.md=n[0]),e.$set(u)},i(n){a||(P(e.$$.fragment,n),a=!0)},o(n){N(e.$$.fragment,n),a=!1},d(n){n&&(c(t),c(i)),z(e,n),s=!1,l()}}}function De(r,t,i){let e=`# Skipped

## Rendered`;const a=[{renderer:{h1:null}}];function s(){e=this.value,i(0,e)}return[e,a,s]}class qe extends b{constructor(t){super(),M(this,t,De,Re,v,{})}}const Oe=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';

	let md = '# Skipped\\n\\n## Rendered';
	const plugins: Plugin[] = [{ renderer: { h1: null } }];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`;function He(r){let t,i,e,a,s,l;return e=new R({props:{md:r[0],plugins:r[1]}}),{c(){t=k("textarea"),i=E(),S(e.$$.fragment)},l(n){t=_(n,"TEXTAREA",{}),y(t).forEach(c),i=F(n),A(e.$$.fragment,n)},m(n,o){$(n,t,o),x(t,r[0]),$(n,i,o),C(e,n,o),a=!0,s||(l=D(t,"input",r[2]),s=!0)},p(n,[o]){o&1&&x(t,n[0]);const u={};o&1&&(u.md=n[0]),e.$set(u)},i(n){a||(P(e.$$.fragment,n),a=!0)},o(n){N(e.$$.fragment,n),a=!1},d(n){n&&(c(t),c(i)),z(e,n),s=!1,l()}}}function Ie(r,t,i){let e="This example is not support **strong** and *em* syntax.";const a=[{renderer:{strong:at,em:at}}];function s(){e=this.value,i(0,e)}return[e,a,s]}class Xe extends b{constructor(t){super(),M(this,t,Ie,He,v,{})}}const Ve=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { Transparent } from '$lib';
	let md = 'This example is not support **strong** and *em* syntax.';
	const plugins: Plugin[] = [
		{ renderer: { strong: Transparent, em: Transparent } }
	];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
`,W={"raw-html":{raw:ze,component:Ce},"code-highlight":{raw:Gt,component:Ut},"math-formula":{raw:Ne,component:Pe},"skip-rendering":{raw:Oe,component:qe},denylist:{raw:ae,component:re},allowlist:{raw:Ht,component:Ot},transparent:{raw:Ve,component:Xe},"components-map":{raw:te,component:Zt},ast:{raw:Bt,component:Kt}},je={remarkPlugin:()=>r=>{r.children=r.children.flatMap(t=>{var s;if(t.type!=="paragraph"||t.children.length!==1)return t;const[i]=t.children;if(i===void 0||i.type!=="text")return t;const e=(s=i.value.match(/^:([a-z-]+)$/))==null?void 0:s[1];if(e===void 0)return t;const a=W[e];return a===void 0?t:[{type:"code",lang:"svelte",value:a.raw.replace(/import (.+) from '\$lib';/gm,"import $1 from 'svelte-exmarkdown';")},{type:"text",value:"",data:{hName:e}}]})},rehypePlugin:()=>r=>{var t;r.children=(t=r.children)==null?void 0:t.flatMap(i=>i.type!=="element"||W[i.tagName]===void 0?i:{type:"element",tagName:"section",properties:{className:["example-output"]},children:[{type:"element",tagName:i.tagName,children:[]}]})},renderer:Object.fromEntries(Object.entries(W).map(([r,{component:t}])=>[r,t]))};function Le(r){let t;return{c(){t=k("div")},l(i){t=_(i,"DIV",{}),y(t).forEach(c)},m(i,e){$(i,t,e)},p:j,d(i){i&&c(t)}}}function Ke(r){let t,i=K(r[0].prev.markdown)+"",e,a;return{c(){t=k("a"),e=U(i),this.h()},l(s){t=_(s,"A",{href:!0,class:!0});var l=y(t);e=G(l,i),l.forEach(c),this.h()},h(){H(t,"href",a=L+"/docs/"+r[0].prev.slug),H(t,"class","svelte-1fbyvs7")},m(s,l){$(s,t,l),B(t,e)},p(s,l){l&1&&i!==(i=K(s[0].prev.markdown)+"")&&Q(e,i),l&1&&a!==(a=L+"/docs/"+s[0].prev.slug)&&H(t,"href",a)},d(s){s&&c(t)}}}function Be(r){let t;return{c(){t=k("div")},l(i){t=_(i,"DIV",{}),y(t).forEach(c)},m(i,e){$(i,t,e)},p:j,d(i){i&&c(t)}}}function Je(r){let t,i=K(r[0].next.markdown)+"",e,a;return{c(){t=k("a"),e=U(i),this.h()},l(s){t=_(s,"A",{href:!0,class:!0});var l=y(t);e=G(l,i),l.forEach(c),this.h()},h(){H(t,"href",a=L+"/docs/"+r[0].next.slug),H(t,"class","svelte-1fbyvs7")},m(s,l){$(s,t,l),B(t,e)},p(s,l){l&1&&i!==(i=K(s[0].next.markdown)+"")&&Q(e,i),l&1&&a!==(a=L+"/docs/"+s[0].next.slug)&&H(t,"href",a)},d(s){s&&c(t)}}}function We(r){let t,i,e,a,s;t=new R({props:{md:r[0].markdown,plugins:r[1]}});function l(p,h){return p[0].prev?Ke:Le}let n=l(r),o=n(r);function u(p,h){return p[0].next?Je:Be}let g=u(r),d=g(r);return{c(){S(t.$$.fragment),i=E(),e=k("nav"),o.c(),a=E(),d.c(),this.h()},l(p){A(t.$$.fragment,p),i=F(p),e=_(p,"NAV",{class:!0});var h=y(e);o.l(h),a=F(h),d.l(h),h.forEach(c),this.h()},h(){H(e,"class","svelte-1fbyvs7")},m(p,h){C(t,p,h),$(p,i,h),$(p,e,h),o.m(e,null),B(e,a),d.m(e,null),s=!0},p(p,[h]){const w={};h&1&&(w.md=p[0].markdown),t.$set(w),n===(n=l(p))&&o?o.p(p,h):(o.d(1),o=n(p),o&&(o.c(),o.m(e,a))),g===(g=u(p))&&d?d.p(p,h):(d.d(1),d=g(p),d&&(d.c(),d.m(e,null)))},i(p){s||(P(t.$$.fragment,p),s=!0)},o(p){N(t.$$.fragment,p),s=!1},d(p){p&&(c(i),c(e)),z(t,p),o.d(),d.d()}}}function Ue(r,t,i){let{data:e}=t;const a=[je,Nt(),St,At];return r.$$set=s=>{"data"in s&&i(0,e=s.data)},[e,a]}class sn extends b{constructor(t){super(),M(this,t,Ue,We,v,{data:0})}}export{sn as component,an as universal};
