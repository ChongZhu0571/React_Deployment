(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(17),s=a.n(r),o=(a(104),a(8)),i=a(28),l=a(166),j=a.p+"static/media/model.106a700a.mp4",d=a(168),u=a(170),m=a(76),b=a(81),h=a(37),O=a(77),p=a(2),x=Object(l.a)({root:{backgroundColor:"#d8e1e3",height:"200px",width:"100%",marginTop:"200px"},header:{textAlign:"center",paddingTop:"20px",fontFamily:"Sacramento",fontSize:"1.5rem"},subHeader:{textAlign:"center",paddingTop:"10px",fontFamily:"Kalam",fontSize:"1rem"},icons:{fontSize:"1.5rem"}});function g(){var e=x();return Object(p.jsxs)("div",{className:e.root,children:[Object(p.jsxs)(d.a,{children:[Object(p.jsx)(b.a,{variant:"h6",className:"".concat(e.header),children:"@SuperDamp 2021"}),Object(p.jsx)(b.a,{variant:"h6",className:"".concat(e.subHeader),children:"Check out our business partners:"})]}),Object(p.jsx)(u.a,{children:Object(p.jsx)(m.a,{sm:"1",children:Object(p.jsx)("p",{})})}),Object(p.jsxs)(u.a,{children:[Object(p.jsx)(m.a,{sm:"1"}),Object(p.jsx)(m.a,{sm:"1"}),Object(p.jsx)(m.a,{sm:"1",className:e.icons,children:Object(p.jsx)(h.a,{})}),Object(p.jsx)(m.a,{sm:"1",className:e.icons,children:Object(p.jsx)(h.b,{})}),Object(p.jsx)(m.a,{sm:"1",className:e.icons,children:Object(p.jsx)(h.c,{})}),Object(p.jsx)(m.a,{sm:"1",className:e.icons,children:Object(p.jsx)(h.e,{})}),Object(p.jsx)(m.a,{sm:"1",className:e.icons,children:Object(p.jsx)(O.a,{})}),Object(p.jsx)(m.a,{sm:"1",className:e.icons,children:Object(p.jsx)(h.g,{})}),Object(p.jsx)(m.a,{sm:"1",className:e.icons,children:Object(p.jsx)(h.f,{})}),Object(p.jsx)(m.a,{sm:"1",className:e.icons,children:Object(p.jsx)(h.d,{})})]})]})}var f=Object(l.a)((function(e){return{video:{width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"50px",display:"block"},headers:{textAlign:"center",marginTop:"100px",fontFamily:"Mate SC"}}}));var v=function(e){var t=f();return Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsx)("h2",{className:t.headers,children:"We know your expectations about clothes"}),Object(p.jsx)("div",{children:Object(p.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,className:t.video,children:Object(p.jsx)("source",{src:j,type:"video/mp4"})})}),Object(p.jsx)(g,{})]})},y=a(24),N=a(173),C=a(174),S=a(176),k=a(171),w=a(175),T=a(172),B=a(82),F=a(190),A=Object(l.a)((function(e){return{root:{},media:{maxWidth:345,height:0,paddingTop:"20.25%",marginLeft:"auto",marginRight:"auto"},usd:Object(y.a)(Object(y.a)({},e.typography.button),{},{backgroundColor:e.palette.background.paper,padding:e.spacing(1)})}}));function P(e){var t=A(),a=Object(c.useState)(!1),n=Object(o.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),j=l[0],d=l[1],u=Object(c.useState)(""),m=Object(o.a)(u,2),h=m[0],O=m[1],x=Object(c.useState)(""),g=Object(o.a)(x,2),f=g[0],v=g[1],P=Object(c.useState)(!1),R=Object(o.a)(P,2),L=R[0],D=R[1],q=Object(c.useState)(!1),E=Object(o.a)(q,2),U=E[0],M=E[1],I=Object(c.useContext)(Oe),J=I.user,z=I.setUser,W=Object(c.useState)(!1),G=Object(o.a)(W,2),_=G[0],H=G[1],Y="https://humber-superdamp.herokuapp.com";function K(t){t.preventDefault();var a=e.comments.concat({rating:j,recommended:h,comment:f});console.log(a),fetch("".concat(Y,"/products/").concat(e.id),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:e.name,imgURL:e.url,price:e.price,category:e.category,comments:a})}).then(console.log("comment added")).then(D(!0)).catch((function(e){return console.log(e)}))}return Object(p.jsxs)(N.a,{className:t.root,children:[Object(p.jsxs)(C.a,{children:[Object(p.jsx)(w.a,{className:t.media,image:e.url}),Object(p.jsxs)(k.a,{children:[Object(p.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(p.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:e.category}),Object(p.jsxs)(b.a,{className:t.root,children:["USD $",e.price]})]})]}),Object(p.jsxs)(S.a,{children:[""!==J.name&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(T.a,{size:"small",onClick:function(){var t,a,c,n;t=e.name,a=e.price,c=e.category,n=e.id,J.cart[0].product.push({name:t,price:a,category:c,id:n}),console.log(J.cart[0].product),fetch("".concat(Y,"/api/carts/myCart/"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(J.token)},method:"POST",body:JSON.stringify({user:J._id,product:J.cart[0].product})}).then((function(e){e.json().then((function(e){!e.message&&z((function(t){return Object(y.a)(Object(y.a)({},t),{},{cart:[e]})})),H(!0),console.log(J)}))})).catch((function(e){console.log(e)}))},children:"Add to cart"}),Object(p.jsx)("br",{})]}),Object(p.jsx)(T.a,{size:"small",onClick:function(){s((function(e){return!e}))},children:"Comments"}),""!==J.name&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(T.a,{onClick:function(){M((function(e){return!e}))},children:"Add Comment"}),Object(p.jsx)("br",{})]})]}),r&&e.comments.map((function(e){return Object(p.jsxs)(k.a,{children:[Object(p.jsxs)(B.a,{style:{padding:"20px"},children:["Recommended: ",e.recommended," ",Object(p.jsx)("br",{}),"Rating: ",e.rating," ",Object(p.jsx)("br",{}),"Comment: ",e.comment," ",Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{})]},e.comment)})),U&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("hr",{}),Object(p.jsxs)(k.a,{children:[Object(p.jsx)("p",{children:"Add comment:"}),Object(p.jsxs)("form",{className:t.root,onSubmit:K,children:[Object(p.jsx)(F.a,{label:"rating",variant:"filled",required:!0,value:j,onChange:function(e){return d(e.target.value)}}),Object(p.jsx)(F.a,{label:"recommended",variant:"filled",required:!0,autoFocus:!0,value:h,onChange:function(e){return O(e.target.value)}}),Object(p.jsx)(F.a,{label:"comment",variant:"filled",required:!0,value:f,onChange:function(e){return v(e.target.value)}}),Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)(T.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]}),L&&Object(p.jsx)("p",{style:{color:"red"},children:"Refresh to see your comment"})]})]})]}),_&&Object(p.jsx)(k.a,{children:Object(p.jsx)("p",{style:{color:"red"},children:"Item added to cart"})})]})}var R=a(177),L=Object(l.a)((function(e){return{video:{width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"50px",display:"block"},headers:{textAlign:"center",marginTop:"100px",fontFamily:"Mate SC",paddingBottom:"60px"},root:{flexGrow:1,marginLeft:"80px",marginRight:"80px"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},myBtn:{marginRight:"20px",marginBottom:"15px"}}}));var D=function(e){var t=L(),a=Object(c.useState)([]),r=Object(o.a)(a,2),s=r[0],i=r[1],l=Object(c.useState)([]),j=Object(o.a)(l,2),d=j[0],u=j[1],m=Object(c.useState)(!0),b=Object(o.a)(m,2),h=(b[0],b[1]);return Object(c.useEffect)((function(){fetch("".concat("https://humber-superdamp.herokuapp.com","/api/products"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"}).then((function(e){return e.json().then((function(e){i(e),u(e),console.log(e)}))})).catch((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){console.log(s)})),Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsx)("h2",{className:t.headers,children:"This is product page"}),Object(p.jsxs)("div",{className:t.root,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(T.a,{className:t.myBtn,variant:"contained",onClick:function(){u(s)},children:"Show All"}),Object(p.jsx)(T.a,{className:t.myBtn,variant:"contained",onClick:function(){var e=s.filter((function(e){return"Jackets"===e.category}));console.log(e),u(e)},children:"Show Jackets"}),Object(p.jsx)(T.a,{className:t.myBtn,variant:"contained",onClick:function(){var e=s.filter((function(e){return"T-Shirts"===e.category}));console.log(e),u(e)},children:"Show T-Shirts"}),Object(p.jsx)(T.a,{className:t.myBtn,variant:"contained",onClick:function(){var e=s.filter((function(e){return"Hoodies"===e.category}));console.log(e),u(e)},children:"Show Hoodies"}),Object(p.jsx)(T.a,{className:t.myBtn,variant:"contained",onClick:function(){var e=s.filter((function(e){return"Pants"===e.category}));console.log(e),u(e)},children:"Show Pants"})]}),Object(p.jsx)(R.a,{container:!0,spacing:3,children:d.map((function(e){return Object(p.jsx)(R.a,{item:!0,xs:12,sm:12,children:Object(p.jsx)(P,{url:e.imgURL,name:e.name,category:e.category,price:e.price,comments:e.comments,id:e._id,refresh:h},e.name)},e.name)}))})]}),Object(p.jsx)(g,{})]})},q=a(79),E=Object(l.a)((function(e){return{message:{marginTop:"10px"}}}));var U=function(e){E();var t=Object(c.useState)(!1),a=Object(o.a)(t,2),r=a[0],s=a[1];return Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsxs)("section",{className:" ml-5 mr-5 pl-5 pr-5",children:[Object(p.jsx)("h2",{className:"h1-responsive font-weight-bold text-center my-4",children:"Contact us"}),Object(p.jsx)("h4",{className:"text-center w-responsive mx-auto mb-5",children:"Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you."}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-9 mb-md-0 mb-5",children:[Object(p.jsxs)(q.a,{id:"contact-form",name:"contact-form",action:"mail.php",method:"POST",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("div",{className:"md-form mb-0",children:[Object(p.jsx)("input",{type:"text",id:"name",name:"name",className:"form-control"}),Object(p.jsx)("label",{for:"name",class:"",children:"Your name"})]})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("div",{className:"md-form mb-0",children:[Object(p.jsx)("input",{type:"text",id:"email",name:"email",className:"form-control"}),Object(p.jsx)("label",{for:"email",className:"",children:"Your email"})]})})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-12",children:Object(p.jsxs)("div",{className:"md-form mb-0",children:[Object(p.jsx)("input",{type:"text",id:"subject",name:"subject",className:"form-control"}),Object(p.jsx)("label",{for:"subject",className:"",children:"Subject"})]})})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-12",children:Object(p.jsxs)("div",{className:"md-form",children:[Object(p.jsx)("textarea",{type:"text",id:"message",name:"message",rows:"2",className:"form-control md-textarea"}),Object(p.jsx)("label",{for:"message",children:"Your message"})]})})})]}),Object(p.jsx)("div",{className:"text-center text-md-left",children:Object(p.jsx)("a",{className:"btn btn-primary",onClick:function(){s(!0)},children:"Send"})}),r&&Object(p.jsx)("div",{className:"text-center text-md-left mt-2",children:"Thank you for getting in touch! We will contact you very soon!"}),Object(p.jsx)("div",{className:"status"})]}),Object(p.jsx)("div",{className:"col-md-3 text-center",children:Object(p.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fas fa-map-marker-alt fa-2x"}),Object(p.jsx)("p",{children:"San Francisco, CA 94126, USA"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fas fa-phone mt-4 fa-2x"}),Object(p.jsx)("p",{children:"+ 01 234 567 89"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fas fa-envelope mt-4 fa-2x"}),Object(p.jsx)("p",{children:"contact@superdamp.com"})]})]})})]})]}),Object(p.jsx)(g,{})]})},M=a(188),I=a(189),J=a(187),z=(a(112),a(18)),W=a(179),G=a(183),_=a(182),H=a(178),Y=a(180),K=a(181),$=Object(l.a)((function(e){return{headers:{textAlign:"center",marginTop:"100px",fontFamily:"Mate SC",paddingBottom:"3%"},outheaders:{textAlign:"center",marginTop:"100px",fontFamily:"Mate SC",paddingBottom:"3%",color:"red"},subheaders:{textAlign:"center",fontFamily:"Mate SC"},table:{minWidth:650},tableCon:{width:"90%",marginLeft:"auto",marginRight:"auto"},myBtn:{marginLeft:"10px"}}}));var Q=function(e){var t=$(),a=Object(c.useContext)(Oe),r=a.user,s=a.setUser,i="https://humber-superdamp.herokuapp.com",l=Object(c.useState)(!1),j=Object(o.a)(l,2),d=j[0],u=j[1];return console.log(r),Object(c.useEffect)((function(){fetch("".concat(i,"/api/carts/myCart/").concat(r._id),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(r.token)},method:"GET"}).then((function(e){e.json().then((function(e){!e.message&&s((function(t){return Object(y.a)(Object(y.a)({},t),{},{cart:e})}))}))})).catch((function(e){console.log(e)})),console.log(r)}),[]),Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsx)("h2",{className:t.headers,children:"Your items in cart"}),!r.cart&&Object(p.jsx)("h4",{className:t.subheaders,children:"Please login to see your cart"}),r.cart&&!r.cart[0].product[0]&&Object(p.jsx)("h4",{className:t.subheaders,children:"Please add items to your cart"}),r.cart&&r.cart[0].product[0]&&!d&&Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(H.a,{component:B.a,className:t.tableCon,children:[Object(p.jsxs)(W.a,{className:t.table,"aria-label":"simple table",children:[Object(p.jsx)(Y.a,{children:Object(p.jsxs)(K.a,{children:[Object(p.jsx)(_.a,{children:"Name"}),Object(p.jsx)(_.a,{align:"right",children:"Category"}),Object(p.jsx)(_.a,{align:"right",children:"Price"}),Object(p.jsx)(_.a,{align:"right",children:"Remove"})]})}),Object(p.jsx)(G.a,{children:r.cart[0].product.map((function(e){return Object(p.jsxs)(K.a,{children:[Object(p.jsx)(_.a,{component:"th",scope:"row",children:e.name}),Object(p.jsx)(_.a,{align:"right",children:e.category}),Object(p.jsx)(_.a,{align:"right",children:e.price}),Object(p.jsx)(_.a,{align:"right",children:Object(p.jsx)(T.a,{variant:"contained",color:"secondary",onClick:function(){!function(e){var t=r.cart[0].product.filter((function(t){return t.name!==e}));fetch("".concat(i,"/api/carts/myCart/"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(r.token)},method:"POST",body:JSON.stringify({user:r._id,product:t})}).then((function(e){e.json().then((function(e){!e.message&&s((function(t){return Object(y.a)(Object(y.a)({},t),{},{cart:[e]})})),console.log(r)}))})).catch((function(e){console.log(e)}))}(e.name)},children:"x"})})]},e.name)}))})]}),Object(p.jsx)("div",{className:t.myBtn,children:Object(p.jsx)(T.a,{variant:"contained",color:"primary",onClick:function(){u(!0)},children:"Check Out"})})]})}),d&&Object(p.jsx)("h2",{className:t.outheaders,children:"Thank you so much for shopping with us. We will ship your order soon."}),Object(p.jsx)(g,{})]})},V=a(193),X=a(185),Z=a(186),ee=a(192),te=a(184),ae=a(191),ce=a(78),ne=a.n(ce);function re(){return Object(p.jsxs)(b.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(p.jsx)(te.a,{color:"inherit",href:"https://material-ui.com/",children:"Super Damp"})," ",(new Date).getFullYear(),"."]})}var se=Object(l.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{paddingTop:"30px",margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function oe(){var e=se(),t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1],d=Object(c.useState)(!1),u=Object(o.a)(d,2),m=u[0],h=u[1],O=Object(c.useState)(!1),x=Object(o.a)(O,2),g=x[0],f=x[1],v=Object(c.useContext)(Oe),N=(v.user,v.setUser);return Object(p.jsxs)(c.Fragment,{children:[Object(p.jsxs)(R.a,{container:!0,component:"main",className:e.root,children:[Object(p.jsx)(X.a,{}),Object(p.jsx)(R.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(p.jsx)(R.a,{item:!0,xs:12,sm:8,md:5,component:B.a,elevation:6,square:!0,children:Object(p.jsxs)("div",{className:e.paper,children:[Object(p.jsx)(V.a,{className:e.avatar,children:Object(p.jsx)(ne.a,{})}),Object(p.jsx)(b.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(p.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),fetch("".concat("https://humber-superdamp.herokuapp.com","/api/users/login"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:n,password:l})}).then((function(e){console.log(e.body),e.json().then((function(e){console.log(e),e.message?f(!0):(N(Object(y.a)(Object(y.a)({},e),{},{cart:[]})),h(!0))}))})).catch((function(e){console.log(e)}))},children:[Object(p.jsx)(F.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:n,onChange:function(e){return r(e.target.value)}}),Object(p.jsx)(F.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:l,onChange:function(e){return j(e.target.value)}}),Object(p.jsx)(Z.a,{control:Object(p.jsx)(ee.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(p.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),g&&Object(p.jsx)("p",{style:{color:"red"},children:"*** Credentials incorrect. Please try again ***"}),Object(p.jsxs)(R.a,{container:!0,children:[Object(p.jsx)(R.a,{item:!0,xs:!0}),Object(p.jsx)(R.a,{item:!0,children:Object(p.jsx)(te.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(p.jsx)(ae.a,{mt:5,children:Object(p.jsx)(re,{})})]})]})})]}),m&&Object(p.jsx)(z.a,{to:"/cart"})]})}var ie=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(2),marginTop:"10%","& .MuiTextField-root":{margin:e.spacing(1),width:"300px"},"& .MuiButtonBase-root":{margin:e.spacing(2)}}}})),le=function(){var e=ie(),t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1],d=Object(c.useState)(""),u=Object(o.a)(d,2),m=u[0],b=u[1],h=Object(c.useState)("none"),O=Object(o.a)(h,2),x=O[0],g=O[1];return Object(p.jsxs)("form",{className:e.root,onSubmit:function(e){e.preventDefault(),fetch("".concat("https://humber-superdamp.herokuapp.com","/api/users/register"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:n,email:l,password:m})}).then((function(e){return e.json().then((function(e){return e.role?g("true"):g("false")}))})).catch((function(e){return console.log(e)}))},children:[Object(p.jsx)("h5",{style:{fontFamily:"Kalam",color:"black"},children:"Sign up"}),Object(p.jsx)(F.a,{label:"Name",variant:"filled",required:!0,value:n,onChange:function(e){return r(e.target.value)}}),Object(p.jsx)(F.a,{label:"Email",variant:"filled",type:"email",required:!0,autoComplete:"email",id:"email",name:"email",autoFocus:!0,value:l,onChange:function(e){return j(e.target.value)}}),Object(p.jsx)(F.a,{label:"Password",variant:"filled",type:"password",required:!0,value:m,onChange:function(e){return b(e.target.value)}}),m.length<8&&0!==m.length&&Object(p.jsx)("p",{style:{color:"red"},children:"Password must have at least 8 words"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(T.a,{variant:"contained",onClick:function(){r(""),j(""),b("")},children:"Clear"}),Object(p.jsx)(T.a,{type:"submit",variant:"contained",color:"primary",children:"Signup"})]}),"true"===x&&Object(p.jsx)("p",{style:{color:"Blue"},children:"Sign up successful. Go to login page."}),"false"===x&&Object(p.jsx)("p",{style:{color:"Blue"},children:"Sign up not successful. Please refresh and try again."})]})},je=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(2),"& .MuiTextField-root":{margin:e.spacing(1),width:"300px"},"& .MuiButtonBase-root":{margin:e.spacing(2)}},headers:{textAlign:"center",marginTop:"100px",fontFamily:"Mate SC",paddingBottom:"5%",width:"80%",marginLeft:"auto",marginRight:"auto"},myBtn:{marginRight:"10px"},panel:{width:"80%",marginLeft:"auto",marginRight:"auto"},alert:{color:"red"}}}));var de=function(e){var t=je(),a=Object(c.useState)(!1),r=Object(o.a)(a,2),s=r[0],i=r[1],l=Object(c.useState)(!1),j=Object(o.a)(l,2),d=j[0],u=j[1],m=Object(c.useState)(!1),b=Object(o.a)(m,2),h=b[0],O=b[1],x=Object(c.useState)(!1),f=Object(o.a)(x,2),v=f[0],y=f[1],N=Object(c.useState)(""),C=Object(o.a)(N,2),S=C[0],k=C[1],w=Object(c.useState)(""),A=Object(o.a)(w,2),P=A[0],R=A[1],L=Object(c.useState)(""),D=Object(o.a)(L,2),q=D[0],E=D[1],U=Object(c.useState)(""),M=Object(o.a)(U,2),I=M[0],J=M[1],z=Object(c.useState)(""),$=Object(o.a)(z,2),Q=$[0],V=$[1],X=Object(c.useState)(!1),Z=Object(o.a)(X,2),ee=Z[0],te=Z[1],ae=Object(c.useState)(!1),ce=Object(o.a)(ae,2),ne=ce[0],re=ce[1],se=Object(c.useState)(!1),oe=Object(o.a)(se,2),ie=oe[0],le=oe[1],de=Object(c.useState)([]),ue=Object(o.a)(de,2),me=ue[0],be=ue[1],he=Object(c.useState)([]),Oe=Object(o.a)(he,2),pe=Oe[0],xe=Oe[1],ge="https://humber-superdamp.herokuapp.com";Object(c.useEffect)((function(){fetch("".concat(ge,"/api/carts"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"}).then((function(e){return e.json().then((function(e){xe(e),console.log(e)}))})).catch((function(e){return console.log(e)})),fetch("".concat(ge,"/api/products"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"}).then((function(e){return e.json().then((function(e){be(e),console.log(e)}))})).catch((function(e){return console.log(e)}))}),[]);var fe=function(){i(!1),y(!1),O(!1),u(!1)},ve=function(){V(""),k(""),R(""),E(""),J(""),te(!1),re(!1),le(!1)};return Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsxs)("div",{className:t.headers,children:[Object(p.jsx)(T.a,{className:t.myBtn,variant:"contained",color:"primary",onClick:function(){fe(),i(!0)},children:"add product"}),Object(p.jsx)(T.a,{className:t.myBtn,variant:"contained",color:"primary",onClick:function(){fe(),u(!0)},children:"edit product"}),Object(p.jsx)(T.a,{className:t.myBtn,variant:"contained",color:"secondary",onClick:function(){fe(),O(!0)},children:"delete product"}),Object(p.jsx)(T.a,{className:t.myBtn,variant:"contained",color:"default",onClick:function(){fe(),y(!0)},children:"Show All Customer Carts"})]}),s&&Object(p.jsx)("div",{className:t.panel,children:Object(p.jsxs)("form",{className:t.root,onSubmit:function(e){e.preventDefault(),fetch("".concat(ge,"/api/products/"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:S,imgURL:P,price:q,category:I,comments:[]})}).then((function(e){console.log(e),te(!0)})).catch((function(e){return console.log(e)}))},children:[Object(p.jsx)("h5",{children:"Add Product"}),Object(p.jsx)(F.a,{label:"Name",variant:"filled",required:!0,value:S,onChange:function(e){return k(e.target.value)}}),Object(p.jsx)(F.a,{label:"imgURL",variant:"filled",required:!0,value:P,onChange:function(e){return R(e.target.value)}}),Object(p.jsx)(F.a,{label:"price",variant:"filled",required:!0,value:q,onChange:function(e){return E(e.target.value)}}),Object(p.jsx)(F.a,{label:"category",variant:"filled",required:!0,value:I,onChange:function(e){return J(e.target.value)}}),Object(p.jsxs)("div",{children:[Object(p.jsx)(T.a,{variant:"contained",onClick:ve,children:"Clear"}),Object(p.jsx)(T.a,{type:"submit",variant:"contained",color:"primary",children:"Add"})]}),ee&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h5",{className:t.alert,children:"Product added successfully."}),Object(p.jsx)("h5",{className:t.alert,children:'Please press "Clear" to add another.'})]})]})}),d&&Object(p.jsx)("div",{className:t.panel,children:Object(p.jsxs)("form",{className:t.root,onSubmit:function(e){e.preventDefault();var t=me.find((function(e){return e.name=S})).comments;fetch("".concat(ge,"/api/products/").concat(Q),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:S,imgURL:P,price:q,category:I,comments:t})}).then((function(e){console.log(e),re(!0)})).catch((function(e){return console.log(e)}))},children:[Object(p.jsx)("h5",{children:"Edit Product"}),Object(p.jsx)(F.a,{label:"Id",variant:"filled",required:!0,value:Q,onChange:function(e){return V(e.target.value)}}),Object(p.jsx)(F.a,{label:"Name",variant:"filled",required:!0,value:S,onChange:function(e){return k(e.target.value)}}),Object(p.jsx)(F.a,{label:"imgURL",variant:"filled",required:!0,value:P,onChange:function(e){return R(e.target.value)}}),Object(p.jsx)(F.a,{label:"price",variant:"filled",required:!0,value:q,onChange:function(e){return E(e.target.value)}}),Object(p.jsx)(F.a,{label:"category",variant:"filled",required:!0,value:I,onChange:function(e){return J(e.target.value)}}),Object(p.jsxs)("div",{children:[Object(p.jsx)(T.a,{variant:"contained",onClick:ve,children:"Clear"}),Object(p.jsx)(T.a,{type:"submit",variant:"contained",color:"primary",children:"Edit"})]}),ne&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h5",{className:t.alert,children:"Product editted successfully."}),Object(p.jsx)("h5",{className:t.alert,children:'Please press "Clear" to Edit another.'})]})]})}),h&&Object(p.jsx)("div",{className:t.panel,children:Object(p.jsxs)("form",{className:t.root,onSubmit:function(e){e.preventDefault(),fetch("".concat(ge,"/api/products/").concat(Q),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"DELETE",body:JSON.stringify({name:S,imgURL:P,price:q,category:I})}).then((function(e){console.log(e),re(!0)})).catch((function(e){return console.log(e)}))},children:[Object(p.jsx)("h5",{children:"Enter ID to Delete Product"}),Object(p.jsx)(F.a,{label:"Id",variant:"filled",required:!0,value:Q,onChange:function(e){return V(e.target.value)}}),Object(p.jsxs)("div",{children:[Object(p.jsx)(T.a,{variant:"contained",onClick:ve,children:"Clear"}),Object(p.jsx)(T.a,{type:"submit",variant:"contained",color:"secondary",children:"Delete"})]}),ie&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h5",{className:t.alert,children:"Product deleted successfully."}),Object(p.jsx)("h5",{className:t.alert,children:'Please press "Clear" to Delete another.'})]})]})}),v&&Object(p.jsx)("div",{className:t.panel,children:Object(p.jsx)(H.a,{component:B.a,className:t.tableCon,children:Object(p.jsxs)(W.a,{className:t.table,"aria-label":"simple table",children:[Object(p.jsx)(Y.a,{children:Object(p.jsxs)(K.a,{children:[Object(p.jsx)(_.a,{align:"right",children:"_id"}),Object(p.jsx)(_.a,{align:"right",children:"user"}),Object(p.jsx)(_.a,{align:"right",children:"product"})]})}),Object(p.jsx)(G.a,{children:pe.map((function(e){return Object(p.jsxs)(K.a,{children:[Object(p.jsx)(_.a,{component:"th",scope:"row",children:e._id}),Object(p.jsx)(_.a,{align:"right",children:e.user}),Object(p.jsx)(_.a,{align:"right",children:e.product.map((function(e){return Object(p.jsxs)(B.a,{children:["Name: ",e.name]},e._id)}))})]},e._id)}))})]})})}),Object(p.jsx)(g,{})]})},ue=Object(l.a)((function(e){return{video:{width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"50px",display:"block"},headers:{textAlign:"center",marginTop:"100px",fontFamily:"Mate SC"},subheaders:{textAlign:"center",fontFamily:"Mate SC",marginTop:"20px"},table:{minWidth:650},tableCon:{width:"90%",marginLeft:"auto",marginRight:"auto"},root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(2),marginTop:"5%","& .MuiTextField-root":{margin:e.spacing(1),width:"300px"},"& .MuiButtonBase-root":{margin:e.spacing(2)}},logoutBtn:{width:"70%"}}}));var me=function(e){var t="https://humber-superdamp.herokuapp.com",a=ue(),r=Object(c.useContext)(Oe),s=r.user,i=r.setUser,l=Object(c.useState)(!1),j=Object(o.a)(l,2),d=j[0],u=j[1],m=Object(c.useState)(""),b=Object(o.a)(m,2),h=b[0],O=b[1],x=Object(c.useState)(""),f=Object(o.a)(x,2),v=f[0],y=f[1],N=Object(c.useState)(""),C=Object(o.a)(N,2),S=C[0],k=C[1],w=Object(c.useState)("none"),B=Object(o.a)(w,2),A=B[0],P=B[1];console.log(s),console.log(t),Object(c.useEffect)((function(){O(s.name),y(s.email),k("")}),[]);var R=function(){O(""),y(""),k("")};return Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsx)("h2",{className:a.headers,children:"User Profile"}),Object(p.jsxs)("form",{className:a.root,onSubmit:function(e){e.preventDefault(),fetch("".concat(t,"/api/users/reset"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(s.token)},method:"POST",body:JSON.stringify({name:h,email:v,password:S})}).then((function(e){return e.json().then((function(e){e.role?P("true"):P("false"),e.message&&console.log(e.message),console.log(e)}))})).catch((function(e){return console.log(e)}))},children:[Object(p.jsx)("h5",{style:{fontFamily:"Kalam",color:"black"},children:"Your Info"}),Object(p.jsx)(F.a,{label:"Name",variant:"filled",required:!0,value:h,onChange:function(e){return O(e.target.value)},disabled:!d}),Object(p.jsx)(F.a,{label:"Email",variant:"filled",type:"email",required:!0,autoComplete:"email",id:"email",name:"email",autoFocus:!0,value:v,onChange:function(e){return y(e.target.value)},disabled:!d}),Object(p.jsx)(F.a,{label:"Password",variant:"filled",type:"password",required:!0,value:S,onChange:function(e){return k(e.target.value)},disabled:!d}),S.length<8&&0!==S.length&&Object(p.jsx)("p",{style:{color:"red"},children:"Password must have at least 8 words"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(T.a,{variant:"contained",onClick:R,children:"Clear"}),d&&Object(p.jsx)(T.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"}),!d&&Object(p.jsx)(T.a,{variant:"contained",color:"secondary",onClick:function(){u(!0)},children:"Edit"})]}),"true"===A&&Object(p.jsx)("p",{style:{color:"Blue"},children:"Information Updated successfully"}),"false"===A&&Object(p.jsx)("p",{style:{color:"Red"},children:"Update not successful"})]}),Object(p.jsxs)("div",{className:a.subheaders,children:[" ",Object(p.jsx)(T.a,{className:a.logoutBtn,variant:"contained",color:"secondary",onClick:function(){R(),i({role:"",token:"",email:"",name:"",id:"",cart:[]})},children:"Log Out"})]}),Object(p.jsx)(g,{})]})},be=Object(l.a)((function(e){return{root:{flexGrow:1},fontBar:{fontFamily:"Kalam",color:"black"},fontHeader:{fontFamily:"Sacramento",fontSize:"1.5rem"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},headerBtn:{marginLeft:"10px"}}}));function he(){var e=be(),t=Object(c.useState)(!1),a=Object(o.a)(t,2),n=(a[0],a[1],Object(c.useContext)(Oe)),r=n.user;n.setUser;return console.log(r),Object(p.jsx)(i.a,{children:Object(p.jsxs)("div",{className:e.root,children:[Object(p.jsx)(M.a,{position:"fixed",color:"default",children:Object(p.jsxs)(I.a,{children:[Object(p.jsx)(J.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"}),Object(p.jsx)(b.a,{variant:"h6",className:"".concat(e.title," ").concat(e.fontHeader),children:"SuperDamp"}),Object(p.jsx)(T.a,{color:"inherit",className:"".concat(e.headerBtn),children:Object(p.jsx)(i.b,{to:"/",className:"".concat(e.fontBar),children:"Home"})}),Object(p.jsx)(T.a,{color:"inherit",className:"".concat(e.headerBtn),children:Object(p.jsx)(i.b,{to:"/product",className:"".concat(e.fontBar),children:"Product"})}),Object(p.jsx)(T.a,{color:"inherit",className:"".concat(e.headerBtn),children:Object(p.jsx)(i.b,{to:"/Message",className:"".concat(e.fontBar),children:"Message Us"})}),Object(p.jsx)(T.a,{color:"inherit",className:"".concat(e.headerBtn),children:Object(p.jsx)(i.b,{to:"/cart",className:"".concat(e.fontBar),children:"cart"})}),r.role&&"user"!==r.role&&Object(p.jsx)(T.a,{color:"inherit",className:"".concat(e.headerBtn),children:Object(p.jsx)(i.b,{to:"/admin",className:"".concat(e.fontBar),children:"Admin"})}),""===r.name?Object(p.jsx)(T.a,{color:"inherit",className:e.fontBar,variant:"contained",children:Object(p.jsx)(i.b,{to:"/Login",className:"".concat(e.fontBar),children:"Login"})}):Object(p.jsx)(T.a,{color:"inherit",className:e.fontBar,variant:"contained",children:Object(p.jsxs)(i.b,{to:"/user",className:"".concat(e.fontBar),children:["Welcome ",r.name]})})]})}),Object(p.jsxs)(z.d,{children:[Object(p.jsx)(z.b,{path:"/Login",children:Object(p.jsx)(oe,{})}),Object(p.jsx)(z.b,{path:"/product",children:Object(p.jsx)(D,{})}),Object(p.jsx)(z.b,{path:"/message",children:Object(p.jsx)(U,{})}),Object(p.jsx)(z.b,{path:"/cart",children:Object(p.jsx)(Q,{})}),Object(p.jsx)(z.b,{path:"/admin",children:Object(p.jsx)(de,{})}),Object(p.jsx)(z.b,{path:"/signup",children:Object(p.jsx)(le,{})}),Object(p.jsx)(z.b,{path:"/user",children:Object(p.jsx)(me,{})}),Object(p.jsx)(z.b,{path:"/",children:Object(p.jsx)(v,{})})]})]})})}var Oe=Object(c.createContext)();var pe=function(e){var t=Object(c.useState)({role:"",token:"",email:"",name:"",id:""}),a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(p.jsx)(Oe.Provider,{value:{user:n,setUser:r},children:Object(p.jsx)(i.a,{children:Object(p.jsx)(he,{})})})},xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,196)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};a(123);s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(pe,{})}),document.getElementById("root")),xe()}},[[124,1,2]]]);
//# sourceMappingURL=main.0ba074d6.chunk.js.map