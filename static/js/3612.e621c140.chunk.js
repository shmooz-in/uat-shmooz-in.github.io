"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[3612],{32689:function(e,t,n){var i=n(1413),r=(n(47313),n(9289)),o=n(61113),a=n(9506),l=n(61689),c=n(47131),s=n(23477),d=n(24076),u=n(67478),_=n(44758),h=n(82558),v=n(50282),m=n(19860),p=n(51997),g=n(46417),x=function(e){var t=e.numSelected;return(0,g.jsxs)(r.Z,{sx:(0,i.Z)({p:0,pl:1,pr:1},t>0&&{color:function(e){return e.palette.secondary.main}}),children:[t>0?(0,g.jsxs)(o.Z,{color:"inherit",variant:"h4",children:[t," Selected"]}):(0,g.jsx)(o.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,g.jsx)(a.Z,{sx:{flexGrow:1}}),t>0&&(0,g.jsx)(l.Z,{title:"Delete",children:(0,g.jsx)(c.Z,{size:"large",children:(0,g.jsx)(p.Z,{fontSize:"small"})})})]})};t.Z=function(e){var t=e.hideSelectAll,n=e.onSelectAllClick,i=e.order,r=e.orderBy,l=e.numSelected,c=e.rowCount,p=e.onRequestSort,f=e.selected,Z=e.headCells,k=e.hideActions,b=(0,m.Z)();return(0,g.jsx)(s.Z,{children:(0,g.jsxs)(d.Z,{children:[!t&&(0,g.jsx)(u.Z,{padding:"checkbox",sx:{pl:3},children:(0,g.jsx)(_.Z,{color:"primary",indeterminate:l>0&&l<c,checked:c>0&&l===c,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),l>0&&(0,g.jsx)(u.Z,{padding:"none",colSpan:7,children:(0,g.jsx)(x,{numSelected:f.length})}),(t||l<=0)&&Z.map((function(e){return(0,g.jsx)(u.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&i,children:(0,g.jsxs)(h.Z,{active:r===e.id,direction:r===e.id?i:"asc",onClick:(t=e.id,function(e){p(e,t)}),children:[e.label,r===(null===e||void 0===e?void 0:e.id)?(0,g.jsx)(a.Z,{component:"span",sx:v.Z,children:"desc"===i?"sorted descending":"sorted ascending"}):null]})},e.id);var t})),!k&&l<=0&&(0,g.jsx)(u.Z,{sortDirection:!1,align:"center",sx:{pr:3},children:(0,g.jsx)(o.Z,{variant:"subtitle1",sx:{color:"dark"===b.palette.mode?"grey.600":"grey.900"},children:"Action"})})]})})}},77876:function(e,t,n){n.d(t,{x:function(){return r}});var i=n(1413),r=function(e){var t=new Map;return e&&e.forEach((function(e){var n,r,o={currency:e.currency,customer_email:e.customer_email,customer_id:e.customer_id,customer_name:e.customer_name,customer_phone:e.customer_phone,event_category:e.event_category,event_end_date:e.event_end_date,event_end_time:e.event_end_time,event_id:e.event_id,event_slug:e.event_slug,event_repetitive:e.event_repetitive,event_start_date:e.event_start_date,event_start_time:e.event_start_time,event_title:e.event_title,is_paid:e.is_paid,item_sku:e.item_sku,order_number:e.order_number,organizer_id:e.organizer_id,payment_type:e.payment_type,txn_id:e.txn_id,transaction_id:e.transaction_id,created_at:e.created_at,amount_paid:e.amount_paid,cancel_log:e.cancel_log,booking_cancel:e.booking_cancel,booking_status:"pending"};e.booking_cancel?o.booking_status="cancelled":e.is_paid&&(o.booking_status="booked");var a={net_price:e.net_price,quantity:e.quantity,price:e.price,tax:e.tax,ticket_id:e.ticket_id,ticket_price:e.ticket_price,ticket_title:e.ticket_title,attendee_name:e.attendee_name,attendee_email:e.attendee_email,attendee_phone:e.attendee_phone},l=t.get(o.order_number);l?l.tickets.push(a):l=(0,i.Z)((0,i.Z)({},o),{},{tickets:[a]});var c=(null===(n=l)||void 0===n?void 0:n.tickets.reduce((function(e,t){return+((null===t||void 0===t?void 0:t.net_price)||0)+e}),0))||0;l.total_net_price=c;var s=(null===(r=l)||void 0===r?void 0:r.tickets.reduce((function(e,t){return+((null===t||void 0===t?void 0:t.tax)||0)+e}),0))||0;l.total_tax=s,t.set(o.order_number,l)})),t}},73612:function(e,t,n){n.r(t);var i=n(1413),r=n(93433),o=n(29439),a=n(47313),l=n(70816),c=n.n(l),s=n(19860),d=n(93405),u=n(9019),_=n(24631),h=n(41727),v=n(51629),m=n(66835),p=n(57861),g=n(24076),x=n(67478),f=n(90891),Z=n(61113),k=n(35898),b=n(61689),j=n(62323),S=n(33497),y=n(12754),w=n(32689),C=n(71062),P=n(57983),z=n(54285),A=n(58467),D=n(77876),B=n(39236),E=n(54918),I=n(12401),L=n(46417);function O(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}var q=function(e,t){return"desc"===e?function(e,n){return O(e,n,t)}:function(e,n){return-O(e,n,t)}};function Y(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var i=t(e[0],n[0]);return 0!==i?i:e[1]-n[1]})),n.map((function(e){return e[0]}))}var M=[{id:"event_title",numeric:!1,label:"Event Details",align:"left"},{id:"created_at",numeric:!1,label:"Booking On",align:"left"},{id:"tickets",numeric:!1,label:"Tickets",align:"right"},{id:"payment",numeric:!1,label:"Payment",align:"left"},{id:"booking_status",numeric:!1,label:"Status",align:"left"},{id:"order_number",numeric:!0,label:"Order #",align:"right"}];t.default=function(){var e=(0,s.Z)(),t=(0,y.I0)(),n=(0,A.s0)(),l=(0,a.useState)("desc"),O=(0,o.Z)(l,2),R=O[0],T=O[1],Q=(0,a.useState)("created_at"),G=(0,o.Z)(Q,2),N=G[0],W=G[1],$=(0,a.useState)([]),F=(0,o.Z)($,2),H=F[0],J=F[1],K=(0,a.useState)(0),U=(0,o.Z)(K,2),V=U[0],X=U[1],ee=(0,a.useState)(5),te=(0,o.Z)(ee,2),ne=te[0],ie=te[1],re=(0,a.useState)(""),oe=(0,o.Z)(re,2),ae=oe[0],le=oe[1],ce=(0,a.useState)([]),se=(0,o.Z)(ce,2),de=se[0],ue=se[1],_e=(0,y.v9)((function(e){return e.booking})).bookings,he=(0,a.useState)([]),ve=(0,o.Z)(he,2),me=ve[0],pe=ve[1],ge=(0,z.Z)().user;(0,a.useEffect)((function(){null!==ge&&void 0!==ge&&ge.id&&(ge.isAdmin?t((0,C.aL)()):t((0,C.aL)({customer_id:ge.id})))}),[ge]),(0,a.useEffect)((function(){var e=(0,D.x)(_e);ue((0,r.Z)(e.values())),pe((0,r.Z)(e.values()))}),[_e]);return(0,L.jsxs)(S.Z,{title:"Booking List",content:!1,children:[(0,L.jsx)(d.Z,{children:(0,L.jsx)(u.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:(0,L.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,L.jsx)(_.Z,{InputProps:{startAdornment:(0,L.jsx)(h.Z,{position:"start",children:(0,L.jsx)(P.Z,{fontSize:"small"})})},onChange:function(e){var t=null===e||void 0===e?void 0:e.target.value;if(le(t||""),t){var n=me.filter((function(e){var n=!0,i=!1;return["event_title","order_number"].forEach((function(n){var r;null!==(r=e[n])&&void 0!==r&&r.toString().toLowerCase().includes(t.toString().toLowerCase())&&(i=!0)})),i||(n=!1),n}));ue(n)}else ue(me)},placeholder:"Search Booking",value:ae,size:"small"})})})}),(0,L.jsx)(v.Z,{children:(0,L.jsxs)(m.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,L.jsx)(w.Z,{numSelected:H.length,order:R,orderBy:N,onSelectAllClick:function(e){if(e.target.checked)if(H.length>0)J([]);else{var t=de.map((function(e){return e.id}));J(t)}else J([])},onRequestSort:function(e,t){T(N===t&&"asc"===R?"desc":"asc"),W(t)},rowCount:de.length,theme:e,selected:H,headCells:M,hideSelectAll:!0,hideActions:!0}),(0,L.jsx)(p.Z,{children:Y(de,q(R,N)).slice(V*ne,V*ne+ne).map((function(t,r){var o,a,l;if("number"===typeof t)return null;var s,d=(s=t.id,-1!==H.indexOf(s)),u="enhanced-table-checkbox-".concat(r);return(0,L.jsxs)(g.Z,{hover:!t.booking_cancel,role:"checkbox","aria-checked":d,tabIndex:-1,selected:d,sx:(0,i.Z)({},!!t.booking_cancel&&{bgcolor:"dark"===e.palette.mode?e.palette.error.dark:e.palette.error.light+30}),children:[(0,L.jsx)(x.Z,{component:"th",id:u,scope:"row",sx:{cursor:"pointer"},onClick:function(){return n("/user/bookings/event/".concat(t.txn_id))},children:(0,L.jsx)(f.Z,{underline:"hover",color:"default",sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:t.event_title})}),(0,L.jsx)(x.Z,{children:(0,L.jsx)(Z.Z,{variant:"caption",children:c()(t.created_at).format("DD/MM/YYYY hh:mm a")})}),(0,L.jsx)(x.Z,{align:"right",children:t.tickets.length}),(0,L.jsx)(x.Z,{children:(0,L.jsx)(k.Z,{children:(0,L.jsx)(B.Z,{label:"".concat(t.is_paid?"Paid":"Payment Pending",": ").concat((0,E.$)(t.amount_paid)),size:"small",chipcolor:t.is_paid?"success":"warning",variant:"outlined"})})}),(0,L.jsx)(x.Z,{children:(0,L.jsx)(b.Z,{placement:"top-end",title:t.booking_cancel?null===(o=t.cancel_log)||void 0===o?void 0:o.reason:"",children:(0,L.jsx)("span",{children:(0,L.jsx)(B.Z,{label:null===(a=I.vQ[t.booking_status])||void 0===a?void 0:a.title,size:"small",chipcolor:null===(l=I.vQ[t.booking_status])||void 0===l?void 0:l.color,variant:"outlined",sx:{width:"max-content"}})})})}),(0,L.jsx)(x.Z,{align:"right",children:t.order_number})]},r)}))})]})}),(0,L.jsx)(j.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:de.length,rowsPerPage:ne,page:V,onPageChange:function(e,t){X(t)},onRowsPerPageChange:function(e){ie(parseInt(null===e||void 0===e?void 0:e.target.value,10)),X(0)}})]})}}}]);