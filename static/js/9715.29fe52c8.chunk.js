"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[9715],{11146:function(e,n,t){t(47313);var r=t(19860),i=t(94469),a=t(33604),o=t(96467),c=t(97762),l=t(61113),s=t(4117),u=t(24193),d=t(46417);n.Z=function(e){var n=e.open,t=void 0!==n&&n,h=e.setOpen,f=e.onConfirm,p=e.onCancel,x=(0,r.Z)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(i.Z,{open:t,onClose:function(){h(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{p:3},children:t&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{id:"alert-dialog-title",children:"Confirm Action"}),(0,d.jsx)(o.Z,{children:(0,d.jsx)(c.Z,{id:"alert-dialog-description",children:(0,d.jsx)(l.Z,{variant:"body2",component:"span",children:"Are you sure you want to proceed with the action"})})}),(0,d.jsxs)(s.Z,{sx:{pr:2.5},children:[(0,d.jsx)(u.Z,{sx:{color:x.palette.error.dark,borderColor:x.palette.error.dark},onClick:f,color:"secondary",children:"Delete"}),(0,d.jsx)(u.Z,{variant:"contained",size:"small",onClick:p,autoFocus:!0,children:"Cancel"})]})]})})})}},32689:function(e,n,t){var r=t(1413),i=(t(47313),t(9289)),a=t(61113),o=t(9506),c=t(61689),l=t(47131),s=t(23477),u=t(24076),d=t(67478),h=t(44758),f=t(82558),p=t(50282),x=t(19860),Z=t(51997),m=t(46417),j=function(e){var n=e.numSelected;return(0,m.jsxs)(i.Z,{sx:(0,r.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[n>0?(0,m.jsxs)(a.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}):(0,m.jsx)(a.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,m.jsx)(o.Z,{sx:{flexGrow:1}}),n>0&&(0,m.jsx)(c.Z,{title:"Delete",children:(0,m.jsx)(l.Z,{size:"large",children:(0,m.jsx)(Z.Z,{fontSize:"small"})})})]})};n.Z=function(e){var n=e.hideSelectAll,t=e.onSelectAllClick,r=e.order,i=e.orderBy,c=e.numSelected,l=e.rowCount,Z=e.onRequestSort,g=e.selected,v=e.headCells,C=e.hideActions,S=(0,x.Z)();return(0,m.jsx)(s.Z,{children:(0,m.jsxs)(u.Z,{children:[!n&&(0,m.jsx)(d.Z,{padding:"checkbox",sx:{pl:3},children:(0,m.jsx)(h.Z,{color:"primary",indeterminate:c>0&&c<l,checked:l>0&&c===l,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),c>0&&(0,m.jsx)(d.Z,{padding:"none",colSpan:7,children:(0,m.jsx)(j,{numSelected:g.length})}),(n||c<=0)&&v.map((function(e){return(0,m.jsx)(d.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:i===e.id&&r,children:(0,m.jsxs)(f.Z,{active:i===e.id,direction:i===e.id?r:"asc",onClick:(n=e.id,function(e){Z(e,n)}),children:[e.label,i===(null===e||void 0===e?void 0:e.id)?(0,m.jsx)(o.Z,{component:"span",sx:p.Z,children:"desc"===r?"sorted descending":"sorted ascending"}):null]})},e.id);var n})),!C&&c<=0&&(0,m.jsx)(d.Z,{sortDirection:!1,align:"center",sx:{pr:3},children:(0,m.jsx)(a.Z,{variant:"subtitle1",sx:{color:"dark"===S.palette.mode?"grey.600":"grey.900"},children:"Action"})})]})})}},23599:function(e,n,t){function r(e,n,t){if(t){var r=n[t];!0===n[t]?r=1:!1===n[t]&&(r=0);var i=e[t];return!0===e[t]?i=1:!1===e[t]&&(i=0),r<i?-1:r>i?1:0}return 0}t.d(n,{XV:function(){return a},o1:function(){return o},sQ:function(){return i}});var i=function(e,n){return"desc"===e?function(e,t){return r(e,t,n)}:function(e,t){return-r(e,t,n)}};function a(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t.map((function(e){return e[0]}))}var o=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=e;return r?n.filter((function(e){var n=!0,i=!1;return t.forEach((function(n){var t;null!==(t=e[n])&&void 0!==t&&t.toString().toLowerCase().includes(r.toString().toLowerCase())&&(i=!0)})),i||(n=!1),n})):n}},99715:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r=t(1413),i=t(15861),a=t(29439),o=t(64687),c=t.n(o),l=t(47313),s=t(93405),u=t(9019),d=t(24631),h=t(41727),f=t(61689),p=t(42420),x=t(51629),Z=t(66835),m=t(57861),j=t(24076),g=t(67478),v=t(90891),C=t(62323),S=t(94469),b=t(33497),w=t(12754),y=t(5828),k=t(57983),P=t(83033),A=t(33604),T=t(19536),I=t(96467),z=t(4117),D=t(35898),F=t(24193),O=t(19118),V=t.n(O),q=t(3463),B=t(79429),E=t(11146),N=t(46417),R=function(e){var n={name:""};return e?V()({},n,e):n},U=function(e){var n=e.tag,t=e.handleDelete,o=e.handleCreate,s=e.handleUpdate,h=e.onCancel,f=(0,l.useState)(!1),p=(0,a.Z)(f,2),x=p[0],Z=p[1],m=q.Ry().shape({name:q.Z_().max(255).required("Tag Name is required")}),j=(0,B.TA)({initialValues:R(n),validationSchema:m,onSubmit:function(){var e=(0,i.Z)(c().mark((function e(t,r){var i,a,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.resetForm,a=r.setSubmitting;try{l={name:t.name},n?s(n.id,l):o(l),i(),h(),a(!1)}catch(c){console.error(c)}case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}),g=(j.values,j.errors),v=j.touched,C=j.handleSubmit,S=j.isSubmitting,b=j.getFieldProps;j.setFieldValue;return(0,N.jsxs)(B.Hy,{value:j,children:[(0,N.jsxs)(B.l0,{autoComplete:"off",noValidate:!0,onSubmit:C,children:[(0,N.jsx)(A.Z,{children:n?"Edit Tag":"Add Tag"}),(0,N.jsx)(T.Z,{}),(0,N.jsx)(I.Z,{sx:{p:3},children:(0,N.jsx)(u.ZP,{container:!0,spacing:2,children:(0,N.jsx)(u.ZP,{item:!0,xs:12,children:(0,N.jsx)(d.Z,(0,r.Z)((0,r.Z)({fullWidth:!0,label:"Tag Name *"},b("name")),{},{error:Boolean(v.name&&g.name),helperText:v.name&&g.name}))})})}),(0,N.jsx)(z.Z,{sx:{p:3,pt:0},children:(0,N.jsx)(u.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:(0,N.jsx)(u.ZP,{item:!0,flexGrow:1,children:(0,N.jsxs)(D.Z,{direction:"row",spacing:2,alignItems:"center",justifyContent:"flex-end",children:[(0,N.jsx)(F.Z,{type:"button",variant:"outlined",onClick:h,children:"Cancel"}),(0,N.jsx)(F.Z,{type:"submit",variant:"contained",disabled:S,children:n?"Update":"Add"})]})})})})]}),(0,N.jsx)(E.Z,{open:x,setOpen:Z,onConfirm:function(){t(n.id)},onCancel:function(){return Z(!1)}})]})},L=t(32689),W=t(23599),G=["name"],H=[{id:"name",numeric:!1,label:"Tag Name",align:"left"}],M=function(){var e=(0,w.I0)(),n=(0,l.useState)("asc"),t=(0,a.Z)(n,2),o=t[0],A=t[1],T=(0,l.useState)("calories"),I=(0,a.Z)(T,2),z=I[0],D=I[1],F=(0,l.useState)([]),O=(0,a.Z)(F,2),V=O[0],q=O[1],B=(0,l.useState)(0),E=(0,a.Z)(B,2),R=E[0],M=E[1],Q=(0,l.useState)(5),X=(0,a.Z)(Q,2),_=X[0],J=X[1],K=(0,l.useState)(""),Y=(0,a.Z)(K,2),$=Y[0],ee=Y[1],ne=(0,l.useState)(null),te=(0,a.Z)(ne,2),re=te[0],ie=te[1],ae=(0,l.useState)(!1),oe=(0,a.Z)(ae,2),ce=oe[0],le=oe[1],se=function(){ie(null),le(!1)},ue=(0,l.useState)([]),de=(0,a.Z)(ue,2),he=de[0],fe=de[1],pe=(0,w.v9)((function(e){return e.eventSetup})).eventTags;(0,l.useEffect)((function(){e((0,y.hI)())}),[e]);var xe=function(e,n){var t=e;ee(t||""),fe((0,W.o1)(t,n,G))};(0,l.useEffect)((function(){xe($,pe)}),[pe]);var Ze=R>0?Math.max(0,(1+R)*_-he.length):0,me=function(){var n=(0,i.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=3;break}return n.next=3,e((0,y.UB)(t,(function(){e((0,y.hI)())}),(function(){})));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),je=function(){var n=(0,i.Z)(c().mark((function n(t,i){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=(0,r.Z)((0,r.Z)({},i),{},{id:t,_method:"put"}),e((0,y.km)(a,(function(){e((0,y.hI)())}),(function(){}))),le(!1);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),ge=function(){var n=(0,i.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e((0,y.g2)(t,(function(){le(!1),ie(null),e((0,y.hI)())}),(function(){})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),ve=function(){var e=(0,i.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(le(!0),ie(n));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,N.jsxs)(b.Z,{title:"Tag List",content:!1,children:[(0,N.jsx)(s.Z,{children:(0,N.jsxs)(u.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,N.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,N.jsx)(d.Z,{InputProps:{startAdornment:(0,N.jsx)(h.Z,{position:"start",children:(0,N.jsx)(k.Z,{fontSize:"small"})})},onChange:function(e){return xe(e.target.value,pe)},placeholder:"Search Tag",value:$,size:"small"})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:(0,N.jsx)(f.Z,{title:"Add Tag",children:(0,N.jsx)(p.Z,{color:"primary",size:"small",onClick:function(){le(!0)},sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:(0,N.jsx)(P.Z,{fontSize:"small"})})})})]})}),(0,N.jsx)(x.Z,{children:(0,N.jsxs)(Z.Z,{"aria-labelledby":"tableTitle",children:[(0,N.jsx)(L.Z,{numSelected:V.length,order:o,orderBy:z,onSelectAllClick:function(e){if(e.target.checked)if(V.length>0)q([]);else{var n=he.map((function(e){return e.name}));q(n)}else q([])},onRequestSort:function(e,n){A(z===n&&"asc"===o?"desc":"asc"),D(n)},rowCount:he.length,selected:V,headCells:H,hideSelectAll:!0,hideActions:!0}),(0,N.jsxs)(m.Z,{children:[(0,W.XV)(he,(0,W.sQ)(o,z)).slice(R*_,R*_+_).map((function(e,n){if("number"===typeof e)return null;var t,r=(t=e.name,-1!==V.indexOf(t)),i="enhanced-table-checkbox-".concat(n);return(0,N.jsx)(j.Z,{hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,children:(0,N.jsx)(g.Z,{component:"th",id:i,scope:"row",sx:{cursor:"pointer"},children:(0,N.jsx)(v.Z,{underline:"hover",color:"default",onClick:function(){return ve(e)},sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:e.name})})},n)})),Ze>0&&(0,N.jsx)(j.Z,{style:{height:53*Ze},children:(0,N.jsx)(g.Z,{colSpan:6})})]})]})}),(0,N.jsx)(C.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:he.length,rowsPerPage:_,page:R,onPageChange:function(e,n){M(n)},onRowsPerPageChange:function(e){J(parseInt(null===e||void 0===e?void 0:e.target.value,10)),M(0)}}),(0,N.jsx)(S.Z,{maxWidth:"sm",fullWidth:!0,onClose:se,open:ce,sx:{"& .MuiDialog-paper":{p:0}},children:ce&&(0,N.jsx)(U,{tag:re,handleCreate:me,handleUpdate:je,open:ce,handleCloseDialog:se,onCancel:se,handleDelete:ge})})]})}}}]);