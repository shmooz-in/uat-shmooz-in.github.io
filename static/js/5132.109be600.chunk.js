"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[5132],{25132:function(n,e,t){t.r(e);var i=t(29439),o=t(7276),a=t(45254),r=t(95173),s=t(50169),c=t(81239),l=t(65173),u=t(20045),d=t(85535),v=t(6334),_=t(31342),p=t(53904),m=t(43767),g=t(15097),f=t(56742),y=t(19306),x=t(96156),k=t(76692),b=t(45263);e.default=function(){var n,e=(0,s.Z)(),t=(0,f.I0)(),h=(0,a.lr)(),w=(0,i.Z)(h,1)[0],Z=(0,r.s0)(),j=w.get("txnId"),I=(0,f.v9)((function(n){return n.transaction.transaction})),E=(0,c.Z)(e.breakpoints.down("md"));(0,o.useEffect)((function(){j&&t((0,y.Nr)(j))}),[j]);var T=(0,o.useState)(0),P=(0,i.Z)(T,2),M=P[0],S=P[1];return(0,o.useEffect)((function(){var n=setInterval((function(){M>0&&S(M-1),0===M&&clearInterval(n)}),1e3);return function(){clearInterval(n)}}),[M]),(0,o.useEffect)((function(){if("PAYMENT_INITIATED"===I.payment_status)t((0,y.Lv)({payment_platform:"1",transaction_id:I.txn_id,transaction_type:I.transaction_type}));else if("PAYMENT_SUCCESS"===I.payment_status){var n="";switch(null===I||void 0===I?void 0:I.transaction_type){case m.k$.EVENT_BOOST:var e="/manage/event-list?item_sku=".concat(I.item_sku,"&transaction_type=").concat(null===I||void 0===I?void 0:I.transaction_type);setTimeout((function(){var n;window.opener?null===(n=window.opener)||void 0===n||n.postMessage({type:"event_boost_payment_interaction",navigateUrl:e},"*"):Z(e)}),5e3);break;case m.k$.EVENT_PREMIUM_VISIBILITY:setTimeout((function(){var n,e="/manage/event-list?item_sku=".concat(I.item_sku,"&transaction_type=").concat(null===I||void 0===I?void 0:I.transaction_type);window.opener?null===(n=window.opener)||void 0===n||n.postMessage({type:"event_premium_visibility_payment_interaction",navigateUrl:e},"*"):Z(e)}),5e3);break;case m.k$.VENUE_BOOST:var i="/manage/venue-list?item_sku=".concat(I.item_sku,"&transaction_type=").concat(null===I||void 0===I?void 0:I.transaction_type);setTimeout((function(){var n;window.opener?null===(n=window.opener)||void 0===n||n.postMessage({type:"venue_boost_payment_interaction",navigateUrl:i},"*"):Z(i)}),5e3);break;case"venue_booking":setTimeout((function(){var n,e,t,i="/user/bookings/venue/details?order_number=".concat(null===I||void 0===I?void 0:I.order_number),o=null!==(n=I.transaction_type_detail)&&void 0!==n&&n.event_slug?"/manage/event-edit/".concat(null===(e=I.transaction_type_detail)||void 0===e?void 0:e.event_slug,"?step=2"):i;window.opener?null===(t=window.opener)||void 0===t||t.postMessage({type:"venue_booking_payment_interaction",navigateUrl:o},"*"):Z(o)}),5e3);break;case"event":var o;null!==I&&void 0!==I&&null!==(o=I.booking_request)&&void 0!==o&&o.booking_user&&(n="/user/bookings/event/".concat(I.txn_id));break;default:n=x.tu}n&&(S(5),setTimeout((function(){Z(n)}),5e3))}return function(){}}),[I]),(0,b.jsx)(p.Z,{children:(0,b.jsxs)(l.ZP,{container:!0,direction:"column",spacing:m.dv,alignItems:"center",justifyContent:"center",sx:{my:3},children:[(0,b.jsx)(l.ZP,{item:!0,xs:12,children:(0,b.jsxs)(u.Z,{alignItems:"center",spacing:2,children:[(0,b.jsx)(d.Z,{align:"center",variant:E?"h2":"h1",sx:{fontWeight:400,color:"grey.500"},children:m.R$[null===I||void 0===I?void 0:I.payment_status]}),(0,b.jsxs)(d.Z,{variant:"body1",align:"center",children:["Your transaction id:"," ",(0,b.jsx)(d.Z,{variant:"subtitle1",component:"span",color:"primary",children:null===I||void 0===I?void 0:I.txn_id})]}),M>0&&(0,b.jsx)(d.Z,{variant:"caption",children:"Redirecting in (00:".concat(M<10?"0".concat(M):M,")")})]})}),(0,b.jsx)(l.ZP,{item:!0,xs:12,children:(0,b.jsx)(v.Z,{})}),"event"===(null===I||void 0===I?void 0:I.transaction_type)&&!(null!==I&&void 0!==I&&null!==(n=I.booking_request)&&void 0!==n&&n.booking_user)&&(0,b.jsx)(l.ZP,{item:!0,xs:12,children:(0,b.jsx)(k.default,{prop_txn_id:j,transaction:I})}),(0,b.jsx)(l.ZP,{item:!0,xs:12,children:(0,b.jsx)(l.ZP,{direction:E?"column-reverse":"row",container:!0,spacing:3,alignItems:E?"":"center",justifyContent:"space-between",children:(0,b.jsx)(l.ZP,{item:!0,children:(0,b.jsx)(_.Z,{component:a.rU,to:x.E6,variant:"text",startIcon:(0,b.jsx)(g.Z,{}),children:"Continue Shmoozing"})})})})]})})}},15097:function(n,e,t){var i=t(64836);e.Z=void 0;var o=i(t(34921)),a=t(45263),r=(0,o.default)((0,a.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");e.Z=r}}]);