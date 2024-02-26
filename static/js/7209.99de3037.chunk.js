"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[7209],{81628:function(e,r,n){var t=n(1413),a=n(93433),i=n(29439),o=n(47313),s=n(17592),l=n(17551),c=n(9506),u=n(70501),d=n(47131),m=n(24193),h=n(16031),p=n(58823),x=n(81195),f=n(19713),Z=n(46417),g=(0,s.ZP)("div")((function(e){var r=e.theme;return{width:64,height:64,fontSize:24,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",margin:r.spacing(.5),borderRadius:r.shape.borderRadius,"&:hover":{opacity:.72}}}));function v(e){var r=e.setFieldValue,n=e.fieldName,s=e.multiple,v=e.attachments,j=(0,o.useState)([]),b=(0,i.Z)(j,2),w=b[0],y=b[1];(0,o.useEffect)((function(){v?Array.isArray(v)?y(v):y([v]):y([])}),[v]);var P=(0,o.useCallback)((function(e){var t=[];t=e.map((function(e){var r=new FileReader;return r.onabort=function(){return console.log("file reading was aborted")},r.onerror=function(){return console.log("file reading has failed")},r.onload=function(){var e=r.result;console.log(e)},r.readAsArrayBuffer(e),Object.assign(e,{preview:URL.createObjectURL(e)})})),s&&(null===w||void 0===w?void 0:w.length)>0&&(t=[].concat((0,a.Z)(t),(0,a.Z)(w))),y(t),r(n,s?t:e[0])}),[y,r,w]),_=(0,p.uI)({onDrop:P,multiple:s,noDrag:!s,maxFiles:5}),E=_.getRootProps,C=_.getInputProps,S=_.isDragActive;return(0,Z.jsxs)(Z.Fragment,{children:[null===w||void 0===w?void 0:w.map((function(e){var t=e.name,a=e.preview,i=(0,h.isString)(e)?e:t;return(0,Z.jsxs)(c.Z,{sx:{p:0,m:.5,width:64,height:64,borderRadius:.25,overflow:"hidden",position:"relative"},children:[(0,Z.jsx)(u.Z,{variant:"outlined",component:"img",src:(0,h.isString)(e)?e:a,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",borderRadius:1}}),(0,Z.jsx)(c.Z,{sx:{top:6,right:6,position:"absolute"},children:(0,Z.jsx)(d.Z,{size:"small",onClick:function(){return function(e){var t=s?w.filter((function(r){return r!==e})):null;y(t),r(n,t)}(e)},sx:{p:"1px",color:"common.white",bgcolor:function(e){return(0,l.Fq)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return(0,l.Fq)(e.palette.grey[900],.48)}}},children:(0,Z.jsx)(x.Z,{})})})]},i)})),(0,Z.jsxs)(g,(0,t.Z)((0,t.Z)({},E()),{},{sx:(0,t.Z)({},S&&{opacity:.72}),children:[(0,Z.jsx)("input",(0,t.Z)({},C())),(0,Z.jsx)(m.Z,{variant:"outlined",size:"small",sx:{p:0,minWidth:0},children:(0,Z.jsx)(f.Z,{})})]}))]})}r.Z=function(e){return(0,Z.jsx)(c.Z,{sx:{display:"flex"},children:(0,Z.jsx)(v,(0,t.Z)({},e))})}},47209:function(e,r,n){n.r(r),n.d(r,{default:function(){return Se}});var t=n(1413),a=n(15861),i=n(29439),o=n(64687),s=n.n(o),l=n(58467),c=n(2135),u=n(47313),d=n(19860),m=n(61689),h=n(24193),p=n(61113),x=n(9506),f=n(15480),Z=n(24813),g=n(9019),v=n(42832),j=n(19536),b=n(58124),w=n(85436),y=n(48080),P=(n(51457),n(35184)),_=n(54285),E=n(41727),C=n(47131),S=n(10237),k=n(22611),N=n(45987),q=n(16031),z=n(79429),I=n(24631),F=n(46417),W=["errorText"];function M(e){e.errorText;var r=(0,N.Z)(e,W),n=(0,z.U$)(e),a=(0,i.Z)(n,2),o=a[0],s=a[1];return(0,F.jsx)(I.Z,(0,t.Z)((0,t.Z)({type:"text",error:s.touched&&s.error&&!0,helperText:function(){var e=(0,q.at)(s,"touched","error"),r=(0,i.Z)(e,2),n=r[0],t=r[1];return n&&t?t:null}()},o),r))}var A=n(51405),O=["data"];function T(e){var r=e.data,n=(0,N.Z)(e,O),a=(0,z.U$)(e),o=(0,i.Z)(a,2),s=o[0],l=o[1],c=s.value,u=(0,q.at)(l,"touched","error"),d=(0,i.Z)(u,2),m=d[0],h=d[1],p=m&&h&&!0;return(0,F.jsx)(I.Z,(0,t.Z)((0,t.Z)((0,t.Z)({select:!0,error:l.touched&&l.error&&!0,helperText:p?(0,F.jsx)(f.Z,{children:h}):null},s),n),{},{value:c||"",children:r.map((function(e,r){return(0,F.jsx)(A.Z,{value:e.value,children:e.label},r)}))}))}T.defaultProps={data:[]};var L=n(97101),R=n(43394),D=n(44714);function B(e){var r=(0,z.U$)(e),n=(0,i.Z)(r,3),a=n[0],o=n[1],s=n[2],l=o.touched,c=o.error,d=s.setValue,m=l&&c&&!0,h=a.value,p=(0,u.useState)(null),x=(0,i.Z)(p,2),f=x[0],Z=x[1];(0,u.useEffect)((function(){if(h){var e=new Date(h);Z(e)}}),[h]);return(0,F.jsx)(g.ZP,{container:!0,children:(0,F.jsx)(R._,{dateAdapter:L.H,children:(0,F.jsx)(D.$,(0,t.Z)((0,t.Z)((0,t.Z)({},a),e),{},{value:f,onChange:function(e){if(e){Z(e);try{var r=e.toISOString();d(r)}catch(c){d(e)}}else d(e)},error:m,invalidDateMessage:m&&c,helperText:m&&c,renderInput:function(e){return(0,F.jsx)(I.Z,(0,t.Z)({fullWidth:!0},e))}}))})})}var G=n(81628),U=["label","value","multiple"];function V(e){e.label;var r=e.value,n=e.multiple,t=(0,N.Z)(e,U),a=(0,z.U$)(e),o=(0,i.Z)(a,3),s=(o[0],o[1],o[2].setValue);return(0,F.jsx)(G.Z,{attachments:r,multiple:n,setFieldValue:function(e,r){s(r)},fieldName:t.name})}var $=n(70455),K=["errorText"];function H(e){var r=(0,d.Z)(),n="dark"===r.palette.mode?r.palette.grey[200]:r.palette.grey[300],a=(e.errorText,(0,N.Z)(e,K)),o=(0,z.U$)(e),s=(0,i.Z)(o,3),l=s[0],c=s[1],u=s[2].setValue;return(0,F.jsx)($.Z,(0,t.Z)((0,t.Z)({},l),{},{onChange:function(e){u(e)},numInputs:6,containerStyle:{justifyContent:"space-between"},inputStyle:{width:"100%",margin:"8px",padding:"10px",border:"1px solid ".concat(n),borderRadius:4,":hover":{borderColor:r.palette.primary.main}},focusStyle:{outline:"none",border:"2px solid ".concat(r.palette.primary.main)},errorStyle:{border:"2px solid ".concat(r.palette.error.main)},hasErrored:c.touched&&c.error},a))}function J(e){var r=(0,z.u6)(),n=r.values,t=r.errors,a=r.setFieldValue,o=(0,z.U$)("phone"),s=(0,i.Z)(o,3)[2],l=(0,u.useState)(!1),c=(0,i.Z)(l,2),d=c[0],m=c[1],h=e.formField,x=h.firstName,f=h.lastName,Z=h.address,v=h.email,j=h.phone,b=h.password,w=h.avatar,y=h.owner_identification_file,P=h.registration_certificate,_=h.organization,N=h.otp,q=e.role;return(0,u.useEffect)((function(){a("role",q)}),[q]),(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(g.ZP,{container:!0,spacing:3,children:[(0,F.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,F.jsx)(M,{name:x.name,label:x.label,fullWidth:!0})}),(0,F.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,F.jsx)(M,{name:f.name,label:f.label,fullWidth:!0})}),"organizer"===n.role&&(0,F.jsx)(g.ZP,{item:!0,xs:12,children:(0,F.jsx)(M,{name:Z.name,label:Z.label,fullWidth:!0})}),(0,F.jsx)(g.ZP,{item:!0,xs:12,children:(0,F.jsx)(M,{name:v.name,label:v.label,disabled:n.otpGenerated,fullWidth:!0})}),(0,F.jsx)(g.ZP,{item:!0,xs:12,children:(0,F.jsx)(M,{name:j.name,label:j.label,disabled:n.otpGenerated,fullWidth:!0,onChange:function(e){s.setValue(e.target.value.replace(/[^\d]+/g,"").slice(0,10))}})}),(0,F.jsx)(g.ZP,{item:!0,xs:12,children:(0,F.jsx)(M,{name:_.name,label:_.label,fullWidth:!0})}),(0,F.jsxs)(g.ZP,{container:!0,item:!0,xs:12,alignItems:"center",children:[(0,F.jsx)(g.ZP,{item:!0,xs:4,children:(0,F.jsx)(p.Z,{color:t.registration_certificate?"error":"",variant:"body2",children:P.label})}),(0,F.jsx)(g.ZP,{item:!0,xs:8,children:(0,F.jsx)(V,{name:P.name,label:P.label,value:n.registration_certificate,fullWidth:!0})})]}),(0,F.jsxs)(g.ZP,{container:!0,item:!0,xs:12,alignItems:"center",children:[(0,F.jsx)(g.ZP,{item:!0,xs:4,children:(0,F.jsx)(p.Z,{color:t.owner_identification_file?"error":"",variant:"body2",children:y.label})}),(0,F.jsx)(g.ZP,{item:!0,xs:8,children:(0,F.jsx)(V,{name:y.name,label:y.label,value:n.owner_identification_file,fullWidth:!0})})]}),(0,F.jsxs)(g.ZP,{container:!0,item:!0,xs:12,alignItems:"center",children:[(0,F.jsx)(g.ZP,{item:!0,xs:4,children:(0,F.jsx)(p.Z,{variant:"body2",children:"Avatar"})}),(0,F.jsx)(g.ZP,{item:!0,xs:8,children:(0,F.jsx)(V,{name:w.name,label:w.label,value:n.avatar,fullWidth:!0})})]}),n.isPhoneLogin&&n.otpGenerated&&(0,F.jsx)(g.ZP,{item:!0,xs:12,children:(0,F.jsx)(H,{name:N.name,label:N.label})}),!n.isPhoneLogin&&(0,F.jsx)(g.ZP,{item:!0,xs:12,children:(0,F.jsx)(M,{name:b.name,label:b.label,type:d?"text":"password",fullWidth:!0,InputProps:{endAdornment:(0,F.jsx)(E.Z,{position:"end",children:(0,F.jsx)(C.Z,{"aria-label":"toggle password visibility",onClick:function(){m(!d)},onMouseDown:function(e){e.preventDefault()},edge:"end",size:"large",children:d?(0,F.jsx)(S.Z,{}):(0,F.jsx)(k.Z,{})})})}})})]})})}function Y(e){var r=e.formField,n=r.nameOnCard,t=r.cardNumber,a=r.expiryDate,i=r.cvv;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(p.Z,{variant:"h6",gutterBottom:!0,children:"Payment method"}),(0,F.jsxs)(g.ZP,{container:!0,spacing:3,children:[(0,F.jsx)(g.ZP,{item:!0,xs:12,md:6,children:(0,F.jsx)(M,{name:n.name,label:n.label,fullWidth:!0})}),(0,F.jsx)(g.ZP,{item:!0,xs:12,md:6,children:(0,F.jsx)(M,{name:t.name,label:t.label,fullWidth:!0})}),(0,F.jsx)(g.ZP,{item:!0,xs:12,md:6,children:(0,F.jsx)(B,{name:a.name,label:a.label,format:"MM/yy",views:["year","month"],minDate:new Date,maxDate:new Date("2050/12/31"),fullWidth:!0})}),(0,F.jsx)(g.ZP,{item:!0,xs:12,md:6,children:(0,F.jsx)(M,{name:i.name,label:i.label,fullWidth:!0})})]})]})}var Q,X,ee="checkoutForm",re={firstName:{name:"firstName",label:"First name*",requiredErrorMsg:"First name is required"},lastName:{name:"lastName",label:"Last name"},address:{name:"address",label:"Address*",requiredErrorMsg:"Address is required"},email:{name:"email",label:"Email*",requiredErrorMsg:"Email is required",invalidErrorMsg:"Enter valid Email"},phone:{name:"phone",label:"Phone*",requiredErrorMsg:"Phone is required",invalidErrorMsg:"Enter valid phone"},isPhoneLogin:{name:"isPhoneLogin"},otpGenerated:{name:"otpGenerated"},organization:{name:"organization",label:"Organization*",requiredErrorMsg:"Organization is required"},avatar:{name:"avatar",label:"Avatar"},owner_identification_file:{name:"owner_identification_file",label:"Identification File*"},registration_certificate:{name:"registration_certificate",label:"Registration Certificate*"},password:{name:"password",label:"Password*"},otp:{name:"otp",label:"OTP*"}},ne=n(4942),te=re,ae=te.firstName,ie=te.lastName,oe=te.address,se=te.email,le=te.phone,ce=te.isPhoneLogin,ue=te.otpGenerated,de=te.avatar,me=te.organization,he=(Q={},(0,ne.Z)(Q,ae.name,""),(0,ne.Z)(Q,ie.name,""),(0,ne.Z)(Q,se.name,""),(0,ne.Z)(Q,le.name,""),(0,ne.Z)(Q,oe.name,""),(0,ne.Z)(Q,"role","customer"),(0,ne.Z)(Q,ce.name,!0),(0,ne.Z)(Q,ue.name,!1),(0,ne.Z)(Q,"password",""),(0,ne.Z)(Q,"otp",""),(0,ne.Z)(Q,de.name,null),(0,ne.Z)(Q,me.name,""),Q),pe=n(3463),xe=(n(70816),re),fe=xe.firstName,Ze=xe.email,ge=xe.phone,ve=xe.organization,je=(xe.nameOnCard,xe.cardNumber,xe.expiryDate,xe.cvv,/^(\+91-|\+91|0)?\d{10}$/),be=[pe.Ry().shape((X={},(0,ne.Z)(X,fe.name,pe.Z_().required("".concat(fe.requiredErrorMsg))),(0,ne.Z)(X,"address",pe.Z_().when(["role"],{is:function(e){return"organizer"===e},then:pe.Z_().required("Address is required")})),(0,ne.Z)(X,Ze.name,pe.Z_().email("".concat(Ze.invalidErrorMsg)).matches(/^[\w-+.]+@([\w-]+.)+[\w-]{2,4}$/,"".concat(Ze.invalidErrorMsg)).max(255).required("".concat(Ze.requiredErrorMsg))),(0,ne.Z)(X,ge.name,pe.Z_().required("".concat(ge.requiredErrorMsg)).test("test-name","".concat(ge.invalidErrorMsg),(function(e){return je.test(e)}))),(0,ne.Z)(X,ve.name,pe.Z_().required("".concat(ve.requiredErrorMsg))),(0,ne.Z)(X,"password",pe.Z_().when("isPhoneLogin",{is:!1,then:pe.Z_().max(255).required("Password is required")})),(0,ne.Z)(X,"otp",pe.Z_().when(["isPhoneLogin"],{is:function(e){return e},then:pe.Z_().test("len","Must be exactly 6 characters",(function(e){return console.log(e),6===(null===e||void 0===e?void 0:e.length)}))})),(0,ne.Z)(X,"owner_identification_file",pe.nK().when(["role"],{is:function(e){return"organizer"===e},then:pe.nK().required("Identification is required")})),(0,ne.Z)(X,"registration_certificate",pe.nK().when(["role"],{is:function(e){return"organizer"===e},then:pe.nK().required("Registration Certificate is required")})),X)),pe.Ry().shape({})],we=n(66182),ye=n(5866),Pe=n(25823),_e=ee,Ee=re;function Ce(e){var r=e.roles,n=e.role,o=(0,Pe.I0)(),l=(0,_.Z)(),c=l.register,d=(l.otpLogin,l.generateOtp),Z=l.reGenerateOtp,g=(l.verify,l.firebasePhoneNumberSignIn,(0,u.useState)(0)),v=(0,i.Z)(g,2),j=v[0],b=(v[1],(0,u.useState)(0)),w=(0,i.Z)(b,2),y=w[0],P=w[1],E=(0,u.useState)(0),C=(0,i.Z)(E,2),S=C[0],k=C[1],N=(0,u.useState)(null),q=(0,i.Z)(N,2),I=q[0],W=q[1],M=be[j];(0,u.useEffect)((function(){var e=setInterval((function(){S>0&&k(S-1),0===S&&clearInterval(e)}),1e3);return function(){clearInterval(e)}}),[S]);var A=function(){var e=(0,a.Z)(s().mark((function e(r,n,t,a,i){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n,!0,!0);case 2:i(n,r[n].join(", "));case 3:case"end":return e.stop()}}),e)})));return function(r,n,t,a,i){return e.apply(this,arguments)}}(),O=function(e){var r=e.setFieldTouched,n=void 0===r?null:r,t=e.setErrors,a=void 0===t?null:t,i=e.setFieldError,s=void 0===i?null:i;return function(e){var r;if(null!==e&&void 0!==e&&null!==(r=e.data)&&void 0!==r&&r.errors){var t,i=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.errors;Object.keys(i).forEach((function(e){A(i,e,n,a,s)}))}else{var l,c={submit:[(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.message)||"An Error Occured"]};A(c,"submit",n,a,s),o((0,ye.ss)({open:!0,message:"An Error Occured",anchorOrigin:{vertical:"bottom",horizontal:"center"},variant:"alert",alert:{color:"error"},close:!1}))}}},T=function(){var e=(0,a.Z)(s().mark((function e(n,a){var i,o,l,u,d,m;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.setFieldTouched,o=a.setErrors,l=a.setFieldError,u=a.setStatus,d=a.setSubmitting,e.prev=1,m=(0,t.Z)((0,t.Z)({},n),{},{name:"".concat((0,z.u9)(n,"firstName")," ").concat((0,z.u9)(n,"lastName")).trim(),roles:r,order_id:I,password:n.isPhoneLogin?void 0:n.password,organization:n.organization,otp:n.isPhoneLogin?n.otp:void 0}),e.next=5,c(m);case 5:u({success:!0}),d(!1),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),d(!1),u({success:!1}),O({setFieldTouched:i,setErrors:o,setFieldError:l})(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r,n){return e.apply(this,arguments)}}(),L=function(){var e=(0,a.Z)(s().mark((function e(r,n,t){var a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(r).concat((new Date).valueOf()),W(a),e.prev=2,e.next=5,d(r,a);case 5:t("otpGenerated",!0),k(60),P((function(e){return e+1})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),n({submit:e.t0.message||(null===e.t0||void 0===e.t0||null===(i=e.t0.data)||void 0===i?void 0:i.message)}),t("otpGenerated",!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(r,n,t){return e.apply(this,arguments)}}(),R=function(){var e=(0,a.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z(I);case 3:k(60),P((function(e){return e+1})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r({submit:e.t0.message||(null===e.t0||void 0===e.t0||null===(n=e.t0.data)||void 0===n?void 0:n.message)});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),D=(0,u.useCallback)((function(){switch(j){case 0:return(0,F.jsx)(J,{formField:Ee,role:n});case 1:return(0,F.jsx)(Y,{formField:Ee});default:return(0,F.jsx)("div",{children:"Not Found"})}}),[j]);return(0,F.jsx)(z.J9,{validateOnMount:!0,initialValues:he,validationSchema:M,onSubmit:T,children:function(e){var r,n,t=e.values,a=(e.isValid,e.errors),i=e.setErrors,o=e.isSubmitting,s=e.setFieldValue;return(0,F.jsxs)(z.l0,{id:_e,children:[D(),t.isPhoneLogin&&t.otpGenerated&&(0,F.jsx)(m.Z,{title:3===y?"Cannot generate code, Try again later":"",children:(0,F.jsxs)("div",{className:"countdown-text",children:[(0,F.jsx)(h.Z,{color:"secondary",disabled:S>0||3===y,onClick:function(){return R(i)},children:(0,F.jsx)("span",{children:"Resend OTP"})}),S>0&&(0,F.jsx)(p.Z,{variant:"caption",children:"(00:".concat(S<10?"0".concat(S):S,")")})]})}),t.otpGenerated||!t.isPhoneLogin?(0,F.jsx)(x.Z,{sx:{mt:2},children:(0,F.jsx)(we.Z,{children:(0,F.jsx)(h.Z,{color:"secondary",disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign Up"})})}):(0,F.jsx)(x.Z,{sx:{mt:2},children:(0,F.jsx)(we.Z,{children:(0,F.jsx)(h.Z,{type:"submit",color:"secondary",disabled:Boolean(a.phone)||0==(null===(r=t.phone)||void 0===r||null===(n=r.trim())||void 0===n?void 0:n.length)||3===y,fullWidth:!0,size:"large",onClick:function(e){e.preventDefault(),L(t.phone,i,s)},variant:"contained",children:"Generate OTP"})})}),(0,F.jsx)(x.Z,{sx:{mt:2,textAlign:"center"},children:(0,F.jsx)(h.Z,{color:"secondary",onClick:function(){s("isPhoneLogin",!t.isPhoneLogin)},children:t.isPhoneLogin?"Login using Password":"OTP Login"})}),a.submit&&(0,F.jsx)(f.Z,{error:!0,children:a.submit})]})}})}var Se=function(){var e=(0,d.Z)(),r=(0,_.Z)().isLoggedIn,n=(0,l.UO)().role,t=(0,u.useMemo)((function(){switch(n){case"venue-owner":return[4];case"organizer":return[2];default:return[3]}}),[n]),a=(0,Z.Z)(e.breakpoints.down("md"));return(0,F.jsx)(b.Z,{children:(0,F.jsxs)(g.ZP,{container:!0,direction:"column",justifyContent:"space-between",sx:{minHeight:"100vh"},children:[(0,F.jsx)(g.ZP,{item:!0,justifyContent:"center",alignItems:"center",xs:12,sx:{display:"flex",m:{xs:1,sm:3},mb:0},children:(0,F.jsxs)(w.Z,{children:[(0,F.jsx)(x.Z,{style:{backgroundColor:e.palette.dark[800],textAlign:"center"},children:(0,F.jsx)(c.rU,{to:"#","aria-label":"theme-logo",children:(0,F.jsx)(y.Z,{})})}),(0,F.jsxs)(g.ZP,{container:!0,alignItems:"center",justifyContent:"center",sx:{p:2},children:[(0,F.jsx)(g.ZP,{item:!0,xs:12,children:(0,F.jsxs)(v.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,F.jsx)(p.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:a?"h3":"h2",children:"Sign up Organizers"}),(0,F.jsx)(p.Z,{variant:"caption",fontSize:"16px",textAlign:a?"center":"inherit",children:"Enter your credentials to continue"})]})}),(0,F.jsx)(g.ZP,{item:!0,xs:12,children:(0,F.jsx)(Ce,{roles:t,role:n})}),(0,F.jsx)(g.ZP,{item:!0,xs:12,children:(0,F.jsx)(j.Z,{})}),(0,F.jsx)(g.ZP,{item:!0,xs:12,sx:{textAlign:"center"},children:(0,F.jsx)(h.Z,{component:c.rU,to:r?"/pages/login/login3":"/login",variant:"text",color:"inherit",children:"Already have an account?"})})]})]})}),(0,F.jsx)(g.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,F.jsx)(P.Z,{})})]})})}},51457:function(e,r,n){n.d(r,{Z:function(){return T}});var t=n(1413),a=n(15861),i=n(29439),o=n(45987),s=n(64687),l=n.n(s),c=n(47313),u=n(25823),d=n(58467),m=n(2135),h=n(19860),p=n(24813),x=n(42832),f=n(24631),Z=n(41727),g=n(47131),v=n(1550),j=n(9506),b=n(9019),w=n(61113),y=n(83929),P=n(44758),_=n(24193),E=n(15480),C=n(3463),S=n(79429),k=n(66182),N=n(54285),q=n(22889),z=n(20556),I=function(e){var r=0;return e.length>5&&(r+=1),e.length>7&&(r+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(r+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(r+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(r+=1),r},F=n(5866),W=n(10237),M=n(22611),A=n(46417),O=["roles","role"],T=function(e){var r=e.roles,n=e.role,s=(0,o.Z)(e,O),T=(0,h.Z)(),L=(0,d.s0)(),R=((0,q.Z)(),(0,u.I0)()),D=((0,p.Z)(T.breakpoints.down("md")),c.useState(!1)),B=(0,i.Z)(D,2),G=B[0],U=B[1],V=c.useState(!0),$=(0,i.Z)(V,2),K=$[0],H=$[1],J=c.useState(0),Y=(0,i.Z)(J,2),Q=(Y[0],Y[1]),X=c.useState(),ee=(0,i.Z)(X,2),re=ee[0],ne=ee[1],te=(0,N.Z)().register,ae=function(){U(!G)},ie=function(e){e.preventDefault()},oe=function(e){var r,n=I(e);Q(n),ne((r=n)<2?{label:"Poor",color:z.Z.errorMain}:r<3?{label:"Weak",color:z.Z.warningDark}:r<4?{label:"Normal",color:z.Z.orangeMain}:r<5?{label:"Good",color:z.Z.successMain}:r<6?{label:"Strong",color:z.Z.successDark}:{label:"Poor",color:z.Z.errorMain})};return(0,A.jsx)(S.J9,{initialValues:{email:"",password:"",password_confirmation:"",name:{firstName:"",lastName:""},organization:"",phone:"",submit:null},validationSchema:C.Ry().shape({name:C.Ry().shape({firstName:C.Z_().required("First Name is required")}),email:C.Z_().email("Must be a valid email").max(255).required("Email is required"),password:C.Z_().max(255).required("Password is required"),password_confirmation:C.Z_().when("password",{is:function(e){return(null===e||void 0===e?void 0:e.length)>0},then:C.Z_().required("Re-Type password").oneOf([C.iH("password")],"Both Password must match")})}),onSubmit:function(){var e=(0,a.Z)(l().mark((function e(n,a){var i,o,s,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=a.setErrors,o=a.setStatus,s=a.setSubmitting,i({submit:!1}),K){e.next=8;break}o({success:!1}),i({submit:"Please agree with terms and conditions"}),s(!1),e.next=23;break;case 8:return e.prev=8,c=(0,t.Z)((0,t.Z)({},n),{},{name:"".concat((0,S.u9)(n,"name.firstName")," ").concat((0,S.u9)(n,"name.lastName")).trim(),roles:r}),e.next=12,te(c);case 12:o({success:!0}),R((0,F.ss)({open:!0,message:"Your registration has been successfully completed.",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){L("/login",{replace:!0})}),1500),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(8),console.error(e.t0),o({success:!1}),i({submit:Object.values(e.t0.data.errors).join("\n")});case 22:s(!1);case 23:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(r,n){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,a=e.handleBlur,i=e.handleChange,o=e.handleSubmit,l=e.isSubmitting,c=e.touched,u=e.values,d=e.setFieldValue;return(0,A.jsxs)("form",(0,t.Z)((0,t.Z)({noValidate:!0,onSubmit:o},s),{},{children:[(0,A.jsxs)(x.Z,{direction:"row",spacing:2,sx:(0,t.Z)({},T.typography.formInput),children:[(0,A.jsx)(f.Z,{fullWidth:!0,label:"First Name",name:"name.firstName",type:"text",value:u.name.firstName,sx:(0,t.Z)({},T.typography.formInput),onBlur:a,onChange:i,error:Boolean((0,S.u9)(c,"name.firstName")&&(0,S.u9)(r,"name.firstName")),helperText:(0,S.u9)(c,"name.firstName")&&(0,S.u9)(r,"name.firstName")}),(0,A.jsx)(f.Z,{fullWidth:!0,label:"Last Name",name:"name.lastName",type:"text",value:u.name.lastName,sx:(0,t.Z)({},T.typography.formInput),onBlur:a,onChange:i})]}),"organizer"===n&&(0,A.jsx)(f.Z,{fullWidth:!0,label:"Organization",name:"organization",type:"text",value:u.organization,sx:(0,t.Z)({},T.typography.formInput),onBlur:a,onChange:i}),(0,A.jsx)(f.Z,{fullWidth:!0,type:"text",label:"Phone Number",id:"phone",name:"phone",value:u.phone,sx:(0,t.Z)({},T.typography.formInput),onChange:function(e){d(e.target.name,e.target.value.replace(/[^\d]+/g,"").slice(0,10))},onBlur:a,error:c.phone&&Boolean(r.phone),helperText:c.phone&&r.phone,InputProps:{startAdornment:(0,A.jsx)(Z.Z,{position:"start",children:"+91"})}}),(0,A.jsx)(f.Z,{id:"signup-email",name:"email",label:"Email Address",fullWidth:!0,type:"email",value:u.email,sx:(0,t.Z)({},T.typography.formInput),onBlur:a,onChange:i,error:c.email&&Boolean(r.email),helperText:c.email&&r.email}),(0,A.jsx)(f.Z,{id:"signup-password",name:"password",label:"Password",fullWidth:!0,type:G?"text":"password",value:u.password,sx:(0,t.Z)({},T.typography.formInput),onBlur:a,onChange:function(e){oe(e.target.value),i(e)},error:c.password&&Boolean(r.password),helperText:c.password&&r.password,InputProps:{endAdornment:(0,A.jsx)(Z.Z,{position:"end",children:(0,A.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:ae,onMouseDown:ie,edge:"end",size:"large",children:G?(0,A.jsx)(W.Z,{}):(0,A.jsx)(M.Z,{})})})}}),!!u.password&&(0,A.jsx)(v.Z,{fullWidth:!0,children:(0,A.jsx)(j.Z,{sx:{mb:2},children:(0,A.jsxs)(b.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,A.jsx)(b.ZP,{item:!0,children:(0,A.jsx)(j.Z,{style:{backgroundColor:null===re||void 0===re?void 0:re.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,A.jsx)(b.ZP,{item:!0,children:(0,A.jsx)(w.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===re||void 0===re?void 0:re.label})})]})})}),(0,A.jsx)(f.Z,{id:"signup-confirm-password",name:"password_confirmation",label:"Confirm Password",fullWidth:!0,type:"password",value:u.password_confirmation,sx:(0,t.Z)({},T.typography.formInput),onBlur:a,onChange:i,error:c.password_confirmation&&Boolean(r.password_confirmation),helperText:c.password_confirmation&&r.password_confirmation}),(0,A.jsx)(b.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:(0,A.jsx)(b.ZP,{item:!0,children:(0,A.jsx)(y.Z,{control:(0,A.jsx)(P.Z,{checked:K,onChange:function(e){return H(e.target.checked)},name:"checked",color:"primary"}),label:(0,A.jsxs)(w.Z,{variant:"subtitle1",children:["Agree with \xa0",(0,A.jsx)(w.Z,{variant:"subtitle1",component:m.rU,to:"#",children:"Terms & Condition."})]})})})}),(0,A.jsx)(j.Z,{sx:{mt:2},children:(0,A.jsx)(k.Z,{children:(0,A.jsx)(_.Z,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})}),r.submit&&(0,A.jsx)(j.Z,{sx:{mt:3},children:(0,A.jsx)(E.Z,{error:!0,children:r.submit})})]}))}})}}}]);