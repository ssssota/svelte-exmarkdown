import{S as A,T as q,V as B,W as w,X as M,m as P,U as _,v as g,Y as S,Z as G,_ as Z,$,a0 as z,d as K,a1 as C,a2 as V,p as U,G as W,a3 as X,a4 as F,z as H,a5 as J,a6 as j,a7 as Q,b as k,a8 as ee,a9 as re,aa as E}from"./BPsHi6Kl.js";import{c as ne}from"./BKGKZNHM.js";function R(e,n=null,u){if(typeof e!="object"||e===null||A in e)return e;const s=$(e);if(s!==q&&s!==B)return e;var i=new Map,o=z(e),y=w(0);o&&i.set("length",w(e.length));var h;return new Proxy(e,{defineProperty(l,r,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&Z();var f=i.get(r);return f===void 0?(f=w(t.value),i.set(r,f)):g(f,R(t.value,h)),!0},deleteProperty(l,r){var t=i.get(r);if(t===void 0)r in l&&i.set(r,w(_));else{if(o&&typeof r=="string"){var f=i.get("length"),a=Number(r);Number.isInteger(a)&&a<f.v&&g(f,a)}g(t,_),Y(y)}return!0},get(l,r,t){var c;if(r===A)return e;var f=i.get(r),a=r in l;if(f===void 0&&(!a||(c=S(l,r))!=null&&c.writable)&&(f=w(R(a?l[r]:_,h)),i.set(r,f)),f!==void 0){var d=P(f);return d===_?void 0:d}return Reflect.get(l,r,t)},getOwnPropertyDescriptor(l,r){var t=Reflect.getOwnPropertyDescriptor(l,r);if(t&&"value"in t){var f=i.get(r);f&&(t.value=P(f))}else if(t===void 0){var a=i.get(r),d=a==null?void 0:a.v;if(a!==void 0&&d!==_)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return t},has(l,r){var d;if(r===A)return!0;var t=i.get(r),f=t!==void 0&&t.v!==_||Reflect.has(l,r);if(t!==void 0||G!==null&&(!f||(d=S(l,r))!=null&&d.writable)){t===void 0&&(t=w(f?R(l[r],h):_),i.set(r,t));var a=P(t);if(a===_)return!1}return f},set(l,r,t,f){var m;var a=i.get(r),d=r in l;if(o&&r==="length")for(var c=t;c<a.v;c+=1){var p=i.get(c+"");p!==void 0?g(p,_):c in l&&(p=w(_),i.set(c+"",p))}a===void 0?(!d||(m=S(l,r))!=null&&m.writable)&&(a=w(void 0),g(a,R(t,h)),i.set(r,a)):(d=a.v!==_,g(a,R(t,h)));var b=Reflect.getOwnPropertyDescriptor(l,r);if(b!=null&&b.set&&b.set.call(f,t),!d){if(o&&typeof r=="string"){var O=i.get("length"),x=Number(r);Number.isInteger(x)&&x>=O.v&&g(O,x+1)}Y(y)}return!0},ownKeys(l){P(y);var r=Reflect.ownKeys(l).filter(a=>{var d=i.get(a);return d===void 0||d.v!==_});for(var[t,f]of i)f.v!==_&&!(t in l)&&r.push(t);return r},setPrototypeOf(){M()}})}function Y(e,n=1){g(e,e.v+n)}const te={get(e,n){if(!e.exclude.includes(n))return e.props[n]},set(e,n){return!1},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function se(e,n,u){return new Proxy({props:e,exclude:n},te)}const ie={get(e,n){let u=e.props.length;for(;u--;){let s=e.props[u];if(E(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s)return s[n]}},set(e,n,u){let s=e.props.length;for(;s--;){let i=e.props[s];E(i)&&(i=i());const o=S(i,n);if(o&&o.set)return o.set(u),!0}return!1},getOwnPropertyDescriptor(e,n){let u=e.props.length;for(;u--;){let s=e.props[u];if(E(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s){const i=S(s,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===A||n===j)return!1;for(let u of e.props)if(E(u)&&(u=u()),u!=null&&n in u)return!0;return!1},ownKeys(e){const n=[];for(let u of e.props){E(u)&&(u=u());for(const s in u)n.includes(s)||n.push(s)}return n}};function ue(...e){return new Proxy({props:e},ie)}function le(e,n,u,s){var T;var i=(u&re)!==0,o=!k||(u&ee)!==0,y=(u&J)!==0,h=(u&Q)!==0,l=!1,r;y?[r,l]=ne(()=>e[n]):r=e[n];var t=A in e||j in e,f=y&&(((T=S(e,n))==null?void 0:T.set)??(t&&n in e&&(v=>e[n]=v)))||void 0,a=s,d=!0,c=!1,p=()=>(c=!0,d&&(d=!1,h?a=K(s):a=s),a);r===void 0&&s!==void 0&&(f&&o&&C(),r=p(),f&&f(r));var b;if(o)b=()=>{var v=e[n];return v===void 0?p():(d=!0,c=!1,v)};else{var O=(i?U:W)(()=>e[n]);O.f|=V,b=()=>{var v=P(O);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(u&X))return b;if(f){var x=e.$$legacy;return function(v,I){return arguments.length>0?((!o||!I||x||l)&&f(I?b():v),v):b()}}var m=!1,N=H(r),D=U(()=>{var v=b(),I=P(N);return m?(m=!1,I):N.v=v});return i||(D.equals=F),function(v,I){if(arguments.length>0){const L=I?P(D):o&&y?R(v):v;return D.equals(L)||(m=!0,g(N,L),c&&a!==void 0&&(a=L),K(()=>P(D))),v}return P(D)}}export{R as a,le as p,se as r,ue as s};
