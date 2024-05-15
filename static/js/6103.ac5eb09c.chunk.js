"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[6103],{73106:function(e,n,t){t(7276);var r=t(50169),i=t(54560),o=t(969),a=t(46650),l=t(12283),c=t(85535),s=t(34160),u=t(31342),d=t(45263);n.Z=function(e){var n=e.open,t=void 0!==n&&n,h=e.setOpen,p=e.onConfirm,f=e.onCancel,x=(0,r.Z)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(i.Z,{open:t,onClose:function(){h(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{p:3},children:t&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Z,{id:"alert-dialog-title",children:"Confirm Action"}),(0,d.jsx)(a.Z,{children:(0,d.jsx)(l.Z,{id:"alert-dialog-description",children:(0,d.jsx)(c.Z,{variant:"body2",component:"span",children:"Are you sure you want to proceed with the action"})})}),(0,d.jsxs)(s.Z,{sx:{pr:2.5},children:[(0,d.jsx)(u.Z,{sx:{color:x.palette.error.dark,borderColor:x.palette.error.dark},onClick:p,color:"secondary",children:"Delete"}),(0,d.jsx)(u.Z,{variant:"contained",size:"small",onClick:f,autoFocus:!0,children:"Cancel"})]})]})})})}},30262:function(e,n,t){var r=t(1413),i=t(7276),o=t(5055),a=t(85535),l=t(42037),c=t(34867),s=t(9340),u=t(62154),d=t(55241),h=t(29810),p=t(20370),f=t(50169),x=t(45263),m=function(e){var n=e.numSelected,t=e.actionComponent;return(0,x.jsxs)(o.Z,{sx:(0,r.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[(0,x.jsxs)(a.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}),(0,x.jsx)(l.Z,{sx:{flexGrow:1}}),t]})};n.Z=function(e){var n=e.hideSelectAll,t=e.onSelectAllClick,r=e.order,o=e.orderBy,Z=e.numSelected,v=e.rowCount,g=e.onRequestSort,j=e.selected,y=e.headCells,C=e.hideActions,b=e.actionComponent,S=(0,f.Z)(),w=(0,i.useMemo)((function(){return(null===y||void 0===y?void 0:y.length)>7?7:null===y||void 0===y?void 0:y.length}),[null===y||void 0===y?void 0:y.length]);return(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(s.Z,{children:Z>0&&(0,x.jsx)(u.Z,{padding:"none",colSpan:w,children:(0,x.jsx)(m,{numSelected:j.length,actionComponent:b})})}),(0,x.jsxs)(s.Z,{children:[!n&&(0,x.jsx)(u.Z,{padding:"checkbox",sx:{pl:3},children:(0,x.jsx)(d.Z,{color:"primary",indeterminate:Z>0&&Z<v,checked:v>0&&Z===v,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),y.map((function(e){return(0,x.jsx)(u.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:o===e.id&&r,children:(0,x.jsxs)(h.Z,{active:o===e.id,direction:o===e.id?r:"asc",onClick:(n=e.id,function(e){g(e,n)}),children:[e.label,o===(null===e||void 0===e?void 0:e.id)?(0,x.jsx)(l.Z,{component:"span",sx:p.Z,children:"desc"===r?"sorted descending":"sorted ascending"}):null]})},e.id);var n})),!C&&(0,x.jsx)(u.Z,{sortDirection:!1,align:"center",sx:{pr:3},children:(0,x.jsx)(a.Z,{variant:"subtitle1",sx:{color:"dark"===S.palette.mode?"grey.600":"grey.900"},children:"Action"})})]})]})}},55224:function(e,n,t){t.d(n,{XV:function(){return l},o1:function(){return c},sQ:function(){return a}});var r=t(44358),i=t.n(r);function o(e,n,t){if(t){var r=n[t];!0===n[t]?r=1:!1===n[t]&&(r=0);var i=e[t];return!0===e[t]?i=1:!1===e[t]&&(i=0),r<i?-1:r>i?1:0}return 0}var a=function(e,n){return"desc"===e?function(e,t){return o(e,t,n)}:function(e,t){return-o(e,t,n)}};function l(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t.map((function(e){return e[0]}))}var c=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=e;return r?n.filter((function(e){var n=!0,o=!1;return t.forEach((function(n){var t;null!==(t=i()(e,n))&&void 0!==t&&t.toString().toLowerCase().includes(r.toString().toLowerCase())&&(o=!0)})),o||(n=!1),n})):n}},56103:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var r=t(1413),i=t(15861),o=t(29439),a=t(64687),l=t.n(a),c=t(7276),s=t(50169),u=t(35970),d=t(65173),h=t(44390),p=t(11430),f=t(20495),x=t(5372),m=t(58735),Z=t(20888),v=t(71516),g=t(9340),j=t(62154),y=t(41906),C=t(85535),b=t(13209),S=t(54560),w=t(53904),k=t(49042),P=t(68856),T=t(17190),A=t(9789),_=t(969),F=t(6334),D=t(46650),I=t(34160),z=t(20045),O=t(31342),V=t(71701),q=t.n(V),B=t(66872),E=t(5894),R=t(73106),W=t(45263),L=function(e){var n={name:"",filter_type:""};return e?q()({},n,e):n},M=function(e){var n=e.tag,t=e.handleDelete,a=e.handleCreate,s=e.handleUpdate,u=e.onCancel,p=(0,c.useState)(!1),f=(0,o.Z)(p,2),x=f[0],m=f[1],Z=B.Ry().shape({name:B.Z_().max(255).required("Tag Name is required")}),v=(0,E.TA)({initialValues:L(n),validationSchema:Z,onSubmit:function(){var e=(0,i.Z)(l().mark((function e(t,r){var i,o,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.resetForm,o=r.setSubmitting;try{c={name:t.name,filter_type:t.filter_type},n?s(n.id,c):a(c),i(),u(),o(!1)}catch(l){console.error(l)}case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}),g=(v.values,v.errors),j=v.touched,y=v.handleSubmit,C=v.isSubmitting,b=v.getFieldProps;v.setFieldValue;return(0,W.jsxs)(E.Hy,{value:v,children:[(0,W.jsxs)(E.l0,{autoComplete:"off",noValidate:!0,onSubmit:y,children:[(0,W.jsx)(_.Z,{children:n?"Edit Tag":"Add Tag"}),(0,W.jsx)(F.Z,{}),(0,W.jsx)(D.Z,{sx:{p:3},children:(0,W.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,W.jsx)(d.ZP,{item:!0,xs:12,children:(0,W.jsx)(h.Z,(0,r.Z)((0,r.Z)({fullWidth:!0,label:"Tag Name *"},b("name")),{},{error:Boolean(j.name&&g.name),helperText:j.name&&g.name}))}),(0,W.jsx)(d.ZP,{item:!0,xs:12,children:(0,W.jsx)(h.Z,(0,r.Z)((0,r.Z)({fullWidth:!0,label:"Filter Type"},b("filter_type")),{},{error:Boolean(j.filter_type&&g.filter_type),helperText:j.filter_type&&g.filter_type}))})]})}),(0,W.jsx)(I.Z,{sx:{p:3,pt:0},children:(0,W.jsx)(d.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:(0,W.jsx)(d.ZP,{item:!0,flexGrow:1,children:(0,W.jsxs)(z.Z,{direction:"row",spacing:2,alignItems:"center",justifyContent:"flex-end",children:[(0,W.jsx)(O.Z,{type:"button",variant:"outlined",onClick:u,children:"Cancel"}),(0,W.jsx)(O.Z,{type:"submit",variant:"contained",disabled:C,children:n?"Update":"Add"})]})})})})]}),(0,W.jsx)(R.Z,{open:x,setOpen:m,onConfirm:function(){t(n.id)},onCancel:function(){return m(!1)}})]})},N=t(30262),Q=t(55224),U=["name","status","filter_type"],G=[{id:"name",numeric:!1,label:"Tag Name",align:"left"},{id:"filter_type",numeric:!1,label:"Filter Type",align:"left"}],H=function(){var e=(0,s.Z)(),n=(0,k.I0)(),t=(0,c.useState)("asc"),a=(0,o.Z)(t,2),_=a[0],F=a[1],D=(0,c.useState)("calories"),I=(0,o.Z)(D,2),z=I[0],O=I[1],V=(0,c.useState)([]),q=(0,o.Z)(V,2),B=q[0],E=q[1],R=(0,c.useState)(0),L=(0,o.Z)(R,2),H=L[0],X=L[1],J=(0,c.useState)(5),K=(0,o.Z)(J,2),Y=K[0],$=K[1],ee=(0,c.useState)(""),ne=(0,o.Z)(ee,2),te=ne[0],re=ne[1],ie=(0,c.useState)(null),oe=(0,o.Z)(ie,2),ae=oe[0],le=oe[1],ce=(0,c.useState)(!1),se=(0,o.Z)(ce,2),ue=se[0],de=se[1],he=function(){le(null),de(!1)},pe=(0,c.useState)([]),fe=(0,o.Z)(pe,2),xe=fe[0],me=fe[1],Ze=(0,k.v9)((function(e){return e.venueSetup})).venueTags;(0,c.useEffect)((function(){n((0,P.wI)())}),[n]);var ve=function(e,n){var t=e;re(t||""),me((0,Q.o1)(t,n,U))};(0,c.useEffect)((function(){ve(te,Ze)}),[Ze]);var ge=H>0?Math.max(0,(1+H)*Y-xe.length):0,je=function(){var e=(0,i.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,n((0,P._D)(t));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ye=function(){var e=(0,i.Z)(l().mark((function e(t,i){var o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=(0,r.Z)((0,r.Z)({},i),{},{id:t,_method:"put"}),n((0,P.Q0)(o,(function(){}),(function(){}))),de(!1);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Ce=function(){var e=(0,i.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,P.FT)(t,(function(){de(!1)}),(function(){})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),be=function(){var e=(0,i.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(de(!0),le(n));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,W.jsxs)(w.Z,{title:"Tag List",content:!1,children:[(0,W.jsx)(u.Z,{children:(0,W.jsxs)(d.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,W.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,W.jsx)(h.Z,{InputProps:{startAdornment:(0,W.jsx)(p.Z,{position:"start",children:(0,W.jsx)(T.Z,{fontSize:"small"})})},onChange:function(e){return ve(e.target.value,Ze)},placeholder:"Search Tag",value:te,size:"small"})}),(0,W.jsx)(d.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:(0,W.jsx)(f.Z,{title:"Add Tag",children:(0,W.jsx)(x.Z,{color:"primary",size:"small",onClick:function(){de(!0)},sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:(0,W.jsx)(A.Z,{fontSize:"small"})})})})]})}),(0,W.jsx)(m.Z,{children:(0,W.jsxs)(Z.Z,{"aria-labelledby":"tableTitle",children:[(0,W.jsx)(N.Z,{numSelected:B.length,order:_,orderBy:z,onSelectAllClick:function(e){if(e.target.checked)if(B.length>0)E([]);else{var n=xe.map((function(e){return e.name}));E(n)}else E([])},onRequestSort:function(e,n){F(z===n&&"asc"===_?"desc":"asc"),O(n)},rowCount:xe.length,selected:B,headCells:G,hideSelectAll:!0,hideActions:!0}),(0,W.jsxs)(v.Z,{children:[(0,Q.XV)(xe,(0,Q.sQ)(_,z)).slice(H*Y,H*Y+Y).map((function(n,t){if("number"===typeof n)return null;var r,i=(r=n.name,-1!==B.indexOf(r)),o="enhanced-table-checkbox-".concat(t);return(0,W.jsxs)(g.Z,{hover:!0,role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,children:[(0,W.jsx)(j.Z,{component:"th",id:o,scope:"row",sx:{cursor:"pointer"},children:(0,W.jsx)(y.Z,{underline:"hover",color:"default",onClick:function(){return be(n)},sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:n.name})}),(0,W.jsx)(j.Z,{component:"th",scope:"row",children:(0,W.jsx)(C.Z,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:n.filter_type})})]},t)})),ge>0&&(0,W.jsx)(g.Z,{style:{height:53*ge},children:(0,W.jsx)(j.Z,{colSpan:6})})]})]})}),(0,W.jsx)(b.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:xe.length,rowsPerPage:Y,page:H,onPageChange:function(e,n){X(n)},onRowsPerPageChange:function(e){$(parseInt(null===e||void 0===e?void 0:e.target.value,10)),X(0)}}),(0,W.jsx)(S.Z,{maxWidth:"sm",fullWidth:!0,onClose:he,open:ue,sx:{"& .MuiDialog-paper":{p:0}},children:ue&&(0,W.jsx)(M,{tag:ae,handleCreate:je,handleUpdate:ye,open:ue,handleCloseDialog:he,onCancel:he,handleDelete:Ce})})]})}}}]);