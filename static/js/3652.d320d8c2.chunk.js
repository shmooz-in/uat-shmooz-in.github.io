"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[3652],{1759:function(i,e,n){var r=n(1413),s=n(45987),t=n(47313),a=n(19860),l=n(73428),d=n(54641),c=n(61113),o=n(19536),x=n(93405),h=n(46417),Z=["children","content","contentClass","darkTitle","secondary","sx","contentSX","title"],j=t.forwardRef((function(i,e){var n=i.children,t=i.content,j=i.contentClass,m=i.darkTitle,u=i.secondary,p=i.sx,v=void 0===p?{}:p,b=i.contentSX,g=void 0===b?{}:b,y=i.title,P=(0,s.Z)(i,Z),f=(0,a.Z)();return(0,h.jsxs)(l.Z,(0,r.Z)((0,r.Z)({ref:e,sx:(0,r.Z)({border:"1px solid",borderColor:"dark"===f.palette.mode?f.palette.dark.light+15:f.palette.grey[200],":hover":{boxShadow:"dark"===f.palette.mode?"0 2px 14px 0 rgb(33 150 243 / 10%)":"0 2px 14px 0 rgb(32 40 45 / 8%)"}},v)},P),{},{children:[!m&&y&&(0,h.jsx)(d.Z,{sx:{p:2.5},title:(0,h.jsx)(c.Z,{variant:"h5",children:y}),action:u}),m&&y&&(0,h.jsx)(d.Z,{sx:{p:2.5},title:(0,h.jsx)(c.Z,{variant:"h4",children:y}),action:u}),y&&(0,h.jsx)(o.Z,{sx:{opacity:1,borderColor:"dark"===f.palette.mode?f.palette.dark.light+15:f.palette.grey[200]}}),t&&(0,h.jsx)(x.Z,{sx:(0,r.Z)({p:2.5},g),className:j||"",children:n}),!t&&n]}))}));j.defaultProps={content:!0},e.Z=j},89544:function(i,e,n){var r=n(9019),s=n(61113),t=n(19536),a=n(19860),l=n(88587),d=n.n(l),c=n(1759),o=n(12401),x=n(46417);e.Z=function(i){var e,n,l,h=i.checkout,Z=(0,a.Z)(),j=(null===h||void 0===h?void 0:h.tickets.reduce((function(i,e){var n,r,s=0;return(null===e||void 0===e||null===(n=e.final_payable_price_breakup)||void 0===n||null===(r=n.tax_details)||void 0===r?void 0:r.length)>0&&(s=e.final_payable_price_breakup.tax_details.reduce((function(i,e){return i+ +e.tax_amount}),0)),s+i}),0))||0,m=(null===h||void 0===h?void 0:h.tickets.reduce((function(i,e){var n=null===e||void 0===e?void 0:e.final_payable_price_breakup;return+n.booking_fees+ +n.CGST_on_booking_fees+ +n.SGST_on_booking_fees+i}),0))||0,u=+((null===h||void 0===h||null===(e=h.total_gross_payable_breakup)||void 0===e?void 0:e.platform_fees)||0);return(0,x.jsx)(c.Z,{sx:{mx:3,mb:3,bgcolor:"dark"===Z.palette.mode?Z.palette.dark.main:Z.palette.primary.light},children:(0,x.jsx)(r.ZP,{container:!0,justifyContent:"flex-end",spacing:o.dv,children:(0,x.jsx)(r.ZP,{item:!0,sm:6,md:6,children:(0,x.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,x.jsx)(r.ZP,{item:!0,xs:12,children:(0,x.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,x.jsx)(r.ZP,{item:!0,xs:6,children:(0,x.jsx)(s.Z,{align:"right",variant:"subtitle1",children:"Sub Total :"})}),(0,x.jsx)(r.ZP,{item:!0,xs:6,children:(0,x.jsx)(s.Z,{align:"right",variant:"body2",children:d()(null===h||void 0===h?void 0:h.total_cart_value).format({symbol:"\u20b9"})})}),(0,x.jsx)(r.ZP,{item:!0,xs:6,children:(0,x.jsx)(s.Z,{align:"right",variant:"subtitle1",children:"Taxes (Tickets) :"})}),(0,x.jsx)(r.ZP,{item:!0,xs:6,children:(0,x.jsx)(s.Z,{align:"right",variant:"body2",children:d()(j).format({symbol:"\u20b9"})})}),(0,x.jsx)(r.ZP,{item:!0,xs:6,children:(0,x.jsx)(s.Z,{align:"right",variant:"subtitle1",children:"Booking Fees :"})}),(0,x.jsx)(r.ZP,{item:!0,xs:6,children:(0,x.jsx)(s.Z,{align:"right",variant:"body2",children:m<=0?"-":d()(m).format({symbol:"\u20b9"})})}),(null===h||void 0===h?void 0:h.commission_paid_by_end_user)&&(0,x.jsx)(r.ZP,{item:!0,xs:6,children:(0,x.jsx)(s.Z,{align:"right",variant:"subtitle1",children:"Organizer Commission:"})}),(null===h||void 0===h?void 0:h.commission_paid_by_end_user)&&(0,x.jsx)(r.ZP,{item:!0,xs:6,children:(0,x.jsx)(s.Z,{align:"right",variant:"body2",children:u<=0?"-":d()(u).format({symbol:"\u20b9"})})}),(0,x.jsx)(r.ZP,{item:!0,xs:6,children:(0,x.jsx)(s.Z,{align:"right",variant:"subtitle1",children:"Coupon Discount :"})}),(0,x.jsx)(r.ZP,{item:!0,xs:6,children:(0,x.jsx)(s.Z,{align:"right",variant:"body2",children:(null===h||void 0===h||null===(n=h.discount_by_shmooz_breakup)||void 0===n?void 0:n.discount_amount)<=0?"-":d()(null===h||void 0===h||null===(l=h.discount_by_shmooz_breakup)||void 0===l?void 0:l.discount_amount).format({symbol:"\u20b9"})})})]})}),(0,x.jsx)(r.ZP,{item:!0,xs:12,children:(0,x.jsx)(t.Z,{sx:{bgcolor:"dark.main"}})}),(0,x.jsx)(r.ZP,{item:!0,xs:12,children:(0,x.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,x.jsx)(r.ZP,{item:!0,xs:6,children:(0,x.jsx)(s.Z,{align:"right",color:"secondary",variant:"subtitle1",children:"Total :"})}),(0,x.jsx)(r.ZP,{item:!0,xs:6,children:(0,x.jsx)(s.Z,{align:"right",color:"secondary",variant:"subtitle1",children:d()(null===h||void 0===h?void 0:h.total_net_payable).format({symbol:"\u20b9"})})})]})})]})})})})}},59331:function(i,e,n){var r=n(24076),s=n(67478),t=n(9019),a=n(35898),l=n(61113),d=n(51629),c=n(66835),o=n(23477),x=n(57861),h=n(19860),Z=n(88587),j=n.n(Z),m=(n(1759),n(12401),n(47313)),u=n(46417);function p(i){var e,n=i.ticket,d=i.index;return null!==(e=n.final_payable_price_breakup.tax_details)&&void 0!==e&&e.length&&n.final_payable_price_breakup.tax_details[0].tax_type,(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(r.Z,{sx:{"&:last-of-type td, &:last-of-type th":{border:0}},children:[(0,u.jsx)(s.Z,{component:"th",scope:"row",children:(0,u.jsx)(t.ZP,{container:!0,alignItems:"center",spacing:2,children:(0,u.jsx)(t.ZP,{item:!0,children:(0,u.jsxs)(a.Z,{spacing:0,children:[(0,u.jsx)(l.Z,{variant:"subtitle1",children:n.title}),(0,u.jsx)(l.Z,{variant:"subtitle2",children:n.description})]})})})}),(0,u.jsx)(s.Z,{align:"right",children:(0,u.jsxs)(a.Z,{children:[n.final_payable_price_breakup.final_base_price&&(0,u.jsx)(l.Z,{variant:"subtitle1",children:j()(n.final_payable_price_breakup.final_base_price).format({symbol:"\u20b9"})}),n.price!=n.final_payable_price_breakup.final_base_price&&(0,u.jsx)(l.Z,{variant:"caption",sx:{textDecoration:"line-through"},children:j()(n.price).format({symbol:"\u20b9"})})]})}),(0,u.jsx)(s.Z,{align:"right",children:(0,u.jsx)(l.Z,{variant:"subtitle1",children:n.booking_fees_breakup.quantity})}),(0,u.jsx)(s.Z,{align:"right",children:n.final_payable_price_breakup.final_base_price&&n.booking_fees_breakup.quantity&&(0,u.jsx)(l.Z,{variant:"subtitle1",children:j()(n.final_payable_price_breakup.final_base_price*n.booking_fees_breakup.quantity).format({symbol:"\u20b9"})})})]},d)})}e.Z=function(i){var e=i.checkout,n=(0,h.Z)(),t=(0,m.useMemo)((function(){return(null===e||void 0===e?void 0:e.tickets)||[]}),null===e||void 0===e?void 0:e.tickets);null===e||void 0===e||e.tickets.reduce((function(i,e){var n,r,s=0;return(null===e||void 0===e||null===(n=e.final_payable_price_breakup)||void 0===n||null===(r=n.tax_details)||void 0===r?void 0:r.length)>0&&(s=+e.final_payable_price_breakup.tax_details[0].tax_amount),s+i}),0),null===e||void 0===e||e.tickets.reduce((function(i,e){var n=null===e||void 0===e?void 0:e.final_payable_price_breakup;return+n.booking_fees+ +n.CGST_on_booking_fees+ +n.SGST_on_booking_fees+i}),0);return(0,u.jsx)(d.Z,{children:(0,u.jsxs)(c.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,u.jsx)(o.Z,{sx:{borderTop:"1px solid",color:"dark"===n.palette.mode?n.palette.dark.light+15:"grey.200"},children:(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(s.Z,{children:"Ticket"}),(0,u.jsx)(s.Z,{align:"right",children:"Price"}),(0,u.jsx)(s.Z,{align:"center",children:"Quantity"}),(0,u.jsx)(s.Z,{align:"right",children:"Total"})]})}),(0,u.jsx)(x.Z,{children:t.map((function(i,e){return(0,u.jsx)(p,{index:e,ticket:i},e)}))})]})})}},63652:function(i,e,n){n.r(e),n.d(e,{default:function(){return Zi}});var r=n(29439),s=n(1413),t=n(45987),a=n(47313),l=n(58467),d=n(2135),c=n(19860),o=n(9506),x=n(5297),h=n(65280),Z=n(9019),j=n(61113),m=n(19536),u=n(35898),p=n(1759),v=n(39236),b=n(12401),g=n(73869),y=n(70805),P=n(69692),f=n(89544),_=n(59331),k=n(46417),w={borderColor:"primary.light"},C={width:15,height:15,verticalAlign:"text-top",mr:.5,mt:.25};function T(i,e,n,r,s){return{product:i,description:e,quantity:n,amount:r,total:s}}T("Logo Design","lorem ipsum dolor sit amat, connecter adieu siccing eliot","6","\u20b9200.00","\u20b91200.00"),T("Landing Page","lorem ipsum dolor sit amat, connecter adieu siccing eliot","7","\u20b9100.00","\u20b9700.00"),T("Admin Template","lorem ipsum dolor sit amat, connecter adieu siccing eliot","5","\u20b9150.00","\u20b9750.00");var S=function(i){var e=i.bookingForOrder;(0,c.Z)();return(0,k.jsxs)(Z.ZP,{container:!0,spacing:b.dv,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(p.Z,{title:"Customer",secondary:(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Placed on 12.07.2018 10:00"}),children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:b.dv,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:3,children:[(0,k.jsx)(Z.ZP,{item:!0,children:(0,k.jsxs)(j.Z,{variant:"body2",children:[(0,k.jsx)(g.Z,{sx:C}),null===e||void 0===e?void 0:e.customer_name]})}),(0,k.jsx)(Z.ZP,{item:!0,children:(0,k.jsxs)(j.Z,{variant:"body2",children:[(0,k.jsx)(P.Z,{sx:C}),null===e||void 0===e?void 0:e.customer_phone]})}),(0,k.jsx)(Z.ZP,{item:!0,children:(0,k.jsxs)(j.Z,{variant:"body2",children:[(0,k.jsx)(y.Z,{sx:C}),null===e||void 0===e?void 0:e.customer_email]})})]})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(m.Z,{sx:w})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:b.dv,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,k.jsxs)(u.Z,{spacing:2,children:[(0,k.jsx)(j.Z,{variant:"h4",children:"Payment method"}),(0,k.jsxs)(u.Z,{spacing:0,children:[(0,k.jsx)(j.Z,{variant:"h6",sx:{mb:1},children:"Credit Card"}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Transaction ID :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"000001-TXT"})]}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Amount :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"\u20b92500"})]})]})]})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,k.jsx)(u.Z,{spacing:0,sx:{mt:{xs:0,md:3}},children:(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Payment status :"}),(0,k.jsx)(v.Z,{label:"Paid",variant:"outlined",size:"small",chipcolor:"success"})]})})})]})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(m.Z,{sx:w})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:b.dv,children:[(0,k.jsx)(Z.ZP,{item:!0,sm:6,md:4,children:(0,k.jsxs)(u.Z,{spacing:2,children:[(0,k.jsx)(j.Z,{variant:"h4",children:"Billing address"}),(0,k.jsxs)(u.Z,{children:[(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"First name :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"John"})]}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Last name :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"Doe"})]})]}),(0,k.jsxs)(u.Z,{children:[(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Address :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"Address Line 1"})]}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"City :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"Surat"})]}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Country :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"India"})]}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"State :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"Gujarat"})]}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Pin code :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"000000"})]})]}),(0,k.jsx)(u.Z,{children:(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Phone :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"(+91) 9999999999"})]})})]})}),(0,k.jsx)(Z.ZP,{item:!0,sm:6,md:4,children:(0,k.jsxs)(u.Z,{spacing:2,children:[(0,k.jsx)(j.Z,{variant:"h4",children:"Shipping address"}),(0,k.jsxs)(u.Z,{children:[(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"First name :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"John"})]}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Last name :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"Doe"})]})]}),(0,k.jsxs)(u.Z,{children:[(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Address :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"Address Line 1"})]}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"City :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"Surat"})]}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Country :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"India"})]}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"State :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"Gujarat"})]}),(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Pin code :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"000000"})]})]}),(0,k.jsx)(u.Z,{children:(0,k.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Phone :"}),(0,k.jsx)(j.Z,{variant:"body2",children:"(+91) 9999999999"})]})})]})})]})})]})})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:3,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(_.Z,{})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(f.Z,{})})]})})]})},D=n(24193),O=n(43295),A=n.n(O),L=n(66182),I=n(48080);function R(i,e,n,r,s){return{product:i,description:e,quantity:n,amount:r,total:s}}R("Logo Design","lorem ipsum dolor sit amat, connecter adieu siccing eliot","6","\u20b9200.00","\u20b91200.00"),R("Landing Page","lorem ipsum dolor sit amat, connecter adieu siccing eliot","7","\u20b9100.00","\u20b9700.00"),R("Admin Template","lorem ipsum dolor sit amat, connecter adieu siccing eliot","5","\u20b9150.00","\u20b9750.00");var F=function(){(0,c.Z)();var i=(0,a.useRef)(null);return(0,k.jsxs)(Z.ZP,{container:!0,justifyContent:"center",spacing:b.dv,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,md:10,lg:8,ref:i,children:(0,k.jsx)(p.Z,{darkTitle:!0,title:"Invoice #125863478945",secondary:(0,k.jsx)(I.Z,{}),children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:b.dv,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:0,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"subtitle1",children:"Demo Company Inc."})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"body2",children:"Address Line 1"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"body2",children:"Address Line 2"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{component:d.rU,to:"#",variant:"body2",color:"primary",children:"demo@company.com"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"body2",children:"(+91) 9999 999 999"})})]})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:b.dv,children:[(0,k.jsx)(Z.ZP,{item:!0,sm:5,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"h5",children:"Customer :"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:0,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"subtitle1",children:"John Doe"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"body2",children:"Address Line 1"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"body2",children:"Address Line 2"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"body2",children:"(+91) 9999 567 891"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{component:d.rU,to:"#",variant:"body2",color:"primary",children:"demo@company.com"})})]})})]})}),(0,k.jsx)(Z.ZP,{item:!0,sm:4,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"h5",children:"Order Details :"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:0,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:4,children:(0,k.jsx)(j.Z,{variant:"body2",children:"Date :"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:8,children:(0,k.jsx)(j.Z,{variant:"body2",children:"November 14"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:4,sx:{my:.5},children:(0,k.jsx)(j.Z,{variant:"body2",children:"Status :"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:8,sx:{my:.5},children:(0,k.jsx)(v.Z,{label:"Pending",variant:"outlined",size:"small",chipcolor:"warning"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:4,children:(0,k.jsx)(j.Z,{variant:"body2",children:"Order Id :"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:8,children:(0,k.jsx)(j.Z,{variant:"body2",component:d.rU,to:"#",children:"#146859"})})]})})]})})]})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(_.Z,{})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(f.Z,{})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:2,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"h6",children:"Terms and Condition :"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"body2",children:"lorem ipsum dolor sit connecter adieu siccing eliot, sed do elusion tempore incident ut laborer et dolors magna aliquot."})})]})})]})})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,md:10,lg:8,children:(0,k.jsx)(Z.ZP,{container:!0,spacing:1,justifyContent:"center",sx:{maxWidth:850,mx:"auto",mt:0,mb:2.5,"& > .MuiCardContent-root":{py:{xs:3.75,md:5.5},px:{xs:2.5,md:5}}},children:(0,k.jsx)(Z.ZP,{item:!0,children:(0,k.jsx)(L.Z,{children:(0,k.jsx)(A(),{trigger:function(){return(0,k.jsx)(D.Z,{variant:"contained",children:"Print"})},content:function(){return i.current}})})})})})]})},W=n(4942),z=n(50301),U=n(48310),q=n(67216),G=n(83213),E=n(94469),J=n(96467),M=n(24631),B=n(4117),X=n(48571),H=n(25234),N=n(83376),Q=n(83922),K=n(61414),V=n(17945),Y=n(88221),$=n(87807),ii={bgcolor:function(i){return i.palette.background.default},py:0},ei={p:0,"& > svg":{width:14,height:14},display:{xs:"none",md:"flex"}},ni=(0,a.forwardRef)((function(i,e){return(0,k.jsx)(z.Z,(0,s.Z)({direction:"left",ref:e},i))})),ri=function(){var i=(0,c.Z)(),e=(0,a.useState)(!1),n=(0,r.Z)(e,2),s=n[0],t=n[1],l=function(){t(!1)};return(0,k.jsx)(p.Z,{title:"ORDER STATUS",children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:b.dv,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:0,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,sm:12,md:6,lg:3,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"h5",children:"Order Place Date"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"body2",children:"10th Mar, 2021"})})]})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,sm:6,md:6,lg:2,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"h5",children:"Order Status"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"body2",children:"Processing"})})]})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"h5",children:"Delivery Option"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"body2",children:"Fedex Express Delivery"})})]})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,sm:6,md:4,lg:2,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"h5",children:"Payment"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"body2",children:"Credit Card"})})]})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,sm:6,md:4,lg:2,children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"h5",children:"Order Amount"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{variant:"body2",children:"\u20b990,020"})})]})})]})}),(0,k.jsxs)(Z.ZP,{item:!0,md:8,lg:9,children:[(0,k.jsxs)(X.Z,{sx:(0,W.Z)({"& > li":(0,W.Z)({mb:2.75},i.breakpoints.down("md"),{flexDirection:"column","& > div":{px:0},"& > div:first-of-type":{textAlign:"left"}})},i.breakpoints.down("md"),{p:0}),children:[(0,k.jsxs)(H.Z,{children:[(0,k.jsxs)(N.Z,{children:[(0,k.jsx)(j.Z,{variant:"h6",children:"Order Placed"}),(0,k.jsx)(j.Z,{variant:"body2",children:"12 jun"})]}),(0,k.jsxs)(Q.Z,{children:[(0,k.jsx)(K.Z,{color:"primary",sx:ei,children:(0,k.jsx)($.Z,{})}),(0,k.jsx)(V.Z,{sx:{bgcolor:"primary.main"}})]}),(0,k.jsx)(Y.Z,{sx:{flex:3},children:(0,k.jsxs)(U.Z,{sx:ii,children:[(0,k.jsx)(q.ZP,{children:(0,k.jsx)(G.Z,{primary:"The order was validated."})}),(0,k.jsx)(m.Z,{}),(0,k.jsx)(q.ZP,{children:(0,k.jsx)(G.Z,{primary:"The order was placed."})}),(0,k.jsx)(m.Z,{}),(0,k.jsx)(q.ZP,{children:(0,k.jsx)(G.Z,{primary:"The order was placed."})})]})})]}),(0,k.jsxs)(H.Z,{children:[(0,k.jsxs)(N.Z,{children:[(0,k.jsx)(j.Z,{variant:"h6",children:"Order Processing"}),(0,k.jsx)(j.Z,{variant:"body2",children:"14 jun"})]}),(0,k.jsxs)(Q.Z,{children:[(0,k.jsx)(K.Z,{color:"primary",sx:ei,children:(0,k.jsx)($.Z,{})}),(0,k.jsx)(V.Z,{sx:{bgcolor:"grey.400"}})]}),(0,k.jsx)(Y.Z,{sx:{flex:3},children:(0,k.jsx)(U.Z,{sx:ii,children:(0,k.jsx)(q.ZP,{children:(0,k.jsx)(G.Z,{primary:"Payment transaction [method: Credit Card, type: sale, amount: \u20b990,020, status: Processing ]"})})})})]}),(0,k.jsxs)(H.Z,{children:[(0,k.jsxs)(N.Z,{children:[(0,k.jsx)(j.Z,{variant:"h6",children:"Order Shipping"}),(0,k.jsx)(j.Z,{variant:"body2",children:"16 Jun"})]}),(0,k.jsxs)(Q.Z,{children:[(0,k.jsx)(K.Z,{sx:ei,children:(0,k.jsx)($.Z,{})}),(0,k.jsx)(V.Z,{sx:{bgcolor:"grey.400"}})]}),(0,k.jsx)(Y.Z,{sx:{flex:3},children:(0,k.jsx)(U.Z,{sx:ii,children:(0,k.jsx)(q.ZP,{children:(0,k.jsx)(G.Z,{primary:"Sent a notification to the client by e-mail."})})})})]}),(0,k.jsxs)(H.Z,{children:[(0,k.jsxs)(N.Z,{children:[(0,k.jsx)(j.Z,{variant:"h6",children:"Order Delivered"}),(0,k.jsx)(j.Z,{variant:"body2",children:"17 Jun"})]}),(0,k.jsxs)(Q.Z,{children:[(0,k.jsx)(K.Z,{sx:ei,children:(0,k.jsx)($.Z,{})}),(0,k.jsx)(V.Z,{sx:{bgcolor:"grey.400"}})]}),(0,k.jsx)(Y.Z,{sx:{flex:3},children:(0,k.jsx)(U.Z,{sx:ii,children:(0,k.jsx)(q.ZP,{children:(0,k.jsx)(G.Z,{primary:"Order Delivered"})})})})]})]}),(0,k.jsx)(Z.ZP,{container:!0,spacing:1,justifyContent:"center",children:(0,k.jsx)(Z.ZP,{item:!0,children:(0,k.jsxs)(o.Z,{sx:{display:{xs:"block",md:"none"}},children:[(0,k.jsx)(D.Z,{variant:"contained",onClick:function(){t(!0)},children:"Write a Review"}),(0,k.jsx)(E.Z,{open:s,TransitionComponent:ni,keepMounted:!0,onClose:l,sx:{"&>div:nth-of-type(3)":{justifyContent:"flex-end","&>div":{m:0,borderRadius:"0px",maxWidth:450,maxHeight:"100%",height:"100vh"}}},children:s&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(J.Z,{children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(M.Z,{id:"outlined-basic1",fullWidth:!0,multiline:!0,rows:10,label:"Write a Review"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12})]})}),(0,k.jsxs)(B.Z,{children:[(0,k.jsx)(L.Z,{children:(0,k.jsx)(D.Z,{variant:"contained",children:"Post Review"})}),(0,k.jsx)(D.Z,{variant:"text",onClick:l,color:"secondary",children:"Close"})]})]})})]})})})]}),(0,k.jsx)(Z.ZP,{item:!0,md:4,lg:3,children:(0,k.jsx)(o.Z,{sx:{display:{xs:"none",md:"block"}},children:(0,k.jsxs)(Z.ZP,{container:!0,spacing:1,children:[(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(M.Z,{id:"outlined-basic2",fullWidth:!0,multiline:!0,rows:10,label:"Write a Review"})}),(0,k.jsx)(Z.ZP,{item:!0,xs:12,children:(0,k.jsx)(u.Z,{direction:"row",children:(0,k.jsx)(L.Z,{children:(0,k.jsx)(D.Z,{variant:"contained",children:"Post Review"})})})})]})})})]})})},si=n(33497),ti=n(20563),ai=n(73787),li=n(54285),di=n(71062),ci=n(25823),oi=["children","value","index"];function xi(i){var e=i.children,n=i.value,r=i.index,a=(0,t.Z)(i,oi);return(0,k.jsx)("div",(0,s.Z)((0,s.Z)({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},a),{},{children:n===r&&(0,k.jsx)(o.Z,{sx:{p:0},children:e})}))}function hi(i){return{id:"simple-tab-".concat(i),"aria-controls":"simple-tabpanel-".concat(i)}}var Zi=function(){var i=(0,c.Z)(),e=(0,ci.I0)(),n=(0,a.useState)(0),t=(0,r.Z)(n,2),o=t[0],Z=t[1],j=(0,ci.v9)((function(i){return i.booking})).bookings,m=(0,a.useState)(null),u=(0,r.Z)(m,2),p=u[0],v=u[1],b=(0,li.Z)(),g=(b.isLoggedIn,b.user,(0,l.UO)().orderId);return a.useEffect((function(){g&&e((0,di.aL)({order_number:g}))}),[g]),a.useEffect((function(){var i={};j.forEach((function(e){(i=(0,s.Z)((0,s.Z)({tickets:[]},i),e)).tickets.push({id:e.ticket_id,price:e.net_price})})),v(i)}),[j]),(0,k.jsxs)(si.Z,{children:[(0,k.jsxs)(x.Z,{value:o,indicatorColor:"primary",textColor:"primary",onChange:function(i,e){Z(e)},variant:"scrollable","aria-label":"simple tabs example",sx:{"& a":{minHeight:"auto",minWidth:10,px:1,py:1.5,mr:2.25,color:i.palette.grey[600],display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},"& a.Mui-selected":{color:i.palette.primary.main},"& a > svg":{marginBottom:"0px !important",marginRight:1.25},mb:3},children:[(0,k.jsx)(h.Z,(0,s.Z)({icon:(0,k.jsx)(ti.Z,{}),component:d.rU,to:"#",label:"Details"},hi(0))),(0,k.jsx)(h.Z,(0,s.Z)({icon:(0,k.jsx)(ai.Z,{}),component:d.rU,to:"#",label:"Invoice"},hi(1)))]}),(0,k.jsx)(xi,{value:o,index:0,children:(0,k.jsx)(S,{bookingForOrder:p})}),(0,k.jsx)(xi,{value:o,index:1,children:(0,k.jsx)(F,{bookingForOrder:p})}),(0,k.jsx)(xi,{value:o,index:2,children:(0,k.jsx)(ri,{bookingForOrder:p})})]})}}}]);