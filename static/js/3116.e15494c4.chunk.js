"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[3116],{30262:function(e,n,t){var i=t(1413),r=t(7276),o=t(5055),a=t(85535),c=t(42037),l=t(34867),s=t(9340),d=t(62154),u=t(55241),_=t(29810),v=t(20370),h=t(50169),m=t(45263),p=function(e){var n=e.numSelected,t=e.actionComponent;return(0,m.jsxs)(o.Z,{sx:(0,i.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[(0,m.jsxs)(a.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}),(0,m.jsx)(c.Z,{sx:{flexGrow:1}}),t]})};n.Z=function(e){var n=e.hideSelectAll,t=e.onSelectAllClick,i=e.order,o=e.orderBy,g=e.numSelected,x=e.rowCount,f=e.onRequestSort,Z=e.selected,k=e.headCells,b=e.hideActions,j=e.actionComponent,S=(0,h.Z)(),y=(0,r.useMemo)((function(){return(null===k||void 0===k?void 0:k.length)>7?7:null===k||void 0===k?void 0:k.length}),[null===k||void 0===k?void 0:k.length]);return(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(s.Z,{children:g>0&&(0,m.jsx)(d.Z,{padding:"none",colSpan:y,children:(0,m.jsx)(p,{numSelected:Z.length,actionComponent:j})})}),(0,m.jsxs)(s.Z,{children:[!n&&(0,m.jsx)(d.Z,{padding:"checkbox",sx:{pl:3},children:(0,m.jsx)(u.Z,{color:"primary",indeterminate:g>0&&g<x,checked:x>0&&g===x,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),k.map((function(e){return(0,m.jsx)(d.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:o===e.id&&i,children:(0,m.jsxs)(_.Z,{active:o===e.id,direction:o===e.id?i:"asc",onClick:(n=e.id,function(e){f(e,n)}),children:[e.label,o===(null===e||void 0===e?void 0:e.id)?(0,m.jsx)(c.Z,{component:"span",sx:v.Z,children:"desc"===i?"sorted descending":"sorted ascending"}):null]})},e.id);var n})),!b&&(0,m.jsx)(d.Z,{sortDirection:!1,align:"center",sx:{pr:3},children:(0,m.jsx)(a.Z,{variant:"subtitle1",sx:{color:"dark"===S.palette.mode?"grey.600":"grey.900"},children:"Action"})})]})]})}},38058:function(e,n,t){t.d(n,{x:function(){return r}});var i=t(1413),r=function(e){var n=new Map;return e&&e.forEach((function(e){var t,r,o={currency:e.currency,customer_email:e.customer_email,customer_id:e.customer_id,customer_name:e.customer_name,customer_phone:e.customer_phone,event_category:e.event_category,event_end_date:e.event_end_date,event_end_time:e.event_end_time,event_id:e.event_id,event_slug:e.event_slug,event_repetitive:e.event_repetitive,event_start_date:e.event_start_date,event_start_time:e.event_start_time,event_title:e.event_title,is_paid:e.is_paid,item_sku:e.item_sku,order_number:e.order_number,organizer_id:e.organizer_id,payment_type:e.payment_type,txn_id:e.txn_id,transaction_id:e.transaction_id,created_at:e.created_at,amount_paid:e.amount_paid,cancel_log:e.cancel_log,booking_cancel:e.booking_cancel,booking_status:"pending"};e.booking_cancel?o.booking_status="cancelled":e.is_paid&&(o.booking_status="booked");var a={net_price:e.net_price,quantity:e.quantity,price:e.price,tax:e.tax,ticket_id:e.ticket_id,ticket_price:e.ticket_price,ticket_title:e.ticket_title,attendee_name:e.attendee_name,attendee_email:e.attendee_email,attendee_phone:e.attendee_phone},c=n.get(o.order_number);c?c.tickets.push(a):c=(0,i.Z)((0,i.Z)({},o),{},{tickets:[a]});var l=(null===(t=c)||void 0===t?void 0:t.tickets.reduce((function(e,n){return+((null===n||void 0===n?void 0:n.net_price)||0)+e}),0))||0;c.total_net_price=l;var s=(null===(r=c)||void 0===r?void 0:r.tickets.reduce((function(e,n){return+((null===n||void 0===n?void 0:n.tax)||0)+e}),0))||0;c.total_tax=s,n.set(o.order_number,c)})),n}},3116:function(e,n,t){t.r(n);var i=t(1413),r=t(93433),o=t(29439),a=t(7276),c=t(4550),l=t.n(c),s=t(50169),d=t(35970),u=t(65173),_=t(44390),v=t(11430),h=t(58735),m=t(20888),p=t(71516),g=t(9340),x=t(62154),f=t(41906),Z=t(85535),k=t(20045),b=t(20495),j=t(13209),S=t(53904),y=t(49042),C=t(30262),w=t(33932),P=t(17190),A=t(83303),z=t(95173),B=t(38058),D=t(42375),E=t(63601),I=t(43767),L=t(45263);function O(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}var q=function(e,n){return"desc"===e?function(e,t){return O(e,t,n)}:function(e,t){return-O(e,t,n)}};function M(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var i=n(e[0],t[0]);return 0!==i?i:e[1]-t[1]})),t.map((function(e){return e[0]}))}var Y=[{id:"event_title",numeric:!1,label:"Event Details",align:"left"},{id:"created_at",numeric:!1,label:"Booking On",align:"left"},{id:"tickets",numeric:!1,label:"Tickets",align:"right"},{id:"payment",numeric:!1,label:"Payment",align:"left"},{id:"booking_status",numeric:!1,label:"Status",align:"left"},{id:"order_number",numeric:!0,label:"Order #",align:"right"}];n.default=function(){var e=(0,s.Z)(),n=(0,y.I0)(),t=(0,z.s0)(),c=(0,a.useState)("desc"),O=(0,o.Z)(c,2),R=O[0],Q=O[1],T=(0,a.useState)("created_at"),G=(0,o.Z)(T,2),W=G[0],$=G[1],F=(0,a.useState)([]),H=(0,o.Z)(F,2),J=H[0],K=H[1],N=(0,a.useState)(0),U=(0,o.Z)(N,2),V=U[0],X=U[1],ee=(0,a.useState)(5),ne=(0,o.Z)(ee,2),te=ne[0],ie=ne[1],re=(0,a.useState)(""),oe=(0,o.Z)(re,2),ae=oe[0],ce=oe[1],le=(0,a.useState)([]),se=(0,o.Z)(le,2),de=se[0],ue=se[1],_e=(0,y.v9)((function(e){return e.booking})).bookings,ve=(0,a.useState)([]),he=(0,o.Z)(ve,2),me=he[0],pe=he[1],ge=(0,A.Z)().user;(0,a.useEffect)((function(){null!==ge&&void 0!==ge&&ge.id&&(ge.isAdmin?n((0,w.aL)()):n((0,w.aL)({customer_id:ge.id})))}),[ge]),(0,a.useEffect)((function(){var e=(0,B.x)(_e);ue((0,r.Z)(e.values())),pe((0,r.Z)(e.values()))}),[_e]);return(0,L.jsxs)(S.Z,{title:"Booking List",content:!1,children:[(0,L.jsx)(d.Z,{children:(0,L.jsx)(u.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:(0,L.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,L.jsx)(_.Z,{InputProps:{startAdornment:(0,L.jsx)(v.Z,{position:"start",children:(0,L.jsx)(P.Z,{fontSize:"small"})})},onChange:function(e){var n=null===e||void 0===e?void 0:e.target.value;if(ce(n||""),n){var t=me.filter((function(e){var t=!0,i=!1;return["event_title","order_number"].forEach((function(t){var r;null!==(r=e[t])&&void 0!==r&&r.toString().toLowerCase().includes(n.toString().toLowerCase())&&(i=!0)})),i||(t=!1),t}));ue(t)}else ue(me)},placeholder:"Search Booking",value:ae,size:"small"})})})}),(0,L.jsx)(h.Z,{children:(0,L.jsxs)(m.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,L.jsx)(C.Z,{numSelected:J.length,order:R,orderBy:W,onSelectAllClick:function(e){if(e.target.checked)if(J.length>0)K([]);else{var n=de.map((function(e){return e.id}));K(n)}else K([])},onRequestSort:function(e,n){Q(W===n&&"asc"===R?"desc":"asc"),$(n)},rowCount:de.length,theme:e,selected:J,headCells:Y,hideSelectAll:!0,hideActions:!0}),(0,L.jsx)(p.Z,{children:M(de,q(R,W)).slice(V*te,V*te+te).map((function(n,r){var o,a,c;if("number"===typeof n)return null;var s,d=(s=n.id,-1!==J.indexOf(s)),u="enhanced-table-checkbox-".concat(r);return(0,L.jsxs)(g.Z,{hover:!n.booking_cancel,role:"checkbox","aria-checked":d,tabIndex:-1,selected:d,sx:(0,i.Z)({},!!n.booking_cancel&&{bgcolor:"dark"===e.palette.mode?e.palette.error.dark:e.palette.error.light+30}),children:[(0,L.jsx)(x.Z,{component:"th",id:u,scope:"row",sx:{cursor:"pointer"},onClick:function(){return t("/user/bookings/event/".concat(n.txn_id))},children:(0,L.jsx)(f.Z,{underline:"hover",color:"default",sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:n.event_title})}),(0,L.jsx)(x.Z,{children:(0,L.jsx)(Z.Z,{variant:"caption",children:l()(n.created_at).format("DD/MM/YYYY hh:mm a")})}),(0,L.jsx)(x.Z,{align:"right",children:n.tickets.length}),(0,L.jsx)(x.Z,{children:(0,L.jsx)(k.Z,{children:(0,L.jsx)(D.Z,{label:"".concat(n.is_paid?"Paid":"Payment Pending",": ").concat((0,E.$)(n.amount_paid)),size:"small",chipcolor:n.is_paid?"success":"warning",variant:"outlined"})})}),(0,L.jsx)(x.Z,{children:(0,L.jsx)(b.Z,{placement:"top-end",title:n.booking_cancel?null===(o=n.cancel_log)||void 0===o?void 0:o.reason:"",children:(0,L.jsx)("span",{children:(0,L.jsx)(D.Z,{label:null===(a=I.vQ[n.booking_status])||void 0===a?void 0:a.title,size:"small",chipcolor:null===(c=I.vQ[n.booking_status])||void 0===c?void 0:c.color,variant:"outlined",sx:{width:"max-content"}})})})}),(0,L.jsx)(x.Z,{align:"right",children:n.order_number})]},r)}))})]})}),(0,L.jsx)(j.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:de.length,rowsPerPage:te,page:V,onPageChange:function(e,n){X(n)},onRowsPerPageChange:function(e){ie(parseInt(null===e||void 0===e?void 0:e.target.value,10)),X(0)}})]})}}}]);