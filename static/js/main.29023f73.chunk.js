(this.webpackJsonpplacement_socket=this.webpackJsonpplacement_socket||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},38:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),o=a.n(r),c=(a(38),a(39),a(15)),s=(a(40),a(1)),i=a(2),m=a(4),d=a(3),p=a(6),u=a(5),h=a(8),v=a.n(h),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a.save_to_dynamo=a.save_to_dynamo.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"save_to_dynamo",value:function(){var e=document.getElementById("branch"),t=e.options[e.selectedIndex].text,a=document.getElementById("course"),n=a.options[a.selectedIndex].text,l={firstname:document.getElementById("fname").value,lastname:document.getElementById("lname").value,email:document.getElementById("email").value,mobile:document.getElementById("mobile").value,sapid:document.getElementById("sapid").value,rollNo:document.getElementById("rollno").value,sex:document.getElementById("sex").value,course:n,branch:t,address:document.getElementById("address").value,higherSecondaryBoard:document.getElementById("higherSecondaryBoard").value,higherSecondaryYear:document.getElementById("higherSecondaryYear").value,higherSecondaryPercentage:document.getElementById("higherSecondaryPercentage").value,seniorSecondaryBoard:document.getElementById("seniorSecondaryBoard").value,seniorSecondaryYear:document.getElementById("seniorSecondaryYear").value,seniorSecondaryPercentage:document.getElementById("seniorSecondaryPercentage").value,cgpa:document.getElementById("cgpa").value,totalBacklogs:document.getElementById("totalBacklogs").value,standingBacklogs:document.getElementById("standingBacklogs").value};console.log("data :",l),v()({url:"https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/registerStudent",method:"POST",data:l}).then((function(e){console.log("resonse_data_dynamo :",e.data),alert("User Added")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-5 relative align-self-center"},l.a.createElement("h2",{className:"mb-4 mt-0 text-center"},"Sign Up"),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"fname",className:"form-control pb_height-50 reverse",placeholder:"First name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"lname",className:"form-control pb_height-50 reverse",placeholder:"Last name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"email",className:"form-control pb_height-50 reverse",placeholder:"Email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"mobile",className:"form-control pb_height-50 reverse",placeholder:"Mobile number"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"sapid",className:"form-control pb_height-50 reverse",placeholder:"SAP ID"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"rollno",className:"form-control pb_height-50 reverse",placeholder:"Roll number"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"sex",className:"form-control pb_height-50 reverse",placeholder:"Sex"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"address",className:"form-control pb_height-50 reverse",placeholder:"Address"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"higherSecondaryBoard",className:"form-control pb_height-50 reverse",placeholder:"10th Board"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"higherSecondaryYear",className:"form-control pb_height-50 reverse",placeholder:"Passing year"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"higherSecondaryPercentage",className:"form-control pb_height-50 reverse",placeholder:"10th percentage"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"seniorSecondaryBoard",className:"form-control pb_height-50 reverse",placeholder:"12th Board"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"seniorSecondaryYear",className:"form-control pb_height-50 reverse",placeholder:"Passing year"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"seniorSecondaryPercentage",className:"form-control pb_height-50 reverse",placeholder:"12th percentage"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"pb_select-wrap"},l.a.createElement("select",{id:"course",className:"form-control pb_height-50 reverse"},l.a.createElement("option",{value:"",defaultValue:!0},"Course"),l.a.createElement("option",{value:""},"Btech"),l.a.createElement("option",{value:""},"BSC"),l.a.createElement("option",{value:""},"BCA")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"pb_select-wrap"},l.a.createElement("select",{id:"branch",className:"form-control pb_height-50 reverse"},l.a.createElement("option",{value:"",defaultValue:!0},"Branch"),l.a.createElement("option",{value:""},"OSOS"),l.a.createElement("option",{value:""},"OGI"),l.a.createElement("option",{value:""},"CSF")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"cgpa",className:"form-control pb_height-50 reverse",placeholder:"Current CGPA"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"standingBacklogs",className:"form-control pb_height-50 reverse",placeholder:"Standing backlogs"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"totalBacklogs",className:"form-control pb_height-50 reverse",placeholder:"Total backlogs"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",className:"btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue",value:"Sign Up",onClick:this.save_to_dynamo}))))}}]),t}(l.a.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"pb_footer bg-light",role:"contentinfo"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col"},l.a.createElement("ul",{className:"list-inline"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#",className:"p-2"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#",className:"p-2"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#",className:"p-2"},l.a.createElement("i",{className:"fa fa-linkedin"})))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"pb_font-14"},"\xa9 2019. All Rights Reserved. ",l.a.createElement("br",null))))))}}]),t}(l.a.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a.logoutUser=a.logoutUser.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"logoutUser",value:function(){console.log("Logout"),localStorage.removeItem("loggedUser"),window.location.reload()}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light scrolled awake",id:"pb-navbar"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"index.html"},"Placement Socket"),l.a.createElement("button",{className:"navbar-toggler ml-auto",type:"button","data-toggle":"collapse","data-target":"#probootstrap-navbar","aria-controls":"probootstrap-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",null,l.a.createElement("i",{className:"ion-navicon"}))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"probootstrap-navbar"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#section-home"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#section-features"},"Features")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#section-reviews"},"Reviews")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#section-pricing"},"Pricing")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#section-faq"},"FAQ")),l.a.createElement("li",{className:"nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0"},l.a.createElement("a",{className:"nav-link",href:"#",target:"_blank"},l.a.createElement("span",{className:"pb_rounded-4 px-4"},this.props.username))),l.a.createElement("li",{className:" nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0 error"},l.a.createElement("a",{className:"nav-link",href:"#",target:"_blank",onClick:this.logoutUser},l.a.createElement("span",{className:"pb_rounded-4 px-4 error"},"Logout")))))))}}]),t}(l.a.Component),E=a(13),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={loginUser:""},a.login_user=a.login_user.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"login_user",value:function(){var e=this,t=document.getElementById("pass").value,a={sapid:document.getElementById("sapid").value,password:t};console.log("login sent data",a),v()({url:"https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/loginUser",method:"POST",data:a}).then((function(a){console.log("fetch LOGIN :",a.data),a.data.password===t?(console.log("login success"),e.props.checkLogin(a.data,!0),e.setState((function(){return{loginUser:a.data}}))):console.log("no pass match")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-5 relative align-self-center"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"sapid",className:"form-control pb_height-50 reverse",placeholder:"Sap Id"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",id:"pass",className:"form-control pb_height-50 reverse",placeholder:"Password"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",className:"btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue",value:"Login",onClick:this.login_user}),l.a.createElement(c.b,{to:"/register-user"},l.a.createElement("input",{type:"button",className:"btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue",value:"Register"})))))}}]),t}(l.a.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={encodedPdf1:"",encodedPdf2:""},a.save_to_dynamo=a.save_to_dynamo.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"encodePdf",value:function(e){var t=document.getElementById(e).files[0];console.log("bcbcbccbcbc");var a=new FileReader,n="";a.addEventListener("load",function(t){n=t.target.result.replace(/data:application\/(pdf);base64,/,""),console.log(n),"pdf1"===e?this.setState({encodedPdf1:n}):"pdf2"===e&&this.setState({encodedPdf2:n}),e+="ch",document.getElementById(e).className="fas fa-check-circle"}.bind(this),!1),a.readAsDataURL(t)}},{key:"save_to_dynamo",value:function(){var e={companyName:document.getElementById("companyName").value,category:document.getElementById("category").value,jobProfile:document.getElementById("jobProfile").value,expectedSalary:document.getElementById("expectedSalary").value,studentsRequired:document.getElementById("studentsRequired").value,companyVisitingCampus:document.getElementById("companyVisitingCampus").value,criteriaOf10th:document.getElementById("criteriaOf10th").value,criteriaOf12th:document.getElementById("criteriaOf12th").value,collegeCriteria:document.getElementById("collegeCriteria").value,description:document.getElementById("description").value,encodedPdfList:[this.state.encodedPdf1,this.state.encodedPdf2]};console.log("data :",e),v()({url:"https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/addCompany",method:"POST",data:e}).then((function(e){console.log("resonse_data_dynamo :",e.data),alert("Company Added")}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-5 relative align-self-center"},l.a.createElement("h2",{className:"mb-4 mt-0 text-center"},"Add Company"),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"companyName",className:"form-control pb_height-50 reverse",placeholder:"Company name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"category",className:"form-control pb_height-50 reverse",placeholder:"Category"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"jobProfile",className:"form-control pb_height-50 reverse",placeholder:"Job profile"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"expectedSalary",className:"form-control pb_height-50 reverse",placeholder:"Expected Salary"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"studentsRequired",className:"form-control pb_height-50 reverse",placeholder:"Students Required"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"companyVisitingCampus",className:"form-control pb_height-50 reverse",placeholder:"Company visiting campus"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"criteriaOf10th",className:"form-control pb_height-50 reverse",placeholder:"Criteria of 10th"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"criteriaOf12th",className:"form-control pb_height-50 reverse",placeholder:"Criteria of 12th"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"collegeCriteria",className:"form-control pb_height-50 reverse",placeholder:"College criteria"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"description",className:"form-control pb_height-50 reverse",placeholder:"Description"})),l.a.createElement("div",{className:"form-group",id:"addFile"},l.a.createElement("div",null,l.a.createElement("input",{type:"file",id:"pdf1",className:"btn btn-dark btn-sm btn-block pb_btn-pill  btn-shadow-blue",onChange:function(){return e.encodePdf("pdf1")}}),l.a.createElement("i",{id:"pdf1ch",className:"fas fa-times-circle"})),l.a.createElement("div",null,l.a.createElement("input",{type:"file",id:"pdf2",className:"btn btn-dark btn-sm btn-block pb_btn-pill  btn-shadow-blue",onChange:function(){return e.encodePdf("pdf2")}}),l.a.createElement("i",{id:"pdf2ch",className:"fas fa-times-circle"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",className:"btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue",value:"Add Company",onClick:this.save_to_dynamo}))))}}]),t}(l.a.Component),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a.handleCompanyClicked=a.handleCompanyClicked.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleCompanyClicked",value:function(e){e.preventDefault();var t=this.props.optionText.id;this.props.handleCompanyClicked(t)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-lg-11 col-md- col-sm-11",style:{border:"3px solid black"}},l.a.createElement("a",{href:"#","data-toggle":"modal","data-target":"#companyModal",onClick:this.handleCompanyClicked},l.a.createElement("div",{className:"media d-block pb_feature-v1 text-left"},l.a.createElement("div",{className:"pb_icon"},l.a.createElement("i",{className:"ion-ios-bookmarks-outline pb_icon-gradient"})),l.a.createElement("div",{className:"media-body"},l.a.createElement("h6",{className:"mt-0 mb-3 heading",style:{color:"black"}},l.a.createElement("b",null,this.props.optionText.companyName)),l.a.createElement("p",{className:"text-sans-serif"},this.props.optionText.description))))),l.a.createElement("br",null))}}]),t}(l.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-12 relative"},l.a.createElement("h2",{className:"mb-4 mt-0 text-center"},"Company Details"),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Company Name : ",this.props.optionText.companyName),l.a.createElement("input",{type:"text",id:"companyName",className:"form-control pb_height-50 reverse",value:this.props.optionText.companyName,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Category : "),l.a.createElement("input",{type:"text",id:"category",className:"form-control pb_height-50 reverse",value:this.props.optionText.category,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Job Profile : "),l.a.createElement("input",{type:"text",id:"jobProfile",className:"form-control pb_height-50 reverse",value:this.props.optionText.jobProfile,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Expected Salary : "),l.a.createElement("input",{type:"text",id:"expectedSalary",className:"form-control pb_height-50 reverse",value:this.props.optionText.expectedSalary,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Students Required : "),l.a.createElement("input",{type:"text",id:"studentsRequired",className:"form-control pb_height-50 reverse",value:this.props.optionText.studentsRequired,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Company visiting campus : "),l.a.createElement("input",{type:"text",id:"companyVisitingCampus",className:"form-control pb_height-50 reverse",value:this.props.optionText.companyVisitingCampus,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"10th Passing Criteria : "),l.a.createElement("input",{type:"text",id:"criteriaOf10th",className:"form-control pb_height-50 reverse",value:this.props.optionText.criteriaOf10th,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"12th passing Criteria : "),l.a.createElement("input",{type:"text",id:"criteriaOf12th",className:"form-control pb_height-50 reverse",value:this.props.optionText.criteriaOf12th,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Collage Passing Criteria : "),l.a.createElement("input",{type:"text",id:"collegeCriteria",className:"form-control pb_height-50 reverse",value:this.props.optionText.collegeCriteria,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Description : "),l.a.createElement("textarea",{rows:"5",type:"text",id:"description",className:"form-control reverse",value:this.props.optionText.description,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"button",className:"btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue",value:"Edit Details"}))))}}]),t}(l.a.Component),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a.handlestudentClicked=a.handlestudentClicked.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(){return{studentDetails:e.props.optionText}}))}},{key:"handlestudentClicked",value:function(e){var t=this.props.optionText.id;this.props.handlestudentClicked(t)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-lg-11 col-md- col-sm-11",style:{border:"3px solid black"}},l.a.createElement("a",{href:"#","data-toggle":"modal","data-target":"#studentModal",onClick:this.handlestudentClicked},l.a.createElement("div",{className:"media d-block pb_feature-v1 text-left"},l.a.createElement("div",{className:"pb_icon"},l.a.createElement("i",{className:"ion-ios-bookmarks-outline pb_icon-gradient"})),l.a.createElement("div",{className:"media-body"},l.a.createElement("h6",{className:"mt-0 mb-3 heading",style:{color:"black"}},l.a.createElement("b",null,this.props.optionText.firstname+" "+this.props.optionText.lastname)),l.a.createElement("p",{className:"text-sans-serif"},this.props.optionText.sapid+" - "+this.props.optionText.cgpa))))),l.a.createElement("br",null))}}]),t}(l.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-12 relative align-self-center"},l.a.createElement("h2",{className:"mb-4 mt-0 text-center"},"Student Details"),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Student Name : "),l.a.createElement("input",{type:"text",id:"fname",className:"form-control pb_height-50 reverse",value:this.props.optionText.firstname+" "+this.props.optionText.lastname,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Email : "),l.a.createElement("input",{type:"text",id:"email",className:"form-control pb_height-50 reverse",value:this.props.optionText.email||"",disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Mobile no. : "),l.a.createElement("input",{type:"text",id:"email2",className:"form-control pb_height-50 reverse",value:this.props.optionText.mobile,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"SAP ID : "),l.a.createElement("input",{type:"text",id:"mobile",className:"form-control pb_height-50 reverse",value:this.props.optionText.sapid,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Roll Number : "),l.a.createElement("input",{type:"text",id:"sapid",className:"form-control pb_height-50 reverse",value:this.props.optionText.rollNo,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Sex : "),l.a.createElement("input",{type:"text",id:"rollno",className:"form-control pb_height-50 reverse",value:this.props.optionText.sex,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Address : "),l.a.createElement("input",{type:"text",id:"sex",className:"form-control pb_height-50 reverse",value:this.props.optionText.address,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Higher Secondary Board : "),l.a.createElement("input",{type:"text",id:"address",className:"form-control pb_height-50 reverse",value:this.props.optionText.higherSecondaryBoard,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Higher Secondary Year : "),l.a.createElement("input",{type:"text",id:"higherSecondaryBoard",className:"form-control pb_height-50 reverse",value:this.props.optionText.higherSecondaryYear,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Higher Secondary Percentage : "),l.a.createElement("input",{type:"text",id:"higherSecondaryYear",className:"form-control pb_height-50 reverse",value:this.props.optionText.higherSecondaryPercentage,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Senior Secondary Board : "),l.a.createElement("input",{type:"text",id:"higherSecondaryPercentage",className:"form-control pb_height-50 reverse",value:this.props.optionText.seniorSecondaryBoard,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Senior Secondary Year : "),l.a.createElement("input",{type:"text",id:"seniorSecondaryBoard",className:"form-control pb_height-50 reverse",value:this.props.optionText.seniorSecondaryYear,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Senior Secondary Percentage : "),l.a.createElement("input",{type:"text",id:"seniorSecondaryYear",className:"form-control pb_height-50 reverse",value:this.props.optionText.seniorSecondaryPercentage,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Course : "),l.a.createElement("input",{type:"text",id:"seniorSecondaryPercentage",className:"form-control pb_height-50 reverse",value:this.props.optionText.course,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Branch : "),l.a.createElement("input",{type:"text",id:"seniorSecondaryPercentage",className:"form-control pb_height-50 reverse",value:this.props.optionText.branch,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Collage CGPA : "),l.a.createElement("input",{type:"text",id:"cgpa",className:"form-control pb_height-50 reverse",value:this.props.optionText.cgpa,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Standing Backlogs : "),l.a.createElement("input",{type:"text",id:"standingBacklogs",className:"form-control pb_height-50 reverse",value:this.props.optionText.standingBacklogs,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",{className:"text-left"},"Total Backlogs : "),l.a.createElement("input",{type:"text",id:"totalBacklogs",className:"form-control pb_height-50 reverse",value:this.props.optionText.totalBacklogs,disabled:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"button",className:"btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue",value:"Edit Details"}))))}}]),t}(l.a.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={resdata:[],clickId:"",company:""},a.handleCompanyClicked=a.handleCompanyClicked.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetch_all_Companies()}},{key:"fetch_all_Companies",value:function(){var e=this;this.fetch_from_dynamo("all").then((function(t){console.log("fetch_all_Companies :",t),e.setState({resdata:t})}))}},{key:"fetch_from_dynamo",value:function(e){return v()({url:"https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/getCompany/"+e,method:"GET",crossDomain:!0,responseType:"json"}).then((function(e){return e.data}))}},{key:"handleCompanyClicked",value:function(e){var t=this.state.resdata.filter((function(t){return t.id===e}));this.setState((function(){return{clickId:e,company:t[0]}})),console.log("this.state.company : ",this.state.company[0])}},{key:"render",value:function(){var e=this,t=this.state.company;return l.a.createElement("div",null,l.a.createElement("h2",{className:"mb-4 mt-0 text-center"},"Company List"),this.state.resdata.map((function(t){return l.a.createElement(x,{key:t.id,optionText:t,handleCompanyClicked:e.handleCompanyClicked})})),l.a.createElement("div",{className:"modal fade",id:"companyModal",role:"dialog"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement(k,{optionText:t})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"))))))}}]),t}(l.a.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={studentDetails:""},a.handlestudentClicked=a.handlestudentClicked.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"handlestudentClicked",value:function(e){console.log("id",e)}},{key:"render",value:function(){var e=this.props.loggedUser;return l.a.createElement("div",null,e&&l.a.createElement(_,{key:e.id,optionText:e,handlestudentClicked:this.handlestudentClicked}),l.a.createElement(O,null),l.a.createElement("div",{className:"modal fade",id:"studentModal",role:"dialog"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),l.a.createElement("div",{className:"modal-body"},e&&l.a.createElement(C,{key:e.id,optionText:e})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal",onClick:this.closeStudentDetail},"Close"))))))}}]),t}(l.a.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={resdata:[],clickId:"",student:""},a.handlestudentClicked=a.handlestudentClicked.bind(Object(p.a)(a)),a.closeStudentDetail=a.closeStudentDetail.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetch_all_Students()}},{key:"fetch_all_Students",value:function(){var e=this;this.fetch_from_dynamo("all").then((function(t){console.log("fetch_all_Students :",t),e.setState({resdata:t})}))}},{key:"fetch_from_dynamo",value:function(e){return v()({url:"https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/getStudent/"+e,method:"GET",crossDomain:!0,responseType:"json"}).then((function(e){return console.log("fetch_from_dynamo :",e.data),e.data}))}},{key:"handlestudentClicked",value:function(e){var t=this.state.resdata.filter((function(t){return t.id===e}));this.setState((function(){return{clickId:e,student:t[0]}})),console.log("this.state.student : ",this.state.student[0])}},{key:"closeStudentDetail",value:function(){this.setState((function(){return{clickId:"",student:[]}}))}},{key:"render",value:function(){var e=this,t=this.state.student;return l.a.createElement("div",null,l.a.createElement("h2",{className:"mb-4 mt-0 text-center"},"Student List"),this.state.resdata.map((function(t){return l.a.createElement(_,{key:t.id,optionText:t,handlestudentClicked:e.handlestudentClicked})})),l.a.createElement("div",{className:"modal fade",id:"studentModal",role:"dialog"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement(C,{key:t.id,optionText:t})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal",onClick:this.closeStudentDetail},"Close"))))))}}]),t}(l.a.Component),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement(j,null),l.a.createElement(N,null),"AdminDashboard")}}]),t}(l.a.Component),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={loginStatus:!1,loggedUser:""},a.checkLogin=a.checkLogin.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("loggedUser"),t=JSON.parse(e);t&&this.setState((function(){return{loggedUser:t,loginStatus:!0}}))}catch(a){}}},{key:"componentDidUpdate",value:function(e,t){var a=JSON.stringify(this.state.loggedUser);localStorage.setItem("loggedUser",a)}},{key:"checkLogin",value:function(e,t){!0===t&&this.setState((function(){return{loginStatus:!0,loggedUser:e}}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,{username:this.state.loggedUser.id}),this.state.loginStatus?"student"===this.state.loggedUser.role?l.a.createElement(S,{loggedUser:this.state.loggedUser}):l.a.createElement(B,{loggedUser:this.state.loggedUser}):l.a.createElement(y,{checkLogin:this.checkLogin}),l.a.createElement(E.a,{exact:!0,path:"/register-user",component:g}),l.a.createElement(b,null),"s")}}]),t}(l.a.Component);var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(c.a,null,l.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.29023f73.chunk.js.map