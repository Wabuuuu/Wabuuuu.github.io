import{S as X,i as Y,s as Z,k,l as y,m as p,h as d,n as h,b as q,H as u,I as V,G as W,a as j,q as M,L as F,c as I,r as S,M as J,u as D}from"../chunks/index.9549cf48.js";async function $({fetch:i}){return{posts:await(await i("/api/posts")).json()}}const re=Object.freeze(Object.defineProperty({__proto__:null,load:$},Symbol.toStringTag,{value:"Module"}));function K(i,t,r){const l=i.slice();return l[1]=t[r],l}function Q(i,t,r){const l=i.slice();return l[4]=t[r],l[6]=r,l}function R(i){let t,r=i[4]+" ",l;return{c(){t=M("⚜ "),l=M(r)},l(e){t=S(e,"⚜ "),l=S(e,r)},m(e,a){q(e,t,a),q(e,l,a)},p(e,a){a&1&&r!==(r=e[4]+" ")&&D(l,r)},d(e){e&&d(t),e&&d(l)}}}function U(i){let t,r,l,e,a=i[1].meta.date+"",m,s,g,E=i[1].meta.title+"",O,z,x,A,b,B,_,v,P,C,w=i[1].meta.keywords,f=[];for(let o=0;o<w.length;o+=1)f[o]=R(Q(i,w,o));return{c(){t=k("li"),r=k("div"),l=j(),e=k("time"),m=M(a),s=j(),g=k("h3"),O=M(E),z=j(),x=k("p");for(let o=0;o<f.length;o+=1)f[o].c();A=j(),b=k("a"),B=M(`Läs inlägget\r
                `),_=F("svg"),v=F("path"),C=j(),this.h()},l(o){t=y(o,"LI",{class:!0});var c=p(t);r=y(c,"DIV",{class:!0}),p(r).forEach(d),l=I(c),e=y(c,"TIME",{class:!0});var n=p(e);m=S(n,a),n.forEach(d),s=I(c),g=y(c,"H3",{class:!0});var L=p(g);O=S(L,E),L.forEach(d),z=I(c),x=y(c,"P",{class:!0});var G=p(x);for(let T=0;T<f.length;T+=1)f[T].l(G);G.forEach(d),A=I(c),b=y(c,"A",{href:!0,class:!0});var H=p(b);B=S(H,`Läs inlägget\r
                `),_=J(H,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,fill:!0,viewBox:!0});var N=p(_);v=J(N,"path",{stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),p(v).forEach(d),N.forEach(d),H.forEach(d),C=I(c),c.forEach(d),this.h()},h(){h(r,"class","absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"),h(e,"class","mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"),h(g,"class","text-lg font-semibold text-gray-900 dark:text-grey"),h(x,"class","mb-4 text-base font-normal text-gray-500 dark:text-gray-400"),h(v,"stroke","currentColor"),h(v,"stroke-linecap","round"),h(v,"stroke-linejoin","round"),h(v,"stroke-width","2"),h(v,"d","M1 5h12m0 0L9 1m4 4L9 9"),h(_,"class","w-3 h-3 ml-2"),h(_,"aria-hidden","true"),h(_,"xmlns","http://www.w3.org/2000/svg"),h(_,"fill","none"),h(_,"viewBox","0 0 14 10"),h(b,"href",P="/blog/"+i[1].path),h(b,"class","inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"),h(t,"class","mb-10 ml-4")},m(o,c){q(o,t,c),u(t,r),u(t,l),u(t,e),u(e,m),u(t,s),u(t,g),u(g,O),u(t,z),u(t,x);for(let n=0;n<f.length;n+=1)f[n]&&f[n].m(x,null);u(t,A),u(t,b),u(b,B),u(b,_),u(_,v),u(t,C)},p(o,c){if(c&1&&a!==(a=o[1].meta.date+"")&&D(m,a),c&1&&E!==(E=o[1].meta.title+"")&&D(O,E),c&1){w=o[1].meta.keywords;let n;for(n=0;n<w.length;n+=1){const L=Q(o,w,n);f[n]?f[n].p(L,c):(f[n]=R(L),f[n].c(),f[n].m(x,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=w.length}c&1&&P!==(P="/blog/"+o[1].path)&&h(b,"href",P)},d(o){o&&d(t),W(f,o)}}}function ee(i){let t,r,l=i[0].posts,e=[];for(let a=0;a<l.length;a+=1)e[a]=U(K(i,l,a));return{c(){t=k("main"),r=k("ol");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=y(a,"MAIN",{});var m=p(t);r=y(m,"OL",{class:!0});var s=p(r);for(let g=0;g<e.length;g+=1)e[g].l(s);s.forEach(d),m.forEach(d),this.h()},h(){h(r,"class","relative border-l border-gray-200 dark:border-gray-700")},m(a,m){q(a,t,m),u(t,r);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(r,null)},p(a,[m]){if(m&1){l=a[0].posts;let s;for(s=0;s<l.length;s+=1){const g=K(a,l,s);e[s]?e[s].p(g,m):(e[s]=U(g),e[s].c(),e[s].m(r,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=l.length}},i:V,o:V,d(a){a&&d(t),W(e,a)}}}function te(i,t,r){let{data:l}=t;return i.$$set=e=>{"data"in e&&r(0,l=e.data)},[l]}class le extends X{constructor(t){super(),Y(this,t,te,ee,Z,{data:0})}}export{le as component,re as universal};
