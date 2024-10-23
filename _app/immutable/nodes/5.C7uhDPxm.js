import{e as rt}from"../chunks/index.g5YcAAdQ.js";import"../chunks/disclose-version.Bg9kRutz.js";import{p as E,f as b,q as at,a as z,j as x,n as $,o as N,s as k,c as A,t as C,r as O,A as it}from"../chunks/runtime.DFhqK77Z.js";import{s as R}from"../chunks/render.Csq-lVGY.js";import{i as V}from"../chunks/svelte-component.CTLjTiV2.js";import{c as ot,a as w,t as v}from"../chunks/template.DikEpHXd.js";import{a as st,r as F,s as B}from"../chunks/attributes.BsRq9-LA.js";import{b as W}from"../chunks/paths.QpafhVA_.js";import{e as lt,M,b as T,f as ut,h as mt,v as ct,S as pt,i as q,m as S}from"../chunks/Markdown.-TBoBUVH.js";import{b8 as dt,b9 as ht,ba as H,bb as gt,bc as xt,bd as ft,be as _,bf as wt,aG as vt,aF as yt,aI as kt,aH as bt}from"../chunks/index.PHt_qCN3.js";import{i as Mt}from"../chunks/lifecycle.BP6mlfOt.js";import{s as $t,a as Ft}from"../chunks/store.CQVVOzYq.js";import G from"../chunks/katex.CvgdMzdh.js";import{g as J}from"../chunks/utils.P31UkBtv.js";function U(t,e){E(e,!0);var r=ot(),a=b(r);st(a,()=>e.children??at),w(t,r),z()}const Tt=async({parent:t,params:e})=>{var i;const r=await t(),a=r.docs.findIndex(o=>o.slug===e.slug),n=(i=r.docs[a])==null?void 0:i.markdown;return n||rt(404),{markdown:n,prev:r.docs[a-1],next:r.docs[a+1]}},Ve=Object.freeze(Object.defineProperty({__proto__:null,load:Tt},Symbol.toStringTag,{value:"Module"}));var Pt=v("<textarea></textarea> <!>",1);function Nt(t,e){E(e,!0);let r=N(`# Skipped

Only paragraph, *em*, **strong** and [link](https://example.com) are rendered`);const a=[lt(["p","em","strong","a"])];var n=Pt(),i=b(n);F(i);var o=k(i,2);M(o,{get md(){return x(r)},plugins:a}),T(i,()=>x(r),p=>$(r,p)),w(t,n),z()}const St=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { allowlist } from '$lib';

	let md = $state(
		'# Skipped\\n\\nOnly paragraph, *em*, **strong** and [link](https://example.com) are rendered'
	);
	const plugins: Plugin[] = [allowlist(['p', 'em', 'strong', 'a'])];
<\/script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
`;var _t=v("<pre> </pre>");function Ct(t,e){E(e,!1);const r=$t(),a=()=>Ft(n,"$astContext",r),n=ut();Mt();var i=_t(),o=A(i);C(()=>R(o,JSON.stringify(a(),null,2))),O(i),w(t,i),z()}var Et=v("<textarea></textarea> <!>",1);function zt(t){let e=N("# Hello World");const r=[{renderer:{h1:Ct}}];var a=Et(),n=b(a);F(n);var i=k(n,2);M(i,{get md(){return x(e)},plugins:r}),T(n,()=>x(e),o=>$(e,o)),w(t,a)}const Dt=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import DumpAst from './DumpAst.svelte';

	let md = $state('# Hello World');
	const plugins: Plugin[] = [{ renderer: { h1: DumpAst } }];
<\/script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
`;var qt=v("<textarea></textarea> <!>",1);function At(t){let e=N("```typescript\nconsole.log('Hello, world!');\n```");const r=[{rehypePlugin:[dt,{ignoreMissing:!0,languages:{typescript:ht}}]}];var a=qt(),n=b(a);F(n);var i=k(n,2);M(i,{get md(){return x(e)},plugins:r}),T(n,()=>x(e),o=>$(e,o)),w(t,a)}const Ot=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import typescript from 'highlight.js/lib/languages/typescript';
	import 'highlight.js/styles/github.css';
	import rehypeHighlight from 'rehype-highlight';

	let md = $state("\`\`\`typescript\\nconsole.log('Hello, world!');\\n\`\`\`");
	const plugins: Plugin[] = [
		{
			rehypePlugin: [
				rehypeHighlight,
				{ ignoreMissing: true, languages: { typescript } }
			]
		}
	];
<\/script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
`;var Ht=v("<textarea></textarea> <!>",1);function It(t){let e=N(`# h1 but rendered as h2

## Same size with above`);const r=[{renderer:{h1:"h2"}}];var a=Ht(),n=b(a);F(n);var i=k(n,2);M(i,{get md(){return x(e)},plugins:r}),T(n,()=>x(e),o=>$(e,o)),w(t,a)}const Rt=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';

	let md = $state('# h1 but rendered as h2\\n\\n## Same size with above');
	const plugins: Plugin[] = [{ renderer: { h1: 'h2' } }];
<\/script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
`;var jt=v("<textarea></textarea> <!>",1);function Lt(t,e){E(e,!0);let r=N(`# Skipped

## Rendered`);const a=[mt(["h1"])];var n=jt(),i=b(n);F(i);var o=k(i,2);M(o,{get md(){return x(r)},plugins:a}),T(i,()=>x(r),p=>$(r,p)),w(t,n),z()}const Kt=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { denylist } from '$lib';

	let md = $state('# Skipped\\n\\n## Rendered');
	const plugins: Plugin[] = [denylist(['h1'])];
<\/script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
`;function Vt(t,e){return Y(t,{})||{type:"root",children:[]}}function Y(t,e){const r=Bt(t,e);return r&&e.afterTransform&&e.afterTransform(t,r),r}function Bt(t,e){switch(t.nodeType){case 1:return Ut(t,e);case 3:return Gt(t);case 8:return Jt(t);case 9:return X(t,e);case 10:return Wt();case 11:return X(t,e);default:return}}function X(t,e){return{type:"root",children:Z(t,e)}}function Wt(){return{type:"doctype"}}function Gt(t){return{type:"text",value:t.nodeValue||""}}function Jt(t){return{type:"comment",value:t.nodeValue||""}}function Ut(t,e){const r=t.namespaceURI,a=r===H.svg?gt:xt,n=r===H.html?t.tagName.toLowerCase():t.tagName,i=r===H.html&&n==="template"?t.content:t,o=t.getAttributeNames(),p={};let s=-1;for(;++s<o.length;)p[o[s]]=t.getAttribute(o[s])||"";return a(n,p,Z(i,e))}function Z(t,e){const r=t.childNodes,a=[];let n=-1;for(;++n<r.length;){const i=Y(r[n],e);i!==void 0&&a.push(i)}return a}new DOMParser;function Xt(t,e){const r=Qt(t);return Vt(r)}function Qt(t){const e=document.createElement("template");return e.innerHTML=t,e.content}const Yt={},Zt=[];function te(t){const e=t||Yt;return function(r,a){ct(r,"element",function(n,i){const o=Array.isArray(n.properties.className)?n.properties.className:Zt,p=o.includes("language-math"),s=o.includes("math-display"),u=o.includes("math-inline");let c=s;if(!p&&!s&&!u)return;let d=i[i.length-1],f=n;if(n.tagName==="code"&&p&&d&&d.type==="element"&&d.tagName==="pre"&&(f=d,d=i[i.length-2],c=!0),!d)return;const g=ft(f,{whitespace:"pre"});let h;try{h=G.renderToString(g,{...e,displayMode:c,throwOnError:!0})}catch(P){const D=P,l=D.name.toLowerCase();a.message("Could not render math with KaTeX",{ancestors:[...i,n],cause:D,place:n.position,ruleId:l,source:"rehype-katex"});try{h=G.renderToString(g,{...e,displayMode:c,strict:"ignore",throwOnError:!1})}catch{h=[{type:"element",tagName:"span",properties:{className:["katex-error"],style:"color:"+(e.errorColor||"#cc0000"),title:String(P)},children:[{type:"text",value:g}]}]}}typeof h=="string"&&(h=Xt(h).children);const m=d.children.indexOf(f);return d.children.splice(m,1,...h),pt})}}function ee(){return{enter:{mathFlow:t,mathFlowFenceMeta:e,mathText:i},exit:{mathFlow:n,mathFlowFence:a,mathFlowFenceMeta:r,mathFlowValue:p,mathText:o,mathTextData:p}};function t(s){const u={type:"element",tagName:"code",properties:{className:["language-math","math-display"]},children:[]};this.enter({type:"math",meta:null,value:"",data:{hName:"pre",hChildren:[u]}},s)}function e(){this.buffer()}function r(){const s=this.resume(),u=this.stack[this.stack.length-1];_(u.type==="math"),u.meta=s}function a(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function n(s){const u=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),c=this.stack[this.stack.length-1];_(c.type==="math"),this.exit(s),c.value=u;const d=c.data.hChildren[0];_(d.type==="element"),_(d.tagName==="code"),d.children.push({type:"text",value:u}),this.data.mathFlowInside=void 0}function i(s){this.enter({type:"inlineMath",value:"",data:{hName:"code",hProperties:{className:["language-math","math-inline"]},hChildren:[]}},s),this.buffer()}function o(s){const u=this.resume(),c=this.stack[this.stack.length-1];_(c.type==="inlineMath"),this.exit(s),c.value=u,c.data.hChildren.push({type:"text",value:u})}function p(s){this.config.enter.data.call(this,s),this.config.exit.data.call(this,s)}}function ne(t){let e=(t||{}).singleDollarTextMath;return e==null&&(e=!0),a.peek=n,{unsafe:[{character:"\r",inConstruct:"mathFlowMeta"},{character:`
`,inConstruct:"mathFlowMeta"},{character:"$",after:e?void 0:"\\$",inConstruct:"phrasing"},{character:"$",inConstruct:"mathFlowMeta"},{atBreak:!0,character:"$",after:"\\$"}],handlers:{math:r,inlineMath:a}};function r(i,o,p,s){const u=i.value||"",c=p.createTracker(s),d="$".repeat(Math.max(wt(u,"$")+1,2)),f=p.enter("mathFlow");let g=c.move(d);if(i.meta){const h=p.enter("mathFlowMeta");g+=c.move(p.safe(i.meta,{after:`
`,before:g,encode:["$"],...c.current()})),h()}return g+=c.move(`
`),u&&(g+=c.move(u+`
`)),g+=c.move(d),f(),g}function a(i,o,p){let s=i.value||"",u=1;for(e||u++;new RegExp("(^|[^$])"+"\\$".repeat(u)+"([^$]|$)").test(s);)u++;const c="$".repeat(u);/[^ \r\n]/.test(s)&&(/^[ \r\n]/.test(s)&&/[ \r\n]$/.test(s)||/^\$|\$$/.test(s))&&(s=" "+s+" ");let d=-1;for(;++d<p.unsafe.length;){const f=p.unsafe[d];if(!f.atBreak)continue;const g=p.compilePattern(f);let h;for(;h=g.exec(s);){let m=h.index;s.codePointAt(m)===10&&s.codePointAt(m-1)===13&&m--,s=s.slice(0,m)+" "+s.slice(h.index+1)}}return c+s+c}function n(){return"$"}}const re={tokenize:ae,concrete:!0,name:"mathFlow"},Q={tokenize:ie,partial:!0};function ae(t,e,r){const a=this,n=a.events[a.events.length-1],i=n&&n[1].type==="linePrefix"?n[2].sliceSerialize(n[1],!0).length:0;let o=0;return p;function p(l){return t.enter("mathFlow"),t.enter("mathFlowFence"),t.enter("mathFlowFenceSequence"),s(l)}function s(l){return l===36?(t.consume(l),o++,s):o<2?r(l):(t.exit("mathFlowFenceSequence"),q(t,u,"whitespace")(l))}function u(l){return l===null||S(l)?d(l):(t.enter("mathFlowFenceMeta"),t.enter("chunkString",{contentType:"string"}),c(l))}function c(l){return l===null||S(l)?(t.exit("chunkString"),t.exit("mathFlowFenceMeta"),d(l)):l===36?r(l):(t.consume(l),c)}function d(l){return t.exit("mathFlowFence"),a.interrupt?e(l):t.attempt(Q,f,P)(l)}function f(l){return t.attempt({tokenize:D,partial:!0},P,g)(l)}function g(l){return(i?q(t,h,"linePrefix",i+1):h)(l)}function h(l){return l===null?P(l):S(l)?t.attempt(Q,f,P)(l):(t.enter("mathFlowValue"),m(l))}function m(l){return l===null||S(l)?(t.exit("mathFlowValue"),h(l)):(t.consume(l),m)}function P(l){return t.exit("mathFlow"),e(l)}function D(l,tt,j){let L=0;return q(l,et,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function et(y){return l.enter("mathFlowFence"),l.enter("mathFlowFenceSequence"),K(y)}function K(y){return y===36?(L++,l.consume(y),K):L<o?j(y):(l.exit("mathFlowFenceSequence"),q(l,nt,"whitespace")(y))}function nt(y){return y===null||S(y)?(l.exit("mathFlowFence"),tt(y)):j(y)}}}function ie(t,e,r){const a=this;return n;function n(o){return o===null?e(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),i)}function i(o){return a.parser.lazy[a.now().line]?r(o):e(o)}}function oe(t){let r=(t||{}).singleDollarTextMath;return r==null&&(r=!0),{tokenize:a,resolve:se,previous:le,name:"mathText"};function a(n,i,o){let p=0,s,u;return c;function c(m){return n.enter("mathText"),n.enter("mathTextSequence"),d(m)}function d(m){return m===36?(n.consume(m),p++,d):p<2&&!r?o(m):(n.exit("mathTextSequence"),f(m))}function f(m){return m===null?o(m):m===36?(u=n.enter("mathTextSequence"),s=0,h(m)):m===32?(n.enter("space"),n.consume(m),n.exit("space"),f):S(m)?(n.enter("lineEnding"),n.consume(m),n.exit("lineEnding"),f):(n.enter("mathTextData"),g(m))}function g(m){return m===null||m===32||m===36||S(m)?(n.exit("mathTextData"),f(m)):(n.consume(m),g)}function h(m){return m===36?(n.consume(m),s++,h):s===p?(n.exit("mathTextSequence"),n.exit("mathText"),i(m)):(u.type="mathTextData",g(m))}}}function se(t){let e=t.length-4,r=3,a,n;if((t[r][1].type==="lineEnding"||t[r][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(a=r;++a<e;)if(t[a][1].type==="mathTextData"){t[e][1].type="mathTextPadding",t[r][1].type="mathTextPadding",r+=2,e-=2;break}}for(a=r-1,e++;++a<=e;)n===void 0?a!==e&&t[a][1].type!=="lineEnding"&&(n=a):(a===e||t[a][1].type==="lineEnding")&&(t[n][1].type="mathTextData",a!==n+2&&(t[n][1].end=t[a-1][1].end,t.splice(n+2,a-n-2),e-=a-n-2,a=n+2),n=void 0);return t}function le(t){return t!==36||this.events[this.events.length-1][1].type==="characterEscape"}function ue(t){return{flow:{36:re},text:{36:oe(t)}}}const me={};function ce(t){const e=this,r=t||me,a=e.data(),n=a.micromarkExtensions||(a.micromarkExtensions=[]),i=a.fromMarkdownExtensions||(a.fromMarkdownExtensions=[]),o=a.toMarkdownExtensions||(a.toMarkdownExtensions=[]);n.push(ue(r)),i.push(ee()),o.push(ne(r))}var pe=v("<textarea></textarea> <!>",1);function de(t){let e=N(`$$
\\int_0^\\infty x^2 dx
$$`);const r=[{remarkPlugin:[ce],rehypePlugin:[te]}];var a=pe(),n=b(a);F(n);var i=k(n,2);M(i,{get md(){return x(e)},plugins:r}),T(n,()=>x(e),o=>$(e,o)),w(t,a)}const he=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import 'katex/dist/katex.min.css';
	import rehypeKatex from 'rehype-katex';
	import remarkMath from 'remark-math';

	let md = $state('$$\\n\\\\int_0^\\\\infty x^2 dx\\n$$');
	const plugins: Plugin[] = [
		{ remarkPlugin: [remarkMath], rehypePlugin: [rehypeKatex] }
	];
<\/script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
`;var ge=v("<textarea></textarea> <!>",1);function xe(t){let e=it("<div style='color: red;'>Hello, world!</div>");const r=[{rehypePlugin:[vt]}];var a=ge(),n=b(a);F(n);var i=k(n,2);M(i,{get md(){return x(e)},plugins:r}),T(n,()=>x(e),o=>$(e,o)),w(t,a)}const fe=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import rehypeRaw from 'rehype-raw';

	let md = "<div style='color: red;'>Hello, world!</div>";
	const plugins: Plugin[] = [{ rehypePlugin: [rehypeRaw] }];
<\/script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
`;var we=v("<textarea></textarea> <!>",1);function ve(t){let e=N(`# Skipped

## Rendered`);const r=[{renderer:{h1:null}}];var a=we(),n=b(a);F(n);var i=k(n,2);M(i,{get md(){return x(e)},plugins:r}),T(n,()=>x(e),o=>$(e,o)),w(t,a)}const ye=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';

	let md = $state('# Skipped\\n\\n## Rendered');
	const plugins: Plugin[] = [{ renderer: { h1: null } }];
<\/script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
`;var ke=v("<textarea></textarea> <!>",1);function be(t){let e=N("This example is not support **strong** and *em* syntax.");const r=[{renderer:{strong:U,em:U}}];var a=ke(),n=b(a);F(n);var i=k(n,2);M(i,{get md(){return x(e)},plugins:r}),T(n,()=>x(e),o=>$(e,o)),w(t,a)}const Me=`<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { Transparent } from '$lib';
	let md = $state('This example is not support **strong** and *em* syntax.');
	const plugins: Plugin[] = [
		{ renderer: { strong: Transparent, em: Transparent } }
	];
<\/script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
`,I={"raw-html":{raw:fe,component:xe},"code-highlight":{raw:Ot,component:At},"math-formula":{raw:he,component:de},"skip-rendering":{raw:ye,component:ve},denylist:{raw:Kt,component:Lt},allowlist:{raw:St,component:Nt},transparent:{raw:Me,component:be},"components-map":{raw:Rt,component:It},ast:{raw:Dt,component:zt}},$e={remarkPlugin:()=>t=>{t.children=t.children.flatMap(e=>{var i;if(e.type!=="paragraph"||e.children.length!==1)return e;const[r]=e.children;if(r===void 0||r.type!=="text")return e;const a=(i=r.value.match(/^:([a-z-]+)$/))==null?void 0:i[1];if(a===void 0)return e;const n=I[a];return n===void 0?e:[{type:"code",lang:"svelte",value:n.raw.replace(/import (.+) from '\$lib';/gm,"import $1 from 'svelte-exmarkdown';")},{type:"text",value:"",data:{hName:a}}]})},rehypePlugin:()=>t=>{var e;t.children=(e=t.children)==null?void 0:e.flatMap(r=>r.type!=="element"||I[r.tagName]===void 0?r:{type:"element",tagName:"section",properties:{className:["example-output"]},children:[{type:"element",tagName:r.tagName,children:[]}]})},renderer:Object.fromEntries(Object.entries(I).map(([t,{component:e}])=>[t,e]))};var Fe=v('<a class="svelte-1fbyvs7"> </a>'),Te=v("<div></div>"),Pe=v('<a class="svelte-1fbyvs7"> </a>'),Ne=v("<div></div>"),Se=v('<!> <nav class="svelte-1fbyvs7"><!> <!></nav>',1);function Be(t,e){E(e,!0);const r=[$e,yt(),kt,bt];var a=Se(),n=b(a);M(n,{get md(){return e.data.markdown},plugins:r});var i=k(n,2),o=A(i);V(o,()=>e.data.prev,s=>{var u=Fe(),c=A(u);C(()=>R(c,J(e.data.prev.markdown))),O(u),C(()=>B(u,"href",`${W??""}/docs/${e.data.prev.slug??""}`)),w(s,u)},s=>{var u=Te();w(s,u)});var p=k(o,2);V(p,()=>e.data.next,s=>{var u=Pe(),c=A(u);C(()=>R(c,J(e.data.next.markdown))),O(u),C(()=>B(u,"href",`${W??""}/docs/${e.data.next.slug??""}`)),w(s,u)},s=>{var u=Ne();w(s,u)}),O(i),w(t,a),z()}export{Be as component,Ve as universal};
