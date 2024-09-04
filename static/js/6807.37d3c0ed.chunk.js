"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[6807],{73106:function(e,n,r){r(7276);var t=r(50169),i=r(54560),o=r(969),l=r(46650),s=r(12283),a=r(85535),c=r(34160),d=r(31342),u=r(45263);n.Z=function(e){var n=e.open,r=void 0!==n&&n,h=e.setOpen,x=e.onConfirm,p=e.onCancel,f=(0,t.Z)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(i.Z,{open:r,onClose:function(){h(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{p:3},children:r&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Z,{id:"alert-dialog-title",children:"Confirm Action"}),(0,u.jsx)(l.Z,{children:(0,u.jsx)(s.Z,{id:"alert-dialog-description",children:(0,u.jsx)(a.Z,{variant:"body2",component:"span",children:"Are you sure you want to proceed with the action"})})}),(0,u.jsxs)(c.Z,{sx:{pr:2.5},children:[(0,u.jsx)(d.Z,{sx:{color:f.palette.error.dark,borderColor:f.palette.error.dark},onClick:x,color:"secondary",children:"Delete"}),(0,u.jsx)(d.Z,{variant:"contained",size:"small",onClick:p,autoFocus:!0,children:"Cancel"})]})]})})})}},46807:function(e,n,r){r.r(n),r.d(n,{default:function(){return pe}});var t=r(15861),i=r(29439),o=r(1413),l=r(64687),s=r.n(l),a=r(7276),c=r(50169),d=r(34867),u=r(9340),h=r(62154),x=r(55241),p=r(29810),f=r(42037),m=r(85535),Z=r(5055),v=r(20495),j=r(44570),g=r(35970),b=r(65173),C=r(44390),S=r(11430),k=r(5372),y=r(58735),w=r(20888),z=r(71516),P=r(41906),R=r(80635),E=r(50956),O=r(49321),F=r(13209),A=r(20370),T=r(2989),D=r(54560),I=r(969),B=r(46650),M=r(63532),q=r(98125),L=r(34160),W=r(31342),_=r(43767),V=r(19972),H=r(66872),U=r(5894),G=r(87589),J=r(56742),N=r(4471),K=r(45263),Q=(0,a.forwardRef)((function(e,n){return(0,K.jsx)(T.Z,(0,o.Z)({direction:"left",ref:n},e))})),X=function(e){var n,r=e.open,l=e.handleCloseDialog,c=e.editingRole,d=(0,J.I0)(),u=(0,J.v9)((function(e){return e.role.permissions})),h=(0,a.useState)(0),x=(0,i.Z)(h,2),p=x[0],m=x[1],Z=(0,a.useRef)((function(){}));(0,a.useEffect)((function(){Z.current=function(){if(p>100)m(0);else{var e=10*Math.random();m(p+e)}}})),(0,a.useEffect)((function(){var e=setInterval((function(){Z.current()}),500);return function(){clearInterval(e)}}),[]);var v=function(e){l(),d((0,N.ss)({open:!0,message:"Role Updated successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1}))},j=function(){var e=(0,t.Z)(s().mark((function e(n,r,t,i,o){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(r,!0,!0);case 2:o(r,n[r].join(", "));case 3:case"end":return e.stop()}}),e)})));return function(n,r,t,i,o){return e.apply(this,arguments)}}(),g=function(e){var n=e.setFieldTouched,r=void 0===n?null:n,t=e.setErrors,i=void 0===t?null:t,o=e.setFieldError,l=void 0===o?null:o;return function(e){var n;if(null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.errors){var t,o=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.errors;Object.keys(o).forEach((function(e){j(o,e,r,i,l)}))}}};return(0,K.jsx)(D.Z,{open:r,TransitionComponent:Q,keepMounted:!0,onClose:l,sx:{"&>div:nth-of-type(3)":{justifyContent:"flex-end","&>div":{m:0,borderRadius:"0px",maxWidth:450,maxHeight:"100%"}}},children:r&&(0,K.jsx)(U.J9,{initialValues:(0,o.Z)((0,o.Z)({name:"",status:!0},c),{},{permission:(null===c||void 0===c||null===(n=c.permissions)||void 0===n?void 0:n.map((function(e){return e.id})))||[],permissions:null}),enableReinitialize:!0,validationSchema:H.Ry().shape({name:H.Z_().required("Title is required")}),onSubmit:function(){var e=(0,t.Z)(s().mark((function e(n,r){var t,i,l,a,c,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.setErrors,r.setStatus,r.setSubmitting,l=r.setFieldTouched,a=r.setFieldError,c=(0,o.Z)((0,o.Z)({},n),{},{permission:null===(t=n.permission)||void 0===t?void 0:t.join(",")}),console.log(n),u={setFieldTouched:l,setErrors:i,setFieldError:a};try{c.id?(c._method="put",d((0,G.ul)(c,v,g(u)))):c.id||d((0,G._d)(c,v,g(u)))}catch(s){d((0,N.ss)({open:!0,message:"An Error Occured",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"error"},close:!1})),console.error(s)}case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,r=e.setFieldValue,t=e.handleBlur,i=e.handleChange,s=e.handleSubmit,a=e.isSubmitting,d=e.touched,h=e.values;return(0,K.jsxs)("form",{noValidate:!0,onSubmit:s,children:[(0,K.jsx)(I.Z,{children:"".concat(h.id?"Edit":"Add"," Role")}),(0,K.jsx)(B.Z,{children:(0,K.jsxs)(b.ZP,{container:!0,spacing:_.dv,sx:{mt:.25},children:[(0,K.jsx)(b.ZP,{item:!0,xs:12,children:(0,K.jsx)(C.Z,{id:"role-name",fullWidth:!0,label:"Enter Role Title*",name:"name",disabled:null!=(null===c||void 0===c?void 0:c.id),value:h.name,onBlur:t,onChange:i,error:Boolean(d.name&&n.name),helperText:d.name&&n.name})}),(0,K.jsx)(b.ZP,{item:!0,xs:12,children:(0,K.jsx)(M.Z,{multiple:!0,disableCloseOnSelect:!0,options:u.map((function(e){return e.id})),getOptionLabel:function(e){var n;return null===u||void 0===u||null===(n=u.find((function(n){return n.id===e})))||void 0===n?void 0:n.name},onChange:function(e,n){r("permission",n||[])},value:h.permission,renderInput:function(e){return(0,K.jsx)(C.Z,(0,o.Z)((0,o.Z)({},e),{},{label:"Permission *",placeholder:"Select Permission",error:d.permission&&Boolean(n.permission),helperText:d.permission&&n.permission}))}})}),(0,K.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,K.jsx)(q.Z,{control:(0,K.jsx)(R.Z,{checked:h.status||!1,name:"status",onChange:function(e){return r("status",e.target.checked)}}),label:"Active"})})]})}),(0,K.jsxs)(L.Z,{children:[(0,K.jsx)(V.Z,{children:(0,K.jsx)(W.Z,{color:"secondary",disabled:a,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"".concat(h.id?"Update":"Create")})}),(0,K.jsx)(V.Z,{children:(0,K.jsx)(W.Z,{variant:"text",color:"error",onClick:l,children:"Close"})})]}),(0,K.jsx)(f.Z,{sx:{mt:2}})]})}})})},Y=r(53904),$=r(49042),ee=r(35688),ne=r(19148),re=r(30928),te=r(16399),ie=r(17190),oe=r(9789),le=r(43510),se=(r(73106),r(21604));function ae(e,n,r){return n[r]<e[r]?-1:n[r]>e[r]?1:0}var ce=function(e,n){return"desc"===e?function(e,r){return ae(e,r,n)}:function(e,r){return-ae(e,r,n)}};function de(e,n){var r=e.map((function(e,n){return[e,n]}));return r.sort((function(e,r){var t=n(e[0],r[0]);return 0!==t?t:e[1]-r[1]})),r.map((function(e){return e[0]}))}var ue=[{id:"id",numeric:!0,label:"ID",align:"center"},{id:"name",numeric:!1,label:"Role Title",align:"left"},{id:"status",numeric:!1,label:"Status",align:"center"}];function he(e){var n=e.onSelectAllClick,r=e.order,t=e.orderBy,i=e.numSelected,o=e.rowCount,l=e.onRequestSort,s=e.theme,a=e.selected;return(0,K.jsx)(d.Z,{children:(0,K.jsxs)(u.Z,{children:[(0,K.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},children:(0,K.jsx)(x.Z,{color:"primary",indeterminate:i>0&&i<o,checked:o>0&&i===o,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),i>0&&(0,K.jsx)(h.Z,{padding:"none",colSpan:7,children:(0,K.jsx)(xe,{numSelected:a.length})}),i<=0&&ue.map((function(e){return(0,K.jsx)(h.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:t===e.id&&r,children:(0,K.jsxs)(p.Z,{active:t===e.id,direction:t===e.id?r:"asc",onClick:(n=e.id,function(e){l(e,n)}),children:[e.label,t===(null===e||void 0===e?void 0:e.id)?(0,K.jsx)(f.Z,{component:"span",sx:A.Z,children:"desc"===r?"sorted descending":"sorted ascending"}):null]})},e.id);var n})),i<=0&&(0,K.jsx)(h.Z,{sortDirection:!1,align:"center",sx:{pr:3},children:(0,K.jsx)(m.Z,{variant:"subtitle1",sx:{color:"dark"===s.palette.mode?"grey.600":"grey.900"},children:"Action"})})]})})}var xe=function(e){var n=e.numSelected;return(0,K.jsxs)(Z.Z,{sx:(0,o.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[n>0?(0,K.jsxs)(m.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}):(0,K.jsx)(m.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,K.jsx)(f.Z,{sx:{flexGrow:1}}),n>0&&(0,K.jsx)(v.Z,{title:"Delete",children:(0,K.jsx)(j.Z,{size:"large",children:(0,K.jsx)(ee.Z,{fontSize:"small"})})})]})},pe=function(){var e=(0,c.Z)(),n=(0,$.I0)(),r=a.useState(null),t=(0,i.Z)(r,2),o=t[0],l=t[1],s=a.useState(!1),d=(0,i.Z)(s,2),p=d[0],f=d[1],Z=a.useState("asc"),A=(0,i.Z)(Z,2),T=A[0],D=A[1],I=a.useState("calories"),B=(0,i.Z)(I,2),M=B[0],q=B[1],L=a.useState([]),W=(0,i.Z)(L,2),_=W[0],V=W[1],H=a.useState(0),U=(0,i.Z)(H,2),J=U[0],Q=U[1],ee=a.useState(5),ae=(0,i.Z)(ee,2),ue=ae[0],xe=ae[1],pe=a.useState(""),fe=(0,i.Z)(pe,2),me=fe[0],Ze=fe[1],ve=a.useState([]),je=(0,i.Z)(ve,2),ge=je[0],be=je[1],Ce=(0,$.v9)((function(e){return e.role})).roles,Se=a.useState(!1),ke=(0,i.Z)(Se,2),ye=ke[0],we=ke[1];a.useEffect((function(){n((0,G.F3)()),n((0,G.Zu)())}),[n]),a.useEffect((function(){be(Ce)}),[Ce]);var ze=a.useState(null),Pe=(0,i.Z)(ze,2),Re=Pe[0],Ee=Pe[1],Oe=function(){f(!0)},Fe=function(){Ee(null)},Ae=function(e){e&&l(e),Oe(),Fe()},Te=function(){n((0,N.ss)({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},message:"Role Deleted"})),n((0,G.F3)())},De=function(){n((0,N.ss)({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"error"},message:"An Error Occured"}))},Ie=J>0?Math.max(0,(1+J)*ue-ge.length):0;return(0,K.jsxs)(Y.Z,{title:"Role List",content:!1,children:[(0,K.jsx)(g.Z,{children:(0,K.jsxs)(b.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,K.jsx)(b.ZP,{item:!0,xs:12,sm:6,children:(0,K.jsx)(C.Z,{InputProps:{startAdornment:(0,K.jsx)(S.Z,{position:"start",children:(0,K.jsx)(ie.Z,{fontSize:"small"})})},onChange:function(e){var n=null===e||void 0===e?void 0:e.target.value;if(Ze(n||""),n){var r=ge.filter((function(e){var r=!0,t=!1;return["name","category","price","qty","id"].forEach((function(r){e[r].toString().toLowerCase().includes(n.toString().toLowerCase())&&(t=!0)})),t||(r=!1),r}));be(r)}else be(Ce)},placeholder:"Search Role",value:me,size:"small"})}),(0,K.jsxs)(b.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,K.jsx)(v.Z,{title:"Copy",children:(0,K.jsx)(j.Z,{size:"large",children:(0,K.jsx)(te.Z,{})})}),(0,K.jsx)(v.Z,{title:"Print",children:(0,K.jsx)(j.Z,{size:"large",children:(0,K.jsx)(re.Z,{})})}),(0,K.jsx)(v.Z,{title:"Filter",children:(0,K.jsx)(j.Z,{size:"large",children:(0,K.jsx)(ne.Z,{})})}),(0,K.jsx)(v.Z,{title:"Add Role",children:(0,K.jsx)(k.Z,{color:"primary",size:"small",onClick:Oe,sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:(0,K.jsx)(oe.Z,{fontSize:"small"})})}),(0,K.jsx)(X,{open:p,editingRole:o,handleCloseDialog:function(){f(!1),l(null)}})]})]})}),(0,K.jsx)(y.Z,{children:(0,K.jsxs)(w.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,K.jsx)(he,{numSelected:_.length,order:T,orderBy:M,onSelectAllClick:function(e){if(e.target.checked)if(_.length>0)V([]);else{var n=ge.map((function(e){return e.id}));V(n)}else V([])},onRequestSort:function(e,n){D(M===n&&"asc"===T?"desc":"asc"),q(n)},rowCount:ge.length,theme:e,selected:_}),(0,K.jsxs)(z.Z,{children:[de(ge,ce(T,M)).slice(J*ue,J*ue+ue).map((function(r,t){if("number"===typeof r)return null;var i,o=(i=r.id,-1!==_.indexOf(i)),s="enhanced-table-checkbox-".concat(t);return(0,K.jsxs)(u.Z,{hover:!0,role:"checkbox","aria-checked":o,tabIndex:-1,selected:o,children:[(0,K.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},onClick:function(e){return function(e,n){var r=_.indexOf(n),t=[];-1===r?t=t.concat(_,n):0===r?t=t.concat(_.slice(1)):r===_.length-1?t=t.concat(_.slice(0,-1)):r>0&&(t=t.concat(_.slice(0,r),_.slice(r+1))),V(t)}(0,r.id)},children:(0,K.jsx)(x.Z,{color:"primary",checked:o,inputProps:{"aria-labelledby":s}})}),(0,K.jsx)(h.Z,{align:"center",component:"th",id:s,scope:"row",sx:{cursor:"pointer"},children:(0,K.jsxs)(m.Z,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:["#",r.id," "]})}),(0,K.jsx)(h.Z,{component:"th",id:s,scope:"row",sx:{cursor:"pointer"},onClick:function(e){return Ae(r)},children:(0,K.jsx)(P.Z,{underline:"hover",color:"default",sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:r.name})}),(0,K.jsx)(h.Z,{align:"center",children:(0,K.jsx)(R.Z,{checked:r.status,color:"".concat(r.status?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(e,t){var i={id:r.id,status:e.target.checked,_method:"put"};n((0,G.ul)(i,(function(){}),(function(){})))}})}),(0,K.jsxs)(h.Z,{align:"center",sx:{pr:3},children:[(0,K.jsx)(j.Z,{onClick:function(e){return function(e,n){l(n),Ee(null===e||void 0===e?void 0:e.currentTarget)}(e,r)},size:"large","aria-label":"more options",children:(0,K.jsx)(le.Z,{fontSize:"small","aria-controls":"menu-popular-card-1","aria-haspopup":"true",sx:{color:"grey.500"}})}),(0,K.jsxs)(E.Z,{id:"menu-popular-card-1",anchorEl:Re,keepMounted:!0,open:Boolean(Re),onClose:Fe,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiMenu-paper":{boxShadow:e.customShadows.z1}},children:[(0,K.jsx)(O.Z,{onClick:function(){return Ae()},children:"Edit"}),(0,K.jsx)(O.Z,{onClick:function(){return Fe(),void we(!0)},children:"Delete"})]})]})]},t)})),Ie>0&&(0,K.jsx)(u.Z,{style:{height:53*Ie},children:(0,K.jsx)(h.Z,{colSpan:6})})]})]})}),(0,K.jsx)(F.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:ge.length,rowsPerPage:ue,page:J,onPageChange:function(e,n){Q(n)},onRowsPerPageChange:function(e){xe(parseInt(null===e||void 0===e?void 0:e.target.value,10)),Q(0)}}),(0,K.jsx)(se.Z,{open:ye,setOpen:we,item:o,title:"Confirm Delet ".concat(null===o||void 0===o?void 0:o.name),onConfirm:function(){we(!1),n((0,G.Rd)(o,Te,De))},onCancel:function(){return we(!1)}})]})}}}]);