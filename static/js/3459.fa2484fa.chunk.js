"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[3459],{50614:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var i=t(2135),s=t(19860),r=t(24813),a=t(9019),l=t(61113),o=t(19536),c=t(58124),d=t(85436),m=t(48080),u=t(1413),x=t(15861),h=t(64687),Z=t.n(h),j=t(1550),p=t(23306),g=t(49914),f=t(15480),b=t(9506),v=t(24193),P=t(25823),y=t(58467),w=t(3463),k=t(79429),C=t(66182),S=t(54285),I=t(22889),E=t(5866),A=t(46417),z=function(e){var n=Object.assign({},e),t=(0,s.Z)(),i=(0,I.Z)(),r=(0,P.I0)(),a=(0,y.s0)(),l=(0,S.Z)().resetPassword;return(0,A.jsx)(k.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:w.Ry().shape({email:w.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=(0,x.Z)(Z().mark((function e(n,t){var s,o,c;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.setErrors,o=t.setStatus,c=t.setSubmitting,e.prev=1,e.next=4,l(n.email);case 4:i.current&&(o({success:!0}),c(!1),r((0,E.ss)({open:!0,message:"Check mail for reset password link",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){a("/login",{replace:!0})}),1500)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),i.current&&(o({success:!1}),s({submit:e.t0.message}),c(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n,t){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,s=e.handleBlur,r=e.handleChange,a=e.handleSubmit,l=e.isSubmitting,o=e.touched,c=e.values;return(0,A.jsxs)("form",(0,u.Z)((0,u.Z)({noValidate:!0,onSubmit:a},n),{},{children:[(0,A.jsxs)(j.Z,{fullWidth:!0,error:Boolean(o.email&&i.email),sx:(0,u.Z)({},t.typography.customInput),children:[(0,A.jsx)(p.Z,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address / Username"}),(0,A.jsx)(g.Z,{id:"outlined-adornment-email-forgot",type:"email",value:c.email,name:"email",onBlur:s,onChange:r,label:"Email Address / Username",inputProps:{}}),o.email&&i.email&&(0,A.jsx)(f.Z,{error:!0,id:"standard-weight-helper-text-email-forgot",children:i.email})]}),i.submit&&(0,A.jsx)(b.Z,{sx:{mt:3},children:(0,A.jsx)(f.Z,{error:!0,children:i.submit})}),(0,A.jsx)(b.Z,{sx:{mt:2},children:(0,A.jsx)(C.Z,{children:(0,A.jsx)(v.Z,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Send Mail"})})})]}))}})},B=t(35184),U=function(){var e=(0,s.Z)(),n=(0,S.Z)().isLoggedIn,t=(0,r.Z)(e.breakpoints.down("md"));return(0,A.jsx)(c.Z,{children:(0,A.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,A.jsx)(a.ZP,{item:!0,xs:12,children:(0,A.jsx)(a.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,A.jsx)(a.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,A.jsx)(d.Z,{children:(0,A.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,A.jsx)(a.ZP,{item:!0,sx:{mb:3},children:(0,A.jsx)(i.rU,{to:"#","aria-label":"theme-logo",children:(0,A.jsx)(m.Z,{})})}),(0,A.jsx)(a.ZP,{item:!0,xs:12,children:(0,A.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"center",textAlign:"center",spacing:2,children:[(0,A.jsx)(a.ZP,{item:!0,xs:12,children:(0,A.jsx)(l.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Forgot password?"})}),(0,A.jsx)(a.ZP,{item:!0,xs:12,children:(0,A.jsx)(l.Z,{variant:"caption",fontSize:"16px",textAlign:"center",children:"Enter your email address below and we'll send you password reset OTP."})})]})}),(0,A.jsx)(a.ZP,{item:!0,xs:12,children:(0,A.jsx)(z,{})}),(0,A.jsx)(a.ZP,{item:!0,xs:12,children:(0,A.jsx)(o.Z,{})}),(0,A.jsx)(a.ZP,{item:!0,xs:12,children:(0,A.jsx)(a.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,A.jsx)(l.Z,{component:i.rU,to:n?"/pages/login/login3":"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),(0,A.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,A.jsx)(B.Z,{})})]})})}}}]);