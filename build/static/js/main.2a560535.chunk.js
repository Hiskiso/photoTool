(this.webpackJsonpphoto_tool=this.webpackJsonpphoto_tool||[]).push([[0],{127:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(21),r=c.n(n),i=c(9),o=(c(116),c(6)),s=c(128),j=c(129),d=c(5),h=function(e){var t=Object(a.useState)(512),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(512),j=Object(i.a)(s,2),h=j[0],b=j[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),O=l[0],x=l[1],p=Object(a.useState)(""),f=Object(i.a)(p,2),g=f[0],v=f[1];function m(e,t){var c=new Image;c.src=g,c.onload=function(){var a=document.getElementById("canvas"),n=a.getContext("2d");a.width=Math.floor(e),a.height=Math.floor(t),n.drawImage(c,0,0,Math.floor(e),Math.floor(t));var r=a.toDataURL("image/png");x(r)}}return Object(d.jsxs)(o.k,{id:e,children:[Object(d.jsx)(o.l,{children:"\u0420\u0430\u0437\u043c\u0435\u0440\u044b"}),Object(d.jsxs)(o.i,{children:[Object(d.jsx)("canvas",{style:{display:"none"},id:"canvas",height:512,width:512}),Object(d.jsx)("img",{id:"image",src:O}),Object(d.jsx)(o.h,{top:"\u21a8",children:Object(d.jsx)(o.j,{onChange:function(e){b(e.target.value),m(e.target.value,n)}})}),Object(d.jsx)(o.h,{top:"\u2194",children:Object(d.jsx)(o.j,{onChange:function(e){r(e.target.value),m(h,e.target.value)}})}),Object(d.jsx)(o.h,{top:"",children:Object(d.jsx)(o.g,{onChange:function(e){var t=new FileReader;t.addEventListener("load",(function(e){v(e.target.result),m(512,512)})),t.readAsDataURL(e.target.files[0])},controlSize:"m",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u043e\u0442\u043e "})})]})]})},b=c(23),u=c(19),l=c.n(u),O=function(e){var t=Object(a.useState)(),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(),j=Object(i.a)(s,2)[1],h=Object(a.useState)(window.screen.width-12),u=Object(i.a)(h,2),O=u[0],x=u[1],p=Object(a.useState)(document.createElement("canvas")),f=Object(i.a)(p,1)[0],g=Object(a.useState)(document.createElement("video")),v=Object(i.a)(g,1)[0],m=Object(a.useState)(!1),w=Object(i.a)(m,2),y=w[0],P=w[1],k=Object(a.useState)(""),S=Object(i.a)(k,2),R=S[0],C=S[1],W=Object(a.useState)(),z=Object(i.a)(W,2),_=z[0],A=z[1];function E(){return E=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(240),v.setAttribute("width",O),v.setAttribute("autoplay",!0),v.setAttribute("height",_),f.setAttribute("width",O),f.setAttribute("height",_),v.srcObject=t,e.next=9,P(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),r(Object(d.jsx)(o.q,{children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0444\u043e\u0442\u043e"}))}));case 2:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function I(){return(I=Object(b.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y&&((t=f.getContext("2d")).translate(f.width,0),t.scale(-1,1),t.drawImage(v,0,0,O,_),c=f.toDataURL("image/png"),C(c),j(c));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return window.resizerr=function(e){x(e)},Object(d.jsxs)(o.k,{id:e,children:[Object(d.jsx)(o.l,{children:"\u0428\u0438\u0440\u043e\u043a\u043e\u0435 \u0444\u043e\u0442\u043e"}),Object(d.jsxs)(o.i,{children:[Object(d.jsx)("img",{src:R}),Object(d.jsx)(o.c,{onClick:function(){!function(){E.apply(this,arguments)}(),function(){I.apply(this,arguments)}()},stretched:!0,children:"\u0424\u043e\u0442\u043e"}),n]})]})},x=function(){var e=Object(a.useState)("WhidePhoto"),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(null),b=Object(i.a)(r,2),u=b[0],l=(b[1],function(e){return n(e.currentTarget.dataset.story)}),x=window.innerWidth>=850;return Object(d.jsx)(o.e,{platform:"ios",scheme:"space_gray",children:Object(d.jsx)(o.a,{children:Object(d.jsx)(o.b,{children:Object(d.jsxs)(o.n,{popout:u,header:Object(d.jsx)(o.l,{separator:!1}),style:{justifyContent:"center"},children:[x&&Object(d.jsx)(o.m,{fixed:!0,width:280,maxWidth:280,children:Object(d.jsxs)(o.k,{children:[Object(d.jsx)(o.l,{}),Object(d.jsxs)(o.i,{children:[Object(d.jsx)(o.d,{disabled:"WhidePhoto"===c,style:"WhidePhoto"===c?{backgroundColor:"var(--button_secondary_background)",borderRadius:8}:{},"data-story":"WhidePhoto",onClick:l,before:Object(d.jsx)(s.a,{}),children:"\u0428\u0438\u0440\u043e\u043a\u043e\u0435 \u0424\u043e\u0442\u043e"}),Object(d.jsx)(o.d,{disabled:"ResizePhoto"===c,style:"ResizePhoto"===c?{backgroundColor:"var(--button_secondary_background)",borderRadius:8}:{},"data-story":"ResizePhoto",onClick:l,before:Object(d.jsx)(j.a,{}),children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u043e\u0442\u043e"})]})]})}),Object(d.jsx)(o.m,{animate:!x,spaced:x,width:x?"560px":"100%",maxWidth:x?"560px":"100%",children:Object(d.jsxs)(o.f,{activeStory:c,tabbar:!x&&Object(d.jsxs)(o.o,{children:[Object(d.jsx)(o.p,{onClick:l,selected:"WhidePhoto"===c,"data-story":"WhidePhoto",text:"\u0428\u0438\u0440\u043e\u043a\u043e\u0435 \u0444\u043e\u0442\u043e",children:Object(d.jsx)(s.a,{})}),Object(d.jsx)(o.p,{onClick:l,selected:"ResizePhoto"===c,"data-story":"ResizePhoto",text:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u043e\u0442\u043e",children:Object(d.jsx)(j.a,{})})]}),children:[Object(d.jsx)(o.r,{id:"WhidePhoto",activePanel:"WhidePhoto",children:Object(d.jsx)(O,{id:"WhidePhoto"})}),Object(d.jsx)(o.r,{id:"ResizePhoto",activePanel:"ResizePhoto",children:Object(d.jsx)(h,{id:"ResizePhoto"})})]})})]})})})})};r.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.2a560535.chunk.js.map