(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),a=n(14),s=n.n(a),i=(n(19),n(20),n(21),n(10)),o=n(28),u=n(25),j=n(26),b=n(27),l=n(0),O=function(t){var e=t.startStopButton,n=t.delayEvent,c=t.resetButton;return Object(l.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(l.jsx)("button",{type:"button",onClick:e,className:"btn btn-outline-dark",children:"Start/Stop"}),Object(l.jsx)("button",{type:"button",onClick:n,className:"btn btn-outline-dark mx-2",children:"Wait"}),Object(l.jsx)("button",{type:"button",onClick:c,className:"btn btn-outline-dark",children:"Reset"})]})},f=function(t){var e=t.timerArray;return Object(l.jsxs)("section",{className:"d-flex justify-content-center display-3",children:[Object(l.jsx)("p",{children:e[0]}),Object(l.jsx)("span",{children:":"}),Object(l.jsx)("p",{children:e[1]}),Object(l.jsx)("span",{children:":"}),Object(l.jsx)("p",{children:e[2]})]})},d=function(){var t=Object(c.useState)(0),e=Object(i.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)([]),s=Object(i.a)(a,2),d=s[0],p=s[1],x=Object(c.useState)(0),h=Object(i.a)(x,2),v=h[0],m=h[1],y=Object(c.useState)(!1),k=Object(i.a)(y,2),S=k[0],I=k[1],N=Object(c.useState)(new o.a),w=Object(i.a)(N,1)[0];Object(c.useEffect)((function(){var t=function(t){var e=Math.floor(t/3600),n=Math.floor((t-3600*e)/60),c=t-3600*e-60*n;return[e<10?"0".concat(e):e,n<10?"0".concat(n):n,c<10?"0".concat(c):c]}(n);w.pipe(Object(u.a)((function(){return(new Date).getTime()})),Object(j.a)(2,1),Object(b.a)((function(t){return t[0]>(new Date).getTime()-300}))).subscribe((function(){clearInterval(v),I(!S)})),p(t)}),[n]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f,{timerArray:d}),Object(l.jsx)(O,{startStopButton:function(){if(S)clearInterval(v),r(0);else{var t=setInterval((function(){r((function(t){return t+1}))}),1e3);m(t)}I(!S)},delayEvent:function(){w.next(!0)},resetButton:function(){if(S){clearInterval(v),r(0);var t=setInterval((function(){r((function(t){return t+1}))}),1e3);m(t)}}})]})},p=function(){return Object(l.jsx)("div",{className:"starter",children:Object(l.jsx)(d,{})})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.49abe320.chunk.js.map