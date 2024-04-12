"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[5914],{11146:function(e,n,r){r(47313);var t=r(19860),i=r(94469),a=r(33604),o=r(96467),c=r(97762),l=r(61113),s=r(4117),d=r(24193),u=r(46417);n.Z=function(e){var n=e.open,r=void 0!==n&&n,h=e.setOpen,m=e.onConfirm,p=e.onCancel,x=(0,t.Z)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(i.Z,{open:r,onClose:function(){h(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{p:3},children:r&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{id:"alert-dialog-title",children:"Confirm Action"}),(0,u.jsx)(o.Z,{children:(0,u.jsx)(c.Z,{id:"alert-dialog-description",children:(0,u.jsx)(l.Z,{variant:"body2",component:"span",children:"Are you sure you want to proceed with the action"})})}),(0,u.jsxs)(s.Z,{sx:{pr:2.5},children:[(0,u.jsx)(d.Z,{sx:{color:x.palette.error.dark,borderColor:x.palette.error.dark},onClick:m,color:"secondary",children:"Delete"}),(0,u.jsx)(d.Z,{variant:"contained",size:"small",onClick:p,autoFocus:!0,children:"Cancel"})]})]})})})}},89535:function(e,n,r){var t=r(1413),i=r(45987),a=r(19860),o=r(63585),c=r(46417),l=["color","outline","size","customSize","sx"];n.Z=function(e){var n=e.color,r=e.outline,s=e.size,d=e.customSize,u=e.sx,h=(0,i.Z)(e,l),m=(0,a.Z)(),p=n&&!r&&{color:m.palette.background.paper,bgcolor:"".concat(n,".main")},x=r&&{color:n?"".concat(n,".main"):"primary.main",bgcolor:m.palette.background.paper,border:"2px solid",borderColor:n?"".concat(n,".main"):"primary.main"},g={};switch(s){case"custom":g={width:m.spacing(d),height:m.spacing(d)};break;case"badge":g={width:m.spacing(3.5),height:m.spacing(3.5)};break;case"xs":g={width:m.spacing(4.25),height:m.spacing(4.25)};break;case"sm":g={width:m.spacing(5),height:m.spacing(5)};break;case"lg":g={width:m.spacing(9),height:m.spacing(9)};break;case"xl":g={width:m.spacing(10.25),height:m.spacing(10.25)};break;case"md":g={width:m.spacing(7.5),height:m.spacing(7.5)};break;default:g={}}return(0,c.jsx)(o.Z,(0,t.Z)({sx:(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},p),x),g),u)},h))}},32689:function(e,n,r){var t=r(1413),i=(r(47313),r(9289)),a=r(61113),o=r(9506),c=r(61689),l=r(47131),s=r(23477),d=r(24076),u=r(67478),h=r(44758),m=r(82558),p=r(50282),x=r(51997),g=r(46417),f=function(e){var n=e.numSelected;return(0,g.jsxs)(i.Z,{sx:(0,t.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[n>0?(0,g.jsxs)(a.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}):(0,g.jsx)(a.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,g.jsx)(o.Z,{sx:{flexGrow:1}}),n>0&&(0,g.jsx)(c.Z,{title:"Delete",children:(0,g.jsx)(l.Z,{size:"large",children:(0,g.jsx)(x.Z,{fontSize:"small"})})})]})};n.Z=function(e){var n=e.hideSelectAll,r=e.onSelectAllClick,t=e.order,i=e.orderBy,c=e.numSelected,l=e.rowCount,x=e.onRequestSort,Z=e.theme,v=e.selected,j=e.headCells,b=e.hideActions;return(0,g.jsx)(s.Z,{children:(0,g.jsxs)(d.Z,{children:[!n&&(0,g.jsx)(u.Z,{padding:"checkbox",sx:{pl:3},children:(0,g.jsx)(h.Z,{color:"primary",indeterminate:c>0&&c<l,checked:l>0&&c===l,onChange:r,inputProps:{"aria-label":"select all desserts"}})}),c>0&&(0,g.jsx)(u.Z,{padding:"none",colSpan:7,children:(0,g.jsx)(f,{numSelected:v.length})}),(n||c<=0)&&j.map((function(e){return(0,g.jsx)(u.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:i===e.id&&t,children:(0,g.jsxs)(m.Z,{active:i===e.id,direction:i===e.id?t:"asc",onClick:(n=e.id,function(e){x(e,n)}),children:[e.label,i===(null===e||void 0===e?void 0:e.id)?(0,g.jsx)(o.Z,{component:"span",sx:p.Z,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n})),!b&&c<=0&&(0,g.jsx)(u.Z,{sortDirection:!1,align:"center",sx:{pr:3},children:(0,g.jsx)(a.Z,{variant:"subtitle1",sx:{color:"dark"===Z.palette.mode?"grey.600":"grey.900"},children:"Action"})})]})})}},55914:function(e,n,r){r.r(n),r.d(n,{default:function(){return xe}});var t=r(29439),i=r(47313),a=r(19860),o=r(93405),c=r(9019),l=r(24631),s=r(41727),d=r(61689),u=r(42420),h=r(51629),m=r(66835),p=r(57861),x=r(24076),g=r(67478),f=r(61113),Z=r(90891),v=r(70024),j=r(47131),b=r(79601),k=r(51405),y=r(62323),C=r(45987),P=r(15861),S=r(1413),w=r(64687),z=r.n(w),_=r(50301),E=r(94469),A=r(33604),O=r(96467),F=r(83929),I=r(4117),T=r(9506),D=r(15480),q=r(24193),R=r(43394),V=r(97101),B=r(12401),M=r(66182),W=r(81628),H=r(3463),L=r(79429),N=r(52564),U=r(85554),X=r(5866),G=r(95585),J=r.n(G),Y=r(65406),K=r.n(Y),Q=r(46417),$=["image"],ee=(0,i.forwardRef)((function(e,n){return(0,Q.jsx)(_.Z,(0,S.Z)({direction:"left",ref:n},e))})),ne=H.Ry().shape({name:H.Z_().required("Title is required")}),re=function(e){var n=e.open,r=e.handleCloseDialog,t=e.editingPaymentPlatform,i=void 0===t?{}:t,a=(0,U.I0)(),o=function(){r(),a((0,X.ss)({open:!0,message:"Payment Platform Updated successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1}))},s=function(){var e=(0,P.Z)(z().mark((function e(n,r,t,i,a){return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(r,!0,!0);case 2:a(r,n[r].join(", "));case 3:case"end":return e.stop()}}),e)})));return function(n,r,t,i,a){return e.apply(this,arguments)}}(),d=function(e){var n=e.setFieldTouched,r=void 0===n?null:n,t=e.setErrors,i=void 0===t?null:t,a=e.setFieldError,o=void 0===a?null:a;return function(){var e=(0,P.Z)(z().mark((function e(n){var t,a,c,l,d;return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===n||void 0===n||null===(t=n.data)||void 0===t||!t.errors){e.next=5;break}l=null===n||void 0===n||null===(c=n.data)||void 0===c?void 0:c.errors,Object.keys(l).forEach((function(e){s(l,e,r,i,o)})),e.next=9;break;case 5:if(null===n||void 0===n||null===(a=n.data)||void 0===a||!a.message){e.next=9;break}return e.next=8,r("submit",!0,!0);case 8:o("submit",null===n||void 0===n||null===(d=n.data)||void 0===d?void 0:d.message);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()};return(0,Q.jsx)(E.Z,{open:n,TransitionComponent:ee,keepMounted:!0,onClose:r,sx:{"&>div:nth-of-type(3)":{justifyContent:"flex-end","&>div":{m:0,borderRadius:"0px",maxWidth:450,maxHeight:"100%"}}},children:n&&(0,Q.jsx)(L.J9,{initialValues:(0,S.Z)((0,S.Z)({submit:null,name:"",is_active:!0,subscription_enabled:!0},i),{},{image:K()(i.image)?[i.image]:null}),enableReinitialize:!0,validationSchema:ne,onSubmit:function(){var e=(0,P.Z)(z().mark((function e(n,r){var t,i,c,l,s,u,h;return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.setErrors,i=r.setFieldTouched,c=r.setFieldError,l=n.image,s=(0,C.Z)(n,$),u=(0,S.Z)((0,S.Z)({},s),{},{image:J()(l)?l[0]:l}),console.log(n),h={setFieldTouched:i,setErrors:t,setFieldError:c};try{u.id?(u._method="put",a((0,N.nV)(u,o,d(h)))):u.id||a((0,N.k5)(u,o,d(h)))}catch(m){a((0,X.ss)({open:!0,message:"An Error Occured",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"error"},close:!1})),console.error(m)}case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,t=e.setFieldValue,i=e.handleBlur,a=e.handleChange,o=e.handleSubmit,s=e.isSubmitting,d=e.touched,u=e.values;return(0,Q.jsx)("form",{noValidate:!0,onSubmit:o,children:(0,Q.jsxs)(R._,{dateAdapter:V.H,children:[(0,Q.jsx)(A.Z,{children:"".concat(u.id?"Edit":"Add"," Payment Platform")}),(0,Q.jsx)(O.Z,{children:(0,Q.jsxs)(c.ZP,{container:!0,spacing:B.dv,sx:{mt:.25},children:[(0,Q.jsx)(c.ZP,{item:!0,xs:12,children:(0,Q.jsx)(l.Z,{id:"payment-platform-name",fullWidth:!0,label:"Enter Payment Platform Title*",name:"name",value:u.name,onBlur:i,onChange:a,error:Boolean(d.name&&n.name),helperText:d.name&&n.name})}),(0,Q.jsx)(c.ZP,{item:!0,xs:12,children:(0,Q.jsxs)(c.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,Q.jsx)(c.ZP,{item:!0,xs:12,sm:4,children:(0,Q.jsx)(f.Z,{variant:"body2",children:"Image"})}),(0,Q.jsx)(c.ZP,{item:!0,xs:12,sm:8,children:(0,Q.jsx)(W.Z,{attachments:u.image,setFieldValue:t,fieldName:"image"})})]})}),(0,Q.jsx)(c.ZP,{item:!0,md:6,xs:12,children:(0,Q.jsx)(F.Z,{control:(0,Q.jsx)(v.Z,{checked:u.is_active||!1,name:"is_active",onChange:function(e){return t("is_active",e.target.checked)}}),label:"Active"})}),(0,Q.jsx)(c.ZP,{item:!0,md:6,xs:12,children:(0,Q.jsx)(F.Z,{control:(0,Q.jsx)(v.Z,{checked:u.subscription_enabled||!1,name:"subscription_enabled",onChange:function(e){return t("subscription_enabled",e.target.checked)}}),label:"Subscribed"})})]})}),(0,Q.jsxs)(I.Z,{children:[n.submit&&(0,Q.jsx)(T.Z,{sx:{ml:3,flex:1},children:(0,Q.jsx)(D.Z,{error:!0,children:n.submit})}),(0,Q.jsx)(M.Z,{children:(0,Q.jsx)(q.Z,{color:"secondary",disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"".concat(u.id?"Update":"Create")})}),(0,Q.jsx)(M.Z,{children:(0,Q.jsx)(q.Z,{variant:"text",color:"error",onClick:r,children:"Close"})})]}),(0,Q.jsx)(T.Z,{sx:{mt:2}})]})})}})})},te=r(33497),ie=r(12754),ae=r(57983),oe=r(83033),ce=r(38398),le=r(11146),se=r(89535),de=r(32689);function ue(e,n,r){return n[r]<e[r]?-1:n[r]>e[r]?1:0}var he=function(e,n){return"desc"===e?function(e,r){return ue(e,r,n)}:function(e,r){return-ue(e,r,n)}};function me(e,n){var r=e.map((function(e,n){return[e,n]}));return r.sort((function(e,r){var t=n(e[0],r[0]);return 0!==t?t:e[1]-r[1]})),r.map((function(e){return e[0]}))}var pe=[{id:"id",numeric:!0,label:"ID",align:"center"},{id:"name",numeric:!1,label:"Title",align:"left"},{id:"image",numeric:!1,label:"Image",align:"left"},{id:"is_active",numeric:!1,label:"Status",align:"center"},{id:"subscription_enabled",numeric:!1,label:"Subscribed",align:"center"}],xe=function(){var e=(0,a.Z)(),n=(0,ie.I0)(),r=(0,i.useState)(null),C=(0,t.Z)(r,2),P=C[0],S=C[1],w=(0,i.useState)(!1),z=(0,t.Z)(w,2),_=z[0],E=z[1],A=function(e){S(e),E(!0)},O=(0,i.useState)("asc"),F=(0,t.Z)(O,2),I=F[0],T=F[1],D=(0,i.useState)("calories"),q=(0,t.Z)(D,2),R=q[0],V=q[1],B=(0,i.useState)([]),M=(0,t.Z)(B,2),W=M[0],H=(M[1],(0,i.useState)(0)),L=(0,t.Z)(H,2),U=L[0],G=L[1],J=(0,i.useState)(5),Y=(0,t.Z)(J,2),K=Y[0],$=Y[1],ee=(0,i.useState)(""),ne=(0,t.Z)(ee,2),ue=ne[0],xe=ne[1],ge=(0,i.useState)([]),fe=(0,t.Z)(ge,2),Ze=fe[0],ve=fe[1],je=(0,ie.v9)((function(e){return e.paymentPlatform})).paymentPlatforms,be=(0,i.useState)(!1),ke=(0,t.Z)(be,2),ye=ke[0],Ce=ke[1];(0,i.useEffect)((function(){n((0,N.qX)())}),[n]),(0,i.useEffect)((function(){ve(je)}),[je]);var Pe=(0,i.useState)(null),Se=(0,t.Z)(Pe,2),we=Se[0],ze=Se[1],_e=function(e){ze(null===e||void 0===e?void 0:e.currentTarget)},Ee=function(){ze(null)},Ae=function(){n((0,X.ss)({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},message:"Payment Platform Deleted"})),n((0,N.qX)())},Oe=function(){n((0,X.ss)({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"error"},message:"An Error Occured"}))};return(0,Q.jsxs)(te.Z,{title:"Payment Platform List",content:!1,children:[(0,Q.jsx)(o.Z,{children:(0,Q.jsxs)(c.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,Q.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,Q.jsx)(l.Z,{InputProps:{startAdornment:(0,Q.jsx)(s.Z,{position:"start",children:(0,Q.jsx)(ae.Z,{fontSize:"small"})})},onChange:function(e){var n=null===e||void 0===e?void 0:e.target.value;if(xe(n||""),n){var r=Ze.filter((function(e){var r=!0,t=!1;return["name","category","price","qty","id"].forEach((function(r){e[r].toString().toLowerCase().includes(n.toString().toLowerCase())&&(t=!0)})),t||(r=!1),r}));ve(r)}else ve(je)},placeholder:"Search Payment Platform",value:ue,size:"small"})}),(0,Q.jsxs)(c.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,Q.jsx)(d.Z,{title:"Add Payment Platform",children:(0,Q.jsx)(u.Z,{color:"primary",size:"small",onClick:function(){return A()},sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:(0,Q.jsx)(oe.Z,{fontSize:"small"})})}),(0,Q.jsx)(re,{open:_,editingPaymentPlatform:P,handleCloseDialog:function(){E(!1),S(null)}})]})]})}),(0,Q.jsx)(h.Z,{children:(0,Q.jsxs)(m.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,Q.jsx)(de.Z,{numSelected:W.length,order:I,orderBy:R,onRequestSort:function(e,n){T(R===n&&"asc"===I?"desc":"asc"),V(n)},rowCount:Ze.length,theme:e,selected:W,headCells:pe,hideSelectAll:!0}),(0,Q.jsx)(p.Z,{children:me(Ze,he(I,R)).slice(U*K,U*K+K).map((function(r,t){if("number"===typeof r)return null;var i=-1!==W.indexOf(r.id),a="enhanced-table-checkbox-".concat(t);return(0,Q.jsxs)(x.Z,{hover:!0,role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,children:[(0,Q.jsx)(g.Z,{align:"center",component:"th",id:a,scope:"row",sx:{cursor:"pointer"},children:(0,Q.jsxs)(f.Z,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:["#",r.id," "]})}),(0,Q.jsx)(g.Z,{component:"th",id:a,scope:"row",sx:{cursor:"pointer"},onClick:function(){return A(r)},children:(0,Q.jsx)(Z.Z,{underline:"hover",color:"default",sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:r.name})}),(0,Q.jsx)(g.Z,{children:(0,Q.jsx)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:(0,Q.jsx)(c.ZP,{item:!0,children:(0,Q.jsx)(se.Z,{alt:r.name,src:r.image})})})}),(0,Q.jsx)(g.Z,{align:"center",children:(0,Q.jsx)(v.Z,{checked:r.is_active,color:"".concat(r.is_active?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(e){var t={id:r.id,is_active:e.target.checked,_method:"put"};n((0,N.nV)(t,(function(){}),(function(){})))}})}),(0,Q.jsx)(g.Z,{align:"center",children:(0,Q.jsx)(v.Z,{checked:r.subscription_enabled,color:"".concat(r.subscription_enabled?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(e){var t={id:r.id,subscription_enabled:e.target.checked,_method:"put"};n((0,N.nV)(t,(function(){}),(function(){})))}})}),(0,Q.jsxs)(g.Z,{align:"center",sx:{pr:3},children:[(0,Q.jsx)(j.Z,{onClick:_e,size:"large","aria-label":"more options",children:(0,Q.jsx)(ce.Z,{fontSize:"small","aria-controls":"menu-popular-card-1","aria-haspopup":"true",sx:{color:"grey.500"}})}),(0,Q.jsxs)(b.Z,{id:"menu-popular-card-1",anchorEl:we,keepMounted:!0,open:Boolean(we),onClose:Ee,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiMenu-paper":{boxShadow:e.customShadows.z1}},children:[(0,Q.jsx)(k.Z,{onClick:function(){return function(e){A(e),Ee()}(r)},children:"Edit"}),(0,Q.jsx)(k.Z,{onClick:function(){return function(e){Ee(),S(e),Ce(!0)}(r)},children:"Delete"})]})]})]},t)}))})]})}),(0,Q.jsx)(y.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:Ze.length,rowsPerPage:K,page:U,onPageChange:function(e,n){G(n)},onRowsPerPageChange:function(e){$(parseInt(null===e||void 0===e?void 0:e.target.value,10)),G(0)}}),(0,Q.jsx)(le.Z,{open:ye,setOpen:Ce,item:P,onConfirm:function(){Ce(!1),n((0,N.EY)(P,Ae,Oe))},onCancel:function(){return Ce(!1)}})]})}}}]);