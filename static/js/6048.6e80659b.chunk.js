"use strict";(self.webpackChunkshmooz_admin=self.webpackChunkshmooz_admin||[]).push([[6048],{36048:function(e,n,r){r.r(n),r.d(n,{default:function(){return G}});var t=r(58467),s=r(2135),i=r(19860),o=r(24813),a=r(9019),l=r(42832),c=r(61113),d=r(19536),u=r(58124),m=r(85436),h=r(48080),x=r(1413),p=r(15861),Z=r(29439),g=r(45987),j=r(64687),f=r.n(j),w=r(47313),b=r(25823),P=r(9506),v=r(24631),y=r(41727),C=r(1550),k=r(23306),I=r(49914),S=r(15480),B=r(47131),N=r(83929),E=r(44758),W=r(24193),z=r(3463),A=r(79429),M=r(66182),_=r(54285),F=r(22889),R=r(20556),U=function(e){var n=0;return e.length>5&&(n+=1),e.length>7&&(n+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(n+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(n+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(n+=1),n},D=r(5866),O=r(10237),q=r(22611),H=r(46417),T=["roles"],V=function(e){var n=e.roles,r=(0,g.Z)(e,T),l=(0,i.Z)(),d=(0,t.s0)(),u=(0,F.Z)(),m=(0,b.I0)(),h=(0,o.Z)(l.breakpoints.down("md")),j=w.useState(!1),V=(0,Z.Z)(j,2),L=V[0],G=V[1],J=w.useState(!0),Y=(0,Z.Z)(J,2),$=Y[0],K=Y[1],Q=w.useState(0),X=(0,Z.Z)(Q,2),ee=X[0],ne=X[1],re=w.useState(),te=(0,Z.Z)(re,2),se=te[0],ie=te[1],oe=(0,_.Z)().register,ae=(0,t.UO)().role,le=function(){G(!L)},ce=function(e){e.preventDefault()},de=function(e){var n,r=U(e);ne(r),ie((n=r)<2?{label:"Poor",color:R.Z.errorMain}:n<3?{label:"Weak",color:R.Z.warningDark}:n<4?{label:"Normal",color:R.Z.orangeMain}:n<5?{label:"Good",color:R.Z.successMain}:n<6?{label:"Strong",color:R.Z.successDark}:{label:"Poor",color:R.Z.errorMain})};return(0,w.useEffect)((function(){de("123456")}),[]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(a.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:(0,H.jsx)(a.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,H.jsx)(P.Z,{sx:{mb:2},children:(0,H.jsx)(c.Z,{variant:"subtitle1",children:"Sign up with Email address"})})})}),(0,H.jsx)(A.J9,{initialValues:{email:"",password:"",confirmPassword:"",firstName:"",lastName:"",organisation:"",phone:"",submit:null},validationSchema:z.Ry().shape({email:z.Z_().email("Must be a valid email").max(255).required("Email is required"),password:z.Z_().max(255).required("Password is required"),confirmPassword:z.Z_().when("password",{is:function(e){return!!(e&&e.length>0)},then:z.Z_().oneOf([z.iH("password")],"Both Password must be match!")})}),onSubmit:function(){var e=(0,p.Z)(f().mark((function e(r,t){var s,i,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.setErrors,i=t.setStatus,o=t.setSubmitting,s({submit:!1}),$){e.next=8;break}i({success:!1}),s({submit:"Please agree with terms and conditions"}),o(!1),e.next=18;break;case 8:return e.prev=8,e.next=11,oe(r.email,r.password,r.firstName,r.lastName,r.phone,n,r.organisation);case 11:u.current&&(i({success:!0}),o(!1),m((0,D.ss)({open:!0,message:"Your registration has been successfully completed.",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){d("/login",{replace:!0})}),1500)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(8),console.error(e.t0),u.current&&(i({success:!1}),s({submit:Object.values(e.t0.data.errors).join("\n")}),o(!1));case 18:case"end":return e.stop()}}),e,null,[[8,14]])})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,t=e.handleBlur,i=e.handleChange,o=e.handleSubmit,d=e.isSubmitting,u=e.touched,m=e.values,p=e.setFieldValue;return(0,H.jsxs)("form",(0,x.Z)((0,x.Z)({noValidate:!0,onSubmit:o},r),{},{children:[(0,H.jsxs)(a.ZP,{container:!0,spacing:h?0:2,children:[(0,H.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,H.jsx)(v.Z,{fullWidth:!0,label:"First Name",margin:"normal",name:"firstName",type:"text",value:m.firstName,onBlur:t,onChange:i,sx:(0,x.Z)({},l.typography.customInput)})}),(0,H.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,H.jsx)(v.Z,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lastName",type:"text",value:m.lastName,onBlur:t,onChange:i,sx:(0,x.Z)({},l.typography.customInput)})})]}),"organizer"===ae&&(0,H.jsx)(v.Z,{fullWidth:!0,label:"Organisation",margin:"normal",name:"organisation",type:"text",value:m.organisation,onBlur:t,onChange:i,sx:(0,x.Z)({},l.typography.customInput)}),(0,H.jsx)(v.Z,{fullWidth:!0,type:"text",label:"Phone Number",id:"phone",name:"phone",maxlength:10,value:m.phone,onChange:function(e){p(e.target.name,e.target.value.replace(/[^\d]/,"").slice(0,10))},onBlur:t,error:u.phone&&Boolean(n.phone),helperText:u.phone&&n.phone,InputProps:{startAdornment:(0,H.jsx)(y.Z,{position:"start",children:"+91"})}}),(0,H.jsxs)(C.Z,{fullWidth:!0,error:Boolean(u.email&&n.email),sx:(0,x.Z)({},l.typography.customInput),children:[(0,H.jsx)(k.Z,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),(0,H.jsx)(I.Z,{id:"outlined-adornment-email-register",type:"email",value:m.email,name:"email",onBlur:t,onChange:i,inputProps:{}}),u.email&&n.email&&(0,H.jsx)(S.Z,{error:!0,id:"standard-weight-helper-text--register",children:n.email})]}),(0,H.jsxs)(C.Z,{fullWidth:!0,error:Boolean(u.password&&n.password),sx:(0,x.Z)({},l.typography.customInput),children:[(0,H.jsx)(k.Z,{htmlFor:"outlined-adornment-password-register",children:"Password"}),(0,H.jsx)(I.Z,{id:"outlined-adornment-password-register",type:L?"text":"password",value:m.password,name:"password",label:"Password",onBlur:t,onChange:function(e){i(e),de(e.target.value)},endAdornment:(0,H.jsx)(y.Z,{position:"end",children:(0,H.jsx)(B.Z,{"aria-label":"toggle password visibility",onClick:le,onMouseDown:ce,edge:"end",size:"large",children:L?(0,H.jsx)(O.Z,{}):(0,H.jsx)(q.Z,{})})}),inputProps:{}}),u.password&&n.password&&(0,H.jsx)(S.Z,{error:!0,id:"standard-weight-helper-text-password-register",children:n.password})]}),0!==ee&&(0,H.jsx)(C.Z,{fullWidth:!0,children:(0,H.jsx)(P.Z,{sx:{mb:2},children:(0,H.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,H.jsx)(a.ZP,{item:!0,children:(0,H.jsx)(P.Z,{style:{backgroundColor:null===se||void 0===se?void 0:se.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,H.jsx)(a.ZP,{item:!0,children:(0,H.jsx)(c.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===se||void 0===se?void 0:se.label})})]})})}),(0,H.jsxs)(C.Z,{fullWidth:!0,error:Boolean(u.confirmPassword&&n.confirmPassword),sx:(0,x.Z)({},l.typography.customInput),children:[(0,H.jsx)(k.Z,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),(0,H.jsx)(I.Z,{id:"outlined-adornment-confirm-password",type:"password",value:m.confirmPassword,name:"confirmPassword",label:"Confirm Password",onBlur:t,onChange:i,inputProps:{}})]}),u.confirmPassword&&n.confirmPassword&&(0,H.jsx)(C.Z,{fullWidth:!0,children:(0,H.jsxs)(S.Z,{error:!0,id:"standard-weight-helper-text-confirm-password",children:[" ",n.confirmPassword," "]})}),(0,H.jsx)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:(0,H.jsx)(a.ZP,{item:!0,children:(0,H.jsx)(N.Z,{control:(0,H.jsx)(E.Z,{checked:$,onChange:function(e){return K(e.target.checked)},name:"checked",color:"primary"}),label:(0,H.jsxs)(c.Z,{variant:"subtitle1",children:["Agree with \xa0",(0,H.jsx)(c.Z,{variant:"subtitle1",component:s.rU,to:"#",children:"Terms & Condition."})]})})})}),(0,H.jsx)(P.Z,{sx:{mt:2},children:(0,H.jsx)(M.Z,{children:(0,H.jsx)(W.Z,{disableElevation:!0,disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})}),n.submit&&(0,H.jsx)(P.Z,{sx:{mt:3},children:(0,H.jsx)(S.Z,{error:!0,children:n.submit})})]}))}})]})},L=r(35184),G=function(){var e=(0,i.Z)(),n=(0,_.Z)().isLoggedIn,r=(0,t.UO)().role,x=(0,w.useMemo)((function(){switch(r){case"venue-owner":return[4];case"organizer":return[2];default:return[3]}}),[r]),p=(0,o.Z)(e.breakpoints.down("md"));return(0,H.jsx)(u.Z,{children:(0,H.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,H.jsx)(a.ZP,{item:!0,xs:12,children:(0,H.jsx)(a.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,H.jsx)(a.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,H.jsx)(m.Z,{children:(0,H.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,H.jsx)(a.ZP,{item:!0,xs:12,sx:{mb:3},children:(0,H.jsx)(s.rU,{to:"#","aria-label":"theme-logo",children:(0,H.jsx)(h.Z,{})})}),(0,H.jsx)(a.ZP,{item:!0,xs:12,children:(0,H.jsx)(a.ZP,{container:!0,direction:p?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,H.jsx)(a.ZP,{item:!0,children:(0,H.jsxs)(l.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,H.jsx)(c.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:p?"h3":"h2",children:"Sign up"}),(0,H.jsx)(c.Z,{variant:"caption",fontSize:"16px",textAlign:p?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,H.jsx)(a.ZP,{item:!0,xs:12,children:(0,H.jsx)(V,{roles:x})}),(0,H.jsx)(a.ZP,{item:!0,xs:12,children:(0,H.jsx)(d.Z,{})}),(0,H.jsx)(a.ZP,{item:!0,xs:12,children:(0,H.jsx)(a.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,H.jsx)(c.Z,{component:s.rU,to:n?"/pages/login/login3":"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),(0,H.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,H.jsx)(L.Z,{})})]})})}}}]);