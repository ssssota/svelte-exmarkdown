import{S as E,i as j,s as L,k as f,l as d,m as u,h,b as y,X as O,n as p,r as S,a as q,u as w,c as x,p as g,F as _,v as A,Y as C}from"../chunks/index.fce3405c.js";import{b as k}from"../chunks/paths.f31a4d0e.js";function b(r,a,e){const n=r.slice();return n[1]=a[e][0],n[2]=a[e][1],n}function v(r,a){let e,n,o=a[2]+"",i,t,l;return{key:r,first:null,c(){e=f("li"),n=f("a"),i=S(o),l=q(),this.h()},l(s){e=d(s,"LI",{});var c=u(e);n=d(c,"A",{href:!0});var m=u(n);i=w(m,o),m.forEach(h),l=x(c),c.forEach(h),this.h()},h(){g(n,"href",t=k+"/docs/"+a[1]),this.first=e},m(s,c){y(s,e,c),_(e,n),_(n,i),_(e,l)},p(s,c){a=s,c&1&&o!==(o=a[2]+"")&&A(i,o),c&1&&t!==(t=k+"/docs/"+a[1])&&g(n,"href",t)},d(s){s&&h(e)}}}function F(r){let a,e=[],n=new Map,o=Object.entries(r[0].docs);const i=t=>t[1];for(let t=0;t<o.length;t+=1){let l=b(r,o,t),s=i(l);n.set(s,e[t]=v(s,l))}return{c(){a=f("ul");for(let t=0;t<e.length;t+=1)e[t].c()},l(t){a=d(t,"UL",{});var l=u(a);for(let s=0;s<e.length;s+=1)e[s].l(l);l.forEach(h)},m(t,l){y(t,a,l);for(let s=0;s<e.length;s+=1)e[s].m(a,null)},p(t,[l]){l&1&&(o=Object.entries(t[0].docs),e=O(e,l,i,1,t,o,n,a,C,v,null,b))},i:p,o:p,d(t){t&&h(a);for(let l=0;l<e.length;l+=1)e[l].d()}}}function I(r,a,e){let{data:n}=a;return r.$$set=o=>{"data"in o&&e(0,n=o.data)},[n]}class U extends E{constructor(a){super(),j(this,a,I,F,L,{data:0})}}export{U as component};
