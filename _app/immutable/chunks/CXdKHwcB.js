import{R as O,h as g,a8 as P,ag as D,ah as m,ai as w,aj as M,ac as R,I as x,ak as B,al as A,V as H,a7 as $,am as k,Z as E,Y as I,a as z,a2 as h,an as F,ao as G,ap as J,aq as K,ar as U,a5 as X,$ as Z,J as Q,c as ee,K as te}from"./DXQbvlLl.js";import{d as re,r as ae}from"./CeA0Eh0W.js";function _e(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ne=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function pe(e){return ne.includes(e)}const oe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ve(e){return e=e.toLowerCase(),oe[e]??e}const ie=["touchstart","touchmove"];function se(e){return ie.includes(e)}const ue=["textarea","script","style","title"];function he(e){return ue.includes(e)}function ye(e,t){if(t){const r=document.body;e.autofocus=!0,O(()=>{document.activeElement===r&&e.focus()})}}function ge(e){g&&P(e)!==null&&D(e)}let V=!1;function ce(){V||(V=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function C(e){var t=M,r=R;m(null),w(null);try{return e()}finally{m(t),w(r)}}function be(e,t,r,s=r){e.addEventListener(t,()=>C(r));const n=e.__on_r;n?e.__on_r=()=>{n(),s(!0)}:e.__on_r=()=>s(!0),ce()}const W=new Set,L=new Set;function Ee(e){if(!g)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function me(e,t,r,s={}){function n(a){if(s.capture||y.call(t,a),!a.cancelBubble)return C(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?O(()=>{t.addEventListener(e,n,s)}):t.addEventListener(e,n,s),n}function we(e){for(var t=0;t<e.length;t++)W.add(e[t]);for(var r of L)r(e)}function y(e){var N;var t=this,r=t.ownerDocument,s=e.type,n=((N=e.composedPath)==null?void 0:N.call(e))||[],a=n[0]||e.target,l=0,_=e.__root;if(_){var f=n.indexOf(_);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var p=n.indexOf(t);if(p===-1)return;f<=p&&(l=f)}if(a=n[l]||e.target,a!==t){x(e,"currentTarget",{configurable:!0,get(){return a||r}});var T=M,u=R;m(null),w(null);try{for(var o,i=[];a!==null;){var c=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+s];if(d!=null&&(!a.disabled||e.target===a))if(B(d)){var[q,...Y]=d;q.apply(a,[e,...Y])}else d.call(a,e)}catch(b){o?i.push(b):o=b}if(e.cancelBubble||c===t||c===null)break;a=c}if(o){for(let b of i)queueMicrotask(()=>{throw b});throw o}}finally{e.__root=t,delete e.currentTarget,m(T),w(u)}}}function Te(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function le(e,t){return j(e,t)}function ke(e,t){A(),t.intro=t.intro??!1;const r=t.target,s=g,n=h;try{for(var a=P(r);a&&(a.nodeType!==8||a.data!==H);)a=$(a);if(!a)throw k;E(!0),I(a),z();const l=j(e,{...t,anchor:a});if(h===null||h.nodeType!==8||h.data!==F)throw G(),k;return E(!1),l}catch(l){if(l===k)return t.recover===!1&&J(),A(),D(r),E(!1),le(e,t);throw l}finally{E(s),I(n),ae()}}const v=new Map;function j(e,{target:t,anchor:r,props:s={},events:n,context:a,intro:l=!0}){A();var _=new Set,f=u=>{for(var o=0;o<u.length;o++){var i=u[o];if(!_.has(i)){_.add(i);var c=se(i);t.addEventListener(i,y,{passive:c});var d=v.get(i);d===void 0?(document.addEventListener(i,y,{passive:c}),v.set(i,1)):v.set(i,d+1)}}};f(K(W)),L.add(f);var p=void 0,T=U(()=>{var u=r??t.appendChild(X());return Z(()=>{if(a){Q({});var o=ee;o.c=a}n&&(s.$$events=n),g&&re(u,null),p=e(u,s)||{},g&&(R.nodes_end=h),a&&te()}),()=>{var c;for(var o of _){t.removeEventListener(o,y);var i=v.get(o);--i===0?(document.removeEventListener(o,y),v.delete(o)):v.set(o,i)}L.delete(f),u!==r&&((c=u.parentNode)==null||c.removeChild(u))}});return S.set(p,T),p}let S=new WeakMap;function Ae(e,t){const r=S.get(e);return r?(S.delete(e),r(t)):Promise.resolve()}export{Ee as a,ye as b,me as c,we as d,pe as e,ce as f,he as g,ke as h,_e as i,be as l,le as m,ve as n,ge as r,Te as s,Ae as u};
