"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[9412],{81628:function(e,r,n){var t=n(1413),a=n(93433),i=n(29439),l=n(47313),s=n(17592),o=n(17551),u=n(9506),d=n(70501),c=n(47131),m=n(24193),p=n(16031),v=n(58823),h=n(81195),x=n(19713),g=n(46417),f=(0,s.ZP)("div")((function(e){var r=e.theme;return{width:64,height:64,fontSize:24,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",margin:r.spacing(.5),borderRadius:r.shape.borderRadius,"&:hover":{opacity:.72}}}));function b(e){var r=e.setFieldValue,n=e.fieldName,s=e.multiple,b=e.attachments,Z=(0,l.useState)([]),y=(0,i.Z)(Z,2),j=y[0],k=y[1];(0,l.useEffect)((function(){b?Array.isArray(b)?k(b):k([b]):k([])}),[b]);var S=(0,l.useCallback)((function(e){var t=[];t=e.map((function(e){var r=new FileReader;return r.onabort=function(){return console.log("file reading was aborted")},r.onerror=function(){return console.log("file reading has failed")},r.onload=function(){var e=r.result;console.log(e)},r.readAsArrayBuffer(e),Object.assign(e,{preview:URL.createObjectURL(e)})})),s&&(null===j||void 0===j?void 0:j.length)>0&&(t=[].concat((0,a.Z)(t),(0,a.Z)(j))),k(t),r(n,s?t:e[0])}),[k,r,j]),C=(0,v.uI)({onDrop:S,multiple:s,noDrag:!s,maxFiles:5}),w=C.getRootProps,P=C.getInputProps,E=C.isDragActive;return(0,g.jsxs)(g.Fragment,{children:[null===j||void 0===j?void 0:j.map((function(e){var t=e.name,a=e.preview,i=(0,p.isString)(e)?e:t;return(0,g.jsxs)(u.Z,{sx:{p:0,m:.5,width:64,height:64,borderRadius:.25,overflow:"hidden",position:"relative"},children:[(0,g.jsx)(d.Z,{variant:"outlined",component:"img",src:(0,p.isString)(e)?e:a,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",borderRadius:1}}),(0,g.jsx)(u.Z,{sx:{top:6,right:6,position:"absolute"},children:(0,g.jsx)(c.Z,{size:"small",onClick:function(){return function(e){var t=s?j.filter((function(r){return r!==e})):null;k(t),r(n,t)}(e)},sx:{p:"1px",color:"common.white",bgcolor:function(e){return(0,o.Fq)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return(0,o.Fq)(e.palette.grey[900],.48)}}},children:(0,g.jsx)(h.Z,{})})})]},i)})),(0,g.jsxs)(f,(0,t.Z)((0,t.Z)({},w()),{},{sx:(0,t.Z)({},E&&{opacity:.72}),children:[(0,g.jsx)("input",(0,t.Z)({},P())),(0,g.jsx)(m.Z,{variant:"outlined",size:"small",sx:{p:0,minWidth:0},children:(0,g.jsx)(x.Z,{})})]}))]})}r.Z=function(e){return(0,g.jsx)(u.Z,{sx:{display:"flex"},children:(0,g.jsx)(b,(0,t.Z)({},e))})}},69412:function(e,r,n){n.r(r),n.d(r,{default:function(){return Me}});var t=n(93433),a=n(4942),i=n(45987),l=n(1413),s=n(29439),o=n(47313),u=n(9506),d=n(5297),c=n(65280),m=n(24193),p=n(85281),v=n(79429),h=n(16031),x=n.n(h),g=n(3463),f=n(2135),b=n(24631),Z=n(46417),y=["errorText"];function j(e){e.errorText;var r=(0,i.Z)(e,y),n=(0,v.U$)(e),t=(0,s.Z)(n,2),a=t[0],o=t[1];return(0,Z.jsx)(b.Z,(0,l.Z)((0,l.Z)({type:"text",error:o.touched&&o.error&&!0,helperText:function(){var e=(0,h.at)(o,"touched","error"),r=(0,s.Z)(e,2),n=r[0],t=r[1];return n&&t?t:null}()},a),r))}var k=n(15480),S=n(1550),C=n(83929),w=n(44758),P=["label"];function E(e){var r=e.label,n=(0,i.Z)(e,P),t=(0,v.U$)(e),a=(0,s.Z)(t,3),o=a[0],u=a[1],d=a[2].setValue,c=function(){var e=(0,h.at)(u,"touched","error"),r=(0,s.Z)(e,2),n=r[0],t=r[1];return n&&t?(0,Z.jsx)(k.Z,{children:t}):null};return(0,Z.jsxs)(S.Z,(0,l.Z)((0,l.Z)({},n),{},{children:[(0,Z.jsx)(C.Z,{value:o.checked,checked:o.checked,control:(0,Z.jsx)(w.Z,(0,l.Z)((0,l.Z)({},o),{},{onChange:function(e){d(e.target.checked)}})),label:r}),(0,Z.jsx)(c,{})]}))}var A=n(51405),_=["data"];function F(e){var r=e.data,n=(0,i.Z)(e,_),t=(0,v.U$)(e),a=(0,s.Z)(t,2),o=a[0],u=a[1],d=o.value,c=(0,h.at)(u,"touched","error"),m=(0,s.Z)(c,2),p=m[0],x=m[1],g=p&&x&&!0;return(0,Z.jsx)(b.Z,(0,l.Z)((0,l.Z)((0,l.Z)({select:!0,error:u.touched&&u.error&&!0,helperText:g?(0,Z.jsx)(k.Z,{children:x}):null},o),n),{},{value:d||"",children:r.map((function(e,r){return(0,Z.jsx)(A.Z,{value:e.value,children:e.label},r)}))}))}F.defaultProps={data:[]};var N=F;n(30411);var V=n(81628),q=["label","value"];function M(e){e.label;var r=e.value,n=(0,i.Z)(e,q),t=(0,v.U$)(e),a=(0,s.Z)(t,3),l=(a[0],a[1],a[2].setValue);return(0,Z.jsx)(V.Z,{attachments:r?[r]:[],setFieldValue:function(e,r){l(r||[])},fieldName:n.name})}n(70816);var O,T="checkoutForm",R={firstName:{name:"firstName",label:"First name*",requiredErrorMsg:"First name is required"},lastName:{name:"lastName",label:"Last name*",requiredErrorMsg:"Last name is required"},address1:{name:"address1",label:"Address Line 1*",requiredErrorMsg:"Address Line 1 is required"},address2:{name:"address2",label:"Address Line 2"},city:{name:"city",label:"City*",requiredErrorMsg:"City is required"},state:{name:"state",label:"State/Province/Region"},zipcode:{name:"zipcode",label:"Zipcode*",requiredErrorMsg:"Zipcode is required",invalidErrorMsg:"Zipcode is not valid (e.g. 70000)"},country:{name:"country",label:"Country*",requiredErrorMsg:"Country is required"},useAddressForPaymentDetails:{name:"useAddressForPaymentDetails",label:"Use this address for payment details"},nameOnCard:{name:"nameOnCard",label:"Name on card*",requiredErrorMsg:"Name on card is required"},cardNumber:{name:"cardNumber",label:"Card number*",requiredErrorMsg:"Card number is required",invalidErrorMsg:"Card number is not valid (e.g. 4111111111111)"},expiryDate:{name:"expiryDate",label:"Expiry date*",requiredErrorMsg:"Expiry date is required",invalidErrorMsg:"Expiry date is not valid"},cvv:{name:"cvv",label:"CVV*",requiredErrorMsg:"CVV is required",invalidErrorMsg:"CVV is invalid (e.g. 357)"}},W=R,z=(W.firstName,W.lastName,W.address1,W.city,W.zipcode,W.country,W.nameOnCard,W.cardNumber,W.expiryDate,W.cvv,[g.Ry().shape({}),g.Ry().shape({})]),D=R,B=D.firstName,I=D.lastName,L=D.address1,U=D.city,G=D.zipcode,$=D.country,H=D.useAddressForPaymentDetails,J=D.nameOnCard,K=D.cardNumber,Q=D.expiryDate,X=D.cvv,Y=(O={},(0,a.Z)(O,B.name,""),(0,a.Z)(O,I.name,""),(0,a.Z)(O,L.name,""),(0,a.Z)(O,U.name,""),(0,a.Z)(O,G.name,""),(0,a.Z)(O,$.name,""),(0,a.Z)(O,H.name,!1),(0,a.Z)(O,J.name,""),(0,a.Z)(O,K.name,""),(0,a.Z)(O,Q.name,""),(0,a.Z)(O,X.name,""),n(19860)),ee=function(e){return{stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},wrapper:{margin:e.spacing(1),position:"relative"},buttonProgress:{position:"absolute",top:"50%",left:"50%"}}},re=n(33497),ne=n(48384),te=n(52306),ae=n(9019),ie=n(61113),le=n(63318),se=function(e){var r,n,t,a=e.setting,i=null!==a&&void 0!==a&&a.details?null===(r=JSON.parse(null===a||void 0===a||null===(n=a.details)||void 0===n?void 0:n.replace(/\n/g,"")))||void 0===r?void 0:r.options:[],l=[];Array.isArray(i)&&i.length>0?l=i.map((function(e,r){return{value:r,label:e}})):i&&(null===(t=Object.keys(i))||void 0===t?void 0:t.length)>0&&Object.keys(i).forEach((function(e){l.push({value:e,label:i[e]})}));var o=(0,v.U$)(a.key),u=(0,s.Z)(o,3),d=u[0],c=(u[1],u[2].setValue);switch(a.type){case"text":return(0,Z.jsx)(j,{name:a.key,label:a.display_name,fullWidth:!0});case"select_dropdown":return(0,Z.jsx)(N,{name:a.key,label:a.display_name,data:l,fullWidth:!0});case"text_area":return(0,Z.jsx)(j,{name:a.key,label:a.display_name,multiline:!0,fullWidth:!0});case"image":return(0,Z.jsxs)(ae.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,Z.jsx)(ae.ZP,{item:!0,xs:12,sm:4,children:(0,Z.jsx)(ie.Z,{variant:"body2",children:a.display_name})}),(0,Z.jsxs)(ae.ZP,{item:!0,xs:12,sm:8,children:[(0,Z.jsx)(M,{name:a.key,label:a.display_name,value:a.value}),";"]})]});case"checkbox":return(0,Z.jsx)(E,{name:a.key,label:a.display_name,type:"checkbox"});case"double":return(0,Z.jsx)(j,{name:a.key,label:a.display_name,type:"number",fullWidth:!0});case"double_range":return(0,Z.jsxs)(ae.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,Z.jsx)(ae.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(ie.Z,{variant:"caption",children:a.display_name})}),(0,Z.jsx)(ae.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(le.ZP,{name:a.key,value:d.value,onChange:function(e,r){c(r)},valueLabelDisplay:"auto",disableSwap:!0,marks:[{value:0,label:"0%"},{value:100,label:"100%"}]})})]});default:return(0,Z.jsx)("div",{children:"Not Found"})}};function oe(e){var r=e.settings,n=e.tabName,a=o.useMemo((function(){return(0,t.Z)(r).sort((function(e,r){return e.order-r.order}))}),[r]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(ie.Z,{variant:"h6",gutterBottom:!0,children:n}),(0,Z.jsx)(ae.ZP,{container:!0,spacing:3,children:a.map((function(e){return(0,Z.jsx)(ae.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(se,{setting:e})},e.key)}))})]})}var ue=n(15861),de=n(64687),ce=n.n(de),me=n(50301),pe=n(94469),ve=n(33604),he=n(96467),xe=n(41727),ge=n(4117),fe=n(43394),be=n(97101),Ze=n(12401),ye=n(66182),je=n(85554),ke=n(5866),Se=[{value:"text",label:"Text"},{value:"select_dropdown",label:"Select"},{value:"text_area",label:"Text Area"},{value:"image",label:"Image"},{value:"checkbox",label:"Checkbox"},{value:"double",label:"Double"},{value:"double_range",label:"Range"}],Ce=(0,o.forwardRef)((function(e,r){return(0,Z.jsx)(me.Z,(0,l.Z)({direction:"left",ref:r},e))})),we=g.Ry().shape({});function Pe(e){var r,n,t,a=e.setting,i=null!==a&&void 0!==a&&a.details?null===(r=JSON.parse(null===a||void 0===a||null===(n=a.details)||void 0===n?void 0:n.replace(/\n/g,"")))||void 0===r?void 0:r.options:[],l=[];switch(Array.isArray(i)&&i.length>0?l=i.map((function(e,r){return{value:r,label:e}})):i&&(null===(t=Object.keys(i))||void 0===t?void 0:t.length)>0&&Object.keys(i).forEach((function(e){l.push({value:e,label:i[e]})})),a.type){case"text":return(0,Z.jsx)(j,{name:"value",label:"Value",fullWidth:!0});case"select_dropdown":return(0,Z.jsx)(N,{name:"value",label:"Value",data:l,fullWidth:!0});case"text_area":return(0,Z.jsx)(j,{name:"value",label:"Value",multiline:!0,fullWidth:!0});case"image":return(0,Z.jsxs)(ae.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,Z.jsx)(ae.ZP,{item:!0,xs:12,sm:4,children:(0,Z.jsx)(ie.Z,{variant:"body2",children:a.display_name})}),(0,Z.jsxs)(ae.ZP,{item:!0,xs:12,sm:8,children:[(0,Z.jsx)(M,{name:"value",label:"Value",value:a.value}),";"]})]});case"checkbox":return(0,Z.jsx)(E,{name:"value",label:"Value",type:"checkbox"});case"double":return(0,Z.jsx)(j,{name:"value",label:"Value",type:"number",fullWidth:!0});case"double_range":return(0,Z.jsxs)(ae.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,Z.jsx)(ae.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(ie.Z,{variant:"caption",children:a.display_name})}),(0,Z.jsx)(ae.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsx)(le.ZP,{defaultValue:[20,37],valueLabelDisplay:"auto",disableSwap:!0,marks:[{value:0,label:"0%"},{value:100,label:"100%"}]})})]});default:return(0,Z.jsx)("div",{children:"Not Found"})}}var Ee=function(e){var r=e.open,n=e.handleCloseDialog,t=e.editingAdminSetting,a=void 0===t?{}:t,i=(0,je.I0)(),s=function(e){n(),i((0,ke.ss)({open:!0,message:"Admin Setting Updated successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1}))},o=function(){var e=(0,ue.Z)(ce().mark((function e(r,n,t,a,i){return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n,!0,!0);case 2:i(n,r[n].join(", "));case 3:case"end":return e.stop()}}),e)})));return function(r,n,t,a,i){return e.apply(this,arguments)}}(),d=function(e){var r=e.setFieldTouched,n=void 0===r?null:r,t=e.setErrors,a=void 0===t?null:t,i=e.setFieldError,l=void 0===i?null:i;return function(){var e=(0,ue.Z)(ce().mark((function e(r){var t,i,s,u,d;return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===r||void 0===r||null===(t=r.data)||void 0===t||!t.errors){e.next=5;break}u=null===r||void 0===r||null===(s=r.data)||void 0===s?void 0:s.errors,Object.keys(u).forEach((function(e){o(u,e,n,a,l)})),e.next=9;break;case 5:if(null===r||void 0===r||null===(i=r.data)||void 0===i||!i.message){e.next=9;break}return e.next=8,n("submit",!0,!0);case 8:l("submit",null===r||void 0===r||null===(d=r.data)||void 0===d?void 0:d.message);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()};return(0,Z.jsx)(pe.Z,{open:r,TransitionComponent:Ce,keepMounted:!0,onClose:n,sx:{"&>div:nth-of-type(3)":{justifyContent:"flex-end","&>div":{m:0,borderRadius:"0px",maxWidth:450,maxHeight:"100%"}}},children:r&&(0,Z.jsx)(v.J9,{initialValues:(0,l.Z)({submit:null,display_name:"",key:"",group:"",order:1,details:""},a),enableReinitialize:!0,validationSchema:we,onSubmit:function(){var e=(0,ue.Z)(ce().mark((function e(r,n){var t,a,o,u,c;return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.setErrors,n.setStatus,n.setSubmitting,a=n.setFieldTouched,o=n.setFieldError,u=(0,l.Z)({},r),console.log(r),c={setFieldTouched:a,setErrors:t,setFieldError:o};try{u.id?(u._method="put",i((0,ne.im)(u,s,d(c)))):u.id||i((0,ne.m$)(u,s,d(c)))}catch(m){i((0,ke.ss)({open:!0,message:"An Error Occured",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"error"},close:!1})),console.error(m)}case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),children:function(e){var r,t=e.errors,i=(e.setFieldValue,e.handleBlur),l=e.handleChange,s=e.handleSubmit,o=(e.isSubmitting,e.touched),d=e.values;return(0,Z.jsx)("form",{noValidate:!0,onSubmit:s,id:"edit-admin",children:(0,Z.jsxs)(fe._,{dateAdapter:be.H,children:[(0,Z.jsx)(ve.Z,{children:"Create Setting for Group - ".concat(a.group)}),(0,Z.jsx)(he.Z,{children:(0,Z.jsxs)(ae.ZP,{container:!0,spacing:Ze.dv,sx:{mt:.25},children:[(0,Z.jsx)(ae.ZP,{item:!0,xs:12,children:(0,Z.jsx)(b.Z,{id:"adminSettings-group",fullWidth:!0,label:"Group",name:"group",disabled:!0,value:d.group,onBlur:i,onChange:l,error:Boolean(o.group&&t.group),helperText:o.group&&t.group})}),(0,Z.jsx)(ae.ZP,{item:!0,xs:12,children:(0,Z.jsx)(b.Z,{id:"adminSettings-display-name",fullWidth:!0,label:"Display Name",name:"display_name",value:d.display_name,onBlur:i,onChange:l,error:Boolean(o.display_name&&t.display_name),helperText:o.display_name&&t.display_name})}),(0,Z.jsx)(ae.ZP,{item:!0,xs:12,children:(0,Z.jsx)(b.Z,{id:"adminSettings-key",fullWidth:!0,label:"Key",name:"key",value:d.key,onBlur:i,onChange:l,error:Boolean(o.key&&t.key),helperText:o.key&&t.key,InputProps:{startAdornment:(0,Z.jsx)(xe.Z,{position:"start",children:null===(r=d.group)||void 0===r?void 0:r.toLowerCase()})}})}),(0,Z.jsx)(ae.ZP,{item:!0,md:6,xs:12,children:(0,Z.jsx)(b.Z,{id:"standard-select-type",name:"type",select:!0,label:"Select Type*",value:d.type,fullWidth:!0,onBlur:i,onChange:l,children:Se.map((function(e){return(0,Z.jsx)(A.Z,{value:e.value,children:e.label},e.value)}))})}),(0,Z.jsx)(ae.ZP,{item:!0,md:6,xs:12,children:(0,Z.jsx)(b.Z,{id:"standard-order",name:"order",type:"number",label:"Setting Order*",value:d.order,fullWidth:!0,inputProps:{min:0},onBlur:i,onChange:l})}),(0,Z.jsx)(ae.ZP,{item:!0,xs:12,children:(null===d||void 0===d?void 0:d.type)&&(0,Z.jsx)(Pe,{setting:d})})]})}),(0,Z.jsxs)(ge.Z,{children:[t.submit&&(0,Z.jsx)(u.Z,{sx:{ml:3,flex:1},children:(0,Z.jsx)(k.Z,{error:!0,children:t.submit})}),(0,Z.jsx)(ye.Z,{children:(0,Z.jsx)(m.Z,{variant:"text",color:"error",onClick:n,children:"Close"})})]}),(0,Z.jsx)(u.Z,{sx:{mt:2}})]})})}})})},Ae=["children","value","index"],_e=T;function Fe(e){var r={};return function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";x().forEach(n,(function(n,a){!x().isObject(n)||n instanceof File||Array.isArray(n)?Array.isArray(n)?r["".concat(t).concat(a)]=n.join("-"):r["".concat(t).concat(a)]=n:e(n,"".concat(t).concat(a,"-"))}))}(e),r}var Ne=function(e,r){var n=(0,l.Z)({},e),t=Object.keys(n),a=t.filter((function(e){return n[e]!==r[e]}));return t.forEach((function(e){a.includes(e)||delete n[e]})),n};function Ve(e){var r=e.children,n=e.value,t=e.index,a=(0,i.Z)(e,Ae);return(0,Z.jsx)("div",(0,l.Z)((0,l.Z)({role:"tabpanel",hidden:n!==t,id:"simple-tabpanel-".concat(t),"aria-labelledby":"simple-tab-".concat(t)},a),{},{children:n===t&&(0,Z.jsx)(u.Z,{sx:{p:0},children:r})}))}var qe=function(e){var r=e.settingGroups,n=e.setActiveTab,a=o.useState((0,t.Z)(r.keys())[0]),i=(0,s.Z)(a,2),u=i[0],m=i[1],p=(0,o.useMemo)((function(){return(0,t.Z)(r.keys())}),r),h=(0,v.u6)(),x=h.values;h.isValid,h.submitForm,(0,o.useMemo)((function(){return null!==r&&void 0!==r&&r.get("Site")?r.get("Site"):new Set}),[r]);return(0,o.useEffect)((function(){n(u)}),[u]),(0,Z.jsx)(re.Z,{title:"",children:(0,Z.jsxs)("div",{children:[(0,Z.jsx)(d.Z,{value:u,indicatorColor:"primary",onChange:function(e,r){console.log(x),m(r)},sx:{mb:3,minHeight:"auto","& button":{minWidth:100},"& a":{minHeight:"auto",minWidth:10,py:1.5,px:1,mr:2.25,color:"grey.600"},"& a.Mui-selected":{color:"primary.main"}},"aria-label":"simple tabs example",variant:"scrollable",children:p.map((function(e,r){return(0,Z.jsx)(c.Z,(0,l.Z)({component:f.rU,to:"#",value:e,label:e},function(e){return{key:e,id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(e)))}))}),p.map((function(e,n){return(0,Z.jsx)(Ve,{value:u,index:e,children:(0,Z.jsx)(oe,{settings:null===r||void 0===r?void 0:r.get(e),tabName:e})},n)}))]})})};var Me=function(){var e=(0,Y.Z)(),r=ee(e),n=(0,o.useState)(0),t=(0,s.Z)(n,2),i=t[0],u=(t[1],(0,o.useState)("")),d=(0,s.Z)(u,2),c=d[0],h=d[1],g=(0,o.useState)({}),f=(0,s.Z)(g,2),b=f[0],y=f[1],j=(0,o.useState)(new Map),k=(0,s.Z)(j,2),S=k[0],C=k[1],w=z[i],P=o.useState(!1),E=(0,s.Z)(P,2),A=E[0],_=E[1],F=(0,o.useState)(null),N=(0,s.Z)(F,2),V=N[0],q=N[1],M=(0,te.I0)();(0,o.useEffect)((function(){M((0,ne.Gw)())}),[M]);var O=(0,te.v9)((function(e){return e.adminSettings})).settings;(0,o.useEffect)((function(){if((null===O||void 0===O?void 0:O.length)>0){var e=function(e){var r={},n=new Map;return e.forEach((function(e){var t,i=n.get(e.group);i?i.add(e):n.set(e.group,new Set([e])),e.key=null===(t=e.key)||void 0===t?void 0:t.replace("-",".");var o=e.key.split("."),u=(0,s.Z)(o,2),d=u[0],c=u[1],m=e.value;"double_range"===e.type&&(m=e.value.split("-").map((function(e){return+e}))),r=(0,l.Z)((0,l.Z)({},r),{},(0,a.Z)({},d,(0,l.Z)((0,l.Z)({},r[d]),{},(0,a.Z)({},c,m))))})),console.log(n),console.log(r),{initialValues:r,settingGroups:n}}(JSON.parse(JSON.stringify(O)));y(e.initialValues),C(e.settingGroups)}}),[O]);var T=(0,v.TA)({initialValues:b,enableReinitialize:!0,validationSchema:w,onSubmit:function(e,r){var n=Fe(e);console.log(n);var t=Fe(T.initialValues);console.log(t);var a=Ne(n,t);console.log(a),x().isEmpty(a)||M((0,ne.uW)(a,(function(){r.setTouched({}),r.setSubmitting(!1)}),(function(){r.setTouched({}),r.setSubmitting(!1)})))}}),R=T.isSubmitting;return T.touched,(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ee,{open:A,editingAdminSetting:V,handleCloseDialog:function(e){_(!1)}}),(0,Z.jsx)(v.Hy,{value:T,children:(0,Z.jsxs)(v.l0,{id:_e,children:[S.size>0&&(0,Z.jsx)(qe,{settingGroups:S,setActiveTab:h}),(0,Z.jsxs)("div",{style:r.buttons,children:[(0,Z.jsx)("div",{style:r.wrapper,children:(0,Z.jsx)(m.Z,{variant:"contained",color:"primary",sx:r.button,onClick:function(){return T.resetForm()},children:"Reset Changes"})}),(0,Z.jsxs)("div",{style:r.wrapper,children:[(0,Z.jsx)(m.Z,{disabled:R,onClick:function(){return function(e){var r;q({group:c,order:((null===(r=S.get(c))||void 0===r?void 0:r.size)||0)+1}),_(!0)}()},variant:"contained",color:"primary",sx:r.button,children:"Create New ".concat(c," Setting")}),R&&(0,Z.jsx)(p.Z,{size:24,sx:r.buttonProgress})]}),(0,Z.jsxs)("div",{style:r.wrapper,children:[(0,Z.jsx)(m.Z,{disabled:R||!T.dirty,type:"submit",variant:"contained",color:"primary",sx:r.button,children:"Save Changes"}),R&&(0,Z.jsx)(p.Z,{size:24,sx:r.buttonProgress})]})]})]})})]})}}}]);