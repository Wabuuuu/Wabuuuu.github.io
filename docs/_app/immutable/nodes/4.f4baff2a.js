import{S as A,i as C,s as J,k as _,q as f,a as S,l as d,m as q,r as g,h as v,c as Y,b as M,H as s,u as y,I as k,J as N}from"../chunks/index.9549cf48.js";import{p as R}from"../chunks/stores.1eb75698.js";function j(l){let e,o,r="You searched for: "+l[0].params.category,i,E,H,b,n,c=l[0].status+"",p,$,m=l[0].error.message+"",h;return{c(){e=_("main"),o=_("h2"),i=f(r),E=S(),H=_("hr"),b=S(),n=_("h1"),p=f(c),$=f(": "),h=f(m)},l(t){e=d(t,"MAIN",{});var a=q(e);o=d(a,"H2",{});var I=q(o);i=g(I,r),I.forEach(v),E=Y(a),H=d(a,"HR",{}),b=Y(a),n=d(a,"H1",{});var u=q(n);p=g(u,c),$=g(u,": "),h=g(u,m),u.forEach(v),a.forEach(v)},m(t,a){M(t,e,a),s(e,o),s(o,i),s(e,E),s(e,H),s(e,b),s(e,n),s(n,p),s(n,$),s(n,h)},p(t,[a]){a&1&&r!==(r="You searched for: "+t[0].params.category)&&y(i,r),a&1&&c!==(c=t[0].status+"")&&y(p,c),a&1&&m!==(m=t[0].error.message+"")&&y(h,m)},i:k,o:k,d(t){t&&v(e)}}}function w(l,e,o){let r;return N(l,R,i=>o(0,r=i)),[r]}class B extends A{constructor(e){super(),C(this,e,w,j,J,{})}}export{B as component};
