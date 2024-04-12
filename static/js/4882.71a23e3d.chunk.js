"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[4882],{11146:function(e,n,t){t(47313);var r=t(19860),i=t(94469),s=t(33604),a=t(96467),o=t(97762),l=t(61113),c=t(4117),u=t(24193),d=t(46417);n.Z=function(e){var n=e.open,t=void 0!==n&&n,h=e.setOpen,x=e.onConfirm,p=e.onCancel,f=(0,r.Z)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(i.Z,{open:t,onClose:function(){h(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{p:3},children:t&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{id:"alert-dialog-title",children:"Confirm Action"}),(0,d.jsx)(a.Z,{children:(0,d.jsx)(o.Z,{id:"alert-dialog-description",children:(0,d.jsx)(l.Z,{variant:"body2",component:"span",children:"Are you sure you want to proceed with the action"})})}),(0,d.jsxs)(c.Z,{sx:{pr:2.5},children:[(0,d.jsx)(u.Z,{sx:{color:f.palette.error.dark,borderColor:f.palette.error.dark},onClick:x,color:"secondary",children:"Delete"}),(0,d.jsx)(u.Z,{variant:"contained",size:"small",onClick:p,autoFocus:!0,children:"Cancel"})]})]})})})}},74882:function(e,n,t){t.r(n),t.d(n,{default:function(){return ye}});var r=t(15861),i=t(29439),s=t(1413),a=t(64687),o=t.n(a),l=t(47313),c=t(19860),u=t(23477),d=t(24076),h=t(67478),x=t(44758),p=t(82558),f=t(9506),Z=t(9289),g=t(61113),m=t(61689),j=t(47131),v=t(93405),b=t(9019),C=t(24631),y=t(41727),w=t(42420),S=t(51629),k=t(66835),P=t(57861),z=t(90891),A=t(70024),F=t(62323),R=t(94469),D=t(50282),I=t(33497),q=t(12754),O=t(5828),B=t(51997),E=t(44289),L=t(94788),T=t(49854),V=t(57983),W=t(83033),N=t(33604),U=t(19536),_=t(96467),H=t(83929),M=t(4117),G=t(35898),J=t(24193),K=t(43394),Q=t(97101),X=t(19118),Y=t.n(X),$=t(3463),ee=t(79429),ne=t(12401),te=t(17592),re=t(17551),ie=t(70501),se=t(65406),ae=t.n(se),oe=t(58823),le=t(81195),ce=t(19713),ue=t(46417),de=(0,te.ZP)("div")((function(e){var n=e.theme;return{width:64,height:64,fontSize:24,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",margin:n.spacing(.5),borderRadius:n.shape.borderRadius,"&:hover":{opacity:.72}}}));function he(e){console.log(e);var n=e.setFieldValue,t=(0,l.useState)([]),r=(0,i.Z)(t,2),a=r[0],o=r[1],c=(0,l.useCallback)((function(e){o(e.map((function(e){var n=new FileReader;return n.onabort=function(){return console.log("file reading was aborted")},n.onerror=function(){return console.log("file reading has failed")},n.onload=function(){var e=n.result;console.log(e)},n.readAsArrayBuffer(e),Object.assign(e,{preview:URL.createObjectURL(e)})}))),n("image",e[0])}),[o,n]),u=(0,oe.uI)({onDrop:c,multiple:!1,noDrag:!0}),d=u.getRootProps,h=u.getInputProps,x=u.isDragActive;return(0,ue.jsxs)(ue.Fragment,{children:[a.map((function(e){var n=e.name,t=e.preview,r=ae()(e)?e:n;return(0,ue.jsxs)(f.Z,{sx:{p:0,m:.5,width:64,height:64,borderRadius:.25,overflow:"hidden",position:"relative"},children:[(0,ue.jsx)(ie.Z,{variant:"outlined",component:"img",src:ae()(e)?e:t,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",borderRadius:1}}),(0,ue.jsx)(f.Z,{sx:{top:6,right:6,position:"absolute"},children:(0,ue.jsx)(j.Z,{size:"small",onClick:function(){return function(e){var n=a.filter((function(n){return n!==e}));o(n)}(e)},sx:{p:"1px",color:"common.white",bgcolor:function(e){return(0,re.Fq)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return(0,re.Fq)(e.palette.grey[900],.48)}}},children:(0,ue.jsx)(le.Z,{})})})]},r)})),(0,ue.jsxs)(de,(0,s.Z)((0,s.Z)({},d()),{},{sx:(0,s.Z)({},x&&{opacity:.72}),children:[(0,ue.jsx)("input",(0,s.Z)({},h())),(0,ue.jsx)(J.Z,{variant:"outlined",size:"large",sx:{p:2.25},children:(0,ue.jsx)(ce.Z,{})})]}))]})}var xe=function(e){return(0,ue.jsx)(f.Z,{sx:{display:"flex"},children:(0,ue.jsx)(he,(0,s.Z)({},e))})},pe=t(11146),fe=function(e,n){var t={name:"",slug:"",status:!0};return e||n?Y()({},t,e):t},Ze=function(e){var n=e.category,t=e.range,a=e.handleDelete,u=e.handleCreate,d=e.handleUpdate,h=e.onCancel,x=((0,c.Z)(),!n),p=(0,l.useState)(!1),f=(0,i.Z)(p,2),Z=f[0],v=f[1],y=$.Ry().shape({name:$.Z_().max(255).required("Name is required"),slug:$.Z_().max(255).required("Slug is required")}),w=(0,ee.TA)({initialValues:fe(n,t),validationSchema:y,onSubmit:function(){var e=(0,r.Z)(o().mark((function e(t,r){var i,s,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.resetForm,s=r.setSubmitting;try{a={name:t.name,slug:t.slug,status:t.status,image:t.image,template:!1},n?d(n.id,a):u(a),i(),h(),s(!1)}catch(o){console.error(o)}case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}),S=w.values,k=w.errors,P=w.touched,z=w.handleSubmit,F=w.isSubmitting,R=w.getFieldProps,D=w.setFieldValue;return(0,ue.jsx)(ee.Hy,{value:w,children:(0,ue.jsxs)(K._,{dateAdapter:Q.H,children:[(0,ue.jsxs)(ee.l0,{autoComplete:"off",noValidate:!0,onSubmit:z,children:[(0,ue.jsx)(N.Z,{children:n?"Edit Category":"Add Category"}),(0,ue.jsx)(U.Z,{}),(0,ue.jsx)(_.Z,{sx:{p:3},children:(0,ue.jsxs)(b.ZP,{container:!0,spacing:ne.dv,children:[(0,ue.jsx)(b.ZP,{item:!0,xs:12,children:(0,ue.jsx)(C.Z,(0,s.Z)((0,s.Z)({fullWidth:!0,label:"Name"},R("name")),{},{error:Boolean(P.name&&k.name),helperText:P.name&&k.name}))}),(0,ue.jsx)(b.ZP,{item:!0,xs:12,children:(0,ue.jsx)(C.Z,(0,s.Z)((0,s.Z)({fullWidth:!0,label:"Slug"},R("slug")),{},{error:Boolean(P.slug&&k.slug),helperText:P.slug&&k.slug}))}),(0,ue.jsx)(b.ZP,{item:!0,xs:12,children:(0,ue.jsxs)(b.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,ue.jsx)(b.ZP,{item:!0,xs:12,sm:4,children:(0,ue.jsx)(g.Z,{variant:"subtitle1",children:"Attachments:"})}),(0,ue.jsx)(b.ZP,{item:!0,xs:12,sm:8,children:(0,ue.jsx)(xe,{attachments:[],setFieldValue:D})})]})}),(0,ue.jsx)(b.ZP,{item:!0,xs:12,children:(0,ue.jsx)(H.Z,{control:(0,ue.jsx)(A.Z,(0,s.Z)({checked:S.status},R("status"))),label:"Active"})})]})}),(0,ue.jsx)(M.Z,{sx:{p:3},children:(0,ue.jsxs)(b.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,ue.jsx)(b.ZP,{item:!0,children:!x&&(0,ue.jsx)(m.Z,{title:"Delete Category",children:(0,ue.jsx)(j.Z,{color:"error",disabled:!0,onClick:function(){return v(!0)},size:"large",children:(0,ue.jsx)(B.Z,{})})})}),(0,ue.jsx)(b.ZP,{item:!0,children:(0,ue.jsxs)(G.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,ue.jsx)(J.Z,{type:"button",variant:"outlined",onClick:h,children:"Cancel"}),(0,ue.jsx)(J.Z,{type:"submit",variant:"contained",disabled:F,children:n?"Edit":"Add"})]})})]})})]}),(0,ue.jsx)(pe.Z,{open:Z,setOpen:v,onConfirm:function(){a(n.id)},onCancel:function(){return v(!1)}})]})})};function ge(e,n,t){var r=n[t];!0===n[t]?r=1:!1===n[t]&&(r=0);var i=e[t];return!0===e[t]?i=1:!1===e[t]&&(i=0),r<i?-1:r>i?1:0}var me=function(e,n){return"desc"===e?function(e,t){return ge(e,t,n)}:function(e,t){return-ge(e,t,n)}};function je(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t.map((function(e){return e[0]}))}var ve=[{id:"name",numeric:!1,label:"Category Name",align:"left"},{id:"slug",numeric:!1,label:"Slug",align:"left"},{id:"status",numeric:!1,label:"Status",align:"center"}];function be(e){var n=e.onSelectAllClick,t=e.order,r=e.orderBy,i=e.numSelected,s=e.rowCount,a=e.onRequestSort,o=e.selected;return(0,ue.jsxs)(u.Z,{children:[(0,ue.jsx)(d.Z,{children:i>0&&(0,ue.jsx)(h.Z,{padding:"none",colSpan:8,children:(0,ue.jsx)(Ce,{numSelected:o.length})})}),(0,ue.jsxs)(d.Z,{children:[(0,ue.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},children:(0,ue.jsx)(x.Z,{color:"primary",indeterminate:i>0&&i<s,checked:s>0&&i===s,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),ve.map((function(e){return(0,ue.jsx)(h.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&t,children:(0,ue.jsxs)(p.Z,{active:r===e.id,direction:r===e.id?t:"asc",onClick:(n=e.id,function(e){a(e,n)}),children:[e.label,r===e.id?(0,ue.jsx)(f.Z,{component:"span",sx:D.Z,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n}))]})]})}var Ce=function(e){var n=e.numSelected;return(0,ue.jsxs)(Z.Z,{sx:(0,s.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[n>0?(0,ue.jsxs)(g.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}):(0,ue.jsx)(g.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,ue.jsx)(f.Z,{sx:{flexGrow:1}}),n>0&&(0,ue.jsx)(m.Z,{title:"Delete",children:(0,ue.jsx)(j.Z,{size:"large",children:(0,ue.jsx)(B.Z,{fontSize:"small"})})})]})},ye=function(){var e=(0,c.Z)(),n=(0,q.I0)(),t=l.useState("asc"),a=(0,i.Z)(t,2),u=a[0],p=a[1],f=l.useState("calories"),Z=(0,i.Z)(f,2),g=Z[0],D=Z[1],B=l.useState([]),N=(0,i.Z)(B,2),U=N[0],_=N[1],H=l.useState(0),M=(0,i.Z)(H,2),G=M[0],J=M[1],K=l.useState(5),Q=(0,i.Z)(K,2),X=Q[0],Y=Q[1],$=l.useState(""),ee=(0,i.Z)($,2),ne=ee[0],te=ee[1],re=(0,l.useState)(null),ie=(0,i.Z)(re,2),se=ie[0],ae=ie[1],oe=l.useState(!1),le=(0,i.Z)(oe,2),ce=le[0],de=le[1],he=function(){ae(null),de(!1)},xe=l.useState([]),pe=(0,i.Z)(xe,2),fe=pe[0],ge=pe[1],ve=(0,q.v9)((function(e){return console.log(e),e.eventSetup})).categories;l.useEffect((function(){n((0,O.CP)())}),[n]);var Ce=function(e,n){var t=e;if(te(t||""),t){var r=n.filter((function(e){var n=!0,r=!1;return["name","status"].forEach((function(n){var i;null!==(i=e[n])&&void 0!==i&&i.toString().toLowerCase().includes(t.toString().toLowerCase())&&(r=!0)})),r||(n=!1),n}));ge(r)}else ge(n)};l.useEffect((function(){Ce(ne,ve)}),[ve]);var ye=G>0?Math.max(0,(1+G)*X-fe.length):0,we=function(){var e=(0,r.Z)(o().mark((function e(t,r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=3;break}return e.next=3,n((0,O.ri)(r,t.target.checked));case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Se=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,n((0,O.i8)(t,(function(){n((0,O.CP)())}),(function(){})));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ke=function(){var e=(0,r.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(de(!0),ae(n));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Pe=function(){var e=(0,r.Z)(o().mark((function e(t,r){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=(0,s.Z)((0,s.Z)({},r),{},{id:t,_method:"put"}),n((0,O.yr)(i,(function(){n((0,O.CP)())}),(function(){}))),de(!1);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),ze=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,O.uu)(t,(function(){de(!1),ae(null),n((0,O.CP)())}),(function(){})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,ue.jsxs)(I.Z,{title:"Category List",content:!1,children:[(0,ue.jsx)(v.Z,{children:(0,ue.jsxs)(b.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,ue.jsx)(b.ZP,{item:!0,xs:12,sm:6,children:(0,ue.jsx)(C.Z,{InputProps:{startAdornment:(0,ue.jsx)(y.Z,{position:"start",children:(0,ue.jsx)(V.Z,{fontSize:"small"})})},onChange:function(e){return Ce(e.target.value,ve)},placeholder:"Search Category",value:ne,size:"small"})}),(0,ue.jsxs)(b.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,ue.jsx)(m.Z,{title:"Copy",children:(0,ue.jsx)(j.Z,{size:"large",children:(0,ue.jsx)(T.Z,{})})}),(0,ue.jsx)(m.Z,{title:"Print",children:(0,ue.jsx)(j.Z,{size:"large",children:(0,ue.jsx)(L.Z,{})})}),(0,ue.jsx)(m.Z,{title:"Filter",children:(0,ue.jsx)(j.Z,{size:"large",children:(0,ue.jsx)(E.Z,{})})}),(0,ue.jsx)(m.Z,{title:"Add Category",children:(0,ue.jsx)(w.Z,{color:"primary",size:"small",onClick:function(){de(!0)},sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:(0,ue.jsx)(W.Z,{fontSize:"small"})})})]})]})}),(0,ue.jsx)(S.Z,{children:(0,ue.jsxs)(k.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,ue.jsx)(be,{theme:e,numSelected:U.length,order:u,orderBy:g,onSelectAllClick:function(e){if(e.target.checked)if(U.length>0)_([]);else{var n=fe.map((function(e){return e.name}));_(n)}else _([])},onRequestSort:function(e,n){p(g===n&&"asc"===u?"desc":"asc"),D(n)},rowCount:fe.length,selected:U}),(0,ue.jsxs)(P.Z,{children:[je(fe,me(u,g)).slice(G*X,G*X+X).map((function(e,n){if("number"===typeof e)return null;var t,r=(t=e.name,-1!==U.indexOf(t)),i="enhanced-table-checkbox-".concat(n);return(0,ue.jsxs)(d.Z,{hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,children:[(0,ue.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},onClick:function(n){return function(e,n){var t=U.indexOf(n),r=[];-1===t?r=r.concat(U,n):0===t?r=r.concat(U.slice(1)):t===U.length-1?r=r.concat(U.slice(0,-1)):t>0&&(r=r.concat(U.slice(0,t),U.slice(t+1))),_(r)}(0,e.name)},children:(0,ue.jsx)(x.Z,{color:"primary",checked:r,inputProps:{"aria-labelledby":i}})}),(0,ue.jsx)(h.Z,{component:"th",id:i,scope:"row",sx:{cursor:"pointer"},children:(0,ue.jsx)(z.Z,{underline:"hover",color:"default",onClick:function(){return ke(e)},sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:e.name})}),(0,ue.jsx)(h.Z,{children:e.slug}),(0,ue.jsx)(h.Z,{align:"center",children:(0,ue.jsx)(A.Z,{checked:e.status,color:"".concat(e.status?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(n,t){we(n,e),console.log(t)}})})]},n)})),ye>0&&(0,ue.jsx)(d.Z,{style:{height:53*ye},children:(0,ue.jsx)(h.Z,{colSpan:6})})]})]})}),(0,ue.jsx)(F.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:fe.length,rowsPerPage:X,page:G,onPageChange:function(e,n){J(n)},onRowsPerPageChange:function(e){Y(parseInt(null===e||void 0===e?void 0:e.target.value,10)),J(0)}}),(0,ue.jsx)(R.Z,{maxWidth:"sm",fullWidth:!0,onClose:he,open:ce,sx:{"& .MuiDialog-paper":{p:0}},children:ce&&(0,ue.jsx)(Ze,{category:se,handleCreate:Se,open:ce,handleCloseDialog:he,onCancel:he,handleUpdate:Pe,handleDelete:ze})})]})}}}]);