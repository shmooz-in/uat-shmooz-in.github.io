"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[934],{30934:function(n,e,t){t.r(e);var i=t(29439),a=t(47313),o=t(2135),r=t(58467),s=t(19860),c=t(24813),u=t(9019),l=t(35898),v=t(61113),d=t(19536),p=t(24193),m=t(33497),_=t(12401),f=t(36859),x=t(85554),y=t(10966),g=t(36287),h=t(46417);e.default=function(){var n=(0,s.Z)(),e=(0,x.I0)(),t=(0,o.lr)(),Z=(0,i.Z)(t,1)[0],b=(0,r.s0)(),j=Z.get("txnId"),k=(0,x.v9)((function(n){return n.transaction.transaction})),w=(0,c.Z)(n.breakpoints.down("md"));(0,a.useEffect)((function(){j&&e((0,y.Nr)(j))}),[j]);var I=(0,a.useState)(0),E=(0,i.Z)(I,2),P=E[0],T=E[1];return(0,a.useEffect)((function(){var n=setInterval((function(){P>0&&T(P-1),0===P&&clearInterval(n)}),1e3);return function(){clearInterval(n)}}),[P]),(0,a.useEffect)((function(){if("PAYMENT_INITIATED"===k.payment_status)e((0,y.Lv)({payment_platform:"1",transaction_id:k.txn_id,transaction_type:k.transaction_type}));else if("PAYMENT_SUCCESS"===k.payment_status){var n="";switch(null===k||void 0===k?void 0:k.transaction_type){case"event_boost":var t="/manage/event-list?item_sku=".concat(k.item_sku,"&transaction_type=").concat(null===k||void 0===k?void 0:k.transaction_type);setTimeout((function(){var n;window.opener?null===(n=window.opener)||void 0===n||n.postMessage({type:"event_boost_payment_interaction",navigateUrl:t},"*"):b(t)}),5e3);break;case"event_premium_visibility":setTimeout((function(){var n,e="/manage/event-list?item_sku=".concat(k.item_sku,"&transaction_type=").concat(null===k||void 0===k?void 0:k.transaction_type);window.opener?null===(n=window.opener)||void 0===n||n.postMessage({type:"event_premium_visibility_payment_interaction",navigateUrl:e},"*"):b(e)}),5e3);break;case"venue_booking":setTimeout((function(){var n,e="/user/bookings/venue";window.opener?null===(n=window.opener)||void 0===n||n.postMessage({type:"venue_booking_payment_interaction",navigateUrl:e},"*"):b(e)}),5e3);break;case"event":n="/user/bookings/event/".concat(k.txn_id);break;default:n=g.tu}T(5),n&&setTimeout((function(){b(n)}),5e3)}return function(){}}),[k]),(0,h.jsx)(m.Z,{children:(0,h.jsxs)(u.ZP,{container:!0,direction:"column",spacing:_.dv,alignItems:"center",justifyContent:"center",sx:{my:3},children:[(0,h.jsx)(u.ZP,{item:!0,xs:12,children:(0,h.jsxs)(l.Z,{alignItems:"center",spacing:2,children:[(0,h.jsx)(v.Z,{align:"center",variant:w?"h2":"h1",sx:{fontWeight:400,color:"grey.500"},children:_.R$[null===k||void 0===k?void 0:k.payment_status]}),(0,h.jsxs)(v.Z,{variant:"body1",align:"center",children:["Your transaction id:"," ",(0,h.jsx)(v.Z,{variant:"subtitle1",component:"span",color:"primary",children:null===k||void 0===k?void 0:k.txn_id})]}),P>0&&(0,h.jsx)(v.Z,{variant:"caption",children:"Redirecting in (00:".concat(P<10?"0".concat(P):P,")")})]})}),(0,h.jsx)(u.ZP,{item:!0,xs:12,children:(0,h.jsx)(d.Z,{})}),(0,h.jsx)(u.ZP,{item:!0,xs:12,children:(0,h.jsx)(u.ZP,{direction:w?"column-reverse":"row",container:!0,spacing:3,alignItems:w?"":"center",justifyContent:"space-between",children:(0,h.jsx)(u.ZP,{item:!0,children:(0,h.jsx)(p.Z,{component:o.rU,to:g.E6,variant:"text",startIcon:(0,h.jsx)(f.Z,{}),children:"Continue Shmoozing"})})})})]})})}},36859:function(n,e,t){var i=t(64836);e.Z=void 0;var a=i(t(45045)),o=t(46417),r=(0,a.default)((0,o.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");e.Z=r}}]);