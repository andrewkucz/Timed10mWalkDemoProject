(window.webpackJsonpmyapp=window.webpackJsonpmyapp||[]).push([[0],{103:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),l=(a(103),a(12)),c=a(8),s=a(3),u=a(43),m=a(32),p=a(80),d=a(179),g=a(187),f=a(180),E=a(181),h=a(176),b=a(50),v=a(177),y=a(171),O=a(85),w=a.n(O),x=a(86),j=a.n(x),P=a(182),S=a(183),B=a(184),N=a(87),k=a.n(N),D=a(88),C=a.n(D),I=a(89),T=a.n(I),z=a(27),R=a.n(z),_=a(35),H=a(172),G=a(173),F=a(129),W=a(174),L=a(81),A=a.n(L),q=a(165),J=a(168),M=a(170),U=a(178),V=a(169),X=a(82),Y=a.n(X),$=a(185),K=a(188),Q=a(36),Z=a.n(Q);function ee(e){var t=e.trials;return r.a.createElement(q.a,{size:"small"},r.a.createElement(J.a,null,t.map((function(t,a){return r.a.createElement(V.a,{key:a},r.a.createElement(M.a,null,a+1),r.a.createElement(M.a,null,t,"s"),r.a.createElement(M.a,null,r.a.createElement(y.a,{"aria-label":"delete",onClick:function(){return e.onDeleteClick(a)}},r.a.createElement(Z.a,null))))}))))}var te=a(21),ae=a.n(te);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var oe=Object(p.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:re({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:350},rightIcon:{marginLeft:e.spacing(1)},button:{marginTop:e.spacing(2)},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},currentPatient:{fontWeight:700}}}));function ie(){var e=oe(),t=Object(s.a)(e.paper,e.fixedHeight),a=r.a.useState({start:0,stop:0}),n=Object(l.a)(a,2),o=n[0],i=n[1],c=r.a.useState(0),u=Object(l.a)(c,2),m=u[0],p=u[1],d=r.a.useState(!1),g=Object(l.a)(d,2),f=g[0],E=g[1],h=r.a.useState([]),y=Object(l.a)(h,2),O=y[0],w=y[1],x=r.a.useState([]),j=Object(l.a)(x,2),P=j[0],S=j[1],B=r.a.useState({name:"",records:[]}),N=Object(l.a)(B,2),k=N[0],D=N[1],C=r.a.useState(""),I=Object(l.a)(C,2),T=I[0],z=I[1],L=r.a.useState({open:!1,message:"",variant:""}),X=Object(l.a)(L,2),Q=X[0],Z=X[1];r.a.useEffect((function(){(function(){var e=Object(_.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.a.get("/api/patients");case 2:t=e.sent,S(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var te=r.a.useRef();function ne(){p(Date.now()-o.start)}return r.a.useEffect((function(){te.current=ne})),r.a.useEffect((function(){if(f){var e=setInterval((function(){console.log("ticking"),te.current()}),10);return function(){console.log("Clearing interval"),clearInterval(e)}}}),[f]),r.a.createElement(H.a,{maxWidth:"lg",className:e.container},r.a.createElement(G.a,{container:!0,spacing:3},r.a.createElement(G.a,{item:!0,xs:6,md:3,lg:3},r.a.createElement(F.a,{className:t},r.a.createElement(b.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Timer"),r.a.createElement(b.a,{variant:"h2",component:"h3",gutterBottom:!0},(f?(m/1e3).toFixed(2):(o.stop-o.start)/1e3)+"s"),r.a.createElement(W.a,{variant:"contained",color:f?"secondary":"primary",className:e.button,onClick:f?function(){return console.log("stop"),p(0),void(f&&(E(!1),i(re({},o,{stop:Date.now()}))))}:function(){return console.log("start"),E(!0),p(0),void i(re({},o,{start:Date.now()}))}},f?"Stop":"Start"),!f&&0!==o.stop&&0!==o.start&&r.a.createElement(W.a,{variant:"contained",className:e.button,onClick:function(){return function(){var e=(o.stop-o.start)/1e3;w(O.concat([e])),i({start:0,stop:0})}()}},"Log Trial",r.a.createElement(A.a,{className:e.rightIcon})))),r.a.createElement(G.a,{item:!0,xs:6,md:3,lg:3},r.a.createElement(F.a,{className:t},r.a.createElement(b.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Trials"),r.a.createElement(ee,{trials:O,onDeleteClick:function(e){console.log("deleting "+e),w(O.filter((function(t,a){return a!==e})))}}))),r.a.createElement(G.a,{item:!0,xs:6,md:3,lg:3},r.a.createElement(F.a,{className:t},r.a.createElement(b.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Notes"),r.a.createElement($.a,{id:"standard-multiline-flexible",placeholder:"Optional",multiline:!0,rows:"11",value:T,onChange:function(e){z(e.target.value)},className:e.textField}),O.length>0&&r.a.createElement(W.a,{variant:"contained",className:e.button,onClick:function(){return function(){var e={};k._id?(e.patient=k._id,e.trials=O.map((function(e){return{duration:e}})),e.note=T,ae.a.post("/api/records/add",e).then((function(e){console.log(e.data),z(""),w([]),Z({open:!0,variant:"success",message:"Successfully added record."}),D(re({},k,{records:[e.data].concat(k.records)}))})).catch((function(e){console.log(e),Z({open:!0,variant:"error",message:"Error creating record."})}))):Z({open:!0,variant:"error",message:"Please select a patient from below for this record."})}()}},"Save Test",r.a.createElement(Y.a,{className:e.rightIcon})))),r.a.createElement(G.a,{item:!0,xs:6,md:3,lg:3},r.a.createElement(F.a,{className:t},r.a.createElement(b.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Current Patient"),r.a.createElement(b.a,{className:e.currentPatient},k.name||"Please select a patient from below"),k.name&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"middle",className:e.divider}),r.a.createElement(b.a,null,"Previous Tests"),r.a.createElement(q.a,{size:"small"},r.a.createElement(U.a,null,r.a.createElement(V.a,null,r.a.createElement(M.a,null,"Date"),r.a.createElement(M.a,null,"Av. Time"))),r.a.createElement(J.a,null,k.records.map((function(e){var t=new Date(e.date),a="".concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear()),n=e.trials.reduce((function(e,t){return e+t.duration}),0)/e.trials.length;return r.a.createElement(V.a,{key:e._id},r.a.createElement(M.a,null,a),r.a.createElement(M.a,null,n.toFixed(1),"s"))}))))))),r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(F.a,{className:e.paper},r.a.createElement(b.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Patient Selection"),r.a.createElement(q.a,{size:"small"},r.a.createElement(U.a,null,r.a.createElement(V.a,null,r.a.createElement(M.a,null,"Name"))),r.a.createElement(J.a,null,P.map((function(e){return r.a.createElement(V.a,{key:e._id,selected:e._id===k._id},r.a.createElement(M.a,{onClick:function(){return t=e,void ae.a.get("/api/records/bypatient/"+t._id).then((function(e){D(re({},t,{records:e.data}))})).catch((function(e){console.log(e),D(re({},t,{records:[]}))}));var t}},e.name))}))))))),r.a.createElement(K.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:Q.open,onClose:function(){Z(re({},Q,{open:!1}))},ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},Q.message),autoHideDuration:"4000"}))}function le(e){var t=e.patients;return r.a.createElement(q.a,{size:"small"},r.a.createElement(U.a,null,r.a.createElement(V.a,null,r.a.createElement(M.a,null,"Name"),r.a.createElement(M.a,null))),r.a.createElement(J.a,null,t.map((function(t){return r.a.createElement(V.a,{key:t._id},r.a.createElement(M.a,null,t.name),r.a.createElement(M.a,null,r.a.createElement(y.a,{"aria-label":"delete",onClick:function(){return e.onDeleteClick(t._id)}},r.a.createElement(Z.a,null))))}))))}function ce(e){return r.a.createElement(b.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var me=Object(p.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:ue({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},button:{marginTop:e.spacing(1),marginLeft:e.spacing(1)}}}));function pe(){var e=me(),t=r.a.useState({name:""}),a=Object(l.a)(t,2),n=a[0],o=a[1],i=r.a.useState([]),s=Object(l.a)(i,2),u=s[0],m=s[1];r.a.useEffect((function(){(function(){var e=Object(_.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.a.get("/api/patients");case 2:t=e.sent,m(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p;return r.a.createElement(H.a,{maxWidth:"lg",className:e.container},r.a.createElement(G.a,{container:!0,spacing:3},r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(F.a,{className:e.paper},r.a.createElement(b.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Add New Patient"),r.a.createElement("div",null,r.a.createElement($.a,{required:!0,id:"standard-required",label:"Name",value:n.name,onChange:(p="name",function(e){o(ue({},n,Object(c.a)({},p,e.target.value)))}),className:e.textField}),r.a.createElement(W.a,{variant:"contained",color:"primary",size:"small",className:e.button,onClick:function(){console.log("SUBMITTING!"),ae.a.post("/api/patients/add",n).then((function(e){m(u.concat([e.data])),o({name:""})}))}},"Add")))),r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(F.a,{className:e.paper},r.a.createElement(ce,null,"Patients"),r.a.createElement(le,{patients:u,onDeleteClick:function(e){ae.a.delete("/api/patients/delete/"+e).then((function(t){m(u.filter((function(t){return t._id!==e}))),console.log(t)})).catch((function(e){return console.log(e)}))}})))))}function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ge(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?de(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var fe=Object(p.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:ge({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function Ee(e){var t=fe(),a=e.match.params.id;return r.a.createElement(H.a,{maxWidth:"lg",className:t.container},r.a.createElement(G.a,{container:!0,spacing:3},r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(F.a,{className:t.paper},r.a.createElement("p",null,a)))))}var he=a(83),be=a.n(he),ve=a(186);function ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ye(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ye(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var we=Object(p.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Oe({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},modalpaper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}}));function xe(){var e=we(),t=r.a.useState([]),a=Object(l.a)(t,2),n=a[0],o=a[1],i=r.a.useState({}),c=Object(l.a)(i,2),s=c[0],u=c[1],m=r.a.useState(!1),p=Object(l.a)(m,2),d=p[0],g=p[1],f=function(e){return new Date(e).toLocaleString("en-US")},E=function(e){return e.reduce((function(e,t){return e+t.duration}),0)/e.length};r.a.useEffect((function(){(function(){var e=Object(_.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.a.get("/api/records");case 2:t=e.sent,console.log(t.data),o(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h,b=function(e){null!==e.patient&&(u(e),g(!0))};return r.a.createElement(H.a,{maxWidth:"lg",className:e.container},r.a.createElement(G.a,{container:!0,spacing:3},r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(F.a,{className:e.paper},r.a.createElement(ce,null,"Records"),r.a.createElement(q.a,{size:"small"},r.a.createElement(U.a,null,r.a.createElement(V.a,null,r.a.createElement(M.a,null,"Date"),r.a.createElement(M.a,null,"Patient"),r.a.createElement(M.a,null,"# Trials"),r.a.createElement(M.a,null,"Average Time"),r.a.createElement(M.a,null),r.a.createElement(M.a,null))),r.a.createElement(J.a,null,n.map((function(e){return r.a.createElement(V.a,{key:e._id},r.a.createElement(M.a,null,f(e.date)),r.a.createElement(M.a,null,null!==e.patient?e.patient.name:"[Patient Deleted]"),r.a.createElement(M.a,null,e.trials.length),r.a.createElement(M.a,null,E(e.trials).toFixed(2)+"s"),r.a.createElement(M.a,null,r.a.createElement(y.a,{"aria-label":"view",onClick:function(){return b(e)}},r.a.createElement(be.a,null))),r.a.createElement(M.a,null,r.a.createElement(y.a,{"aria-label":"delete",onClick:function(){return t=e._id,void ae.a.delete("/api/records/delete/"+t).then((function(e){o(n.filter((function(e){return e._id!==t}))),console.log(e)})).catch((function(e){return console.log(e)}));var t}},r.a.createElement(Z.a,null))))}))))))),r.a.createElement(ve.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:d,onClose:function(){g(!1)}},void 0!==s._id&&r.a.createElement("div",{className:e.modalpaper},r.a.createElement("h2",null,s.patient.name),r.a.createElement("h3",null,f(s.date)),r.a.createElement("p",null,r.a.createElement("strong",null,"Trials")),r.a.createElement("ol",null,s.trials.map((function(e,t){return r.a.createElement("li",{key:t},"".concat(e.duration,"s"))}))),r.a.createElement("p",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Average: "),E(s.trials).toFixed(2)+"s",r.a.createElement("br",null),r.a.createElement("strong",null,"Velocity: "),(h=s.trials,6/E(h)).toFixed(1)+" m/s"),r.a.createElement("p",null,r.a.createElement("strong",null,"Note: "),r.a.createElement("br",null),s.note)))))}var je=function(){return r.a.createElement("h1",null,"Not found?")};function Pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Pe(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Pe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Be=Object(p.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Se({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},link:{textDecoration:"none",color:"rgba(0,0,0,0.87)"}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement((function(){var e=Be(),t=r.a.useState(!0),a=Object(l.a)(t,2),n=a[0],o=a[1];return r.a.createElement(u.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(d.a,null),r.a.createElement(f.a,{position:"absolute",className:Object(s.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(E.a,{className:e.toolbar},r.a.createElement(y.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},className:Object(s.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(w.a,null)),r.a.createElement(b.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Timed 10m Walk Test"))),r.a.createElement(g.a,{variant:"permanent",classes:{paper:Object(s.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(y.a,{onClick:function(){o(!1)}},r.a.createElement(j.a,null))),r.a.createElement(v.a,null),r.a.createElement(h.a,null,r.a.createElement(u.b,{to:"/",className:e.link},r.a.createElement(P.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(k.a,null)),r.a.createElement(B.a,{primary:"Dashboard"}))),r.a.createElement(u.b,{to:"/patients",className:e.link},r.a.createElement(P.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(C.a,null)),r.a.createElement(B.a,{primary:"Patients"}))),r.a.createElement(u.b,{to:"/records",className:e.link},r.a.createElement(P.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(T.a,null)),r.a.createElement(B.a,{primary:"Records"}))))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:ie}),r.a.createElement(m.a,{exact:!0,path:"/records",component:xe}),r.a.createElement(m.a,{exact:!0,path:"/patients",component:pe}),r.a.createElement(m.a,{exact:!0,path:"/patient/:id",component:Ee}),r.a.createElement(m.a,{component:je})))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,t,a){e.exports=a(128)}},[[98,1,2]]]);
//# sourceMappingURL=main.edcc56e0.chunk.js.map