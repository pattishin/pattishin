(this.webpackJsonppattishin=this.webpackJsonppattishin||[]).push([[0],{39:function(e,a,t){e.exports=t.p+"static/media/patti.4a44f4ad.jpeg"},45:function(e,a,t){e.exports=t.p+"static/media/animated.d6a9cc9a.gif"},53:function(e,a,t){e.exports=t(67)},58:function(e,a,t){},59:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),i=t.n(o),c=(t(58),t(19)),l=t(20),s=t(22),m=t(21),p=t(3),u=t(4),d=t(98),h=t(99),g=t(100),E=t(104),f=t(101),b=t(102),v=t(69),w=t(46),x=t.n(w),N=t(48),j=t.n(N),k=t(47),y=t.n(k),O=t(29),S=t(38),B=t(41),C=t.n(B),_=t(103),P=t(97),W=t(42),I=t.n(W),T=t(43),M=t.n(T),R=t(44),G=t.n(R),H=t(39),A=t.n(H),F=(t(59),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,n=e.setOpen;return r.a.createElement(_.a,{variant:"permanent",classes:{paper:Object(p.a)(a.drawerPaper,!t&&a.drawerPaperClose)},open:t},r.a.createElement("div",{className:a.toolbarIcon},r.a.createElement(E.a,{onClick:function(){return n(!1)}},r.a.createElement(C.a,{style:{color:"rgb(100, 255, 218)"}}))),r.a.createElement("div",{className:"authorCard"},r.a.createElement("div",{className:"authorCardTop"},r.a.createElement("div",{className:"authorAvatarWrapper"},r.a.createElement("img",{src:A.a,className:"avatar",alt:"avatar"}))),r.a.createElement("div",{className:"authorCardBody"},r.a.createElement(P.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title},"patti shin"),r.a.createElement("div",{className:"authorSocialMedia"},r.a.createElement("a",{href:"https://github.com/pattishin",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,null,r.a.createElement(I.a,{style:{color:"rgb(100, 255, 218)"}}))),r.a.createElement("a",{href:"https://twitter.com/pattishin",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,null,r.a.createElement(M.a,{style:{color:"rgb(100, 255, 218)"}}))),r.a.createElement("a",{href:"https://www.linkedin.com/in/pattishin",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,null,r.a.createElement(G.a,{style:{color:"rgb(100, 255, 218)"}})))))))}}]),t}(n.Component));F.defaultProps={open:!0,setOpen:function(){}};var z=Object(u.a)((function(e){return{toolbar:{paddingRight:24},toolbarIcon:Object(S.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px",backgroundColor:"rgb(10, 25, 47)"},e.mixins.toolbar),title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,backgroundColor:"rgb(10, 25, 47)",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(O.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:"0px"},e.breakpoints.up("sm"),{width:e.spacing(9)})}}))(F),D=t(45),J=t.n(D),L=(t(65),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loadingContainer"},r.a.createElement("img",{src:J.a,className:"logoAnimation",alt:"logo"}),r.a.createElement("p",null,"Loading ..."))}}]),t}(n.Component)),X=(t(66),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={open:!0,loading:!0,authors:[],characters:[]},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/api/author",{method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({authors:a,loading:!1})})).catch((function(e){return e})),fetch("http://localhost:8080/api/characters",{method:"GET"}).then((function(e){return e.json()})).then((function(a){return e.setState({characters:a})})).catch((function(e){return e}))}},{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state,n=t.open,o=t.characters,i=t.loading,c=t.authors,l=Object(p.a)(a.paper,a.fixedHeight);return r.a.createElement("div",{className:a.root},i?r.a.createElement(L,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement(h.a,{position:"absolute",className:Object(p.a)(a.appBar,n&&a.appBarShift)},r.a.createElement(g.a,{className:a.toolbar},r.a.createElement(E.a,{edge:"end",color:"inherit","aria-label":"open drawer",onClick:function(){return e.setState({open:!0})},className:Object(p.a)(a.menuButton,n&&a.menuButtonHidden)},r.a.createElement(x.a,{style:{color:"rgb(100, 255, 218)"}})),r.a.createElement("a",{href:"#talks_section"},r.a.createElement(E.a,{color:"inherit"},r.a.createElement(y.a,{style:{color:"rgb(100, 255, 218)"}}))),r.a.createElement("a",{href:"#podcast_section"},r.a.createElement(E.a,{color:"inherit"},r.a.createElement(j.a,{style:{color:"rgb(100, 255, 218)"}}))))),r.a.createElement(z,{open:n,setOpen:function(a){return e.setState({open:a})}}),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.appBarSpacer}),r.a.createElement("section",{id:"about_section"},r.a.createElement(f.a,{maxWidth:"lg",className:a.container},r.a.createElement("h3",null,"About"),r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(b.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(v.a,{className:l},c.map((function(e){return e.description})))),r.a.createElement(b.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(v.a,{className:l},o.map((function(e){return e.name})))),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(v.a,{className:a.paper},"hello"))))),r.a.createElement("div",{className:a.appBarSpacer}),r.a.createElement("section",{id:"talks_section"},r.a.createElement(f.a,{maxWidth:"lg",className:a.container},r.a.createElement("h3",null,"Talks"),r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(v.a,{className:a.paper},"Talks"))))),r.a.createElement("div",{className:a.appBarSpacer}),r.a.createElement("section",{id:"podcast_section"},r.a.createElement(f.a,{maxWidth:"lg",className:a.container},r.a.createElement("h3",null,"Podcast"),r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(v.a,{className:a.paper},"Podcast"))))))))}}]),t}(n.Component)),$=Object(u.a)((function(e){return{root:{display:"flex",fontFamily:"Roboto Mono",height:"inherit"},toolbar:{paddingRight:0},appBar:{zIndex:e.zIndex.drawer+1,backgroundColor:"rgb(10, 25, 47)",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(239,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{fontFamily:"Roboto Mono"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto",backgroundColor:"#e0e0e0"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}))(X);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.ad3b3093.chunk.js.map