function j(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function F(){return Object.create(null)}function w(t){t.forEach(G)}function I(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function xt(t,e,n){t.$$.on_destroy.push(et(e,n))}function bt(t,e,n,i){if(t){const s=J(t,e,n,i);return t[0](s)}}function J(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function $t(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function wt(t,e,n,i,s,u){if(s){const r=J(e,n,i,u);t.p(r,s)}}function vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let S=!1;function nt(){S=!0}function it(){S=!1}function st(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function rt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,a=(s>0&&e[n[s]].claim_order<=l?s+1:st(1,s,_=>e[n[_]].claim_order,l))-1;i[c]=n[a]+1;const d=a+1;n[d]=c,s=Math.max(d,s)}const u=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);u.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<u.length&&r[c].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(r[c],a)}}function ct(t,e){if(S){for(rt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Et(t,e,n){S&&!n?ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode&&t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function lt(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function Nt(){return H(" ")}function At(){return H("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function K(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:K(t,i,e[i])}function Ct(t,e){Object.keys(e).forEach(n=>{ut(t,n,e[n])})}function ut(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:K(t,e,n)}function ft(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,s=!1){at(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function _t(t,e,n,i){return Q(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||u.push(o.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Mt(t,e,n){return _t(t,e,n,lt)}function dt(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Tt(t){return dt(t," ")}function Ot(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Dt(t,e){t.value=e??""}function Lt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Pt(t,e,n){t.classList[n?"add":"remove"](e)}function Bt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const u=s.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(s)):u===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function Ht(t,e){return new t(e)}let $;function b(t){$=t}function C(){if(!$)throw new Error("Function called outside component initialization");return $}function qt(t){C().$$.on_mount.push(t)}function zt(t){C().$$.after_update.push(t)}function Ft(t,e){return C().$$.context.set(t,e),e}function Rt(t){return C().$$.context.get(t)}const x=[],R=[],N=[],W=[],U=Promise.resolve();let P=!1;function V(){P||(P=!0,U.then(X))}function Wt(){return V(),U}function B(t){N.push(t)}const L=new Set;let k=0;function X(){const t=$;do{for(;k<x.length;){const e=x[k];k++,b(e),ht(e.$$)}for(b(null),x.length=0,k=0;R.length;)R.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];L.has(n)||(L.add(n),n())}N.length=0}while(x.length);for(;W.length;)W.pop()();P=!1,L.clear(),b(t)}function ht(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const A=new Set;let g;function Gt(){g={r:0,c:[],p:g}}function It(){g.r||w(g.c),g=g.p}function Y(t,e){t&&t.i&&(A.delete(t),t.i(e))}function Jt(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Kt(t,e){t.d(1),e.delete(t.key)}function Qt(t,e,n,i,s,u,r,o,c,l,a,d){let _=t.length,m=u.length,h=_;const M={};for(;h--;)M[t[h].key]=h;const v=[],T=new Map,O=new Map;for(h=m;h--;){const f=d(s,u,h),y=n(f);let p=r.get(y);p?i&&p.p(f,e):(p=l(y,f),p.c()),T.set(y,v[h]=p),y in M&&O.set(y,Math.abs(h-M[y]))}const q=new Set,z=new Set;function D(f){Y(f,1),f.m(o,a),r.set(f.key,f),a=f.first,m--}for(;_&&m;){const f=v[m-1],y=t[_-1],p=f.key,E=y.key;f===y?(a=f.first,_--,m--):T.has(E)?!r.has(p)||q.has(p)?D(f):z.has(E)?_--:O.get(p)>O.get(E)?(z.add(p),D(f)):(q.add(E),_--):(c(y,r),_--)}for(;_--;){const f=t[_];T.has(f.key)||c(f,r)}for(;m;)D(v[m-1]);return v}function Ut(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const r=t[u],o=e[u];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[u]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Vt(t){return typeof t=="object"&&t!==null?t:{}}function Xt(t){t&&t.c()}function Yt(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:s,after_update:u}=t.$$;s&&s.m(e,n),i||B(()=>{const r=t.$$.on_mount.map(G).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...r):w(r),t.$$.on_mount=[]}),u.forEach(B)}function yt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(x.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Zt(t,e,n,i,s,u,r,o=[-1]){const c=$;b(t);const l=t.$$={fragment:null,ctx:[],props:u,update:j,not_equal:s,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:F(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return l.ctx&&s(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),a&&pt(t,d)),_}):[],l.update(),a=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const d=ft(e.target);l.fragment&&l.fragment.l(d),d.forEach(ot)}else l.fragment&&l.fragment.c();e.intro&&Y(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),it(),X()}b(c)}class te{$destroy(){yt(this,1),this.$destroy=j}$on(e,n){if(!I(n))return j;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Wt as A,j as B,bt as C,Bt as D,ct as E,wt as F,vt as G,$t as H,xt as I,Dt as J,jt as K,w as L,Rt as M,Ut as N,Vt as O,Z as P,kt as Q,Ct as R,te as S,St as T,Ft as U,Pt as V,Qt as W,Kt as X,Nt as a,Et as b,Tt as c,It as d,At as e,Y as f,Gt as g,ot as h,Zt as i,zt as j,lt as k,Mt as l,ft as m,K as n,qt as o,Lt as p,H as q,dt as r,gt as s,Jt as t,Ot as u,Ht as v,Xt as w,Yt as x,mt as y,yt as z};