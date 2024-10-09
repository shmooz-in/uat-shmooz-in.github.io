"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[2150],{32150:function(e,n,r){r.r(n),r.d(n,{default:function(){return q}});var t=r(95173),s=r(45254),i=r(50169),a=r(81239),l=r(65173),o=r(42037),c=r(20045),d=r(85535),u=r(6334),m=r(31342),x=r(5326),h=r(25438),Z=r(83458),j=r(46114),p=r(96156),f=r(1413),g=r(15861),b=r(64687),v=r.n(b),y=r(44390),k=r(54730),w=r(49042),C=r(66872),P=r(5894),S=r(19972),E=r(83303),A=r(12722),I=r(4471),z=r(45263),B=function(e){var n=Object.assign({},e),r=(0,i.Z)(),s=((0,A.Z)(),(0,w.I0)()),a=(0,t.s0)(),l=(0,E.Z)().resetPassword;return(0,z.jsx)(P.J9,{initialValues:{email:"",submit:null},validationSchema:C.Ry().shape({email:C.Z_().email("Must be a valid email").required("Email is required")}),onSubmit:function(){var e=(0,g.Z)(v().mark((function e(n,r){var t,i;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setErrors,t=r.setStatus,i=r.setSubmitting,e.prev=1,e.next=4,l(n.email);case 4:t({success:!0}),i(!1),s((0,I.ss)({open:!0,message:"Check mail for reset password link",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){a("/login",{replace:!0})}),1500),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),s((0,I.ss)({open:!0,message:"An Error Occured",variant:"alert",alert:{color:"error",severity:"error"},close:!1}));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,s=e.handleBlur,i=e.handleChange,a=e.handleSubmit,l=e.isSubmitting,c=e.touched,d=e.values;return(0,z.jsxs)("form",(0,f.Z)((0,f.Z)({noValidate:!0,onSubmit:a},n),{},{children:[(0,z.jsx)(y.Z,{id:"email-login",name:"email",type:"email",label:"Email Address",value:d.email,sx:(0,f.Z)({},r.typography.formInput),fullWidth:!0,onChange:i,onBlur:s,error:c.email&&Boolean(t.email),helperText:c.email&&t.email}),t.submit&&(0,z.jsx)(o.Z,{sx:{mt:3},children:(0,z.jsx)(k.Z,{error:!0,children:t.submit})}),(0,z.jsx)(o.Z,{sx:{mt:2},children:(0,z.jsx)(S.Z,{children:(0,z.jsx)(m.Z,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Send Mail"})})})]}))}})},q=function(){var e=(0,i.Z)(),n=(0,t.s0)(),r=(0,a.Z)(e.breakpoints.down("md"));return(0,z.jsx)(x.Z,{children:(0,z.jsxs)(l.ZP,{container:!0,direction:"column",justifyContent:"space-between",sx:{minHeight:"100vh"},children:[(0,z.jsx)(l.ZP,{item:!0,justifyContent:"center",alignItems:"center",xs:12,sx:{display:"flex",m:{xs:1,sm:3},mb:0},children:(0,z.jsxs)(h.Z,{children:[(0,z.jsx)(o.Z,{sx:{backgroundColor:e.palette.dark[800],textAlign:"center",p:1},children:(0,z.jsx)(s.rU,{to:p.E6,"aria-label":"theme-logo",children:(0,z.jsx)(Z.Z,{})})}),(0,z.jsxs)(l.ZP,{container:!0,alignItems:"center",justifyContent:"center",sx:{p:2},children:[(0,z.jsx)(l.ZP,{item:!0,xs:12,children:(0,z.jsxs)(c.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,z.jsx)(d.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:r?"h3":"h2",children:"Forgot password?"}),(0,z.jsx)(d.Z,{variant:"caption",fontSize:"16px",textAlign:r?"center":"inherit",children:"Enter your email address below and we will send you password reset link"})]})}),(0,z.jsx)(l.ZP,{item:!0,xs:12,children:(0,z.jsx)(B,{})}),(0,z.jsx)(l.ZP,{item:!0,xs:12,children:(0,z.jsx)(u.Z,{})}),(0,z.jsx)(l.ZP,{item:!0,xs:12,sx:{textAlign:"center"},children:(0,z.jsx)(m.Z,{onClick:function(){n("/login")},variant:"text",color:"inherit",children:"Already have an account?"})})]})]})}),(0,z.jsx)(l.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,z.jsx)(j.Z,{})})]})})}}}]);