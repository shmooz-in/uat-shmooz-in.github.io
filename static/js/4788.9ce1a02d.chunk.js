"use strict";(self.webpackChunkshmooz=self.webpackChunkshmooz||[]).push([[4788],{14788:function(e,n,i){i.r(n),i.d(n,{default:function(){return I}});var r=i(4942),a=i(17592),t=i(29439),o=i(47313),s=i(2135),l=i(19860),m=i(24813),d=i(47825),c=i(9019),h=i(61113),u=i(73428),x=i(93405),p=i(42832),g=i(19536),Z=i(24193),j=i(24631),y=i(41727),v=i(1550),b=i(3463),f=i(79429),P=i(66182),C=i(12401),k=i(36859);var B=i.p+"static/media/widget-mail.ec54011bee945597fdcd3381320ab8b4.svg",w=i(33172),E=i(25823),_=(i(33497),i(60940)),S=(i(34229),i(55811),i(36287)),T=i(46417),W=(new _.Chance,function(){var e=(0,l.Z)(),n=(0,E.I0)(),i=(0,E.v9)((function(e){return e.adminMisc})).isLoading,a=o.useState(!1),_=(0,t.Z)(a,2),W=_[0],N=_[1],q=o.useState(1),z=(0,t.Z)(q,2),I=(z[0],z[1],o.useState(1)),A=(0,t.Z)(I,2),M=(A[0],A[1],function(e){console.log(e),N(!0)}),R=(0,m.Z)(e.breakpoints.down("md")),H=b.Ry({name:b.Z_("Enter your Name").required("Name is Required"),email:b.Z_("Enter your email").email("Enter a valid email").required("Email is required"),company_name:b.Z_("Enter your Company Name").required("Company Name is Required"),phone:b.Z_("Enter your Phone Number").required("Phone Number is Required").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").min(10,"too short").max(10,"too long"),message:b.Z_("Enter your Message").required("Message is Required")}),F=(0,f.TA)({initialValues:{name:"",email:"",phone:"",company_name:"",message:""},validationSchema:H,onSubmit:function(e){n((0,w.b)(e,M,M))}});return(0,T.jsx)(d.Z,{children:(0,T.jsxs)(c.ZP,{container:!0,justifyContent:"center",spacing:C.dv,children:[(0,T.jsx)(c.ZP,{item:!0,sm:10,md:7,sx:{mt:{md:12.5,xs:2.5},mb:{xs:2.5}},children:(0,T.jsxs)(c.ZP,{container:!0,spacing:C.dv,children:[(0,T.jsx)(c.ZP,{item:!0,xs:12,children:(0,T.jsx)(h.Z,{variant:"h1",color:"white",component:"div",sx:(0,r.Z)({fontSize:"3.5rem",fontWeight:900,lineHeight:1.4},e.breakpoints.down("md"),{fontSize:"1.8125rem",marginTop:"80px"}),children:"Talk to our team"})}),(0,T.jsx)(c.ZP,{item:!0,xs:12,children:(0,T.jsx)(h.Z,{variant:"h4",component:"div",sx:(0,r.Z)({fontWeight:400,lineHeight:1.4},e.breakpoints.up("md"),{my:0,mx:12.5}),color:"white",children:"The starting point for your Event"})})]})}),(0,T.jsx)(c.ZP,{item:!0,xs:12,sx:{position:"relative",display:{xs:"none",lg:"block"}},children:(0,T.jsx)("img",{src:B,alt:"Shmooz",style:{marginBottom:-.625,position:"absolute",bottom:-90,right:"0",width:400,maxWidth:"100%",animation:"5s wings ease-in-out infinite"}})}),(0,T.jsx)(c.ZP,{item:!0,xs:10,sx:{mb:-37.5},children:(0,T.jsx)(u.Z,{sx:{mb:6.25},elevation:4,children:(0,T.jsx)(x.Z,{sx:{p:4},children:W?(0,T.jsxs)(c.ZP,{container:!0,direction:"column",spacing:C.dv,alignItems:"center",justifyContent:"center",sx:{my:3},children:[(0,T.jsx)(c.ZP,{item:!0,xs:12,children:(0,T.jsx)(h.Z,{variant:R?"h2":"h1",children:"Thank you for Contacting!"})}),(0,T.jsx)(c.ZP,{item:!0,xs:12,children:(0,T.jsx)(p.Z,{alignItems:"center",spacing:2,children:(0,T.jsx)(h.Z,{align:"center",variant:"h4",sx:{fontWeight:400,color:"grey.500"},children:"We will soon get back to you."})})}),(0,T.jsx)(c.ZP,{item:!0,xs:12,children:(0,T.jsx)(g.Z,{})}),(0,T.jsx)(c.ZP,{item:!0,xs:12,children:(0,T.jsx)(c.ZP,{direction:R?"column-reverse":"row",container:!0,spacing:3,alignItems:R?"":"center",justifyContent:"space-between",children:(0,T.jsx)(c.ZP,{item:!0,children:(0,T.jsx)(Z.Z,{component:s.rU,to:S.E6,variant:"text",startIcon:(0,T.jsx)(k.Z,{}),children:"Continue Shmoozing"})})})})]}):(0,T.jsx)("form",{onSubmit:F.handleSubmit,children:(0,T.jsxs)(c.ZP,{container:!0,spacing:C.dv,children:[(0,T.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,T.jsx)(j.Z,{type:"text",label:"Full Name",placeholder:"Enter Your Full Name",id:"name",name:"name",fullWidth:!0,value:F.values.name,onChange:F.handleChange,onBlur:F.handleBlur,error:F.touched.name&&Boolean(F.errors.name),helperText:F.touched.name&&F.errors.name})}),(0,T.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,T.jsx)(j.Z,{type:"text",label:"Company Name",placeholder:"Enter Your Company Name",id:"company_name",name:"company_name",fullWidth:!0,value:F.values.company_name,onChange:F.handleChange,onBlur:F.handleBlur,error:F.touched.company_name&&Boolean(F.errors.company_name),helperText:F.touched.company_name&&F.errors.company_name})}),(0,T.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,T.jsx)(j.Z,{type:"email",label:"Email Address",placeholder:"Enter Your Email Address",id:"email",name:"email",fullWidth:!0,value:F.values.email,onChange:F.handleChange,onBlur:F.handleBlur,error:F.touched.email&&Boolean(F.errors.email),helperText:F.touched.email&&F.errors.email})}),(0,T.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,T.jsx)(j.Z,{fullWidth:!0,type:"text",label:"Phone Number",id:"phone",name:"phone",value:F.values.phone,onChange:function(e){F.setFieldValue(e.target.name,e.target.value.replace(/[^\d]+/g,"").slice(0,10))},onBlur:F.handleBlur,error:F.touched.phone&&Boolean(F.errors.phone),helperText:F.touched.phone&&F.errors.phone,InputProps:{startAdornment:(0,T.jsx)(y.Z,{position:"start",children:"+91"})}})}),(0,T.jsx)(c.ZP,{item:!0,xs:12,children:(0,T.jsx)(v.Z,{fullWidth:!0,children:(0,T.jsx)(j.Z,{id:"message",name:"message",placeholder:"Message",multiline:!0,fullWidth:!0,rows:4,value:F.values.message,onChange:F.handleChange,onBlur:F.handleBlur,error:F.touched.message&&Boolean(F.errors.message),helperText:F.touched.message&&F.errors.message})})}),(0,T.jsx)(c.ZP,{item:!0,xs:12,children:(0,T.jsxs)(c.ZP,{container:!0,spacing:C.dv,children:[(0,T.jsx)(c.ZP,{item:!0,sm:!0,zeroMinWidth:!0,children:(0,T.jsxs)(h.Z,{align:"left",variant:"body2",children:["By submitting this, you agree to the",(0,T.jsx)(h.Z,{variant:"subtitle1",component:s.rU,to:"/pages/privacy-policy",color:"primary",sx:{mx:.5},children:"Privacy Policy"}),"and",(0,T.jsx)(h.Z,{variant:"subtitle1",component:s.rU,to:"/pages/privacy-policy",color:"primary",sx:{ml:.5},children:"Cookie Policy"})]})}),(0,T.jsx)(c.ZP,{item:!0,children:(0,T.jsx)(P.Z,{children:(0,T.jsx)(Z.Z,{type:"submit",variant:"contained",color:"secondary",disabled:i,children:"Get Started"})})})]})})]})})})})})]})})}),N=i(18131),q=i(60884),z=(0,a.ZP)("div")((function(e){var n=e.theme;return(0,r.Z)({backgroundImage:"url(".concat(q,")"),backgroundSize:"100% 600px",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",textAlign:"center",paddingTop:30},n.breakpoints.down("md"),{paddingTop:0})})),I=function(){return(0,T.jsxs)(z,{children:[(0,T.jsx)(N.Z,{}),(0,T.jsx)(W,{})]})}},36859:function(e,n,i){var r=i(64836);n.Z=void 0;var a=r(i(45045)),t=i(46417),o=(0,a.default)((0,t.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");n.Z=o},55811:function(e,n,i){e.exports=i.p+"static/media/completed.4d659fe562f03c3c8574.png"},60884:function(e,n,i){e.exports=i.p+"static/media/bg-header.07dde975bc9d1d42f1c1.jpg"}}]);