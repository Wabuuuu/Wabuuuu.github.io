import{S as x,i as C,s as P,k as v,q,a as N,l as f,m as _,r as E,h as o,c as O,n as h,b as W,H as t,L as U,u as $,I as j,R as A}from"../chunks/index.e46be139.js";function F(g){let s,n,e,L,r=g[0].join("")+"",m,b,a,c,I,k,i,T,B,d,R,y,V;return{c(){s=v("div"),n=v("div"),e=v("h1"),L=q("Logga in som: "),m=q(r),b=N(),a=v("div"),c=v("button"),I=q("Generate Random Letter"),k=N(),i=v("button"),T=q("Backspace"),B=N(),d=v("button"),R=q("Log In"),this.h()},l(u){s=f(u,"DIV",{class:!0});var l=_(s);n=f(l,"DIV",{class:!0});var G=_(n);e=f(G,"H1",{class:!0});var D=_(e);L=E(D,"Logga in som: "),m=E(D,r),D.forEach(o),G.forEach(o),b=O(l),a=f(l,"DIV",{class:!0});var p=_(a);c=f(p,"BUTTON",{class:!0});var H=_(c);I=E(H,"Generate Random Letter"),H.forEach(o),k=O(p),i=f(p,"BUTTON",{class:!0});var M=_(i);T=E(M,"Backspace"),M.forEach(o),B=O(p),d=f(p,"BUTTON",{class:!0});var S=_(d);R=E(S,"Log In"),S.forEach(o),p.forEach(o),l.forEach(o),this.h()},h(){h(e,"class","svelte-1i6qfd"),h(n,"class","container3 svelte-1i6qfd"),h(c,"class","svelte-1i6qfd"),h(i,"class","svelte-1i6qfd"),h(d,"class","svelte-1i6qfd"),h(a,"class","container svelte-1i6qfd"),h(s,"class","container2 svelte-1i6qfd")},m(u,l){W(u,s,l),t(s,n),t(n,e),t(e,L),t(e,m),t(s,b),t(s,a),t(a,c),t(c,I),t(a,k),t(a,i),t(i,T),t(a,B),t(a,d),t(d,R),y||(V=[U(c,"click",g[1]),U(i,"click",g[2]),U(d,"click",J)],y=!0)},p(u,[l]){l&1&&r!==(r=u[0].join("")+"")&&$(m,r)},i:j,o:j,d(u){u&&o(s),y=!1,A(V)}}}function J(){alert("Wrong username")}function K(g,s,n){let e=[],L="ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("");function r(){let b=1+Math.round(Math.random()*25),a=L[b-1];n(0,e=[...e,a])}function m(){e.pop(),n(0,e=[...e])}return[e,r,m]}class X extends x{constructor(s){super(),C(this,s,K,F,P,{})}}export{X as component};
