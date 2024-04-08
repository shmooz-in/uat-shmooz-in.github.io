"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[8983],{8983:function(e,t,o){o.r(t);o(15861);var r=o(29439),n=o(1413),a=(o(64687),o(47313)),i=o(2135),c=o(19860),s=o(23477),l=o(24076),d=o(67478),u=o(44758),h=o(82558),v=o(9506),p=o(9289),m=o(61113),g=o(61689),Z=o(47131),x=o(93405),f=o(9019),b=o(24631),w=o(41727),j=o(42420),S=o(51629),k=o(66835),z=o(57861),y=o(70024),C=o(62323),P=o(50282),M=o(33497),R=o(12754),H=o(74652),V=o(51997),T=o(44289),I=o(94788),F=o(49854),N=o(57983),A=o(83033),B=o(54285),O=o(46417);function D(e,t,o){var r=t[o];!0===t[o]?r=1:!1===t[o]&&(r=0);var n=e[o];return!0===e[o]?n=1:!1===e[o]&&(n=0),r<n?-1:r>n?1:0}var L=function(e,t){return"desc"===e?function(e,o){return D(e,o,t)}:function(e,o){return-D(e,o,t)}};function W(e,t){var o=e.map((function(e,t){return[e,t]}));return o.sort((function(e,o){var r=t(e[0],o[0]);return 0!==r?r:e[1]-o[1]})),o.map((function(e){return e[0]}))}var q=[{id:"title",numeric:!1,label:"Venue Name",align:"left"},{id:"description",numeric:!1,label:"Description",align:"left"},{id:"slug",numeric:!1,label:"Slug",align:"left"},{id:"status",numeric:!1,label:"Status",align:"center"}];function E(e){var t=e.onSelectAllClick,o=e.order,r=e.orderBy,n=e.numSelected,a=e.rowCount,i=e.onRequestSort,c=e.selected;return(0,O.jsxs)(s.Z,{children:[(0,O.jsx)(l.Z,{children:n>0&&(0,O.jsx)(d.Z,{padding:"none",colSpan:8,children:(0,O.jsx)(U,{numSelected:c.length})})}),(0,O.jsxs)(l.Z,{children:[(0,O.jsx)(d.Z,{padding:"checkbox",sx:{pl:3},children:(0,O.jsx)(u.Z,{color:"primary",indeterminate:n>0&&n<a,checked:a>0&&n===a,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),q.map((function(e){return(0,O.jsx)(d.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&o,children:(0,O.jsxs)(h.Z,{active:r===e.id,direction:r===e.id?o:"asc",onClick:(t=e.id,function(e){i(e,t)}),children:[e.label,r===e.id?(0,O.jsx)(v.Z,{component:"span",sx:P.Z,children:"desc"===o?"sorted descending":"sorted ascending"}):null]})},e.id);var t}))]})]})}var U=function(e){var t=e.numSelected;return(0,O.jsxs)(p.Z,{sx:(0,n.Z)({p:0,pl:1,pr:1},t>0&&{color:function(e){return e.palette.secondary.main}}),children:[t>0?(0,O.jsxs)(m.Z,{color:"inherit",variant:"h4",children:[t," Selected"]}):(0,O.jsx)(m.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,O.jsx)(v.Z,{sx:{flexGrow:1}}),t>0&&(0,O.jsx)(g.Z,{title:"Delete",children:(0,O.jsx)(Z.Z,{size:"large",children:(0,O.jsx)(V.Z,{fontSize:"small"})})})]})};t.default=function(){var e=(0,c.Z)(),t=(0,R.I0)(),o=(0,B.Z)().user,n=a.useState("desc"),s=(0,r.Z)(n,2),h=s[0],v=s[1],p=a.useState("id"),P=(0,r.Z)(p,2),V=P[0],D=P[1],q=a.useState([]),U=(0,r.Z)(q,2),X=U[0],_=U[1],G=a.useState(0),$=(0,r.Z)(G,2),J=$[0],K=$[1],Q=a.useState(5),Y=(0,r.Z)(Q,2),ee=Y[0],te=Y[1],oe=a.useState(""),re=(0,r.Z)(oe,2),ne=re[0],ae=re[1],ie=(0,a.useState)(null),ce=(0,r.Z)(ie,2),se=(ce[0],ce[1],a.useState(!1)),le=(0,r.Z)(se,2),de=(le[0],le[1],a.useState([])),ue=(0,r.Z)(de,2),he=ue[0],ve=ue[1],pe=(0,R.v9)((function(e){return e.venue})).venues;a.useEffect((function(){t((0,H.ho)({user_id:null!==o&&void 0!==o&&o.isAdmin||null===o||void 0===o?void 0:o.id}))}),[t]);var me=function(e,t){var o=e;if(ae(o||""),o){var r=t.filter((function(e){var t=!0,r=!1;return["title","description"].forEach((function(t){var n;null!==(n=e[t])&&void 0!==n&&n.toString().toLowerCase().includes(o.toString().toLowerCase())&&(r=!0)})),r||(t=!1),t}));ve(r)}else ve(t)};a.useEffect((function(){me(ne,pe)}),[pe]);var ge=J>0?Math.max(0,(1+J)*ee-he.length):0;return(0,O.jsxs)(M.Z,{title:"Venue List",content:!1,children:[(0,O.jsx)(x.Z,{children:(0,O.jsxs)(f.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,O.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,O.jsx)(b.Z,{InputProps:{startAdornment:(0,O.jsx)(w.Z,{position:"start",children:(0,O.jsx)(N.Z,{fontSize:"small"})})},onChange:function(e){return me(e.target.value,pe)},placeholder:"Search Venue",value:ne,size:"small"})}),(0,O.jsxs)(f.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,O.jsx)(g.Z,{title:"Copy",children:(0,O.jsx)(Z.Z,{size:"large",children:(0,O.jsx)(F.Z,{})})}),(0,O.jsx)(g.Z,{title:"Print",children:(0,O.jsx)(Z.Z,{size:"large",children:(0,O.jsx)(I.Z,{})})}),(0,O.jsx)(g.Z,{title:"Filter",children:(0,O.jsx)(Z.Z,{size:"large",children:(0,O.jsx)(T.Z,{})})}),(0,O.jsx)(g.Z,{title:"Add Venue",children:(0,O.jsx)(j.Z,{color:"primary",size:"small",LinkComponent:i.rU,to:"/manage/venue-edit",sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:(0,O.jsx)(A.Z,{fontSize:"small"})})})]})]})}),(0,O.jsx)(S.Z,{children:(0,O.jsxs)(k.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,O.jsx)(E,{theme:e,numSelected:X.length,order:h,orderBy:V,onSelectAllClick:function(e){if(e.target.checked)if(X.length>0)_([]);else{var t=he.map((function(e){return e.title}));_(t)}else _([])},onRequestSort:function(e,t){v(V===t&&"asc"===h?"desc":"asc"),D(t)},rowCount:he.length,selected:X}),(0,O.jsxs)(z.Z,{children:[W(he,L(h,V)).slice(J*ee,J*ee+ee).map((function(e,r){if("number"===typeof e)return null;var n,a=(n=e.title,-1!==X.indexOf(n)),c="enhanced-table-checkbox-".concat(r);return(0,O.jsxs)(l.Z,{hover:!0,role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[(0,O.jsx)(d.Z,{padding:"checkbox",sx:{pl:3},onClick:function(t){return function(e,t){var o=X.indexOf(t),r=[];-1===o?r=r.concat(X,t):0===o?r=r.concat(X.slice(1)):o===X.length-1?r=r.concat(X.slice(0,-1)):o>0&&(r=r.concat(X.slice(0,o),X.slice(o+1))),_(r)}(0,e.title)},children:(0,O.jsx)(u.Z,{color:"primary",checked:a,inputProps:{"aria-labelledby":c}})}),(0,O.jsx)(d.Z,{component:"th",id:c,scope:"row",sx:{cursor:"pointer"},children:(0,O.jsx)(m.Z,{component:i.rU,to:"/manage/venue-edit/".concat(null===e||void 0===e?void 0:e.slug),variant:"subtitle1",sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer",textDecoration:"none"},children:e.title})}),(0,O.jsx)(d.Z,{children:e.description}),(0,O.jsx)(d.Z,{children:e.slug}),(0,O.jsx)(d.Z,{align:"center",children:(0,O.jsx)(y.Z,{disabled:!(null!==o&&void 0!==o&&o.isAdmin),checked:e.status,color:"".concat(e.status?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(o,r){var n={id:e.id,status:o.target.checked};t((0,H.TI)(n))}})})]},r)})),ge>0&&(0,O.jsx)(l.Z,{style:{height:53*ge},children:(0,O.jsx)(d.Z,{colSpan:6})})]})]})}),(0,O.jsx)(C.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:he.length,rowsPerPage:ee,page:J,onPageChange:function(e,t){K(t)},onRowsPerPageChange:function(e){te(parseInt(null===e||void 0===e?void 0:e.target.value,10)),K(0)}})]})}},83033:function(e,t,o){var r=o(64836);t.Z=void 0;var n=r(o(45045)),a=o(46417),i=(0,n.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone");t.Z=i},49854:function(e,t,o){var r=o(64836);t.Z=void 0;var n=r(o(45045)),a=o(46417),i=(0,n.default)([(0,a.jsx)("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"},"1")],"FileCopyTwoTone");t.Z=i},44289:function(e,t,o){var r=o(64836);t.Z=void 0;var n=r(o(45045)),a=o(46417),i=(0,n.default)((0,a.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterListTwoTone");t.Z=i},94788:function(e,t,o){var r=o(64836);t.Z=void 0;var n=r(o(45045)),a=o(46417),i=(0,n.default)([(0,a.jsx)("path",{d:"M8 5h8v3H8z",opacity:".3"},"0"),(0,a.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1"),(0,a.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"2"),(0,a.jsx)("path",{d:"M6 13h12v2h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2v-2zm12-2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",opacity:".3"},"3")],"PrintTwoTone");t.Z=i},42420:function(e,t,o){o.d(t,{Z:function(){return b}});var r=o(4942),n=o(63366),a=o(87462),i=o(47313),c=o(94146),s=o(21921),l=o(38743),d=o(91615),u=o(77342),h=o(77430),v=o(32298);function p(e){return(0,v.Z)("MuiFab",e)}var m=(0,h.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),g=o(17592),Z=o(46417),x=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],f=(0,g.ZP)(l.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["size".concat((0,d.Z)(o.size))],"inherit"===o.color&&t.colorInherit,t[(0,d.Z)(o.size)],t[o.color]]}})((function(e){var t,o,n=e.theme,i=e.ownerState;return(0,a.Z)({},n.typography.button,(0,r.Z)({minHeight:36,transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(n.vars||n).zIndex.fab,boxShadow:(n.vars||n).shadows[6],"&:active":{boxShadow:(n.vars||n).shadows[12]},color:n.vars?n.vars.palette.text.primary:null==(t=(o=n.palette).getContrastText)?void 0:t.call(o,n.palette.grey[300]),backgroundColor:(n.vars||n).palette.grey[300],"&:hover":{backgroundColor:(n.vars||n).palette.grey.A100,"@media (hover: none)":{backgroundColor:(n.vars||n).palette.grey[300]},textDecoration:"none"}},"&.".concat(m.focusVisible),{boxShadow:(n.vars||n).shadows[6]}),"small"===i.size&&{width:40,height:40},"medium"===i.size&&{width:48,height:48},"extended"===i.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===i.variant&&"small"===i.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===i.variant&&"medium"===i.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===i.color&&{color:"inherit"})}),(function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({},"inherit"!==o.color&&"default"!==o.color&&null!=(t.vars||t).palette[o.color]&&{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}})}),(function(e){var t=e.theme;return(0,r.Z)({},"&.".concat(m.disabled),{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})})),b=i.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiFab"}),r=o.children,i=o.className,l=o.color,h=void 0===l?"default":l,v=o.component,m=void 0===v?"button":v,g=o.disabled,b=void 0!==g&&g,w=o.disableFocusRipple,j=void 0!==w&&w,S=o.focusVisibleClassName,k=o.size,z=void 0===k?"large":k,y=o.variant,C=void 0===y?"circular":y,P=(0,n.Z)(o,x),M=(0,a.Z)({},o,{color:h,component:m,disabled:b,disableFocusRipple:j,size:z,variant:C}),R=function(e){var t=e.color,o=e.variant,r=e.classes,n=e.size,i={root:["root",o,"size".concat((0,d.Z)(n)),"inherit"===t?"colorInherit":t]},c=(0,s.Z)(i,p,r);return(0,a.Z)({},r,c)}(M);return(0,Z.jsx)(f,(0,a.Z)({className:(0,c.Z)(R.root,i),component:m,disabled:b,focusRipple:!j,focusVisibleClassName:(0,c.Z)(R.focusVisible,S),ownerState:M,ref:t},P,{classes:R,children:r}))}))},70024:function(e,t,o){o.d(t,{Z:function(){return k}});var r=o(4942),n=o(63366),a=o(87462),i=o(47313),c=o(94146),s=o(21921),l=o(17551),d=o(91615),u=o(97423),h=o(77342),v=o(17592),p=o(77430),m=o(32298);function g(e){return(0,m.Z)("MuiSwitch",e)}var Z=(0,p.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),x=o(46417),f=["className","color","edge","size","sx"],b=(0,v.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.edge&&t["edge".concat((0,d.Z)(o.edge))],t["size".concat((0,d.Z)(o.size))]]}})((function(e){var t,o=e.ownerState;return(0,a.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===o.edge&&{marginLeft:-8},"end"===o.edge&&{marginRight:-8},"small"===o.size&&(t={width:40,height:24,padding:7},(0,r.Z)(t,"& .".concat(Z.thumb),{width:16,height:16}),(0,r.Z)(t,"& .".concat(Z.switchBase),(0,r.Z)({padding:4},"&.".concat(Z.checked),{transform:"translateX(16px)"})),t))})),w=(0,v.ZP)(u.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var o=e.ownerState;return[t.switchBase,(0,r.Z)({},"& .".concat(Z.input),t.input),"default"!==o.color&&t["color".concat((0,d.Z)(o.color))]]}})((function(e){var t,o=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:o.vars?o.vars.palette.Switch.defaultColor:"".concat("light"===o.palette.mode?o.palette.common.white:o.palette.grey[300]),transition:o.transitions.create(["left","transform"],{duration:o.transitions.duration.shortest})},(0,r.Z)(t,"&.".concat(Z.checked),{transform:"translateX(20px)"}),(0,r.Z)(t,"&.".concat(Z.disabled),{color:o.vars?o.vars.palette.Switch.defaultDisabledColor:"".concat("light"===o.palette.mode?o.palette.grey[100]:o.palette.grey[600])}),(0,r.Z)(t,"&.".concat(Z.checked," + .").concat(Z.track),{opacity:.5}),(0,r.Z)(t,"&.".concat(Z.disabled," + .").concat(Z.track),{opacity:o.vars?o.vars.opacity.switchTrackDisabled:"".concat("light"===o.palette.mode?.12:.2)}),(0,r.Z)(t,"& .".concat(Z.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,o=e.theme,n=e.ownerState;return(0,a.Z)({"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.activeChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(t={},(0,r.Z)(t,"&.".concat(Z.checked),(0,r.Z)({color:(o.vars||o).palette[n.color].main,"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette[n.color].mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(o.palette[n.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(Z.disabled),{color:o.vars?o.vars.palette.Switch["".concat(n.color,"DisabledColor")]:"".concat("light"===o.palette.mode?(0,l.$n)(o.palette[n.color].main,.62):(0,l._j)(o.palette[n.color].main,.55))})),(0,r.Z)(t,"&.".concat(Z.checked," + .").concat(Z.track),{backgroundColor:(o.vars||o).palette[n.color].main}),t))})),j=(0,v.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),S=(0,v.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),k=i.forwardRef((function(e,t){var o=(0,h.Z)({props:e,name:"MuiSwitch"}),r=o.className,i=o.color,l=void 0===i?"primary":i,u=o.edge,v=void 0!==u&&u,p=o.size,m=void 0===p?"medium":p,Z=o.sx,k=(0,n.Z)(o,f),z=(0,a.Z)({},o,{color:l,edge:v,size:m}),y=function(e){var t=e.classes,o=e.edge,r=e.size,n=e.color,i=e.checked,c=e.disabled,l={root:["root",o&&"edge".concat((0,d.Z)(o)),"size".concat((0,d.Z)(r))],switchBase:["switchBase","color".concat((0,d.Z)(n)),i&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,s.Z)(l,g,t);return(0,a.Z)({},t,u)}(z),C=(0,x.jsx)(S,{className:y.thumb,ownerState:z});return(0,x.jsxs)(b,{className:(0,c.Z)(y.root,r),sx:Z,ownerState:z,children:[(0,x.jsx)(w,(0,a.Z)({type:"checkbox",icon:C,checkedIcon:C,ref:t,ownerState:z},k,{classes:(0,a.Z)({},y,{root:y.switchBase})})),(0,x.jsx)(j,{className:y.track,ownerState:z})]})}))}}]);