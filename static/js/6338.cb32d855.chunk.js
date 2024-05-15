"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[6338],{73106:function(e,n,t){t(7276);var r=t(50169),i=t(54560),l=t(969),a=t(46650),o=t(12283),c=t(85535),s=t(34160),d=t(31342),u=t(45263);n.Z=function(e){var n=e.open,t=void 0!==n&&n,h=e.setOpen,x=e.onConfirm,p=e.onCancel,f=(0,r.Z)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(i.Z,{open:t,onClose:function(){h(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{p:3},children:t&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Z,{id:"alert-dialog-title",children:"Confirm Action"}),(0,u.jsx)(a.Z,{children:(0,u.jsx)(o.Z,{id:"alert-dialog-description",children:(0,u.jsx)(c.Z,{variant:"body2",component:"span",children:"Are you sure you want to proceed with the action"})})}),(0,u.jsxs)(s.Z,{sx:{pr:2.5},children:[(0,u.jsx)(d.Z,{sx:{color:f.palette.error.dark,borderColor:f.palette.error.dark},onClick:x,color:"secondary",children:"Delete"}),(0,u.jsx)(d.Z,{variant:"contained",size:"small",onClick:p,autoFocus:!0,children:"Cancel"})]})]})})})}},56338:function(e,n,t){t.r(n),t.d(n,{default:function(){return fe}});var r=t(15861),i=t(29439),l=t(1413),a=t(64687),o=t.n(a),c=t(7276),s=t(50169),d=t(34867),u=t(9340),h=t(62154),x=t(55241),p=t(29810),f=t(42037),m=t(85535),Z=t(5055),g=t(20495),j=t(44570),v=t(35970),b=t(65173),y=t(44390),C=t(11430),S=t(5372),k=t(58735),w=t(20888),P=t(71516),T=t(41906),_=t(80635),z=t(50956),E=t(49321),O=t(13209),R=t(20370),A=t(2989),F=t(54560),I=t(969),B=t(46650),D=t(98125),W=t(34160),q=t(31342),M=t(43767),N=t(19972),L=t(66872),V=t(5894),H=t(68419),U=t(56742),G=t(4471),J=t(45263),Q=[{value:"percent",label:"Percentage"},{value:"fixed",label:"Fixed"}],K=[{value:"inclusive",label:"Inclusive"},{value:"exclusive",label:"Exclusive"}],X=(0,c.forwardRef)((function(e,n){return(0,J.jsx)(A.Z,(0,l.Z)({direction:"left",ref:n},e))})),Y=function(e){var n=e.open,t=e.handleCloseDialog,a=e.editingTax,s=(0,U.I0)(),d=(0,c.useState)(0),u=(0,i.Z)(d,2),h=u[0],x=u[1],p=(0,c.useRef)((function(){}));(0,c.useEffect)((function(){p.current=function(){if(h>100)x(0);else{var e=10*Math.random();x(h+e)}}})),(0,c.useEffect)((function(){var e=setInterval((function(){p.current()}),500);return function(){clearInterval(e)}}),[]);var m=function(e){t(),s((0,G.ss)({open:!0,message:"Tax Updated successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1}))},Z=function(){var e=(0,r.Z)(o().mark((function e(n,t,r,i,l){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t,!0,!0);case 2:l(t,n[t].join(", "));case 3:case"end":return e.stop()}}),e)})));return function(n,t,r,i,l){return e.apply(this,arguments)}}(),g=function(e){var n=e.setFieldTouched,t=void 0===n?null:n,r=e.setErrors,i=void 0===r?null:r,l=e.setFieldError,a=void 0===l?null:l;return function(e){var n;if(null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.errors){var r,l=null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.errors;Object.keys(l).forEach((function(e){Z(l,e,t,i,a)}))}}};return(0,J.jsx)(F.Z,{open:n,TransitionComponent:X,keepMounted:!0,onClose:t,sx:{"&>div:nth-of-type(3)":{justifyContent:"flex-end","&>div":{m:0,borderRadius:"0px",maxWidth:450,maxHeight:"100%"}}},children:n&&(0,J.jsx)(V.J9,{initialValues:(0,l.Z)({title:"",rate_type:"percent",rate:"",net_price:"exclusive",status:!0,admin_tax:!1},a),enableReinitialize:!0,validationSchema:L.Ry().shape({title:L.Z_().required("Title is required"),rate:L.Rx().moreThan(0,"Rate should be greater than zero").required("Rate is required").when("rate_type",(function(e,n){return"percent"===e?n.max(100,"Rate % should be less than 100"):n}))}),onSubmit:function(){var e=(0,r.Z)(o().mark((function e(n,t){var r,i,a,c,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.setErrors,t.setStatus,t.setSubmitting,i=t.setFieldTouched,a=t.setFieldError,c=(0,l.Z)({},n),console.log(n),d={setFieldTouched:i,setErrors:r,setFieldError:a};try{c.id?(c._method="put",s((0,H.We)(c,m,g(d)))):c.id||s((0,H.OE)(c,m,g(d)))}catch(o){s((0,G.ss)({open:!0,message:"An Error Occured",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"error"},close:!1})),console.error(o)}case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,r=e.setFieldValue,i=e.handleBlur,l=e.handleChange,a=e.handleSubmit,o=e.isSubmitting,c=e.touched,s=e.values;return(0,J.jsxs)("form",{noValidate:!0,onSubmit:a,children:[(0,J.jsx)(I.Z,{children:"".concat(s.id?"Edit":"Add"," Tax")}),(0,J.jsx)(B.Z,{children:(0,J.jsxs)(b.ZP,{container:!0,spacing:M.dv,sx:{mt:.25},children:[(0,J.jsx)(b.ZP,{item:!0,xs:12,children:(0,J.jsx)(y.Z,{id:"tax-title",fullWidth:!0,label:"Enter Tax Title*",name:"title",value:s.title,onBlur:i,onChange:l,error:Boolean(c.title&&n.title),helperText:c.title&&n.title})}),(0,J.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,J.jsx)(y.Z,{id:"standard-select-rate-type",name:"rate_type",select:!0,label:"Select Rate Type*",value:s.rate_type,fullWidth:!0,onBlur:i,onChange:l,children:Q.map((function(e){return(0,J.jsx)(E.Z,{value:e.value,children:e.label},e.value)}))})}),(0,J.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,J.jsx)(y.Z,{label:"Rate (".concat("percent"===s.rate_type?"%":"\u20b9",")"),id:"tax-rate",name:"rate",type:"number",value:s.rate,onBlur:i,onChange:l,InputProps:{startAdornment:"percent"===s.rate_type?(0,J.jsx)(C.Z,{position:"start",children:"%"}):null},error:Boolean(c.rate&&n.rate),helperText:c.rate&&n.rate})}),(0,J.jsx)(b.ZP,{item:!0,xs:12,children:(0,J.jsx)(y.Z,{id:"standard-select-net-price",name:"net_price",select:!0,label:"Net Price Incl/Excl",value:s.net_price,fullWidth:!0,onBlur:i,onChange:l,children:K.map((function(e){return(0,J.jsx)(E.Z,{value:e.value,children:e.label},e.value)}))})}),(0,J.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,J.jsx)(D.Z,{control:(0,J.jsx)(_.Z,{checked:s.status||!1,name:"status",onChange:function(e){return r("status",e.target.checked)}}),label:"Active"})}),(0,J.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,J.jsx)(D.Z,{control:(0,J.jsx)(_.Z,{checked:s.admin_tax||!1,name:"admin_tax",onChange:function(e){return r("admin_tax",e.target.checked)}}),label:"Admin Tax?"})})]})}),(0,J.jsxs)(W.Z,{children:[(0,J.jsx)(N.Z,{children:(0,J.jsx)(q.Z,{color:"secondary",disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"".concat(s.id?"Update":"Create")})}),(0,J.jsx)(N.Z,{children:(0,J.jsx)(q.Z,{variant:"text",color:"error",onClick:t,children:"Close"})})]}),(0,J.jsx)(f.Z,{sx:{mt:2}})]})}})})},$=t(53904),ee=t(49042),ne=t(35688),te=t(19148),re=t(30928),ie=t(16399),le=t(17190),ae=t(9789),oe=t(43510),ce=t(73106);function se(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}var de=function(e,n){return"desc"===e?function(e,t){return se(e,t,n)}:function(e,t){return-se(e,t,n)}};function ue(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t.map((function(e){return e[0]}))}var he=[{id:"id",numeric:!0,label:"ID",align:"center"},{id:"name",numeric:!1,label:"Tax Title",align:"left"},{id:"rate_type",numeric:!1,label:"Rate Type",align:"left"},{id:"rate",numeric:!0,label:"Rate",align:"right"},{id:"net_price",numeric:!1,label:"Net Price",align:"left"},{id:"status",numeric:!1,label:"Status",align:"center"},{id:"admin_tax",numeric:!1,label:"Admin Tax",align:"center"}];function xe(e){var n=e.onSelectAllClick,t=e.order,r=e.orderBy,i=e.numSelected,l=e.rowCount,a=e.onRequestSort,o=e.theme,c=e.selected;return(0,J.jsx)(d.Z,{children:(0,J.jsxs)(u.Z,{children:[(0,J.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},children:(0,J.jsx)(x.Z,{color:"primary",indeterminate:i>0&&i<l,checked:l>0&&i===l,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),i>0&&(0,J.jsx)(h.Z,{padding:"none",colSpan:7,children:(0,J.jsx)(pe,{numSelected:c.length})}),i<=0&&he.map((function(e){return(0,J.jsx)(h.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&t,children:(0,J.jsxs)(p.Z,{active:r===e.id,direction:r===e.id?t:"asc",onClick:(n=e.id,function(e){a(e,n)}),children:[e.label,r===(null===e||void 0===e?void 0:e.id)?(0,J.jsx)(f.Z,{component:"span",sx:R.Z,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n})),i<=0&&(0,J.jsx)(h.Z,{sortDirection:!1,align:"center",sx:{pr:3},children:(0,J.jsx)(m.Z,{variant:"subtitle1",sx:{color:"dark"===o.palette.mode?"grey.600":"grey.900"},children:"Action"})})]})})}var pe=function(e){var n=e.numSelected;return(0,J.jsxs)(Z.Z,{sx:(0,l.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[n>0?(0,J.jsxs)(m.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}):(0,J.jsx)(m.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,J.jsx)(f.Z,{sx:{flexGrow:1}}),n>0&&(0,J.jsx)(g.Z,{title:"Delete",children:(0,J.jsx)(j.Z,{size:"large",children:(0,J.jsx)(ne.Z,{fontSize:"small"})})})]})},fe=function(){var e=(0,s.Z)(),n=(0,ee.I0)(),t=c.useState(null),r=(0,i.Z)(t,2),l=r[0],a=r[1],o=c.useState(!1),d=(0,i.Z)(o,2),p=d[0],f=d[1],Z=function(e){a(e),f(!0)},R=c.useState("asc"),A=(0,i.Z)(R,2),F=A[0],I=A[1],B=c.useState("calories"),D=(0,i.Z)(B,2),W=D[0],q=D[1],M=c.useState([]),N=(0,i.Z)(M,2),L=N[0],V=N[1],U=c.useState(0),Q=(0,i.Z)(U,2),K=Q[0],X=Q[1],ne=c.useState(5),se=(0,i.Z)(ne,2),he=se[0],pe=se[1],fe=c.useState(""),me=(0,i.Z)(fe,2),Ze=me[0],ge=me[1],je=c.useState([]),ve=(0,i.Z)(je,2),be=ve[0],ye=ve[1],Ce=(0,ee.v9)((function(e){return e.tax})).taxes,Se=c.useState(!1),ke=(0,i.Z)(Se,2),we=ke[0],Pe=ke[1];c.useEffect((function(){n((0,H.fb)())}),[n]),c.useEffect((function(){ye(Ce)}),[Ce]);var Te=c.useState(null),_e=(0,i.Z)(Te,2),ze=_e[0],Ee=_e[1],Oe=function(e){Ee(null===e||void 0===e?void 0:e.currentTarget)},Re=function(){Ee(null)},Ae=function(){n((0,G.ss)({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},message:"Tax Deleted"})),n((0,H.fb)())},Fe=function(){n((0,G.ss)({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"error"},message:"An Error Occured"}))},Ie=K>0?Math.max(0,(1+K)*he-be.length):0;return(0,J.jsxs)($.Z,{title:"Tax List",content:!1,children:[(0,J.jsx)(v.Z,{children:(0,J.jsxs)(b.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,J.jsx)(b.ZP,{item:!0,xs:12,sm:6,children:(0,J.jsx)(y.Z,{InputProps:{startAdornment:(0,J.jsx)(C.Z,{position:"start",children:(0,J.jsx)(le.Z,{fontSize:"small"})})},onChange:function(e){var n=null===e||void 0===e?void 0:e.target.value;if(ge(n||""),n){var t=be.filter((function(e){var t=!0,r=!1;return["name","category","price","qty","id"].forEach((function(t){e[t].toString().toLowerCase().includes(n.toString().toLowerCase())&&(r=!0)})),r||(t=!1),t}));ye(t)}else ye(Ce)},placeholder:"Search Tax",value:Ze,size:"small"})}),(0,J.jsxs)(b.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,J.jsx)(g.Z,{title:"Copy",children:(0,J.jsx)(j.Z,{size:"large",children:(0,J.jsx)(ie.Z,{})})}),(0,J.jsx)(g.Z,{title:"Print",children:(0,J.jsx)(j.Z,{size:"large",children:(0,J.jsx)(re.Z,{})})}),(0,J.jsx)(g.Z,{title:"Filter",children:(0,J.jsx)(j.Z,{size:"large",children:(0,J.jsx)(te.Z,{})})}),(0,J.jsx)(g.Z,{title:"Add Tax",children:(0,J.jsx)(S.Z,{color:"primary",size:"small",onClick:Z,sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:(0,J.jsx)(ae.Z,{fontSize:"small"})})}),(0,J.jsx)(Y,{open:p,editingTax:l,handleCloseDialog:function(){f(!1),a(null)}})]})]})}),(0,J.jsx)(k.Z,{children:(0,J.jsxs)(w.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,J.jsx)(xe,{numSelected:L.length,order:F,orderBy:W,onSelectAllClick:function(e){if(e.target.checked)if(L.length>0)V([]);else{var n=be.map((function(e){return e.id}));V(n)}else V([])},onRequestSort:function(e,n){I(W===n&&"asc"===F?"desc":"asc"),q(n)},rowCount:be.length,theme:e,selected:L}),(0,J.jsxs)(P.Z,{children:[ue(be,de(F,W)).slice(K*he,K*he+he).map((function(t,r){if("number"===typeof t)return null;var i,l=(i=t.id,-1!==L.indexOf(i)),o="enhanced-table-checkbox-".concat(r);return(0,J.jsxs)(u.Z,{hover:!0,role:"checkbox","aria-checked":l,tabIndex:-1,selected:l,children:[(0,J.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},onClick:function(e){return function(e,n){var t=L.indexOf(n),r=[];-1===t?r=r.concat(L,n):0===t?r=r.concat(L.slice(1)):t===L.length-1?r=r.concat(L.slice(0,-1)):t>0&&(r=r.concat(L.slice(0,t),L.slice(t+1))),V(r)}(0,t.id)},children:(0,J.jsx)(x.Z,{color:"primary",checked:l,inputProps:{"aria-labelledby":o}})}),(0,J.jsx)(h.Z,{align:"center",component:"th",id:o,scope:"row",sx:{cursor:"pointer"},children:(0,J.jsxs)(m.Z,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:["#",t.id," "]})}),(0,J.jsx)(h.Z,{component:"th",id:o,scope:"row",sx:{cursor:"pointer"},onClick:function(e){return Z(t)},children:(0,J.jsx)(T.Z,{underline:"hover",color:"default",sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:t.title})}),(0,J.jsx)(h.Z,{children:t.rate_type}),(0,J.jsx)(h.Z,{align:"right",children:t.rate}),(0,J.jsx)(h.Z,{children:t.net_price}),(0,J.jsx)(h.Z,{align:"center",children:(0,J.jsx)(_.Z,{checked:t.status,color:"".concat(t.status?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(e,r){var i={id:t.id,status:e.target.checked,_method:"put"};n((0,H.We)(i,(function(){}),(function(){})))}})}),(0,J.jsx)(h.Z,{align:"center",children:(0,J.jsx)(_.Z,{checked:t.admin_tax,color:"".concat(t.admin_tax?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(e,r){var i={id:t.id,admin_tax:e.target.checked,_method:"put"};n((0,H.We)(i,(function(){}),(function(){})))}})}),(0,J.jsxs)(h.Z,{align:"center",sx:{pr:3},children:[(0,J.jsx)(j.Z,{onClick:Oe,size:"large","aria-label":"more options",children:(0,J.jsx)(oe.Z,{fontSize:"small","aria-controls":"menu-popular-card-1","aria-haspopup":"true",sx:{color:"grey.500"}})}),(0,J.jsxs)(z.Z,{id:"menu-popular-card-1",anchorEl:ze,keepMounted:!0,open:Boolean(ze),onClose:Re,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiMenu-paper":{boxShadow:e.customShadows.z1}},children:[(0,J.jsx)(E.Z,{onClick:function(){return function(e){Z(e),Re()}(t)},children:"Edit"}),(0,J.jsx)(E.Z,{onClick:function(){return function(e){Re(),a(e),Pe(!0)}(t)},children:"Delete"})]})]})]},r)})),Ie>0&&(0,J.jsx)(u.Z,{style:{height:53*Ie},children:(0,J.jsx)(h.Z,{colSpan:6})})]})]})}),(0,J.jsx)(O.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:be.length,rowsPerPage:he,page:K,onPageChange:function(e,n){X(n)},onRowsPerPageChange:function(e){pe(parseInt(null===e||void 0===e?void 0:e.target.value,10)),X(0)}}),(0,J.jsx)(ce.Z,{open:we,setOpen:Pe,item:l,onConfirm:function(){Pe(!1),n((0,H.NQ)(l,Ae,Fe))},onCancel:function(){return Pe(!1)}})]})}}}]);