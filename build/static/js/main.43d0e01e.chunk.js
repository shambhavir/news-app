(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{150:function(e,t,a){},157:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(0),s=a.n(r),c=a(49),i=a.n(c),l=(a(150),a(70)),o=a.n(l),p=a(79),u=a(80),h=a(81),d=a(106),j=a(101),b=function(){var e=Object(p.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=".concat("78b9d599c4f94f8fa3afb1a5458928d6"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=a(176),x=a(179),f=a(180),O=a(132),g=function(e){var t=e.article;return Object(n.jsx)(y.a.Item,{style:{padding:30},children:Object(n.jsxs)(x.a,{children:[Object(n.jsxs)(x.a.Column,{width:11,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[Object(n.jsx)(f.a,{as:"h3",children:t.title}),Object(n.jsx)(y.a.Description,{style:{margin:"20px 0"},children:t.description}),Object(n.jsxs)(y.a,{bulleted:!0,horizontal:!0,children:[Object(n.jsx)(y.a.Item,{children:Object(n.jsx)("a",{href:t.url,children:t.source.name})}),Object(n.jsx)(y.a.Item,{children:t.publishedAt.split("T")[0]})]})]}),Object(n.jsx)(x.a.Column,{width:5,children:Object(n.jsx)(O.a,{src:t.urlToImage})})]})})},m=function(e){return Object(n.jsx)(y.a,{divided:!0,style:{maxWidth:900,margin:"0 auto"},children:e.articles.map((function(e,t){return Object(n.jsx)(g,{article:e},e.title+t)}))})},v=a(175),w=a(177),T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({searchTopic:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.searchForTopic(n.state.searchTopic)},n.state={searchTopic:""},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)(v.a,{onSubmit:this.handleSubmit,children:Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Input,{placeholder:"Search ent/tech/sports",name:"topic",value:this.state.searchTopic,onChange:this.handleChange}),Object(n.jsx)(w.a,{type:"submit",color:"pink",children:"Search"})]})})})}}]),a}(s.a.Component),C=a(174),S=(a(157),a(100)),I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={articles:[],searchTopic:"",totalResults:"",loading:!1,apiError:""},e.searchForTopic=function(){var t=Object(p.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,b(a);case 4:n=t.sent,e.setState({articles:n.articles,searchTopic:a,totalResults:n.totalResults}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({apiError:"Could not find any articles"});case 11:e.setState({loading:!1});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.articles,a=e.apiError,r=e.loading,s=e.searchTopic,c=e.totalResults;return Object(n.jsxs)(C.a,{children:[Object(n.jsx)(f.a,{as:"h2",style:{textAlign:"center",margin:20},children:Object(n.jsx)(S.a,{getBeforeInit:function(e){return e.type("explore ").type("entertainment").pause(500).delete(13).type("technology").pause(500).delete(10).type("sports").pause(500).delete(6).type("your world"),e}})}),Object(n.jsx)(T,{searchForTopic:this.searchForTopic}),Object(n.jsxs)("p",{style:{textAlign:"center"},children:["Powered by ",Object(n.jsx)("a",{href:"https://newsapi.org/",children:"NewsAPI.org"})]}),r&&Object(n.jsx)("p",{style:{textAlign:"center"},children:"Fetching your daily scoop..."}),t.length>0&&Object(n.jsxs)(f.a,{as:"h4",style:{textAlign:"center",margin:0},children:["Found ",c,' articles on "',s,'"']}),t.length>0&&Object(n.jsx)(m,{articles:t}),a&&Object(n.jsx)("p",{children:"Could not fetch any articles. Please try again."})]})}}]),a}(s.a.Component),k=(a(158),a(74));a(159);var A=function(){return Object(n.jsxs)("div",{className:"main",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"110px"},children:[Object(n.jsx)("div",{class:"powr-weather",id:"682de827_1604609677"}),Object(n.jsx)("script",{src:"https://www.powr.io/powr.js?platform=react"}),Object(n.jsx)(k.b,{to:"/app",children:Object(n.jsx)("button",{children:"Your daily"})}),Object(n.jsx)(S.a,{getBeforeInit:function(e){return e.type("news").pause(500).delete(4).type("\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bbf").pause(500).delete(6).type("noticias").pause(500).delete(8).type("\u041d\u043e\u0432\u043e\u0441\u0442\u0438").pause(500).delete(7).type("\u0576\u0578\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580").pause(500).delete(13).type("h\xedrek").pause(500).delete(5).type("\u0432\u0435\u0441\u0442\u0438").pause(500).delete(5).type("\u0db4\u0dd4\u0dc0\u0dad\u0dca").pause(500).delete(5).type("ozi").pause(500).delete(3).type("nuacht").pause(500).delete(6).type("\ub274\uc2a4").pause(500).delete(1).delete(1).type("zpr\xe1vy").pause(500).delete(6).type("\u0d35\u0d3e\u0d7c\u0d24\u0d4d\u0d24").pause(500).delete("6").type("a\u0127barijiet").pause(500).delete(10).type("\u0c35\u0c3e\u0c30\u0c4d\u0c24\u0c32\u0c41").pause(500).delete(7).type("nouvelles").pause(500).delete(9).type("vaovao").pause(500).delete(6).type("Nachrichten").pause(500).delete(11).type("news"),e}})]})},F=a(10),z=document.getElementById("root");i.a.render(Object(n.jsx)(k.a,{children:Object(n.jsxs)(F.c,{children:[Object(n.jsx)(F.a,{exact:!0,path:"/",component:A}),Object(n.jsx)(F.a,{path:"/app",component:I})]})}),z)}},[[161,1,2]]]);
//# sourceMappingURL=main.43d0e01e.chunk.js.map