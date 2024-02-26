"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[9715],{11146:function(e,n,t){t.d(n,{Z:function(){return h}});t(47313);var r=t(19860),i=t(94469),a=t(33604),c=t(96467),o=t(97762),s=t(61113),l=t(4117),d=t(24193),u=t(46417);function h(e){var n=e.open,t=void 0!==n&&n,h=e.setOpen,x=e.onConfirm,p=e.onCancel,f=(e.item,(0,r.Z)());return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(i.Z,{open:t,onClose:function(){h(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{p:3},children:t&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{id:"alert-dialog-title",children:"Confirm Action"}),(0,u.jsx)(c.Z,{children:(0,u.jsx)(o.Z,{id:"alert-dialog-description",children:(0,u.jsx)(s.Z,{variant:"body2",component:"span",children:"Are you sure you want to proceed with the action"})})}),(0,u.jsxs)(l.Z,{sx:{pr:2.5},children:[(0,u.jsx)(d.Z,{sx:{color:f.palette.error.dark,borderColor:f.palette.error.dark},onClick:x,color:"secondary",children:"Delete"}),(0,u.jsx)(d.Z,{variant:"contained",size:"small",onClick:p,autoFocus:!0,children:"Cancel"})]})]})})})}},99715:function(e,n,t){t.r(n),t.d(n,{default:function(){return de}});var r=t(15861),i=t(29439),a=t(1413),c=t(64687),o=t.n(c),s=t(47313),l=t(19860),d=t(23477),u=t(24076),h=t(67478),x=t(44758),p=t(82558),f=t(9506),Z=t(9289),m=t(61113),j=t(61689),g=t(47131),v=t(93405),b=t(9019),C=t(24631),S=t(41727),k=t(42420),w=t(51629),y=t(66835),P=t(57861),z=t(90891),T=t(62323),A=t(94469),I=t(50282),D=t(33497),F=t(25823),O=t(5828),E=t(51997),q=t(44289),B=t(94788),N=t(49854),R=t(57983),W=t(83033),H=t(33604),L=t(19536),U=t(96467),V=t(4117),_=t(42832),M=t(24193),G=t(43394),J=t(97101),K=t(16031),Q=t.n(K),X=t(3463),Y=t(79429),$=t(12401),ee=t(11146),ne=t(46417),te=function(e,n){var t={name:""};return e||n?Q().merge({},t,e):t},re=function(e){var n=e.tag,t=e.range,c=e.handleDelete,d=e.handleCreate,u=e.handleUpdate,h=e.onCancel,x=((0,l.Z)(),!n),p=(0,s.useState)(!1),f=(0,i.Z)(p,2),Z=f[0],m=f[1],v=X.Ry().shape({name:X.Z_().max(255).required("Name is required")}),S=(0,Y.TA)({initialValues:te(n,t),validationSchema:v,onSubmit:function(){var e=(0,r.Z)(o().mark((function e(t,r){var i,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.resetForm,a=r.setSubmitting;try{c={name:t.name},n?u(n.id,c):d(c),i(),h(),a(!1)}catch(o){console.error(o)}case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}),k=(S.values,S.errors),w=S.touched,y=S.handleSubmit,P=S.isSubmitting,z=S.getFieldProps;S.setFieldValue;return(0,ne.jsx)(Y.Hy,{value:S,children:(0,ne.jsxs)(G._,{dateAdapter:J.H,children:[(0,ne.jsxs)(Y.l0,{autoComplete:"off",noValidate:!0,onSubmit:y,children:[(0,ne.jsx)(H.Z,{children:n?"Edit Tag":"Add Tag"}),(0,ne.jsx)(L.Z,{}),(0,ne.jsx)(U.Z,{sx:{p:3},children:(0,ne.jsx)(b.ZP,{container:!0,spacing:$.dv,children:(0,ne.jsx)(b.ZP,{item:!0,xs:12,children:(0,ne.jsx)(C.Z,(0,a.Z)((0,a.Z)({fullWidth:!0,label:"Name"},z("name")),{},{error:Boolean(w.name&&k.name),helperText:w.name&&k.name}))})})}),(0,ne.jsx)(V.Z,{sx:{p:3},children:(0,ne.jsxs)(b.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,ne.jsx)(b.ZP,{item:!0,children:!x&&(0,ne.jsx)(j.Z,{title:"Delete Tag",children:(0,ne.jsx)(g.Z,{color:"error",disabled:!0,onClick:function(){return m(!0)},size:"large",children:(0,ne.jsx)(E.Z,{})})})}),(0,ne.jsx)(b.ZP,{item:!0,children:(0,ne.jsxs)(_.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,ne.jsx)(M.Z,{type:"button",variant:"outlined",onClick:h,children:"Cancel"}),(0,ne.jsx)(M.Z,{type:"submit",variant:"contained",disabled:P,children:n?"Edit":"Add"})]})})]})})]}),(0,ne.jsx)(ee.Z,{open:Z,setOpen:m,onConfirm:function(){c(n.id)},onCancel:function(){return m(!1)}})]})})};function ie(e,n,t){var r=n[t];!0===n[t]?r=1:!1===n[t]&&(r=0);var i=e[t];return!0===e[t]?i=1:!1===e[t]&&(i=0),r<i?-1:r>i?1:0}var ae=function(e,n){return"desc"===e?function(e,t){return ie(e,t,n)}:function(e,t){return-ie(e,t,n)}};function ce(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t.map((function(e){return e[0]}))}var oe=[{id:"name",numeric:!1,label:"Tag Name",align:"left"}];function se(e){var n=e.onSelectAllClick,t=e.order,r=e.orderBy,i=e.numSelected,a=e.rowCount,c=e.onRequestSort,o=e.selected;return(0,ne.jsxs)(d.Z,{children:[(0,ne.jsx)(u.Z,{children:i>0&&(0,ne.jsx)(h.Z,{padding:"none",colSpan:8,children:(0,ne.jsx)(le,{numSelected:o.length})})}),(0,ne.jsxs)(u.Z,{children:[(0,ne.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},children:(0,ne.jsx)(x.Z,{color:"primary",indeterminate:i>0&&i<a,checked:a>0&&i===a,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),oe.map((function(e){return(0,ne.jsx)(h.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&t,children:(0,ne.jsxs)(p.Z,{active:r===e.id,direction:r===e.id?t:"asc",onClick:(n=e.id,function(e){c(e,n)}),children:[e.label,r===e.id?(0,ne.jsx)(f.Z,{component:"span",sx:I.Z,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n}))]})]})}var le=function(e){var n=e.numSelected;return(0,ne.jsxs)(Z.Z,{sx:(0,a.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[n>0?(0,ne.jsxs)(m.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}):(0,ne.jsx)(m.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,ne.jsx)(f.Z,{sx:{flexGrow:1}}),n>0&&(0,ne.jsx)(j.Z,{title:"Delete",children:(0,ne.jsx)(g.Z,{size:"large",children:(0,ne.jsx)(E.Z,{fontSize:"small"})})})]})},de=function(){var e=(0,l.Z)(),n=(0,F.I0)(),t=s.useState("asc"),c=(0,i.Z)(t,2),d=c[0],p=c[1],f=s.useState("calories"),Z=(0,i.Z)(f,2),m=Z[0],I=Z[1],E=s.useState([]),H=(0,i.Z)(E,2),L=H[0],U=H[1],V=s.useState(0),_=(0,i.Z)(V,2),M=_[0],G=_[1],J=s.useState(5),K=(0,i.Z)(J,2),Q=K[0],X=K[1],Y=s.useState(""),$=(0,i.Z)(Y,2),ee=$[0],te=$[1],ie=(0,s.useState)(null),oe=(0,i.Z)(ie,2),le=oe[0],de=oe[1],ue=s.useState(!1),he=(0,i.Z)(ue,2),xe=he[0],pe=he[1],fe=function(){de(null),pe(!1)},Ze=s.useState([]),me=(0,i.Z)(Ze,2),je=me[0],ge=me[1],ve=(0,F.v9)((function(e){return e.eventSetup})).eventTags;s.useEffect((function(){n((0,O.hI)())}),[n]);var be=function(e,n){var t=e;if(te(t||""),t){var r=n.filter((function(e){var n=!0,r=!1;return["name","status"].forEach((function(n){var i;null!==(i=e[n])&&void 0!==i&&i.toString().toLowerCase().includes(t.toString().toLowerCase())&&(r=!0)})),r||(n=!1),n}));ge(r)}else ge(n)};s.useEffect((function(){be(ee,ve)}),[ve]);var Ce=M>0?Math.max(0,(1+M)*Q-je.length):0,Se=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,n((0,O.UB)(t,(function(){n((0,O.hI)())}),(function(){})));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ke=function(){var e=(0,r.Z)(o().mark((function e(t,r){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=(0,a.Z)((0,a.Z)({},r),{},{id:t,_method:"put"}),n((0,O.km)(i,(function(){n((0,O.hI)())}),(function(){}))),pe(!1);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),we=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,O.g2)(t,(function(){pe(!1),de(null),n((0,O.hI)())}),(function(){})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ye=function(){var e=(0,r.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(pe(!0),de(n));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,ne.jsxs)(D.Z,{title:"Tag List",content:!1,children:[(0,ne.jsx)(v.Z,{children:(0,ne.jsxs)(b.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,ne.jsx)(b.ZP,{item:!0,xs:12,sm:6,children:(0,ne.jsx)(C.Z,{InputProps:{startAdornment:(0,ne.jsx)(S.Z,{position:"start",children:(0,ne.jsx)(R.Z,{fontSize:"small"})})},onChange:function(e){return be(e.target.value,ve)},placeholder:"Search Tag",value:ee,size:"small"})}),(0,ne.jsxs)(b.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,ne.jsx)(j.Z,{title:"Copy",children:(0,ne.jsx)(g.Z,{size:"large",children:(0,ne.jsx)(N.Z,{})})}),(0,ne.jsx)(j.Z,{title:"Print",children:(0,ne.jsx)(g.Z,{size:"large",children:(0,ne.jsx)(B.Z,{})})}),(0,ne.jsx)(j.Z,{title:"Filter",children:(0,ne.jsx)(g.Z,{size:"large",children:(0,ne.jsx)(q.Z,{})})}),(0,ne.jsx)(j.Z,{title:"Add Tag",children:(0,ne.jsx)(k.Z,{color:"primary",size:"small",onClick:function(){pe(!0)},sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:(0,ne.jsx)(W.Z,{fontSize:"small"})})})]})]})}),(0,ne.jsx)(w.Z,{children:(0,ne.jsxs)(y.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,ne.jsx)(se,{theme:e,numSelected:L.length,order:d,orderBy:m,onSelectAllClick:function(e){if(e.target.checked)if(L.length>0)U([]);else{var n=je.map((function(e){return e.name}));U(n)}else U([])},onRequestSort:function(e,n){p(m===n&&"asc"===d?"desc":"asc"),I(n)},rowCount:je.length,selected:L}),(0,ne.jsxs)(P.Z,{children:[ce(je,ae(d,m)).slice(M*Q,M*Q+Q).map((function(e,n){if("number"===typeof e)return null;var t,r=(t=e.name,-1!==L.indexOf(t)),i="enhanced-table-checkbox-".concat(n);return(0,ne.jsxs)(u.Z,{hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,children:[(0,ne.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},onClick:function(n){return function(e,n){var t=L.indexOf(n),r=[];-1===t?r=r.concat(L,n):0===t?r=r.concat(L.slice(1)):t===L.length-1?r=r.concat(L.slice(0,-1)):t>0&&(r=r.concat(L.slice(0,t),L.slice(t+1))),U(r)}(0,e.name)},children:(0,ne.jsx)(x.Z,{color:"primary",checked:r,inputProps:{"aria-labelledby":i}})}),(0,ne.jsx)(h.Z,{component:"th",id:i,scope:"row",sx:{cursor:"pointer"},children:(0,ne.jsx)(z.Z,{underline:"hover",color:"default",onClick:function(){return ye(e)},sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:e.name})})]},n)})),Ce>0&&(0,ne.jsx)(u.Z,{style:{height:53*Ce},children:(0,ne.jsx)(h.Z,{colSpan:6})})]})]})}),(0,ne.jsx)(T.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:je.length,rowsPerPage:Q,page:M,onPageChange:function(e,n){G(n)},onRowsPerPageChange:function(e){X(parseInt(null===e||void 0===e?void 0:e.target.value,10)),G(0)}}),(0,ne.jsx)(A.Z,{maxWidth:"sm",fullWidth:!0,onClose:fe,open:xe,sx:{"& .MuiDialog-paper":{p:0}},children:xe&&(0,ne.jsx)(re,{tag:le,handleCreate:Se,handleUpdate:ke,open:xe,handleCloseDialog:fe,onCancel:fe,handleDelete:we})})]})}}}]);