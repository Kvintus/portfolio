(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){e.exports=a.p+"static/media/about.b4c0e9d1.png"},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),l=(a(65),a(8)),s=a(9),o=a(11),u=a(10),m=a(12),f=(a(66),a(39),a(134)),p=a(133),h=(a(67),a(129)),d=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isTop:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",function(){var t=window.scrollY<30;t!==e.state.isTop&&e.setState({isTop:t})})}},{key:"scrollToCustom",value:function(e){var t=document.getElementById(e);window.scrollTo(0,t.offsetTop-56)}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{bg:"dark",variant:"dark",expand:"md",className:(this.state.isTop?"":"after-scroll")+" navbary"},r.a.createElement(h.a,null,r.a.createElement(f.a.Brand,{href:"#home"},r.a.createElement("img",{width:45,height:45,className:"logo-invert",src:a(79),alt:""}),r.a.createElement("span",{className:"rest-of-name",onClick:function(){return e.scrollToCustom("#about-me")}},"OLIK")),r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"ml-auto"},r.a.createElement("span",{onClick:function(){return e.scrollToCustom("caro-banner")},className:"nav-link"},"Home"),r.a.createElement("span",{onClick:function(){return e.scrollToCustom("about-me")},className:"nav-link"},"About"),r.a.createElement("span",{onClick:function(){return e.scrollToCustom("work")},className:"nav-link"},"Work"),r.a.createElement("span",{onClick:function(){return e.scrollToCustom("resume")},className:"nav-link"},"Resume"),r.a.createElement("span",{onClick:function(){return e.scrollToCustom("contact-me")},className:"nav-link"},"Contact")))))}}]),t}(r.a.Component),E=a(7),v=a.n(E),b=a(59),g=a(13),k=a(131),y=a(55),j=(a(109),a(130)),O=(a(110),function(e){return r.a.createElement(j.a,{onClick:function(t){return e.atClick?e.atClick():null},className:"main-btn"},e.text)}),w=a(15),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={info:{phone:"",email:"",location:"",year_of_birth:1999},heading:"",text:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"calculateAge",value:function(){return(new Date).getFullYear()-this.state.info.year_of_birth}},{key:"fetchData",value:function(){var e=Object(g.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("section/about-me");case 2:t=e.sent,a=t.data,this.setState(Object(b.a)({},a));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillMount",value:function(){var e=Object(g.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("section",{className:this.props.className,id:this.props.id},r.a.createElement(h.a,null,r.a.createElement(k.a,null,r.a.createElement(y.a,{md:5,xs:12},r.a.createElement("div",{className:"about-me-image"},r.a.createElement("img",{src:a(111),alt:"me"}))),r.a.createElement(y.a,{className:"about-me-description",md:7,xs:12},r.a.createElement("h4",null,"About Me"),r.a.createElement("h3",null,this.state.heading),r.a.createElement("p",null,this.state.text),r.a.createElement(k.a,null,r.a.createElement(y.a,{md:6},r.a.createElement("div",{className:"about-info"},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-phone"}),"Phone"),this.state.info.phone)),r.a.createElement(y.a,{md:6},r.a.createElement("div",{className:"about-info"},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-at"}),"Email"),this.state.info.email)),r.a.createElement(y.a,{md:6},r.a.createElement("div",{className:"about-info"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-map-marker-alt"}),"Location"),this.state.info.location)),r.a.createElement(y.a,{md:6},r.a.createElement("div",{className:"about-info"},r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-calendar-alt"}),"Age"),this.calculateAge()))),r.a.createElement(O,{text:"Download Resume",atClick:function(){console.log("hi9")}})))))}}]),t}(r.a.Component),x=(a(112),a(113),function(e){return r.a.createElement("div",{className:"section-intro text-center"},r.a.createElement("strong",null,e.subHeading),r.a.createElement("h2",null,e.heading),r.a.createElement("p",null,e.text),r.a.createElement("div",{className:"section-intro-border"}))}),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={services:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetchServices",value:function(){var e=Object(g.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("services");case 2:t=e.sent,a=t.data,this.setState({services:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillMount",value:function(){var e=Object(g.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchServices();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"generateCardCols",value:function(){return this.state.services.map(function(e){return r.a.createElement(y.a,{lg:4,md:6,xs:12,key:e.id},r.a.createElement("div",{className:"service"},r.a.createElement("i",{className:"".concat(e.iconClasses)}),r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.text)))})}},{key:"render",value:function(){return r.a.createElement("section",{className:"section text-center",id:this.props.id},r.a.createElement(h.a,null,r.a.createElement(y.a,{xs:12},r.a.createElement(x,{subHeading:"What I Do",heading:"My Services",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, iste quaerat, repellat consectetur sapiente delectus debitis facilis ad cum quia explicabo, eos laborum eligendi vel commodi distinctio expedita tempore aliquid?"})),r.a.createElement(k.a,null,this.generateCardCols())))}}]),t}(r.a.Component),S=(a(114),function(e){return r.a.createElement("div",{className:"parallax-divider",style:{background:"url(".concat(e.image,")")}},e.children)}),M=(a(115),function(e){return r.a.createElement(S,{image:"https://images.wallpaperscraft.com/image/laptop_apple_canon_table_73452_1920x1080.jpg"},r.a.createElement(h.a,{className:"available-container"},r.a.createElement(k.a,null,r.a.createElement(y.a,{lg:12,className:"text-center"},r.a.createElement("h3",null,"Available Freelancer"),r.a.createElement(O,{text:"Contact Me"})))))}),_=a(56),A=(a(116),a(117),function(e){var t=e.project.technologies.join(", ");return r.a.createElement("div",{className:"work-card"},r.a.createElement("img",{src:e.project.title_image,alt:""}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"info full-width"},r.a.createElement("p",null,t),r.a.createElement("h5",null,e.project.name),r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-arrow-right"})))))}),T=(a(118),function(e){var t=e.heading?r.a.createElement("h4",null,e.heading):null;return r.a.createElement("div",{className:"filter text-center"},t,r.a.createElement("ul",null,e.technologies.map(function(t){return r.a.createElement("li",{onClick:function(){return e.onChange(t)},key:t,className:e.active===t?"active":""},t)})))}),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[],filters:{backend:{items:["All","Node","PHP","Go"],active:"All"}}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=Object(g.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("projects");case 2:t=e.sent,a=t.data,this.setState({projects:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"generateWorkCards",value:function(){var e=this;return this.state.projects.map(function(t){if("All"===e.state.filters.backend.active||t.technologies.includes(e.state.filters.backend.active))return r.a.createElement(y.a,{lg:4,md:6,xs:12,key:t.name},r.a.createElement(A,{project:t}))})}},{key:"changeActiveFilter",value:function(e,t){this.setState(function(a){return a.filters[e].active=t,a})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:this.props.className,id:this.props.id},r.a.createElement(x,{subHeading:"work",heading:"My Work",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere."}),r.a.createElement(h.a,null,r.a.createElement(T,{technologies:this.state.filters.backend.items,onChange:function(t){return e.changeActiveFilter("backend",t)},active:this.state.filters.backend.active}),r.a.createElement(k.a,null,r.a.createElement(_.a,{typeName:null},this.generateWorkCards()))))}}]),t}(r.a.Component),L=a(57),I=a.n(L);a(119),a(120),a(121);var W,D=function(e){return r.a.createElement("div",{className:"testimonial",onClick:function(){var t;(t=e.testimonial.linkedin_url)&&window.open(t,"_blank")},style:{cursor:"".concat(e.testimonial.linkedin_url?"pointer":"default")}},r.a.createElement("div",{className:"testimonial-picture"},r.a.createElement("img",{src:e.testimonial.image,alt:"".concat(e.testimonial.name,"'s picture")})),r.a.createElement("h5",{className:"testimonial-title"},e.testimonial.name),r.a.createElement("span",{className:"testimonial-position"},e.testimonial.position),r.a.createElement("p",{className:"testimonial-text"},e.testimonial.text))},R=(a(122),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={testimonials:[],nav:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=Object(g.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("testimonials");case 2:t=e.sent,a=t.data,this.setState({testimonials:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderCarousel",value:function(){if(this.state.testimonials.length)return r.a.createElement(I.a,{loop:!0,nav:!0,items:1,responsive:{0:{items:1},768:{items:2},1200:{items:3}},navElement:"div",navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>']},this.state.testimonials.map(function(e){return r.a.createElement("div",{className:"item",key:e.name},r.a.createElement(D,{testimonial:e}))}))}},{key:"render",value:function(){return r.a.createElement(S,{image:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"},r.a.createElement(h.a,{className:"testimonials-wrapper"},r.a.createElement(k.a,null,r.a.createElement(y.a,{md:12},this.renderCarousel()))))}}]),t}(r.a.Component)),G=(a(123),a(132)),Y=(a(124),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(G.a,{className:"contact-me-form"},r.a.createElement(k.a,null,r.a.createElement(y.a,{sm:12},r.a.createElement(G.a.Group,null,r.a.createElement(G.a.Control,{placeholder:"Name"}))),r.a.createElement(y.a,{sm:6},r.a.createElement(G.a.Group,null,r.a.createElement(G.a.Control,{placeholder:"Email"}))),r.a.createElement(y.a,{sm:6},r.a.createElement(G.a.Group,null,r.a.createElement(G.a.Control,{placeholder:"Subject"}))),r.a.createElement(y.a,{sm:12},r.a.createElement(G.a.Group,null,r.a.createElement(G.a.Control,{as:"textarea",rows:"3",placeholder:"Your message..."}))),r.a.createElement(y.a,{sm:12},r.a.createElement(G.a.Group,null,r.a.createElement(O,{text:"Send Message"})))))}}]),t}(r.a.Component)),F=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:this.props.className},r.a.createElement(x,{subHeading:"Contact",heading:"Get In Touch",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint quibusdam unde quia doloremque eius architecto labore. Asperiores ab at ratione corrupti deserunt. Pariatur, facilis harum odio est aliquam maiores?"}),r.a.createElement("h1",null,"Mother fucker"),r.a.createElement(h.a,null,r.a.createElement(k.a,null,r.a.createElement(y.a,{lg:7,sm:12},r.a.createElement("p",null,"lol"),r.a.createElement(Y,null)),r.a.createElement(y.a,{lg:5,sm:12}))))}}]),t}(r.a.Component),H=a(21),q=a(27),P=a(31),z=(a(125),Object(H.b)("SocialMediaStore")(W=Object(H.c)(W=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.SocialMediaStore.fetching||(this.props.SocialMediaStore.fetch(),console.log("Fetching from Footer"))}},{key:"renderSocialMediaButtonList",value:function(){return this.props.SocialMediaStore.accounts.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(P.a,{link:e.link,iconClasses:e.iconClasses}))})}},{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement(h.a,null,r.a.createElement(k.a,null,r.a.createElement(y.a,{sm:6},r.a.createElement("div",{className:"copyright-text"},r.a.createElement("p",null,"CopyRight \xa9 ",this.currentYear," Jakob Rolik All Rights Reserved"))),r.a.createElement(y.a,{sm:6},r.a.createElement("div",{className:"pull-right"},r.a.createElement("ul",null,this.renderSocialMediaButtonList()))))))}},{key:"currentYear",get:function(){return(new Date).getFullYear()}}]),t}(r.a.Component))||W)||W),J=a(82).default,Q=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(J,null),r.a.createElement(N,{id:"about-me",className:"section"}),r.a.createElement(C,{id:"services"}),r.a.createElement(M,null),r.a.createElement(B,{className:"section",id:"work"}),r.a.createElement(R,null),r.a.createElement(F,{className:"section"}),r.a.createElement("h1",null,"Suck it"),r.a.createElement(z,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(126),a(127);var U=r.a.createElement(H.a,{SocialMediaStore:q.a},r.a.createElement(Q,null));i.a.render(U,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},15:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(53),r=a.n(n).a.create({baseURL:"http://localhost:8080/?rest_route=/wp/v2"})},27:function(e,t,a){"use strict";var n,r,c,i,l=a(7),s=a.n(l),o=a(13),u=a(33),m=a(8),f=a(34),p=(a(105),a(1)),h=a(15),d=a(54),E=a.n(d),v=new(n=function e(){Object(m.a)(this,e),Object(u.a)(this,"accounts",r,this),Object(u.a)(this,"fetching",c,this),Object(u.a)(this,"fetch",i,this)},r=Object(f.a)(n.prototype,"accounts",[p.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),c=Object(f.a)(n.prototype,"fetching",[p.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),i=Object(f.a)(n.prototype,"fetch",[p.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(o.a)(s.a.mark(function t(){var a,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.fetching=!0,t.next=3,h.a.get("social_media");case 3:a=t.sent,n=a.data,e.accounts=n,e.fetching=!1;case 7:case"end":return t.stop()}},t,this)}))}}),n);E()(v),t.a=v},31:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(86);t.a=function(e){return r.a.createElement("a",{className:"social-media-button",target:"_blank",href:e.link},r.a.createElement("i",{className:e.iconClasses}))}},60:function(e,t,a){e.exports=a(128)},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},79:function(e,t,a){e.exports=a.p+"static/media/robustthickest.ef6744be.svg"},82:function(e,t,a){"use strict";a.r(t);var n,r=a(7),c=a.n(r),i=a(13),l=a(8),s=a(9),o=a(11),u=a(10),m=a(12),f=a(0),p=a.n(f),h=a(129),d=a(52),E=(a(39),a(85),a(31)),v=a(15),b=a(21),g=(a(27),Object(b.b)("SocialMediaStore")(n=Object(b.c)(n=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={socialMedia:[],text:"",typeitStrings:[],banner_image:"http://abhtheme.com/html-preview/tm/dekha/dekha/images/banner.jpg?fbclid=IwAR2X1kiAv1QjNBCiTbRO-PfijGIbYo7bU82kUSaOHP9CGYBQQ6Nx5vKYTgc"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"initializeTypeIt",value:function(e){new d("#typeit",{strings:e,loop:!0,speed:75,breakLines:!1,lifeLike:!1,nextStringDelay:[1500,500]}).go()}},{key:"fetchSocialMedia",value:function(){var e=Object(i.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.SocialMediaStore.fetching||(this.props.SocialMediaStore.fetch(),console.log("Fetching from Banner"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchBasicInfo",value:function(){var e=Object(i.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("section/home");case 2:t=e.sent,a=t.data,console.log("Basic info fetch"),console.log(a.banner_image.url),this.setState({text:a.text,banner_image:a.banner_image,typeitStrings:a.what_i_am.split(", ")});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchSocialMedia();case 2:return e.next=4,this.fetchBasicInfo();case 4:this.initializeTypeIt(this.state.typeitStrings);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderSocialMediaButtonList",value:function(){return this.props.SocialMediaStore.accounts.map(function(e){return p.a.createElement("li",{key:e.name},p.a.createElement(E.a,{link:e.link,iconClasses:e.iconClasses}))})}},{key:"render",value:function(){return p.a.createElement("div",{id:"caro-banner",style:{background:"url(".concat(this.state.banner_image,")")}},p.a.createElement("div",{className:"banner-triangle"}),p.a.createElement(h.a,null,p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12 info"},p.a.createElement("div",{className:"banner-content"},p.a.createElement("strong",null,"Hello !"),p.a.createElement("h1",null,"I Am",p.a.createElement("span",{id:"typeit"})),p.a.createElement("p",null,this.state.text),p.a.createElement("div",{className:"social-media-links"},p.a.createElement("ul",null,this.renderSocialMediaButtonList())))))))}}]),t}(p.a.Component))||n)||n);t.default=g},85:function(e,t,a){},86:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.f346afe5.chunk.js.map