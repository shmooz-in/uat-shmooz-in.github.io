"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[691],{74941:function(e,n,r){var a=r(1413),i=r(45987),t=r(7276),o=r(50169),l=r(10981),c=r(61280),s=r(85535),d=r(6334),u=r(35970),h=r(45263),m=["children","content","contentClass","darkTitle","secondary","sx","contentSX","title"],x=t.forwardRef((function(e,n){var r=e.children,t=e.content,x=e.contentClass,b=e.darkTitle,v=e.secondary,Z=e.sx,p=void 0===Z?{}:Z,_=e.contentSX,j=void 0===_?{}:_,k=e.title,g=(0,i.Z)(e,m),f=(0,o.Z)();return(0,h.jsxs)(l.Z,(0,a.Z)((0,a.Z)({ref:n,sx:(0,a.Z)({border:"1px solid",borderColor:"dark"===f.palette.mode?f.palette.dark.light+15:f.palette.grey[200],":hover":{boxShadow:"dark"===f.palette.mode?"0 2px 14px 0 rgb(33 150 243 / 10%)":"0 2px 14px 0 rgb(32 40 45 / 8%)"}},p)},g),{},{children:[!b&&k&&(0,h.jsx)(c.Z,{sx:{p:2.5},title:(0,h.jsx)(s.Z,{variant:"h5",children:k}),action:v}),b&&k&&(0,h.jsx)(c.Z,{sx:{p:2.5},title:(0,h.jsx)(s.Z,{variant:"h4",children:k}),action:v}),k&&(0,h.jsx)(d.Z,{sx:{opacity:1,borderColor:"dark"===f.palette.mode?f.palette.dark.light+15:f.palette.grey[200]}}),t&&(0,h.jsx)(u.Z,{sx:(0,a.Z)({p:2.5},j),className:x||"",children:r}),!t&&r]}))}));x.defaultProps={content:!0},n.Z=x},90691:function(e,n,r){r.r(n),r.d(n,{default:function(){return re}});var a=r(15861),i=r(29439),t=r(1413),o=r(45987),l=r(64687),c=r.n(l),s=r(7276),d=r(95173),u=r(45254),h=r(42037),m=r(62092),x=r(38121),b=(r(93433),r(65173)),v=r(38709),Z=r(85535),p=r(31342),_=r(44390),j=r(20045),k=r(77801),g=r(66872),f=r(5894),P=r(82575),C=r.n(P),w=r(83303),y=r(74941),q=r(19972),B=r(43767),A=r(76588),S=r(93449),z=r(53922),T=r(4471),E=r(49042),F=r(45263),W=g.Ry({name:g.Z_().required("Name is required"),email:g.Z_().email("Enter valid Email").matches(A.CU,"Enter valid Email").max(255).required("Email is required"),organization:g.Z_().nullable().when(["role"],{is:function(e){return"organizer"===e},then:g.Z_().required("Organization is required")}),phone:g.Z_().required("Phone is required").test("test-name","Enter valid Phone",(function(e){return A.pY.test(e)}))}),N=(0,k.ZP)("div")((function(e){var n=e.theme;return{fontSize:24,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",margin:n.spacing(.5),borderRadius:n.shape.borderRadius,"&:hover":{opacity:.72}}})),U=function(e){var n,r=e.user,o=(0,E.I0)(),l=(0,w.Z)().updateProfile,d=(0,s.useMemo)((function(){if(null!==r&&void 0!==r&&r.roles.length)switch(null===r||void 0===r?void 0:r.roles[0]){case"admin":return[1];case"organizer":return[2];case"customer":default:return[3];case"venue_owner":return[4]}return[3]}),[null===r||void 0===r?void 0:r.roles]),u=!1,h=(0,s.useState)(null!==r&&void 0!==r&&r.avatar?[null===r||void 0===r?void 0:r.avatar]:[]),m=(0,i.Z)(h,2),x=m[0],k=m[1],g=(0,s.useMemo)((function(){if(null!==x&&void 0!==x&&x.length){var e=x[0],n=(e.name,e.preview);return C()(e)?e:n}return null}),[x]),P=(0,f.TA)({enableReinitialize:!0,initialValues:{name:(null===r||void 0===r?void 0:r.name)||"",email:(null===r||void 0===r?void 0:r.email)||"",organization:null===r||void 0===r?void 0:r.organization,phone:(null===r||void 0===r?void 0:r.phone)||"",role:null===r||void 0===r||null===(n=r.roles)||void 0===n?void 0:n[0],avatar:C()(null===r||void 0===r?void 0:r.avatar)?null===r||void 0===r?void 0:r.avatar:null},validationSchema:W,onSubmit:function(){var e=(0,a.Z)(c().mark((function e(n,a){var i,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setFieldError,a.setFieldTouched,a.setErrors,i=(0,t.Z)((0,t.Z)({},n),{},{avatar:C()(n.avatar)?void 0:n.avatar,roles:d}),e.prev=2,e.next=5,S.Z.postForm("/api/users/".concat(null===r||void 0===r?void 0:r.id),(0,t.Z)((0,t.Z)({},i),{},{_method:"put"}));case 5:s=e.sent,o((0,T.ss)({open:!0,message:"Changes Saved",variant:"alert",alert:{color:"success",severity:"success"},close:!1})),l(s.data.data),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),o((0,T.ss)({open:!0,message:"An Error Occured",variant:"alert",alert:{color:"error",severity:"error"},close:!1})),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(n,r){return e.apply(this,arguments)}}()}),A=P.setFieldValue,U=(0,s.useCallback)((function(e){var n=[];n=e.map((function(e){var n=new FileReader;return n.onabort=function(){return console.log("file reading was aborted")},n.onerror=function(){return console.log("file reading has failed")},n.onload=function(){var e=n.result;console.log(e)},n.readAsArrayBuffer(e),Object.assign(e,{preview:URL.createObjectURL(e)})})),k(n),A("avatar",e[0])}),[k,A,x]),R=(0,z.uI)({onDrop:U,multiple:u,noDrag:!0,maxFiles:5}),D=R.getRootProps,I=R.getInputProps,O=R.isDragActive;return(0,F.jsx)(f.Hy,{value:P,children:(0,F.jsx)(f.l0,{onSubmit:P.handleSubmit,id:"validation-forms",autoComplete:"off",children:(0,F.jsxs)(b.ZP,{container:!0,spacing:B.dv,children:[(0,F.jsx)(b.ZP,{item:!0,sm:6,md:4,children:(0,F.jsx)(y.Z,{title:"Profile Picture",contentSX:{textAlign:"center"},children:(0,F.jsxs)(b.ZP,{container:!0,spacing:2,children:[(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(v.Z,{alt:null===r||void 0===r?void 0:r.name,src:g,sx:{width:100,height:100,margin:"0 auto"}})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(Z.Z,{variant:"subtitle2",align:"center",children:"Upload/Change Your Profile Image"})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsxs)(N,(0,t.Z)((0,t.Z)({},D()),{},{sx:(0,t.Z)({},O&&{opacity:.72}),children:[(0,F.jsx)("input",(0,t.Z)({},I())),(0,F.jsx)(q.Z,{children:(0,F.jsx)(p.Z,{variant:"contained",size:"small",children:"Upload Avatar"})})]}))})]})})}),(0,F.jsx)(b.ZP,{item:!0,sm:6,md:8,children:(0,F.jsx)(y.Z,{title:"Edit Account Details",children:(0,F.jsxs)(b.ZP,{container:!0,spacing:B.dv,children:[(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(_.Z,{fullWidth:!0,id:"name",name:"name",label:"Name",value:P.values.name,onChange:P.handleChange,onBlur:P.handleBlur,error:P.touched.name&&Boolean(P.errors.name),helperText:P.touched.name&&P.errors.name})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(_.Z,{fullWidth:!0,disabled:!(null!==r&&void 0!==r&&r.isAdmin),id:"email",name:"email",label:"Email",value:P.values.email,onChange:P.handleChange,onBlur:P.handleBlur,error:P.touched.email&&Boolean(P.errors.email),helperText:P.touched.email&&P.errors.email})}),(0,F.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,F.jsx)(_.Z,{fullWidth:!0,disabled:!(null!==r&&void 0!==r&&r.isAdmin),id:"phone",name:"phone",label:"Phone",value:P.values.phone,onChange:function(e){P.setFieldValue("phone",e.target.value.replace(/[^\d]+/g,"").slice(0,10))},onBlur:P.handleBlur,error:P.touched.phone&&Boolean(P.errors.phone),helperText:P.touched.phone&&P.errors.phone})}),(0,F.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,F.jsx)(_.Z,{fullWidth:!0,id:"organization",name:"organization",label:"Organization",value:P.values.organization,onChange:P.handleChange,onBlur:P.handleBlur,error:P.touched.organization&&Boolean(P.errors.organization),helperText:P.touched.organization&&P.errors.organization})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(j.Z,{direction:"row",children:(0,F.jsx)(q.Z,{children:(0,F.jsx)(p.Z,{type:"submit",variant:"contained",children:"Change Details"})})})})]})})})]})})})},R=r(54730),D=r(11678),I=g.Ry({bank_name:g.Z_().required("Bank Name is required"),bank_code:g.Z_().required("Bank Code is required"),bank_branch_name:g.Z_().required("Branch Name is required"),bank_branch_code:g.Z_().required("Branch Code is required"),bank_account_number:g.Z_().required("Acoount Number is required"),bank_account_name:g.Z_().required("Account Name is required"),bank_account_phone:g.Z_().required("Account Phone is required"),bank_cancelled_cheque:g.nK().required("Cancelled Cheque is required")}),O=function(e){var n=e.user,r=(0,s.useMemo)((function(){if(null!==n&&void 0!==n&&n.roles.length)switch(null===n||void 0===n?void 0:n.roles[0]){case"admin":return[1];case"organizer":return[2];case"customer":default:return[3];case"venue_owner":return[4]}return[3]}),[null===n||void 0===n?void 0:n.roles]),i=(0,f.TA)({enableReinitialize:!0,initialValues:{bank_name:(null===n||void 0===n?void 0:n.bank_name)||"",bank_code:(null===n||void 0===n?void 0:n.bank_code)||"",bank_branch_name:(null===n||void 0===n?void 0:n.bank_branch_name)||"",bank_branch_code:(null===n||void 0===n?void 0:n.bank_branch_code)||"",bank_account_number:(null===n||void 0===n?void 0:n.bank_account_number)||"",bank_account_name:(null===n||void 0===n?void 0:n.bank_account_name)||"",bank_account_phone:(null===n||void 0===n?void 0:n.bank_account_phone)||"",bank_cancelled_cheque:C()(null===n||void 0===n?void 0:n.bank_cancelled_cheque)?[null===n||void 0===n?void 0:n.bank_cancelled_cheque]:null===n||void 0===n?void 0:n.bank_cancelled_cheque},validationSchema:I,onSubmit:function(){var e=(0,a.Z)(c().mark((function e(a,i){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setFieldError,i.setFieldTouched,i.setErrors,o=(0,t.Z)((0,t.Z)({},a),{},{roles:r,bank_cancelled_cheque:C()(a.bank_cancelled_cheque)?void 0:a.bank_cancelled_cheque}),e.prev=2,e.next=5,S.Z.postForm("/api/users/".concat(null===n||void 0===n?void 0:n.id),(0,t.Z)((0,t.Z)({},o),{},{_method:"put"}));case 5:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n,r){return e.apply(this,arguments)}}()}),o=(0,E.I0)();return(0,s.useEffect)((function(){}),[o]),(0,F.jsx)(y.Z,{title:"Bank Details",children:(0,F.jsxs)("form",{onSubmit:i.handleSubmit,id:"validation-forms",children:[(0,F.jsxs)(b.ZP,{container:!0,spacing:3,sx:{overflow:"auto",mb:2},children:[(0,F.jsx)(b.ZP,{item:!0,xs:12,sm:3,children:(0,F.jsx)(_.Z,{id:"bank_name",name:"bank_name",label:"Bank Name *",value:i.values.bank_name,onChange:i.handleChange,error:i.touched.bank_name&&Boolean(i.errors.bank_name),helperText:i.touched.bank_name&&i.errors.bank_name,fullWidth:!0})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,sm:3,children:(0,F.jsx)(_.Z,{id:"bank_code",name:"bank_code",label:"Bank Code *",value:i.values.bank_code,onChange:i.handleChange,error:i.touched.bank_code&&Boolean(i.errors.bank_code),helperText:i.touched.bank_code&&i.errors.bank_code,fullWidth:!0})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,sm:3,children:(0,F.jsx)(_.Z,{id:"bank_branch_name",name:"bank_branch_name",label:"Branch Name *",value:i.values.bank_branch_name,onChange:i.handleChange,error:i.touched.bank_branch_name&&Boolean(i.errors.bank_branch_name),helperText:i.touched.bank_branch_name&&i.errors.bank_branch_name,fullWidth:!0})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,sm:3,children:(0,F.jsx)(_.Z,{id:"bank_branch_code",name:"bank_branch_code",label:"Branch Code *",value:i.values.bank_branch_code,onChange:i.handleChange,error:i.touched.bank_branch_code&&Boolean(i.errors.bank_branch_code),helperText:i.touched.bank_branch_code&&i.errors.bank_branch_code,fullWidth:!0})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,sm:4,children:(0,F.jsx)(_.Z,{id:"bank_account_number",name:"bank_account_number",label:"Account Number *",value:i.values.bank_account_number,onChange:i.handleChange,error:i.touched.bank_account_number&&Boolean(i.errors.bank_account_number),helperText:i.touched.bank_account_number&&i.errors.bank_account_number,fullWidth:!0})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,sm:4,children:(0,F.jsx)(_.Z,{id:"bank_account_name",name:"bank_account_name",label:"Account Name *",value:i.values.bank_account_name,onChange:i.handleChange,error:i.touched.bank_account_name&&Boolean(i.errors.bank_account_name),helperText:i.touched.bank_account_name&&i.errors.bank_account_name,fullWidth:!0})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,sm:4,children:(0,F.jsx)(_.Z,{id:"bank_account_phone",name:"bank_account_phone",label:"Account Phone *",value:i.values.bank_account_phone,onChange:i.handleChange,error:i.touched.bank_account_phone&&Boolean(i.errors.bank_account_phone),helperText:i.touched.bank_account_phone&&i.errors.bank_account_phone,fullWidth:!0})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,sm:4,style:{paddingTop:"8px"},children:(0,F.jsxs)(b.ZP,{container:!0,alignItems:"center",children:[(0,F.jsx)(b.ZP,{item:!0,xs:4,children:(0,F.jsx)(Z.Z,{color:i.errors.bank_cancelled_cheque?"error":"",variant:"body2",children:"Cancelled Cheque *"})}),(0,F.jsx)(b.ZP,{item:!0,xs:8,children:(0,F.jsx)(D.Z,{attachments:i.values.bank_cancelled_cheque,setFieldValue:i.setFieldValue,fieldName:"bank_cancelled_cheque"})})]})})]}),i.errors.submit&&(0,F.jsx)(h.Z,{sx:{flex:1},children:(0,F.jsx)(R.Z,{error:!0,children:i.errors.submit})}),(0,F.jsx)(j.Z,{direction:"row",children:(0,F.jsx)(q.Z,{children:(0,F.jsx)(p.Z,{variant:"contained",type:"submit",children:"Save"})})})]})})},V=r(50169),M=function(){var e=(0,V.Z)();return(0,F.jsxs)(b.ZP,{container:!0,spacing:B.dv,children:[(0,F.jsx)(b.ZP,{item:!0,sm:6,md:8,children:(0,F.jsx)(b.ZP,{container:!0,spacing:B.dv,children:(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(y.Z,{title:"Change Password",children:(0,F.jsxs)(b.ZP,{container:!0,spacing:B.dv,children:[(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(_.Z,{type:"password",id:"outlined-basic9",fullWidth:!0,label:"Current password"})}),(0,F.jsx)(b.ZP,{item:!0,xs:6,children:(0,F.jsx)(_.Z,{type:"password",id:"outlined-basic10",fullWidth:!0,label:"New Password"})}),(0,F.jsx)(b.ZP,{item:!0,xs:6,children:(0,F.jsx)(_.Z,{type:"password",id:"outlined-basic11",fullWidth:!0,label:"Re-enter New Password"})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(j.Z,{direction:"row",children:(0,F.jsx)(q.Z,{children:(0,F.jsx)(p.Z,{variant:"contained",children:"Change Password"})})})})]})})})})}),(0,F.jsx)(b.ZP,{item:!0,sm:6,md:4,children:(0,F.jsx)(b.ZP,{container:!0,spacing:B.dv,children:(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(y.Z,{title:"Delete Account",children:(0,F.jsxs)(b.ZP,{container:!0,spacing:2,children:[(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(Z.Z,{variant:"body1",children:"If you are the only owner of any events/venues, either assign another owner ask admin for support."})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(j.Z,{direction:"row",children:(0,F.jsx)(q.Z,{children:(0,F.jsx)(p.Z,{sx:{color:e.palette.error.main,borderColor:e.palette.error.main,"&:hover":{background:e.palette.error.light+25,borderColor:e.palette.error.main}},variant:"outlined",size:"small",children:"Deactivate Account"})})})})]})})})})})]})},H=r(4942),X=r(62263),G=r(98125),L=r(55241),Y=function(){var e=s.useState({checkedA:!0,checkedB:!0,checkedC:!0,checkedD:!1,checkedE:!0,checkedF:!1}),n=(0,i.Z)(e,2),r=n[0],a=n[1],o=function(e){a((0,t.Z)((0,t.Z)({},r),{},(0,H.Z)({},e.target.name,e.target.checked)))},l=s.useState({checkedA:!0,checkedB:!1}),c=(0,i.Z)(l,2),d=c[0],u=c[1];return(0,F.jsxs)(b.ZP,{container:!0,spacing:B.dv,children:[(0,F.jsx)(b.ZP,{item:!0,xs:12,sm:6,md:8,children:(0,F.jsx)(b.ZP,{container:!0,spacing:B.dv,children:(0,F.jsx)(b.ZP,{item:!0,children:(0,F.jsx)(y.Z,{title:"Subscription Preference Center",children:(0,F.jsxs)(b.ZP,{container:!0,spacing:B.dv,children:[(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(Z.Z,{variant:"subtitle1",align:"left",children:"I would like to receive:"})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(X.Z,{children:(0,F.jsxs)(b.ZP,{container:!0,spacing:0,children:[(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(G.Z,{control:(0,F.jsx)(L.Z,{checked:r.checkedA,onChange:o,name:"checkedA",color:"primary"}),label:"Product Announcements and Updates"})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(G.Z,{control:(0,F.jsx)(L.Z,{checked:r.checkedB,onChange:o,name:"checkedB",color:"primary"}),label:"Events and Meetups"})})]})})})]})})})})}),(0,F.jsx)(b.ZP,{item:!0,sm:6,md:4,children:(0,F.jsx)(y.Z,{title:"Opt me out instead",children:(0,F.jsxs)(b.ZP,{container:!0,spacing:2,children:[(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(X.Z,{children:(0,F.jsx)(b.ZP,{container:!0,spacing:0,children:(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(G.Z,{control:(0,F.jsx)(L.Z,{onChange:function(e){u((0,t.Z)((0,t.Z)({},d),{},(0,H.Z)({},e.target.name,e.target.checked)))},name:"checkedA",color:"primary"}),label:"Unsubscribe me from all of the above"})})})})}),(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(j.Z,{direction:"row",children:(0,F.jsx)(q.Z,{children:(0,F.jsx)(p.Z,{variant:"contained",size:"small",children:"Update my preferences"})})})})]})})})]})},K=r(53904),J=g.Ry({gst_number:g.Z_().matches(A.UF,"Enter valid GST number")}),Q=function(e){var n=e.user,r=(0,s.useMemo)((function(){if(null!==n&&void 0!==n&&n.roles.length)switch(null===n||void 0===n?void 0:n.roles[0]){case"admin":return[1];case"organizer":return[2];case"customer":default:return[3];case"venue_owner":return[4]}return[3]}),[null===n||void 0===n?void 0:n.roles]),i=(0,f.TA)({enableReinitialize:!0,initialValues:{gst_number:(null===n||void 0===n?void 0:n.gst_number)||""},validationSchema:J,onSubmit:function(){var e=(0,a.Z)(c().mark((function e(a,i){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setFieldError,i.setFieldTouched,i.setErrors,o=(0,t.Z)((0,t.Z)({},a),{},{roles:r}),e.prev=2,e.next=5,S.Z.postForm("/api/users/".concat(null===n||void 0===n?void 0:n.id),(0,t.Z)((0,t.Z)({},o),{},{_method:"put"}));case 5:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n,r){return e.apply(this,arguments)}}()});return(0,F.jsx)(y.Z,{title:"Additional Details",children:(0,F.jsxs)("form",{onSubmit:i.handleSubmit,id:"validation-forms",children:[(0,F.jsx)(b.ZP,{container:!0,spacing:3,sx:{overflow:"auto",mb:2},children:(0,F.jsx)(b.ZP,{item:!0,xs:12,children:(0,F.jsx)(_.Z,{id:"gst_number",name:"gst_number",label:"GST Number *",value:i.values.gst_number,onChange:i.handleChange,error:i.touched.gst_number&&Boolean(i.errors.gst_number),helperText:i.touched.gst_number&&i.errors.gst_number,fullWidth:!0})})}),i.errors.submit&&(0,F.jsx)(h.Z,{sx:{flex:1},children:(0,F.jsx)(R.Z,{error:!0,children:i.errors.submit})}),(0,F.jsx)(j.Z,{direction:"row",children:(0,F.jsx)(q.Z,{children:(0,F.jsx)(p.Z,{variant:"contained",type:"submit",children:"Save"})})})]})})},$=["children","value","index"];function ee(e){var n=e.children,r=e.value,a=e.index,i=(0,o.Z)(e,$);return(0,F.jsx)("div",(0,t.Z)((0,t.Z)({role:"tabpanel",hidden:r!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},i),{},{children:r===a&&(0,F.jsx)(h.Z,{sx:{p:0},children:n})}))}function ne(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var re=function(){var e=s.useState(0),n=(0,i.Z)(e,2),r=n[0],o=n[1],l=(0,s.useState)(null),h=(0,i.Z)(l,2),b=h[0],v=h[1],Z=(0,w.Z)().user,p=(0,d.UO)().userId;return(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null===Z||void 0===Z?void 0:Z.id,null!==Z&&void 0!==Z&&Z.isAdmin&&p&&(n=p),e.prev=2,e.next=5,S.Z.get("/api/users/".concat(n));case 5:r=e.sent,v(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),v(null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[Z,p]),(0,F.jsx)(K.Z,{title:"Account",children:(0,F.jsxs)("div",{children:[(0,F.jsxs)(m.Z,{value:r,indicatorColor:"primary",onChange:function(e,n){o(n)},sx:{mb:3,minHeight:"auto","& button":{minWidth:100},"& a":{minHeight:"auto",minWidth:10,py:1.5,px:1,mr:2.25,color:"grey.600"},"& a.Mui-selected":{color:"primary.main"}},"aria-label":"simple tabs example",variant:"scrollable",children:[(0,F.jsx)(x.Z,(0,t.Z)({component:u.rU,to:"#",label:"Profile"},ne(0))),(0,F.jsx)(x.Z,(0,t.Z)({component:u.rU,to:"#",label:"Bank Details"},ne(1))),(0,F.jsx)(x.Z,(0,t.Z)({component:u.rU,to:"#",label:"Additional Info"},ne(2))),(0,F.jsx)(x.Z,(0,t.Z)({component:u.rU,to:"#",label:"Security",disabled:!0},ne(3))),(0,F.jsx)(x.Z,(0,t.Z)({component:u.rU,to:"#",label:"Notifications",disabled:!0},ne(4)))]}),(0,F.jsx)(ee,{value:r,index:0,children:(0,F.jsx)(U,{user:b})}),(0,F.jsx)(ee,{value:r,index:1,children:(0,F.jsx)(O,{user:b})}),(0,F.jsx)(ee,{value:r,index:2,children:(0,F.jsx)(Q,{user:b})}),(0,F.jsx)(ee,{value:r,index:3,children:(0,F.jsx)(M,{})}),(0,F.jsx)(ee,{value:r,index:4,children:(0,F.jsx)(Y,{})})]})})}}}]);