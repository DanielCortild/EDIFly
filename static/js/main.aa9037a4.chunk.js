(this.webpackJsonpEDIfly=this.webpackJsonpEDIfly||[]).push([[0],{39:function(e,a,t){e.exports={carouselStyle:"S1_Header_carouselStyle__gveeo"}},45:function(e,a,t){e.exports={bubble:"S7_Testimonials_bubble__1MQVR"}},47:function(e,a,t){e.exports=t(95)},54:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(18),c=t.n(l),s=(t(52),t(53),t(54),t(10)),o=t.n(s),i=t(15),m=t(14),u=t(9),d=t.n(u),p=t(19);function E(){return r.a.useEffect((function(){var e=d()("#btnTop");d()(window).on("scroll",(function(){d()(window).scrollTop()>=window.innerHeight?e.show():e.hide()})),e.click((function(){d()(window).scrollTop(0)}))}),[]),r.a.createElement("div",{id:"btnTop",style:g},r.a.createElement(p.a,{style:f}))}var g={display:"none",cursor:"pointer",backgroundColor:"#FF2434",color:"#FFFFFF",border:"none",outline:"none",position:"fixed",bottom:"24px",right:"45px",height:"50px",width:"50px",borderRadius:"30px",zIndex:"100",textAlign:"center"},f={marginTop:"11px",height:"24px",width:"24px"},h=t(4),b=t.n(h),v=t(96),y=t(97),N=t(98),x=t(99),w=t(100),k=t(101),j=t(102),S=["description","team","download","users","contact "],O=function(){var e=r.a.useState("navbar-transparent"),a=Object(m.a)(e,2),t=a[0],n=a[1],l=r.a.useState(!1),c=Object(m.a)(l,2),s=c[0],o=c[1],i=r.a.useState("header"),u=Object(m.a)(i,2),p=u[0],E=u[1],g=function(e,a){return{color:""===e?p===a?"#000000":"#66615B":window.innerWidth>=992?"#FFFFFF":"#000000",fontWeight:"600"}};return r.a.useEffect((function(){d()(document).scroll((function(){var e=d()(document).scrollTop(),a=e<window.innerHeight-100?"navbar-transparent":"";n(a),d()("section").each((function(){var a=d()(this);a.position().top<=e&&a.position().top+a.outerHeight()>e&&E(a.attr("id"))}))}))}),[]),r.a.createElement(v.a,{className:b()("fixed-top",t),expand:"lg",id:"navbar"},r.a.createElement(y.a,null,r.a.createElement("div",{className:"navbar-translate"},r.a.createElement(N.a,{href:"#"},"EDIfly"),r.a.createElement("button",{className:b()("navbar-toggle navbar-toggler float-right",{toggled:s}),onClick:function(){o(!s),document.documentElement.classList.toggle("nav-open")}},r.a.createElement("span",{className:"navbar-toggler-bar bar1"}),r.a.createElement("span",{className:"navbar-toggler-bar bar2"}),r.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),r.a.createElement(x.a,{className:"justify-content-end",navbar:!0,isOpen:s},r.a.createElement(w.a,{navbar:!0},S.map((function(e){return r.a.createElement(k.a,null,r.a.createElement(j.a,null,r.a.createElement("a",{href:"/#".concat(e),style:g(t,e)},e)))}))))))},C=t(113),F=t(21),_=t(39),T=t.n(_),I=[{src:"images/airport.jpg",key:"1"},{src:"images/cargo.jpg",key:"2"}],D=function(e){var a=e.data.message;return r.a.useEffect((function(){d()("#go_down").click((function(){return d()(document).scrollTop(window.innerHeight)}))})),r.a.createElement("section",{className:"page-header",id:"header"},r.a.createElement(C.a,{className:T.a.carouselStyle,items:I}),r.a.createElement("div",{className:"motto text-center position-absolute"},r.a.createElement("h1",{className:"font-weight-bold"},"EDIfly"),r.a.createElement("h3",null,a)),r.a.createElement("div",{className:"position-absolute motto",style:{bottom:"10px",cursor:"pointer"},id:"go_down"},r.a.createElement(F.a,{size:32})))},A=t(103),H=t(104),M=t(40),R=t(41),B=function(e){var a=e.icon,t=e.title,n=e.elements;return r.a.createElement(A.a,{xs:"12",sm:"12",md:"6",lg:"3"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"icon icon-info"},a),r.a.createElement("div",{className:"description"},r.a.createElement("h4",{className:"info-title"},t),r.a.createElement("ul",{className:"list-group mt-3 px-4 px-md-1"},n.map((function(e){return r.a.createElement("li",{className:"list-group-item text-muted",key:e},e)}))))))},L=function(){return r.a.createElement("section",{className:"section text-center",id:"description"},r.a.createElement(y.a,null,r.a.createElement(H.a,null,r.a.createElement(A.a,{className:"ml-auto mr-auto",xs:"12",sm:"10",md:"8"},r.a.createElement("h2",{className:"title"},"Your Plan B to Legacy Aviation Messaging"),r.a.createElement("h5",{className:"description text-muted"},"EDIfly is the signature tool of Innovative Software for seamless integrated messaging in aviation & logistics. Since 2010 this high-performance message broker enables airlines, ground handlers, system providers, trucking, authorities, etc. to securely exchange operational messages for free. EDIfly provides banking-like data security, superior rule-based message routing and monitoring based on IATA standards - up to 75% cost reduction."))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(H.a,null,r.a.createElement(B,{icon:r.a.createElement(M.a,null),title:"Message Broker",elements:["Highly Scalable from 10-2000 Messages per second","Standard Software and Hardware components","PCI/DSS and GDPR compliant","End-to-end encryption"]}),r.a.createElement(B,{icon:r.a.createElement(p.b,null),title:"75% Savings",elements:["Unlimited free exchanges between users of EDIfly","Lean infrastructure, high-availability switching without mainframe computing","Replace managed direct links through self-managed EDIfly recipient license","Rule-based routing, smart re-broadcast of messages"]}),r.a.createElement(B,{icon:r.a.createElement(F.b,null),title:"Management",elements:["Seamless integration based on existing IATA standards and addresses","Unique Concept to secure Data and Data Exchanges"]}),r.a.createElement(B,{icon:r.a.createElement(R.a,null),title:"Legacy Circuits",elements:["Free Type B, Type X Exchanges"]}))))},z=t(105),P=t(106),q=t(107),J=t(20),G=t.n(J),U=t(42),W=t.n(U),V="https://edifly.herokuapp.com/",X=function(){var e=Object(i.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("".concat(V,"/api"));case 2:return a=e.sent,t=a.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q={richard:{name:"Richard Stokes",role:"Chief Executive Officer",desc:"A veteran in technology and aviation Richard has hands-on experience in bringing software and services to the global aviation community. He held senior positions at SITA, ICL etc.",img_url:"images/richard.jpeg"},ingo:{name:"Ingo Roessler",role:"Chief Commercial Officer",desc:"Ingo has ample experience in the air cargo arena. Helped shaping the business by supporting innovative developments like Cargospot, Optiontown, Aviaso etc.. Held senior positions at Lufthansa, Chapman Freeborn, Etihad Airways, Royal Jordanian Airlines, etc..",img_url:"images/ingo.jpeg"},anders:{name:"Anders Jensen",role:"Chief Technology Officier",desc:"Strong academic background in communication protocols and modern cryptography. Closely involved in the development of 802.11 wireless standards as well as communication protocols for automatic data capture. Held senior positions at Symbol Technologies, Cargolux, CHAMP Cargo Systems."}},Y=function(e){var a=e.name,t=e.role,n=e.desc,l=e.img_url;return r.a.createElement(A.a,{md:"4"},r.a.createElement(z.a,{className:"card-profile card-plain"},r.a.createElement("div",{className:"card-avatar"},r.a.createElement("img",{alt:"...",src:l||"images/empty_profile.jpg"})),r.a.createElement(P.a,null,r.a.createElement("div",{className:"author"},r.a.createElement(q.a,{tag:"h4"},a),r.a.createElement("h6",{className:"card-category"},t)),r.a.createElement("p",{className:"card-description text-center"},n))))},K=function(){return r.a.createElement("section",{className:"section section-dark text-center",id:"team"},r.a.createElement(y.a,null,r.a.createElement("h2",{className:"title"},"Management Team"),r.a.createElement(H.a,null,Object.keys(Q).map((function(e){return r.a.createElement(Y,Object.assign({key:e},Q[e]))})))))},Z=t(114),$=t(108),ee=t(109),ae=function(e){var a=e.file,t=e.value,n=e.close,l=a||{},c=l.title,s=l.filename,o=l.file_url;return r.a.createElement("div",null,r.a.createElement(Z.a,{isOpen:t,toggle:n},r.a.createElement("div",{className:"modal-header"},r.a.createElement("button",{className:"close",onClick:n},r.a.createElement("span",null,"\xd7")),r.a.createElement("h5",{className:"modal-title text-center"},c)),r.a.createElement("div",{className:"modal-body"},"To be able to download this file, please indicate your email address",r.a.createElement($.a,{className:"mt-2",type:"email",placeholder:"example@email.com"})),r.a.createElement("div",{className:"modal-footer p-2"},r.a.createElement(ee.a,{color:"primary",onClick:function(){return function(e,a){var t=new XMLHttpRequest;t.open("GET",a,!0),t.responseType="blob",t.onload=function(a){return W()(a.target.response,e)},t.send()}(s,o)}},"Download")," ",r.a.createElement(ee.a,{color:"secondary",onClick:n},"Cancel"))))},te=function(e){var a=e.data.downloads,t=Object(n.useState)(),l=Object(m.a)(t,2),c=l[0],s=l[1],o=Object(n.useState)(),i=Object(m.a)(o,2),u=i[0],d=i[1];return r.a.createElement("section",{className:"section section-gray",id:"download"},r.a.createElement(ae,{value:u,close:function(){return d(!1)},whitepaper:c}),r.a.createElement(y.a,{className:"text-center"},r.a.createElement("h2",{className:"title mb-5"},"White Papers & Project Briefing"),r.a.createElement(H.a,null,a?Object.keys(a).map((function(e){var t=a[e];return r.a.createElement(A.a,{xs:12,md:4},r.a.createElement("h4",null,e)," ",r.a.createElement("br",null),t.map((function(e,a){return r.a.createElement("p",{onClick:function(){return s(e),void d(!0)},className:"text-left",key:a,style:{transform:"rotate(0)"}},r.a.createElement("a",{href:"#download",className:"stretched-link"},e.title))})))})):"")))},ne=function(e){var a=e.user,t=a.name,n=a.desc,l=a.link,c=a.img_url,s=e.close;return r.a.createElement(Z.a,{isOpen:!0,toggle:s},r.a.createElement("div",{className:"modal-header"},r.a.createElement("button",{"aria-label":"Close",className:"close",type:"button",onClick:s},r.a.createElement("span",{"aria-hidden":!0},"\xd7")),r.a.createElement("h5",{className:"modal-title text-center"},t)),r.a.createElement("div",{className:"modal-body"},r.a.createElement(H.a,null,r.a.createElement(A.a,{sm:6,lg:4},r.a.createElement("img",{src:c||"images/empty_user.jpeg",alt:t,className:"w-100 img-thumbnail"})),r.a.createElement(A.a,{sm:6,lg:8},n,r.a.createElement("br",null),r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Visit their webpage")))))},re=function(e){var a=e.data.users,t=r.a.useState(),n=Object(m.a)(t,2),l=n[0],c=n[1];return r.a.createElement("section",{className:"section text-center",id:"users"},r.a.createElement("h2",{className:"title"},"Our Current Users"),r.a.createElement(y.a,null,r.a.createElement(H.a,{className:"pl-4"},Object.keys(a).map((function(e){var t=a[e],n=t.name,l=t.img_url;return r.a.createElement(A.a,{xs:6,sm:4,md:3,lg:2,className:"p-4 mx-auto",key:e},r.a.createElement(H.a,{className:"img-thumbnail h-100 align-items-center"},r.a.createElement("img",{src:l||"images/empty_user.jpeg",alt:n,className:"w-100",onClick:function(){return c(e)},style:{cursor:"pointer"}})))})),l?r.a.createElement(ne,{user:a[l],close:function(){return c()}}):"")))},le=t(46),ce=t(110),se=t(111),oe=t(43),ie=t(112),me=function(e){var a=e.label,t=e.icon,n=Object(le.a)(e,["label","icon"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,a),t?r.a.createElement(ce.a,null,r.a.createElement(se.a,{addonType:"prepend"},r.a.createElement(oe.a,null,t)),r.a.createElement($.a,n)):r.a.createElement($.a,n))},ue=function(){return r.a.createElement("section",{className:"section section-light",id:"contact"},r.a.createElement("h2",{className:"text-center"},"Get in touch?"),r.a.createElement(y.a,{className:"px-3"},r.a.createElement(H.a,null,r.a.createElement(A.a,{className:"mx-auto",md:"8"},r.a.createElement(ie.a,{className:"contact-form"},r.a.createElement(H.a,null,r.a.createElement(A.a,{lg:"6"},r.a.createElement(me,{label:"Name",icon:"",placeholder:"Name",type:"text"})),r.a.createElement(A.a,{lg:"6"},r.a.createElement(me,{label:"Email",icon:"",placeholder:"email@mail.com",type:"email"}))),r.a.createElement(me,{label:"Message",placeholder:"Message",type:"textarea",rows:"4"}),r.a.createElement(H.a,{className:"justify-content-center"},r.a.createElement(A.a,{xs:"6",md:"4"},r.a.createElement(ee.a,{color:"success",size:"lg"},"Send Message"))))))))},de=t(44),pe=t.n(de),Ee=(t(94),t(45)),ge=t.n(Ee),fe={desktop:{breakpoint:{max:4e3,min:640},items:2},mobile:{breakpoint:{max:640,min:0},items:1}},he=function(e){var a=e.quote,t=e.author,n=e.from,l=e.date;return r.a.createElement("div",{className:ge.a.bubble},r.a.createElement("blockquote",null,a),r.a.createElement("div",null),r.a.createElement("cite",null," ",t,", ",r.a.createElement("strong",null,n))," (",l,")")},be=function(e){var a=e.data.testimonials;return r.a.createElement("section",{className:"section section-gray",id:"testimonials",style:{padding:"3em"}},r.a.createElement("h2",{className:"title text-center"},"Testimonials"),r.a.createElement(pe.a,{responsive:fe,showDots:!0,removeArrowOnDeviceType:["desktop","mobile"]},Object.keys(a).map((function(e){return r.a.createElement(he,a[e])}))))},ve=t(23),ye=function(){return r.a.useEffect((function(){d()(".social-media").mouseenter((function(){d()(this).css("color","#FFFFFF")})),d()(".social-media").mouseleave((function(){d()(this).css("color","#66615B")}))}),[]),r.a.createElement("footer",{className:"footer footer-black"},r.a.createElement("div",{className:"credits text-center"},r.a.createElement("div",{className:"float-left position-absolute ml-2 ml-md-4"},r.a.createElement("a",{href:"https://www.linkedin.com/company/innovative-software/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(ve.b,{size:24,className:"social-media mr-3",style:Ne})),r.a.createElement("a",{href:"/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(ve.a,{size:24,className:"social-media mr-3",style:Ne})),r.a.createElement("a",{href:"/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p.c,{size:22,className:"social-media mr-3",style:Ne}))),r.a.createElement("span",{className:"copyright"},"\xa9 2020, EDIfly")))},Ne={color:"#66615B",cursor:"pointer"},xe=function(){var e=r.a.useState(),a=Object(m.a)(e,2),t=a[0],n=a[1];return r.a.useEffect((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,X();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(D,{data:t}),r.a.createElement(L,{data:t}),r.a.createElement(te,{data:t}),r.a.createElement(K,{data:t}),r.a.createElement(re,{data:t}),r.a.createElement(be,{data:t}),r.a.createElement(ue,{data:t}),r.a.createElement(E,null),r.a.createElement(ye,null)):r.a.createElement(r.a.Fragment,null)};c.a.render(r.a.createElement(xe,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.aa9037a4.chunk.js.map