"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[150],{60150:function(e,s,r){r.r(s),r.d(s,{default:function(){return F}});var n=r(95173),t=r(45254),o=r(50169),i=r(81239),a=r(65173),l=r(42037),c=r(20045),d=r(85535),u=r(6334),x=r(31342),h=r(5326),p=r(25438),Z=r(83458),m=r(46114),j=r(96156),f=r(1413),g=r(15861),w=r(29439),b=r(64687),v=r.n(b),P=r(7276),y=r(60103),k=r(16126),S=r(60753),C=r(11430),E=r(44570),R=r(54730),A=r(66872),z=r(5894),I=r(19972),M=r(28781),B=function(e){var s=0;return e.length>5&&(s+=1),e.length>7&&(s+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(s+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(s+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(s+=1),s},D=r(70748),W=r(55171),O=r(83303),_=r(4471),q=r(49042),U=r(45263),V=function(e){var s=Object.assign({},e),r=(0,o.Z)(),t=(0,q.I0)(),i=P.useState(!1),a=(0,w.Z)(i,2),c=a[0],d=a[1],u=P.useState(0),h=(0,w.Z)(u,2),p=(h[0],h[1]),Z=P.useState(),m=(0,w.Z)(Z,2),j=(m[0],m[1]),b=(0,n.UO)().reset_token,V=(0,n.s0)(),F=(0,O.Z)().resetPasswordConfirm,G=function(){d(!c)},H=function(e){e.preventDefault()},J=function(e){var s,r=B(e);p(r),j((s=r)<2?{label:"Poor",color:M.Z.errorMain}:s<3?{label:"Weak",color:M.Z.warningDark}:s<4?{label:"Normal",color:M.Z.orangeMain}:s<5?{label:"Good",color:M.Z.successMain}:s<6?{label:"Strong",color:M.Z.successDark}:{label:"Poor",color:M.Z.errorMain})};return(0,P.useEffect)((function(){J("")}),[]),(0,U.jsx)(z.J9,{initialValues:{password:"",submit:null},validationSchema:A.Ry().shape({password:A.Z_().max(255).required("Password is required")}),onSubmit:function(){var e=(0,g.Z)(v().mark((function e(s,r){var n,o,i;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.setErrors,o=r.setStatus,i=r.setSubmitting,e.prev=1,e.next=4,F(s.password,b);case 4:o({success:!0}),i(!1),t((0,_.ss)({open:!0,message:"Password Reset Success",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){V("/login",{replace:!0})}),1500),e.next=17;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),o({success:!1}),n({submit:e.t0.message}),i(!1),t((0,_.ss)({open:!0,message:"An Error Occured",variant:"alert",alert:{color:"error"},close:!1}));case 17:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(s,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,t=e.handleBlur,o=e.handleChange,i=e.handleSubmit,a=e.isSubmitting,d=e.touched,u=e.values;return(0,U.jsxs)("form",(0,f.Z)((0,f.Z)({noValidate:!0,onSubmit:i},s),{},{children:[(0,U.jsxs)(y.Z,{fullWidth:!0,error:Boolean(d.password&&n.password),sx:(0,f.Z)({},r.typography.customInput),children:[(0,U.jsx)(k.Z,{htmlFor:"outlined-adornment-password-reset",children:"Password"}),(0,U.jsx)(S.Z,{id:"outlined-adornment-password-reset",type:c?"text":"password",value:u.password,name:"password",onBlur:t,onChange:function(e){o(e),J(e.target.value)},endAdornment:(0,U.jsx)(C.Z,{position:"end",children:(0,U.jsx)(E.Z,{"aria-label":"toggle password visibility",onClick:G,onMouseDown:H,edge:"end",size:"large",children:c?(0,U.jsx)(D.Z,{}):(0,U.jsx)(W.Z,{})})}),inputProps:{}})]}),d.password&&n.password&&(0,U.jsx)(y.Z,{fullWidth:!0,children:(0,U.jsx)(R.Z,{error:!0,id:"standard-weight-helper-text-reset",children:n.password})}),n.submit&&(0,U.jsx)(l.Z,{sx:{mt:3},children:(0,U.jsx)(R.Z,{error:!0,children:n.submit})}),(0,U.jsx)(l.Z,{sx:{mt:1},children:(0,U.jsx)(I.Z,{children:(0,U.jsx)(x.Z,{disableElevation:!0,disabled:a,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Reset Password"})})})]}))}})},F=function(){var e=(0,o.Z)(),s=(0,n.s0)(),r=(0,i.Z)(e.breakpoints.down("md"));return(0,U.jsx)(h.Z,{children:(0,U.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"space-between",sx:{minHeight:"100vh"},children:[(0,U.jsx)(a.ZP,{item:!0,justifyContent:"center",alignItems:"center",xs:12,sx:{display:"flex",m:{xs:1,sm:3},mb:0},children:(0,U.jsxs)(p.Z,{children:[(0,U.jsx)(l.Z,{sx:{backgroundColor:e.palette.dark[800],textAlign:"center",p:1},children:(0,U.jsx)(t.rU,{to:j.E6,"aria-label":"theme-logo",children:(0,U.jsx)(Z.Z,{})})}),(0,U.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"center",sx:{p:2},children:[(0,U.jsx)(a.ZP,{item:!0,xs:12,children:(0,U.jsxs)(c.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,U.jsx)(d.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:r?"h3":"h2",children:"Reset Password"}),(0,U.jsx)(d.Z,{variant:"caption",fontSize:"16px",textAlign:r?"center":"inherit",children:"Please choose your new password"})]})}),(0,U.jsx)(a.ZP,{item:!0,xs:12,children:(0,U.jsx)(V,{})}),(0,U.jsx)(a.ZP,{item:!0,xs:12,children:(0,U.jsx)(u.Z,{})}),(0,U.jsx)(a.ZP,{item:!0,xs:12,sx:{textAlign:"center"},children:(0,U.jsx)(x.Z,{onClick:function(){s("/login")},variant:"text",color:"inherit",children:"Already have an account?"})})]})]})}),(0,U.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,U.jsx)(m.Z,{})})]})})}}}]);