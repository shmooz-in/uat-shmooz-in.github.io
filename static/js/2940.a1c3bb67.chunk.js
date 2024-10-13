"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[2940],{72940:function(e,n,t){t.r(n);var a=t(15861),r=t(29439),o=t(64687),s=t.n(o),c=t(7276),i=t(95173),l=t(45254),d=t(50169),u=t(81239),v=t(65173),g=t(20045),f=t(85535),m=t(6334),p=t(31342),h=t(53904),k=t(43767),x=t(15097),Z=t(56742),b=t(96156),A=t(93449),R=t(4471),E=t(83303),w=t(45263);n.default=function(){var e=(0,d.Z)(),n=(0,Z.I0)(),t=(0,i.UO)().code,o=(0,E.Z)().user,I=(0,i.s0)(),j=(0,l.lr)(),L=(0,r.Z)(j,1)[0],_=L.get("order_number"),D=L.get("ticket_ids"),y=(0,c.useState)("NOT_PROCESSED"),P=(0,r.Z)(y,2),M=P[0],S=P[1],C=(0,u.Z)(e.breakpoints.down("md")),K=function(){var e=(0,a.Z)(s().mark((function e(){var a,r,c,i,l,d,u,v,g,f,m,p,h,k;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=atob(t),c=new URLSearchParams(r).get("ticket_ids"),i=new URLSearchParams(r).get("order_number"),_&&(i=_),D&&(c=D),l=null===(a=c)||void 0===a?void 0:a.split(","),d=!1,!i){e.next=46;break}return e.prev=8,e.next=11,A.Z.get("/api/bookings/".concat(i));case 11:g=e.sent,d=(null===o||void 0===o?void 0:o.id)==(null===g||void 0===g||null===(u=g.data)||void 0===u||null===(v=u.data)||void 0===v?void 0:v.organizer_id),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(8),S("INVALID"),n((0,R.ss)({open:!0,message:"An error occured, please try later",variant:"alert",alert:{color:"warning"},close:!1}));case 19:if(e.prev=19,!d){e.next=43;break}if(!((null===l||void 0===l?void 0:l.length)>0)){e.next=25;break}l.forEach((function(e){A.Z.postForm("/api/bookings/attendance",{order_number:i,ticket_id:e}).then((function(e){var t=e.data;S("MARKED"),n((0,R.ss)({open:!0,message:"Attendance Marked",variant:"alert",alert:{color:"success"},close:!1})),console.log("---- attendance response data",t)})).catch((function(e){var t,a;console.log(e);var r="Please try again later",o="error";"booking attendees already checked in"===(null===(t=e.data)||void 0===t||null===(a=t.message)||void 0===a?void 0:a.toLowerCase())?(S("ALREADY_MARKED"),r="Attendance Already Marked",o="warning"):S("ERROR"),n((0,R.ss)({open:!0,message:r,variant:"alert",alert:{color:o},close:!1}))}))})),e.next=41;break;case 25:return e.prev=25,e.next=28,A.Z.postForm("/api/bookings/attendance",{order_number:new URLSearchParams(r).get("order_number"),ticket_id:new URLSearchParams(r).get("ticket_id")});case 28:f=e.sent,console.log(f),S("MARKED"),n((0,R.ss)({open:!0,message:"Attendance Marked",variant:"alert",alert:{color:"success"},close:!1})),e.next=41;break;case 34:e.prev=34,e.t1=e.catch(25),console.log(e.t1),h="Please try again later",k="error","booking attendees already checked in"===(null===(m=e.t1.data)||void 0===m||null===(p=m.message)||void 0===p?void 0:p.toLowerCase())?(S("ALREADY_MARKED"),h="Attendance Already Marked",k="warning"):S("ERROR"),n((0,R.ss)({open:!0,message:h,variant:"alert",alert:{color:k},close:!1}));case 41:e.next=45;break;case 43:S("INVALID"),n((0,R.ss)({open:!0,message:"No valid permissions",variant:"alert",alert:{color:"warning"},close:!1}));case 45:return e.finish(19);case 46:case"end":return e.stop()}}),e,null,[[8,15,19,46],[25,34]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){null!==o&&void 0!==o&&o.id&&K()}),[t]);var N=(0,c.useState)(0),U=(0,r.Z)(N,2),z=U[0],O=U[1];return(0,c.useEffect)((function(){var e=setInterval((function(){z>0&&O(z-1),0===z&&clearInterval(e)}),1e3);return function(){clearInterval(e)}}),[z]),(0,c.useEffect)((function(){if("MARKED"===M||"INVALID"===M||"ALREADY_MARKED"===M){var e="INVALID"===M?b.E6:b.tu;O(5),e&&setTimeout((function(){I(e)}),5e3)}return function(){}}),[M]),(0,w.jsx)(h.Z,{children:(0,w.jsxs)(v.ZP,{container:!0,direction:"column",spacing:k.dv,alignItems:"center",justifyContent:"center",sx:{my:3},children:[(0,w.jsx)(v.ZP,{item:!0,xs:12,children:(0,w.jsxs)(g.Z,{alignItems:"center",spacing:2,children:[(0,w.jsx)(f.Z,{align:"center",variant:C?"h2":"h1",sx:{fontWeight:400,color:"grey.500"},children:k.I8[M]}),z>0&&(0,w.jsx)(f.Z,{variant:"caption",children:"Redirecting in (00:".concat(z<10?"0".concat(z):z,")")})]})}),(0,w.jsx)(v.ZP,{item:!0,xs:12,children:(0,w.jsx)(m.Z,{})}),(0,w.jsx)(v.ZP,{item:!0,xs:12,children:(0,w.jsx)(v.ZP,{direction:C?"column-reverse":"row",container:!0,spacing:3,alignItems:C?"":"center",justifyContent:"space-between",children:(0,w.jsx)(v.ZP,{item:!0,children:(0,w.jsx)(p.Z,{component:l.rU,to:b.E6,variant:"text",startIcon:(0,w.jsx)(x.Z,{}),children:"Continue Shmoozing"})})})})]})})}},15097:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(34921)),o=t(45263),s=(0,r.default)((0,o.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");n.Z=s}}]);