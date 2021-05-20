(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{156:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},570:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(15),i=a.n(r),s=(a(247),a(8)),l=(a(248),a(16)),o=a(12),j=a(39),b=a(601),d=a(605),h=a(606),u=a(604),m=a(226),O=a(625),p=a(221),x=a(219),f=a.n(x),g=a(140),y=a.n(g),v=a(1),N=Object(b.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(j.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),inputRoot:{color:"inherit"},sectionDesktop:Object(j.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(j.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function C(){var e=N(),t=n.a.useState(null),a=Object(s.a)(t,2),c=a[0],r=a[1],i=n.a.useState(null),o=Object(s.a)(i,2),j=o[0],b=o[1],x=Boolean(c),g=Boolean(j),C=function(e){r(e.currentTarget)},w=function(){b(null)},S=function(){r(null),w()},k="primary-search-account-menu",T=Object(v.jsxs)(p.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:k,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:S,children:[Object(v.jsx)(O.a,{onClick:S,children:"Profile"}),Object(v.jsx)(O.a,{onClick:S,children:"My account"})]}),D="primary-search-account-menu-mobile",W=Object(v.jsxs)(p.a,{anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},id:D,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:g,onClose:w,children:[Object(v.jsx)(O.a,{children:Object(v.jsx)("p",{children:"Home"})}),Object(v.jsx)(O.a,{children:Object(v.jsx)("p",{children:"Dashboard"})}),Object(v.jsx)(O.a,{children:Object(v.jsx)("p",{children:"About Us"})}),Object(v.jsx)(O.a,{children:Object(v.jsx)("p",{children:"Contact"})}),Object(v.jsx)(O.a,{onClick:C,children:Object(v.jsx)(u.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(v.jsx)(y.a,{})})})]});return Object(v.jsxs)("div",{className:e.grow,children:[Object(v.jsx)(d.a,{position:"static",children:Object(v.jsxs)(h.a,{children:[Object(v.jsx)(u.a,{"aria-label":"show more","aria-controls":D,"aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},color:"inherit",children:Object(v.jsx)(f.a,{})}),Object(v.jsx)(m.a,{className:e.title,variant:"h6",noWrap:!0,children:"Material-UI"}),Object(v.jsx)("div",{className:e.grow}),Object(v.jsxs)("div",{className:e.sectionDesktop,children:[Object(v.jsx)(m.a,{className:e.title,variant:"h6",noWrap:!0,children:Object(v.jsx)(l.b,{to:"/dashboard",children:"Dashboard"})}),Object(v.jsx)(u.a,{edge:"end","aria-label":"account of current user","aria-controls":k,"aria-haspopup":"true",onClick:C,color:"inherit",children:Object(v.jsx)(y.a,{})})]})]})}),W,T]})}var w=a(607),S=a(608),k=a(609),T=a(610),D=a(611),W=Object(b.a)((function(e){return{root:{flexGrow:1,minWidth:275},title:{fontSize:14},pos:{marginBottom:12},paper:{height:140,width:100},control:{padding:e.spacing(2)}}}));function A(){var e=n.a.useState(2),t=Object(s.a)(e,2),a=t[0],r=(t[1],W()),i=Object(c.useState)([]),o=Object(s.a)(i,2),j=o[0],b=o[1];return Object(c.useEffect)((function(){fetch("https://jobmarketportal.herokuapp.com/alljobs").then((function(e){return e.json()})).then((function(e){return b(e)}))}),[]),Object(v.jsx)(w.a,{container:!0,className:r.root,spacing:2,children:Object(v.jsx)(w.a,{item:!0,xs:12,children:Object(v.jsx)(w.a,{container:!0,justify:"center",spacing:a,children:j.map((function(e){return Object(v.jsx)(w.a,{item:!0,children:Object(v.jsxs)(S.a,{variant:"outlined",children:[Object(v.jsxs)(k.a,{children:[Object(v.jsx)(m.a,{className:r.title,color:"textSecondary",gutterBottom:!0,children:"Codellion Job Post"}),Object(v.jsx)(m.a,{variant:"h5",component:"h2",children:e.jobTitle}),Object(v.jsx)(m.a,{className:r.pos,color:"textSecondary",children:e.jobType}),Object(v.jsx)(m.a,{variant:"body2",component:"p",children:e.skill})]}),Object(v.jsx)(T.a,{children:Object(v.jsxs)(D.a,{variant:"contained",color:"secondary",size:"small",children:[" ",Object(v.jsx)(l.b,{style:{color:"white"},to:"/applyjob/"+e.jobTitle,children:"Apply Now"})]})})]})},e)}))})})})}var P=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"This Home Page............"}),Object(v.jsx)(C,{}),Object(v.jsx)(A,{})]})},J=a(93),E=a(223),F=function(e){var t=e.children,a=Object(E.a)(e,["children"]),n=Object(c.useContext)(ge),r=Object(s.a)(n,2),i=r[0];r[1];return Object(v.jsx)(o.b,Object(J.a)(Object(J.a)({},a),{},{render:function(e){var a=e.location;return i.email?t:Object(v.jsx)(o.a,{to:{pathname:"/login",state:{from:a}}})}}))},I=(a(156),a(44)),q=a(45),M=a(621),z=a(612),R=a(613);a(256);function B(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),i=Object(s.a)(r,2),l=i[0],j=i[1],b=Object(c.useState)(""),d=Object(s.a)(b,2),h=d[0],u=d[1],O=Object(c.useState)(""),p=Object(s.a)(O,2),x=p[0],f=p[1],g=Object(c.useState)(""),y=Object(s.a)(g,2),N=y[0],C=y[1],S=Object(c.useState)(""),k=Object(s.a)(S,2),T=k[0],W=k[1],A=Object(c.useState)(""),P=Object(s.a)(A,2),J=P[0],E=P[1],F=Object(o.g)(),I=Object(c.useContext)(ge),q=Object(s.a)(I,2),B=q[0];q[1];return Object(v.jsxs)(z.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(R.a,{}),Object(v.jsx)(m.a,{component:"h1",variant:"h5",children:"Job Post Form"}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={jobTitle:a,jobType:l,city:h,vacancy:x,description:N,skill:T,salary:J,postDate:new Date,email:B.email||"admin@email.com"};fetch("https://jobmarketportal.herokuapp.com/addjobpost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e&&(alert("SuccessFully Posted Job"),F.push("/dashboard"))}))},action:"",children:[Object(v.jsxs)(w.a,{container:!0,spacing:3,children:[Object(v.jsx)(w.a,{item:!0,xs:12,children:Object(v.jsx)(M.a,{required:!0,id:"name",name:"name",label:"Job Title",fullWidth:!0,autoComplete:"Job Title",onChange:function(e){return n(e.target.value)}})}),Object(v.jsx)(w.a,{item:!0,xs:12,children:Object(v.jsx)(M.a,{required:!0,id:"jobType",name:"jobType",label:"Job Type",fullWidth:!0,onChange:function(e){return j(e.target.value)}})}),Object(v.jsx)(w.a,{item:!0,xs:12,children:Object(v.jsx)(M.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,onChange:function(e){return u(e.target.value)}})}),Object(v.jsx)(w.a,{item:!0,xs:12,children:Object(v.jsx)(M.a,{id:"vacancy",name:"vacancy",label:"Number Of Opening",type:"number",fullWidth:!0,onChange:function(e){return f(e.target.value)}})}),Object(v.jsx)(w.a,{item:!0,xs:12,children:Object(v.jsx)(M.a,{required:!0,rowsMin:3,id:"description",type:"textarea",name:"description",label:"Job Description",fullWidth:!0,onChange:function(e){return C(e.target.value)}})}),Object(v.jsx)(w.a,{item:!0,xs:12,children:Object(v.jsx)(M.a,{required:!0,id:"skill",name:"skill",type:"textarea",label:"Skill Required",fullWidth:!0,onChange:function(e){return W(e.target.value)}})}),Object(v.jsx)(w.a,{item:!0,xs:12,children:Object(v.jsx)(M.a,{required:!0,id:"salary",type:"number",name:"salary",label:"CTC (Cost to Company) USD per Year.",fullWidth:!0,onChange:function(e){return E(e.target.value)}})})]}),Object(v.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Post Now"})]})]})}var L=a(222),U=function(){var e=Object(c.useContext)(ge),t=Object(s.a)(e,2),a=(t[0],t[1],Object(L.a)()),n=a.register,r=a.handleSubmit,i=(a.watch,a.formState.errors,Object(o.g)());return Object(v.jsx)("div",{children:Object(v.jsx)("form",{className:" pt-4 pl-1 row",onSubmit:r((function(e){var t={email:e.email};fetch("https://jobmarketportal.herokuapp.com/addEmployer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e&&(alert("SuccessFully Added Admin"),i.push("/dashboard/employerdashboard"))}))})),children:Object(v.jsxs)("div",{className:"col-md-12",children:[Object(v.jsx)("label",{children:"Email: "}),Object(v.jsx)("input",Object(J.a)({className:"form-control",name:"email",placeholder:"Enter Email"},n("email")))," ",Object(v.jsx)("br",{}),Object(v.jsx)("input",{style:{backgroundColor:"#C91729"},class:"text-white btn my-2 my-sm-0 me-md-2 ml-auto",value:"Add Admin",type:"submit"})]})})})},Y=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useContext)(ge),i=Object(s.a)(r,2),l=(i[0],i[1],Object(c.useState)(!1)),o=Object(s.a)(l,2),j=o[0],b=o[1];return Object(c.useEffect)((function(){fetch("https://jobmarketportal.herokuapp.com/alljobs").then((function(e){return e.json()})).then((function(e){n(e),b(!0)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"fw-bold  text-center",style:{color:"crimson"},children:"Posted Job Details:"}),Object(v.jsxs)("table",{className:"table",children:[Object(v.jsx)("thead",{className:"thead-dark",children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"col",children:" Job Title"}),Object(v.jsx)("th",{scope:"col",children:"Job Type"}),Object(v.jsx)("th",{scope:"col",children:"CTC"}),Object(v.jsx)("th",{scope:"col",children:"City"}),Object(v.jsx)("th",{scope:"col",children:"Vacancy"}),Object(v.jsx)("th",{scope:"col",children:"Skill"})]})}),Object(v.jsx)("tbody",{children:j&&a.length>0?a.map((function(e){return Object(v.jsxs)("tr",{class:"table-success",children:[Object(v.jsx)("td",{children:e.jobTitle}),Object(v.jsx)("td",{children:e.jobType}),Object(v.jsx)("td",{children:e.salary}),Object(v.jsx)("td",{children:e.city}),Object(v.jsx)("td",{children:e.vacancy}),Object(v.jsx)("td",{children:e.skill})]})})):Object(v.jsx)("div",{className:"text-center m-auto",children:j?Object(v.jsx)("h4",{className:"mt-1 text-brand",children:"You haven't placed any Job yet. Please Post and come to this page."}):Object(v.jsx)("div",{class:"spinner-border text-brand",style:{width:"2rem",height:"2rem",marginTop:"30%",marginLeft:"120%"},role:"status"})})})]}),Object(v.jsxs)("h2",{className:"fw-bold mt-5 text-center",style:{color:"black"},children:["Total Your Job Posted: ",Object(v.jsx)("span",{className:"text-danger",children:a.length})]})]})},G=a(614),V=a(618),H=a(617),_=a(615),K=a(616);Object(b.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function X(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)([]),l=Object(s.a)(i,2),o=l[0],j=l[1];return Object(c.useEffect)((function(){fetch("https://jobmarketportal.herokuapp.com/allcandidate").then((function(e){return e.json()})).then((function(e){r(!0),j(e)}))})),Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)("h1",{children:"Recent Job Post"}),Object(v.jsxs)(G.a,{size:"small",children:[Object(v.jsx)(_.a,{children:Object(v.jsxs)(K.a,{children:[Object(v.jsx)(H.a,{children:"Apply Date"}),Object(v.jsx)(H.a,{children:"Job Title"}),Object(v.jsx)(H.a,{children:"Name"}),Object(v.jsx)(H.a,{children:"Resume"})]})}),Object(v.jsx)(V.a,{children:a&&o.length>0?o.map((function(e){return Object(v.jsxs)(K.a,{children:[Object(v.jsx)(H.a,{children:new Date(e.applyDate).toDateString("dd/MM/yyyy")}),Object(v.jsx)(H.a,{children:e.position}),Object(v.jsx)(H.a,{children:e.name}),Object(v.jsx)(H.a,{children:Object(v.jsx)(D.a,{variant:"contained",color:"primary",children:"Resume Download"})})]},e._id)})):Object(v.jsx)("div",{className:"text-center m-auto",children:a?Object(v.jsx)("h4",{className:"mt-1 text-brand",children:" No one applied yet."}):Object(v.jsx)("div",{class:"spinner-border text-brand",style:{width:"2rem",height:"2rem",marginTop:"30%",marginLeft:"120%"},role:"status"})})})]})]})}var Q=function(){var e=Object(c.useContext)(ge),t=Object(s.a)(e,2),a=t[0];t[1];return Object(v.jsxs)("div",{className:"",children:[Object(v.jsxs)("h5",{className:"text-center dashboardWel p-2",children:["Welcome Admin Dashboard ",Object(v.jsx)("span",{className:"text-brand",children:a.displayName})]}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:" d-flex row",children:Object(v.jsxs)(l.a,{children:[Object(v.jsxs)("div",{className:"sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4",style:{height:"100vh"},children:[Object(v.jsxs)("ul",{className:"list-unstyled",children:[Object(v.jsx)("li",{children:Object(v.jsxs)(l.b,{to:"/dashboard/employerdashboard",className:"text-white",children:[Object(v.jsx)(I.a,{icon:q.b})," ",Object(v.jsx)("span",{children:"Dashboard"})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)(l.b,{to:"/employer/postjob",className:"text-white",children:[Object(v.jsx)(I.a,{icon:q.a})," ",Object(v.jsx)("span",{children:"Posted Jobs"})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)(l.b,{to:"/employer/allcandidate",className:"text-white",children:[Object(v.jsx)(I.a,{icon:q.c})," ",Object(v.jsx)("span",{children:"Apply Candidate"})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)(l.b,{to:"/employer/addemployer",className:"text-white",children:[Object(v.jsx)(I.a,{icon:q.e})," ",Object(v.jsx)("span",{children:"Add Employer"})]})})]}),Object(v.jsx)("div",{children:Object(v.jsxs)(l.b,{to:"/",className:"text-white",children:[Object(v.jsx)(I.a,{icon:q.d})," ",Object(v.jsx)("span",{children:"Logout"})]})})]}),Object(v.jsx)("div",{className:"col-md-10",children:Object(v.jsxs)(o.d,{children:[Object(v.jsx)(o.b,{path:"/employer/postjob",children:Object(v.jsx)(B,{})}),Object(v.jsx)(o.b,{path:"/employer/allcandidate",children:Object(v.jsx)(X,{})}),Object(v.jsx)(o.b,{path:"/employer/addemployer",children:Object(v.jsx)(U,{})}),Object(v.jsx)(o.b,{exact:!0,path:"/"}),Object(v.jsx)(o.b,{path:"/dashboard/employerdashboard",children:Object(v.jsx)(Y,{})})]})})]})})})]})};var Z=Object(b.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function $(){Z();var e=Object(c.useContext)(ge),t=Object(s.a)(e,2),a=t[0],r=(t[1],Object(c.useState)([])),i=Object(s.a)(r,2),l=i[0],o=i[1];return Object(c.useEffect)((function(){var e="https://jobmarketportal.herokuapp.com/appliedcandidate?email="+a.email;fetch(e).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]),Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)("h1",{children:"Recent Your Job Applied"}),Object(v.jsxs)(G.a,{size:"small",children:[Object(v.jsx)(_.a,{children:Object(v.jsxs)(K.a,{children:[Object(v.jsx)(H.a,{children:"Apply Date"}),Object(v.jsx)(H.a,{children:"Job Title"}),Object(v.jsx)(H.a,{children:"Name"}),Object(v.jsx)(H.a,{children:"Email"})]})}),Object(v.jsx)(V.a,{children:l.map((function(e){return Object(v.jsxs)(K.a,{children:[Object(v.jsx)(H.a,{children:new Date(e.applyDate).toDateString("dd/MM/yyyy")}),Object(v.jsx)(H.a,{children:e.position}),Object(v.jsx)(H.a,{children:e.name}),Object(v.jsx)(H.a,{children:e.email})]},e._id)}))})]})]})}var ee=function(){var e=Object(c.useContext)(ge),t=Object(s.a)(e,2),a=t[0];t[1];return Object(v.jsxs)("div",{className:"",children:[Object(v.jsxs)("h5",{className:"text-center dashboardWel p-2",children:["Welcome Employee Dashboard ",Object(v.jsx)("span",{className:"text-brand",children:a.displayName})]}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:" d-flex row",children:Object(v.jsxs)(l.a,{children:[Object(v.jsxs)("div",{className:"sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4",style:{height:"100vh"},children:[Object(v.jsxs)("ul",{className:"list-unstyled",children:[Object(v.jsx)("li",{children:Object(v.jsxs)(l.b,{to:"/dashboard/employeedashboard",className:"text-white",children:[Object(v.jsx)(I.a,{icon:q.b})," ",Object(v.jsx)("span",{children:"Dashboard"})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)(l.b,{to:"/employee/appliedjobs",className:"text-white",children:[Object(v.jsx)(I.a,{icon:q.a})," ",Object(v.jsx)("span",{children:"Applied Jobs"})]})})]}),Object(v.jsx)("div",{children:Object(v.jsxs)(l.b,{to:"/",className:"text-white",children:[Object(v.jsx)(I.a,{icon:q.d})," ",Object(v.jsx)("span",{children:"Logout"})]})})]}),Object(v.jsx)("div",{className:"col-md-10",children:Object(v.jsxs)(o.d,{children:[Object(v.jsx)(o.b,{path:"/employee/appliedjobs",children:Object(v.jsx)($,{})}),Object(v.jsxs)(o.b,{exact:!0,path:"/",children:[Object(v.jsx)($,{}),"                                "]}),Object(v.jsx)(o.b,{path:"/dashboard/employeedashboard",children:Object(v.jsx)($,{})})]})})]})})})]})},te=function(){var e=Object(c.useContext)(ge),t=Object(s.a)(e,2),a=t[0],n=(t[1],Object(c.useState)([])),r=Object(s.a)(n,2),i=r[0],l=r[1];return Object(c.useEffect)((function(){var e="https://jobmarketportal.herokuapp.com/employer?email="+a.email;fetch(e).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),Object(v.jsx)("div",{children:i.email?Object(v.jsx)(Q,{}):Object(v.jsx)(ee,{})})},ae=(a(550),a(624)),ce=a(619),ne=a(622),re=a(77),ie=a.n(re);a(551);function se(){return Object(v.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(v.jsx)(ce.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var le=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function oe(){var e=Object(o.i)().id,t=le(),a=Object(c.useState)(""),n=Object(s.a)(a,2),r=(n[0],n[1]),i=Object(c.useState)(""),l=Object(s.a)(i,2),j=l[0],b=l[1],d=Object(c.useState)(""),h=Object(s.a)(d,2),u=h[0],O=h[1],p=Object(c.useState)(null),x=Object(s.a)(p,2),f=x[0],g=x[1],y=new Date,N=Object(o.g)(),C=Object(c.useContext)(ge),w=Object(s.a)(C,2),S=w[0];w[1];return Object(v.jsxs)(z.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(R.a,{}),Object(v.jsxs)("div",{className:t.paper,children:[Object(v.jsx)(ae.a,{className:t.avatar,children:Object(v.jsx)(ie.a,{})}),Object(v.jsx)(m.a,{component:"h1",variant:"h5",children:"Apply Job Form"}),Object(v.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=new FormData;a.append("name",j),a.append("email",S.email),a.append("applyDate",y),a.append("number",u),a.append("position",e),a.append("file",f),fetch("https://jobmarketportal.herokuapp.com/applyjob",{method:"POST",body:a}).then((function(e){return e.json()})).then((function(e){e&&N.push("/dashboard")})).catch((function(e){console.error(e)}))},className:t.form,noValidate:!0,children:[Object(v.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",autoFocus:!0,onChange:function(e){return b(e.target.value)}}),Object(v.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",value:S.email,label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return r(e.target.value)}}),Object(v.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"number",label:"Phone Number",type:"number",id:"number",autoComplete:"current-number",onChange:function(e){return O(e.target.value)}}),Object(v.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"file",label:"Upload Resume",type:"file",id:"file",autoComplete:"current-file",onChange:function(e){return g(e.target.files[0])}}),Object(v.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Apply Now"})]})]}),Object(v.jsx)(ne.a,{mt:8,children:Object(v.jsx)(se,{})})]})}var je=a(620),be=a(623),de=a(46),he=(a(210),{apiKey:"AIzaSyAFXuO1D6JbrwnkykGpI7dGu3fbU5B0Igw",authDomain:"jobmarketsite-01.firebaseapp.com",projectId:"jobmarketsite-01",storageBucket:"jobmarketsite-01.appspot.com",messagingSenderId:"852805141774",appId:"1:852805141774:web:6ef6cbd2ba17ddda33435f"});function ue(){return Object(v.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",(new Date).getFullYear(),"."]})}de.a.apps.length?de.a.app():de.a.initializeApp(he);var me=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Oe(){var e=Object(c.useContext)(ge),t=Object(s.a)(e,2),a=(t[0],t[1]),n=Object(o.g)(),r=(Object(o.h)().state||{from:{pathname:"/"}}).from,i=me(),j=Object(c.useState)(""),b=Object(s.a)(j,2),d=b[0],h=b[1],u=Object(c.useState)(""),O=Object(s.a)(u,2),p=O[0],x=O[1],f=Object(c.useState)(""),g=Object(s.a)(f,2);g[0],g[1];return Object(v.jsxs)(z.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(R.a,{}),Object(v.jsxs)("div",{className:i.paper,children:[Object(v.jsx)(ae.a,{className:i.avatar,children:Object(v.jsx)(ie.a,{})}),Object(v.jsx)(m.a,{component:"h1",variant:"h5",children:"Log In"}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),de.a.auth().signInWithEmailAndPassword(d,p).then((function(e){var t=e.user;a(t),n.replace(r)})).catch((function(e){e.code;e.message&&alert("Incorrect Email Address, Please Try again!")}))},className:i.form,noValidate:!0,children:[Object(v.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",onChange:function(e){return h(e.target.value)}}),Object(v.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return x(e.target.value)}}),Object(v.jsx)(je.a,{control:Object(v.jsx)(be.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(v.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.submit,children:"Sign In"}),Object(v.jsxs)(w.a,{container:!0,children:[Object(v.jsx)(w.a,{item:!0,xs:!0,children:Object(v.jsx)(l.b,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(v.jsx)(w.a,{item:!0,children:Object(v.jsx)(l.b,{to:"/registration",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(v.jsx)(ne.a,{mt:8,children:Object(v.jsx)(ue,{})})]})}function pe(){return Object(v.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",(new Date).getFullYear(),"."]})}de.a.apps.length?de.a.app():de.a.initializeApp(he);var xe=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function fe(){var e=xe(),t=Object(c.useState)(""),a=Object(s.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(""),j=Object(s.a)(i,2),b=(j[0],j[1]),d=Object(c.useState)(""),h=Object(s.a)(d,2),u=h[0],O=h[1],p=Object(c.useContext)(ge),x=Object(s.a)(p,2),f=(x[0],x[1]),g=Object(o.g)(),y=(Object(o.h)().state||{from:{pathname:"/"}}).from;return Object(v.jsxs)(z.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(R.a,{}),Object(v.jsxs)("div",{className:e.paper,children:[Object(v.jsx)(ae.a,{className:e.avatar,children:Object(v.jsx)(ie.a,{})}),Object(v.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),de.a.auth().createUserWithEmailAndPassword(n,u).then((function(e){var t=e.user;f(t),g.replace(y),console.log(t)})).catch((function(e){var t=e.code,a=e.message;console.log(t,a)}))},className:e.form,noValidate:!0,children:[Object(v.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",autoFocus:!0,onChange:function(e){return b(e.target.value)}}),Object(v.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoFocus:!0,onChange:function(e){return r(e.target.value)}}),Object(v.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return O(e.target.value)}}),Object(v.jsx)(je.a,{control:Object(v.jsx)(be.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(v.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(v.jsx)(w.a,{container:!0,children:Object(v.jsx)(w.a,{item:!0,children:Object(v.jsx)(l.b,{to:"/login",variant:"body2",children:"LogIn"})})})]})]}),Object(v.jsx)(ne.a,{mt:8,children:Object(v.jsx)(pe,{})})]})}var ge=Object(c.createContext)(),ye=function(){var e=Object(c.useState)({}),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(v.jsx)(ge.Provider,{value:[a,n],children:Object(v.jsx)(l.a,{children:Object(v.jsxs)(o.d,{children:[Object(v.jsx)(o.b,{exact:!0,path:"/",children:Object(v.jsx)(P,{})}),Object(v.jsx)(o.b,{path:"/home",children:Object(v.jsx)(P,{})}),Object(v.jsx)(F,{path:"/dashboard",children:Object(v.jsx)(te,{})}),Object(v.jsx)(F,{path:"/applyjob/:id",children:Object(v.jsx)(oe,{})}),Object(v.jsx)(F,{path:"/jobPost",children:Object(v.jsx)(B,{})}),Object(v.jsx)(o.b,{path:"/login",children:Object(v.jsx)(Oe,{})}),Object(v.jsx)(o.b,{path:"/registration",children:Object(v.jsx)(fe,{})})]})})})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,627)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(ye,{})}),document.getElementById("root")),ve()}},[[570,1,2]]]);
//# sourceMappingURL=main.f3179d03.chunk.js.map