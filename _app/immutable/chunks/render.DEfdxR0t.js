import{h as E,av as W,aw as b,a1 as T,W as B,D as q,a6 as I,R as N,ax as S,ao as H,ay as Y,ar as z,az as A,L as w,K as D,i as P,g as v,ap as $,aA as j,aB as G,al as K,ae as U,aC as x,ad as F,d as J,p as Q,a as X,k as Z}from"./runtime.CV3elkN-.js";import{r as ee,b as te}from"./template.C-tOna3O.js";const O=new Set,k=new Set;function le(e){if(!E)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function ce(e,t,a,s){function i(r){if(s.capture||y.call(t,r),!r.cancelBubble){var u=I,f=N;b(null),T(null);try{return a.call(this,r)}finally{b(u),T(f)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?q(()=>{t.addEventListener(e,i,s)}):t.addEventListener(e,i,s),i}function fe(e){for(var t=0;t<e.length;t++)O.add(e[t]);for(var a of k)a(e)}function y(e){var R;var t=this,a=t.ownerDocument,s=e.type,i=((R=e.composedPath)==null?void 0:R.call(e))||[],r=i[0]||e.target,u=0,f=e.__root;if(f){var d=i.indexOf(f);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var _=i.indexOf(t);if(_===-1)return;d<=_&&(u=d)}if(r=i[u]||e.target,r!==t){W(e,"currentTarget",{configurable:!0,get(){return r||a}});var m=I,l=N;b(null),T(null);try{for(var n,o=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var p=r["__"+s];if(p!==void 0&&!r.disabled)if(B(p)){var[V,...C]=p;V.apply(r,[e,...C])}else p.call(r,e)}catch(g){n?o.push(g):n=g}if(e.cancelBubble||c===t||c===null)break;r=c}if(n){for(let g of o)queueMicrotask(()=>{throw g});throw n}}finally{e.__root=t,delete e.currentTarget,b(m),T(l)}}}function de(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const re=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function _e(e){return re.includes(e)}const ae={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function pe(e){return e=e.toLowerCase(),ae[e]??e}const ne=["touchstart","touchmove"];function oe(e){return ne.includes(e)}function he(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function ie(e,t){return M(e,t)}function ve(e,t){S(),t.intro=t.intro??!1;const a=t.target,s=E,i=v;try{for(var r=H(a);r&&(r.nodeType!==8||r.data!==Y);)r=z(r);if(!r)throw A;w(!0),D(r),P();const u=M(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==$)throw j(),A;return w(!1),u}catch(u){if(u===A)return t.recover===!1&&G(),S(),K(a),w(!1),ie(e,t);throw u}finally{w(s),D(i),ee()}}const h=new Map;function M(e,{target:t,anchor:a,props:s={},events:i,context:r,intro:u=!0}){S();var f=new Set,d=l=>{for(var n=0;n<l.length;n++){var o=l[n];if(!f.has(o)){f.add(o);var c=oe(o);t.addEventListener(o,y,{passive:c});var p=h.get(o);p===void 0?(document.addEventListener(o,y,{passive:c}),h.set(o,1)):h.set(o,p+1)}}};d(U(O)),k.add(d);var _=void 0,m=x(()=>{var l=a??t.appendChild(F());return J(()=>{if(r){Q({});var n=Z;n.c=r}i&&(s.$$events=i),E&&te(l,null),_=e(l,s)||{},E&&(N.nodes_end=v),r&&X()}),()=>{var c;for(var n of f){t.removeEventListener(n,y);var o=h.get(n);--o===0?(document.removeEventListener(n,y),h.delete(n)):h.set(n,o)}k.delete(d),L.delete(_),l!==a&&((c=l.parentNode)==null||c.removeChild(l))}});return L.set(_,m),_}let L=new WeakMap;function ye(e){const t=L.get(e);t&&t()}export{_e as a,ce as c,fe as d,ve as h,de as i,ie as m,pe as n,le as r,he as s,ye as u};
