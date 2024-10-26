var Nn=Array.isArray,bn=Array.from,qn=Object.defineProperty,it=Object.getOwnPropertyDescriptor,Jt=Object.getOwnPropertyDescriptors,Pn=Object.prototype,Fn=Array.prototype,Qt=Object.getPrototypeOf;function Mn(t){return typeof t=="function"}const Ln=()=>{};function Hn(t){return typeof(t==null?void 0:t.then)=="function"}function Yn(t){return t()}function pt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,ht=4,Y=8,rt=16,w=32,z=64,S=128,V=256,p=512,g=1024,b=2048,N=4096,j=8192,Wt=16384,dt=32768,jn=65536,Xt=1<<18,Et=1<<19,ft=Symbol("$state"),Bn=Symbol("");function yt(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!tn(t,this.v)}function nn(t){throw new Error("effect_in_teardown")}function rn(){throw new Error("effect_in_unowned_derived")}function en(t){throw new Error("effect_orphan")}function sn(){throw new Error("effect_update_depth_exceeded")}function Un(){throw new Error("hydration_failed")}function Vn(t){throw new Error("props_invalid_value")}function Gn(){throw new Error("state_descriptors_fixed")}function Kn(){throw new Error("state_prototype_fixed")}function an(){throw new Error("state_unsafe_local_read")}function on(){throw new Error("state_unsafe_mutation")}function et(t){return{f:0,v:t,reactions:null,equals:yt,version:0}}function $n(t){return mt(et(t))}function un(t,n=!1){var e;const r=et(t);return n||(r.equals=wt),l!==null&&l.l!==null&&((e=l.l).s??(e.s=[])).push(r),r}function Zn(t,n=!1){return mt(un(t,n))}function mt(t){return i!==null&&i.f&T&&(y===null?xn([t]):y.push(t)),t}function Tt(t,n){return i!==null&&ut()&&i.f&(T|rt)&&(y===null||!y.includes(t))&&on(),ln(t,n)}function ln(t,n){return t.equals(n)||(t.v=n,t.version=Bt(),At(t,g),ut()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(E(u,g),J(u)):x===null?gn([t]):x.push(t))),n}function At(t,n){var r=t.reactions;if(r!==null)for(var e=ut(),s=r.length,a=0;a<s;a++){var o=r[a],f=o.f;f&g||!e&&o===u||(E(o,n),f&(p|S)&&(f&T?At(o,b):J(o)))}}const zn=1,Jn=2,Qn=4,Wn=8,Xn=16,tr=1,nr=2,rr=4,er=8,sr=16,ar=1,or=2,fn="[",_n="[!",cn="]",xt={},ur=Symbol(),lr="http://www.w3.org/2000/svg";function gt(t){console.warn("hydration_mismatch")}let k=!1;function ir(t){k=t}let d;function M(t){if(t===null)throw gt(),xt;return d=t}function fr(){return M(R(d))}function _r(t){if(k){if(R(d)!==null)throw gt(),xt;d=t}}function cr(t=1){if(k){for(var n=t,r=d;n--;)r=R(r);d=r}}function vr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===cn){if(t===0)return n;t-=1}else(r===fn||r===_n)&&(t+=1)}var e=R(n);n.remove(),n=e}}var _t,vn,It,kt;function pr(){if(_t===void 0){_t=window,vn=document;var t=Element.prototype,n=Node.prototype;It=it(n,"firstChild").get,kt=it(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Q(t=""){return document.createTextNode(t)}function W(t){return It.call(t)}function R(t){return kt.call(t)}function hr(t,n){if(!k)return W(t);var r=W(d);if(r===null)r=d.appendChild(Q());else if(n&&r.nodeType!==3){var e=Q();return r==null||r.before(e),M(e),e}return M(r),r}function dr(t,n){if(!k){var r=W(t);return r instanceof Comment&&r.data===""?R(r):r}return d}function Er(t,n=1,r=!1){let e=k?d:t;for(;n--;)e=R(e);if(!k)return e;var s=e.nodeType;if(r&&s!==3){var a=Q();return e==null||e.before(a),M(a),a}return M(e),e}function yr(t){t.textContent=""}function pn(t){var n=T|g;u===null?n|=S:u.f|=Et;const r={children:null,ctx:l,deps:null,equals:yt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(i!==null&&i.f&T){var e=i;(e.children??(e.children=[])).push(r)}return r}function wr(t){const n=pn(t);return n.equals=wt,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?st(e):P(e)}}}function Rt(t){var n,r=u;Z(t.parent);try{St(t),n=Ut(t)}finally{Z(r)}return n}function Dt(t){var n=Rt(t),r=(D||t.f&S)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=Bt())}function st(t){St(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){u===null&&i===null&&en(),i!==null&&i.f&S&&rn(),ot&&nn()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&z)!==0,a=u,o={ctx:l,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=O;try{ct(!0),B(o),o.f|=Wt}catch(c){throw P(o),c}finally{ct(f)}}else n!==null&&J(o);var m=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&Et)===0;if(!m&&!s&&e&&(a!==null&&hn(o,a),i!==null&&i.f&T)){var A=i;(A.children??(A.children=[])).push(o)}return o}function mr(t){const n=q(Y,null,!1);return E(n,p),n.teardown=t,n}function Tr(t){Ot();var n=u!==null&&(u.f&w)!==0&&l!==null&&!l.m;if(n){var r=l;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=Ct(t);return e}}function Ar(t){return Ot(),at(t)}function xr(t){const n=q(z,t,!0);return()=>{P(n)}}function Ct(t){return q(ht,t,!1)}function gr(t,n){var r=l,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=at(()=>{t(),!e.ran&&(e.ran=!0,Tt(r.l.r2,!0),Dn(n))})}function Ir(){var t=l;at(()=>{if(Zt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),F(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function at(t){return q(Y,t,!0)}function kr(t){return dn(t)}function dn(t,n=0){return q(Y|rt|n,t,!0)}function Sr(t,n=!0){return q(Y|w,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=ot,e=i;vt(!0),$(null);try{n.call(null)}finally{vt(r),$(e)}}}function bt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)st(n[r])}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function En(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:R(e);e.remove(),e=a}r=!0}bt(t),qt(t,n&&!r),H(t,0),E(t,j);var o=t.transitions;if(o!==null)for(const m of o)m.stop();Nt(t);var f=t.parent;f!==null&&f.first!==null&&Pt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Pt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Rr(t,n){var r=[];Ft(t,r,!0),yn(r,()=>{P(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ft(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&dt)!==0||(e.f&w)!==0;Ft(e,n,a?r:!1),e=s}}}function Dr(t){Mt(t,!0)}function Mt(t,n){if(t.f&N){t.f^=N,F(t)&&B(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&dt)!==0||(r.f&w)!==0;Mt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const wn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,X=[],tt=[];function Lt(){G=!1;const t=X.slice();X=[],pt(t)}function Ht(){K=!1;const t=tt.slice();tt=[],pt(t)}function Or(t){G||(G=!0,queueMicrotask(Lt)),X.push(t)}function Cr(t){K||(K=!0,wn(Ht)),tt.push(t)}function mn(){G&&Lt(),K&&Ht()}function Tn(t){throw new Error("lifecycle_outside_component")}const Yt=0,An=1;let U=Yt,L=!1,O=!1,ot=!1;function ct(t){O=t}function vt(t){ot=t}let I=[],C=0;let i=null;function $(t){i=t}let u=null;function Z(t){u=t}let y=null;function xn(t){y=t}let _=null,h=0,x=null;function gn(t){x=t}let jt=0,D=!1,l=null;function Nr(t){l=t}function Bt(){return++jt}function ut(){return l!==null&&l.l===null}function F(t){var o,f;var n=t.f;if(n&g)return!0;if(n&b){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(F(a)&&Dt(a),e&&u!==null&&!D&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function In(t,n,r){throw t}function Ut(t){var lt;var n=_,r=h,e=x,s=i,a=D,o=y,f=l,m=t.f;_=null,h=0,x=null,i=m&(w|z)?null:t,D=!O&&(m&S)!==0,y=null,l=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,x=e,i=s,D=a,y=o,l=f}}function kn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(E(n,b),n.f&(S|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)kn(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=u;u=t;try{bt(t),n&rt?En(t):qt(t),Nt(t);var e=Ut(t);t.teardown=typeof e=="function"?e:null,t.version=jt}catch(s){In(s)}finally{u=r}}}function Vt(){C>1e3&&(C=0,sn()),C++}function Gt(t){var n=t.length;if(n!==0){Vt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Kt(s,a),Sn(a)}}finally{O=r}}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|N))&&F(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Pt(e):e.fn=null))}}function Rn(){if(L=!1,C>1001)return;const t=I;I=[],Gt(t),L||(C=0)}function J(t){U===Yt&&(L||(L=!0,queueMicrotask(Rn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|w)){if(!(r&p))return;n.f^=p}}I.push(n)}function Kt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,o=a&&(s&p)!==0;if(!o&&!(s&N))if(s&Y){a?r.f^=p:F(r)&&B(r);var f=r.first;if(f!==null){r=f;continue}}else s&ht&&e.push(r);var m=r.next;if(m===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=m}for(var c=0;c<e.length;c++)f=e[c],n.push(f),Kt(f,n)}function $t(t){var n=U,r=I;try{Vt();const s=[];U=An,I=s,L=!1,Gt(r);var e=t==null?void 0:t();return mn(),(I.length>0||s.length>0)&&$t(),C=0,e}finally{U=n,I=r}}async function br(){await Promise.resolve(),$t()}function Zt(t){var f;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=Rt(t);return st(t),e}if(i!==null){y!==null&&y.includes(t)&&an();var s=i.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),x!==null&&u!==null&&u.f&p&&!(u.f&w)&&x.includes(t)&&(E(u,g),J(u))}else if(r&&t.deps===null){var a=t,o=a.parent;o!==null&&!((f=o.deriveds)!=null&&f.includes(a))&&(o.deriveds??(o.deriveds=[])).push(a)}return r&&(a=t,F(a)&&Dt(a)),t.v}function Dn(t){const n=i;try{return i=null,t()}finally{i=n}}const On=~(g|b|p);function E(t,n){t.f=t.f&On|n}function qr(t){return zt().get(t)}function Pr(t,n){return zt().set(t,n),n}function zt(t){return l===null&&Tn(),l.c??(l.c=new Map(Cn(l)||void 0))}function Cn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Fr(t,n=1){var r=+Zt(t);return Tt(t,r+n),r}function Mr(t,n=!1,r){l={p:l,c:null,e:null,m:!1,s:t,x:null,l:null},n||(l.l={s:null,u:null,r1:[],r2:et(!1)})}function Lr(t){const n=l;if(n!==null){const o=n.e;if(o!==null){var r=u,e=i;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];Z(a.effect),$(a.reaction),Ct(a.fn)}}finally{Z(r),$(e)}}l=n.p,n.m=!0}return{}}function Hr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ft in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ft in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Jt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{w as $,cr as A,Ct as B,at as C,Or as D,dt as E,Zn as F,Dr as G,Rr as H,_n as I,vr as J,M as K,ir as L,Pn as M,Fn as N,et as O,Gn as P,it as Q,u as R,ft as S,Kn as T,ur as U,Qt as V,Nn as W,Vn as X,jn as Y,rr as Z,wt as _,Lr as a,z as a0,Z as a1,tr as a2,nr as a3,er as a4,wr as a5,i as a6,j as a7,sr as a8,un as a9,gt as aA,Un as aB,xr as aC,Xt as aD,ar as aE,or as aF,vn as aG,$t as aH,Tn as aI,br as aJ,ut as aK,Hn as aL,Nr as aM,lr as aN,qr as aO,Pr as aP,gr as aQ,Ir as aR,Mn as aa,Fr as ab,mr as ac,Q as ad,bn as ae,N as af,zn as ag,ln as ah,Jn as ai,Xn as aj,Ft as ak,yr as al,yn as am,Qn as an,W as ao,cn as ap,Wn as aq,R as ar,Bn as as,Jt as at,Cr as au,qn as av,$ as aw,pr as ax,fn as ay,xt as az,dn as b,hr as c,Sr as d,P as e,dr as f,d as g,k as h,fr as i,Tr as j,l as k,Dn as l,Yn as m,Ln as n,pt as o,Mr as p,Zt as q,_r as r,Er as s,kr as t,Ar as u,Hr as v,pn as w,Tt as x,$n as y,tn as z};
