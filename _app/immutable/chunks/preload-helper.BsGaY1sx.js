import{B as m,C as y,l as w,D as P,S as g}from"./runtime.CV3elkN-.js";function E(e,r){return e===r||(e==null?void 0:e[g])===r}function C(e={},r,o,h){return m(()=>{var c,s;return y(()=>{c=s,s=[],w(()=>{e!==o(...s)&&(r(e,...s),c&&E(o(...c),e)&&r(null,...c))})}),()=>{P(()=>{s&&E(o(...s),e)&&r(null,...s)})}}),e}const v="modulepreload",B=function(e,r){return new URL(e,r).href},S={},q=function(r,o,h){let c=Promise.resolve();if(o&&o.length>0){const l=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),d=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));c=Promise.allSettled(o.map(n=>{if(n=B(n,h),n in S)return;S[n]=!0;const a=n.endsWith(".css"),k=a?'[rel="stylesheet"]':"";if(!!h)for(let f=l.length-1;f>=0;f--){const u=l[f];if(u.href===n&&(!a||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${k}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":v,a||(i.as="script"),i.crossOrigin="",i.href=n,d&&i.setAttribute("nonce",d),document.head.appendChild(i),a)return new Promise((f,u)=>{i.addEventListener("load",f),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})}))}function s(l){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=l,window.dispatchEvent(t),!t.defaultPrevented)throw l}return c.then(l=>{for(const t of l||[])t.status==="rejected"&&s(t.reason);return r().catch(s)})};export{q as _,C as b};
