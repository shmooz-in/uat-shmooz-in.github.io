"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[8984],{28984:function(e,t,n){n.r(t);var r=n(15861),a=n(29439),o=n(1413),c=n(64687),i=n.n(c),s=n(47313),l=n(19860),d=n(23477),h=n(24076),u=n(67478),v=n(44758),p=n(82558),m=n(9506),x=n(9289),Z=n(61113),f=n(61689),g=n(47131),j=n(93405),b=n(9019),w=n(24631),k=n(41727),S=n(51629),y=n(66835),z=n(57861),C=n(70024),P=n(62323),M=n(50282),H=n(33497),R=n(25823),T=n(66795),B=n(51997),I=n(44289),V=n(94788),O=n(49854),N=n(57983),A=n(46417);function D(e,t,n){var r=t[n];!0===t[n]?r=1:!1===t[n]&&(r=0);var a=e[n];return!0===e[n]?a=1:!1===e[n]&&(a=0),r<a?-1:r>a?1:0}var L=function(e,t){return"desc"===e?function(e,n){return D(e,n,t)}:function(e,n){return-D(e,n,t)}};function F(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n.map((function(e){return e[0]}))}var q=[{id:"name",numeric:!1,label:"Country Name",align:"left"},{id:"status",numeric:!1,label:"Status",align:"center"}];function E(e){var t=e.onSelectAllClick,n=e.order,r=e.orderBy,a=e.numSelected,o=e.rowCount,c=e.onRequestSort,i=e.selected;return(0,A.jsxs)(d.Z,{children:[(0,A.jsx)(h.Z,{children:a>0&&(0,A.jsx)(u.Z,{padding:"none",colSpan:8,children:(0,A.jsx)(X,{numSelected:i.length})})}),(0,A.jsxs)(h.Z,{children:[(0,A.jsx)(u.Z,{padding:"checkbox",sx:{pl:3},children:(0,A.jsx)(v.Z,{color:"primary",indeterminate:a>0&&a<o,checked:o>0&&a===o,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),q.map((function(e){return(0,A.jsx)(u.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&n,children:(0,A.jsxs)(p.Z,{active:r===e.id,direction:r===e.id?n:"asc",onClick:(t=e.id,function(e){c(e,t)}),children:[e.label,r===e.id?(0,A.jsx)(m.Z,{component:"span",sx:M.Z,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var t}))]})]})}var X=function(e){var t=e.numSelected;return(0,A.jsxs)(x.Z,{sx:(0,o.Z)({p:0,pl:1,pr:1},t>0&&{color:function(e){return e.palette.secondary.main}}),children:[t>0?(0,A.jsxs)(Z.Z,{color:"inherit",variant:"h4",children:[t," Selected"]}):(0,A.jsx)(Z.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,A.jsx)(m.Z,{sx:{flexGrow:1}}),t>0&&(0,A.jsx)(f.Z,{title:"Delete",children:(0,A.jsx)(g.Z,{size:"large",children:(0,A.jsx)(B.Z,{fontSize:"small"})})})]})};t.default=function(){var e=(0,l.Z)(),t=(0,R.I0)(),n=s.useState("asc"),o=(0,a.Z)(n,2),c=o[0],d=o[1],p=s.useState("calories"),m=(0,a.Z)(p,2),x=m[0],M=m[1],B=s.useState([]),D=(0,a.Z)(B,2),q=D[0],X=D[1],G=s.useState(0),W=(0,a.Z)(G,2),$=W[0],_=W[1],J=s.useState(5),K=(0,a.Z)(J,2),Q=K[0],U=K[1],Y=s.useState(""),ee=(0,a.Z)(Y,2),te=ee[0],ne=ee[1],re=s.useState([]),ae=(0,a.Z)(re,2),oe=ae[0],ce=ae[1],ie=(0,R.v9)((function(e){return console.log(e),e.demographics})).countries;s.useEffect((function(){t((0,T.ox)())}),[t]);var se=function(e,t){var n=e;if(ne(n||""),n){var r=t.filter((function(e){var t=!0,r=!1;return["name","status"].forEach((function(t){var a;null!==(a=e[t])&&void 0!==a&&a.toString().toLowerCase().includes(n.toString().toLowerCase())&&(r=!0)})),r||(t=!1),t}));ce(r)}else ce(t)};s.useEffect((function(){se(te,ie)}),[ie]);var le=function(e,t){var n=q.indexOf(t),r=[];-1===n?r=r.concat(q,t):0===n?r=r.concat(q.slice(1)):n===q.length-1?r=r.concat(q.slice(0,-1)):n>0&&(r=r.concat(q.slice(0,n),q.slice(n+1))),X(r)},de=$>0?Math.max(0,(1+$)*Q-oe.length):0,he=function(){var e=(0,r.Z)(i().mark((function e(n,r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=3;break}return e.next=3,t((0,T.wO)(r,n.target.checked));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,A.jsxs)(H.Z,{title:"Country List",content:!1,children:[(0,A.jsx)(j.Z,{children:(0,A.jsxs)(b.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,A.jsx)(b.ZP,{item:!0,xs:12,sm:6,children:(0,A.jsx)(w.Z,{InputProps:{startAdornment:(0,A.jsx)(k.Z,{position:"start",children:(0,A.jsx)(N.Z,{fontSize:"small"})})},onChange:function(e){return se(e.target.value,ie)},placeholder:"Search Country",value:te,size:"small"})}),(0,A.jsxs)(b.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,A.jsx)(f.Z,{title:"Copy",children:(0,A.jsx)(g.Z,{size:"large",children:(0,A.jsx)(O.Z,{})})}),(0,A.jsx)(f.Z,{title:"Print",children:(0,A.jsx)(g.Z,{size:"large",children:(0,A.jsx)(V.Z,{})})}),(0,A.jsx)(f.Z,{title:"Filter",children:(0,A.jsx)(g.Z,{size:"large",children:(0,A.jsx)(I.Z,{})})})]})]})}),(0,A.jsx)(S.Z,{children:(0,A.jsxs)(y.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,A.jsx)(E,{theme:e,numSelected:q.length,order:c,orderBy:x,onSelectAllClick:function(e){if(e.target.checked)if(q.length>0)X([]);else{var t=oe.map((function(e){return e.name}));X(t)}else X([])},onRequestSort:function(e,t){d(x===t&&"asc"===c?"desc":"asc"),M(t)},rowCount:oe.length,selected:q}),(0,A.jsxs)(z.Z,{children:[F(oe,L(c,x)).slice($*Q,$*Q+Q).map((function(t,n){if("number"===typeof t)return null;var r,a=(r=t.name,-1!==q.indexOf(r)),o="enhanced-table-checkbox-".concat(n);return(0,A.jsxs)(h.Z,{hover:!0,role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[(0,A.jsx)(u.Z,{padding:"checkbox",sx:{pl:3},onClick:function(e){return le(0,t.name)},children:(0,A.jsx)(v.Z,{color:"primary",checked:a,inputProps:{"aria-labelledby":o}})}),(0,A.jsxs)(u.Z,{component:"th",id:o,scope:"row",onClick:function(e){return le(0,t.name)},sx:{cursor:"pointer"},children:[(0,A.jsxs)(Z.Z,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:[" ",t.name," "]}),(0,A.jsxs)(Z.Z,{variant:"caption",children:[" ",t.email," "]})]}),(0,A.jsx)(u.Z,{align:"center",children:(0,A.jsx)(C.Z,{checked:t.status,color:"".concat(t.status?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(e,n){he(e,t),console.log(n)}})})]},n)})),de>0&&(0,A.jsx)(h.Z,{style:{height:53*de},children:(0,A.jsx)(u.Z,{colSpan:6})})]})]})}),(0,A.jsx)(P.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:oe.length,rowsPerPage:Q,page:$,onPageChange:function(e,t){_(t)},onRowsPerPageChange:function(e){U(parseInt(null===e||void 0===e?void 0:e.target.value,10)),_(0)}})]})}},51997:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45045)),o=n(46417),c=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=c},49854:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45045)),o=n(46417),c=(0,a.default)([(0,o.jsx)("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"},"0"),(0,o.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"},"1")],"FileCopyTwoTone");t.Z=c},44289:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45045)),o=n(46417),c=(0,a.default)((0,o.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterListTwoTone");t.Z=c},94788:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45045)),o=n(46417),c=(0,a.default)([(0,o.jsx)("path",{d:"M8 5h8v3H8z",opacity:".3"},"0"),(0,o.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1"),(0,o.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"2"),(0,o.jsx)("path",{d:"M6 13h12v2h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2v-2zm12-2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",opacity:".3"},"3")],"PrintTwoTone");t.Z=c},70024:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(4942),a=n(63366),o=n(87462),c=n(47313),i=n(94146),s=n(21921),l=n(17551),d=n(91615),h=n(97423),u=n(77342),v=n(17592),p=n(77430),m=n(32298);function x(e){return(0,m.Z)("MuiSwitch",e)}var Z=(0,p.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),f=n(46417),g=["className","color","edge","size","sx"],j=(0,v.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.edge&&t["edge".concat((0,d.Z)(n.edge))],t["size".concat((0,d.Z)(n.size))]]}})((function(e){var t,n=e.ownerState;return(0,o.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===n.edge&&{marginLeft:-8},"end"===n.edge&&{marginRight:-8},"small"===n.size&&(t={width:40,height:24,padding:7},(0,r.Z)(t,"& .".concat(Z.thumb),{width:16,height:16}),(0,r.Z)(t,"& .".concat(Z.switchBase),(0,r.Z)({padding:4},"&.".concat(Z.checked),{transform:"translateX(16px)"})),t))})),b=(0,v.ZP)(h.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var n=e.ownerState;return[t.switchBase,(0,r.Z)({},"& .".concat(Z.input),t.input),"default"!==n.color&&t["color".concat((0,d.Z)(n.color))]]}})((function(e){var t,n=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:n.vars?n.vars.palette.Switch.defaultColor:"".concat("light"===n.palette.mode?n.palette.common.white:n.palette.grey[300]),transition:n.transitions.create(["left","transform"],{duration:n.transitions.duration.shortest})},(0,r.Z)(t,"&.".concat(Z.checked),{transform:"translateX(20px)"}),(0,r.Z)(t,"&.".concat(Z.disabled),{color:n.vars?n.vars.palette.Switch.defaultDisabledColor:"".concat("light"===n.palette.mode?n.palette.grey[100]:n.palette.grey[600])}),(0,r.Z)(t,"&.".concat(Z.checked," + .").concat(Z.track),{opacity:.5}),(0,r.Z)(t,"&.".concat(Z.disabled," + .").concat(Z.track),{opacity:n.vars?n.vars.opacity.switchTrackDisabled:"".concat("light"===n.palette.mode?.12:.2)}),(0,r.Z)(t,"& .".concat(Z.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,n=e.theme,a=e.ownerState;return(0,o.Z)({"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(t={},(0,r.Z)(t,"&.".concat(Z.checked),(0,r.Z)({color:(n.vars||n).palette[a.color].main,"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette[a.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(n.palette[a.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(Z.disabled),{color:n.vars?n.vars.palette.Switch["".concat(a.color,"DisabledColor")]:"".concat("light"===n.palette.mode?(0,l.$n)(n.palette[a.color].main,.62):(0,l._j)(n.palette[a.color].main,.55))})),(0,r.Z)(t,"&.".concat(Z.checked," + .").concat(Z.track),{backgroundColor:(n.vars||n).palette[a.color].main}),t))})),w=(0,v.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),k=(0,v.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),S=c.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiSwitch"}),r=n.className,c=n.color,l=void 0===c?"primary":c,h=n.edge,v=void 0!==h&&h,p=n.size,m=void 0===p?"medium":p,Z=n.sx,S=(0,a.Z)(n,g),y=(0,o.Z)({},n,{color:l,edge:v,size:m}),z=function(e){var t=e.classes,n=e.edge,r=e.size,a=e.color,c=e.checked,i=e.disabled,l={root:["root",n&&"edge".concat((0,d.Z)(n)),"size".concat((0,d.Z)(r))],switchBase:["switchBase","color".concat((0,d.Z)(a)),c&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},h=(0,s.Z)(l,x,t);return(0,o.Z)({},t,h)}(y),C=(0,f.jsx)(k,{className:z.thumb,ownerState:y});return(0,f.jsxs)(j,{className:(0,i.Z)(z.root,r),sx:Z,ownerState:y,children:[(0,f.jsx)(b,(0,o.Z)({type:"checkbox",icon:C,checkedIcon:C,ref:t,ownerState:y},S,{classes:(0,o.Z)({},z,{root:z.switchBase})})),(0,f.jsx)(w,{className:z.track,ownerState:y})]})}))}}]);