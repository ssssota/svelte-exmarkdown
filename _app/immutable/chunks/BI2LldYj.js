import{s as c,g as l}from"./Cw9B9nk_.js";import{t as a,v as o,g as b,w as p,n as d,x as g}from"./BZIwDeuG.js";let s=!1,i=Symbol();function y(e,u,r){const n=r[u]??(r[u]={store:null,source:o(void 0),unsubscribe:a});if(n.store!==e&&!(i in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=a;else{var t=!0;n.unsubscribe=c(e,f=>{t?n.source.v=f:d(n.source,f)}),t=!1}return e&&i in r?l(e):b(n.source)}function m(){const e={};function u(){p(()=>{for(var r in e)e[r].unsubscribe();g(e,i,{enumerable:!1,value:!0})})}return[e,u]}function w(e){var u=s;try{return s=!1,[e(),s]}finally{s=u}}export{m as a,w as c,y as s};
