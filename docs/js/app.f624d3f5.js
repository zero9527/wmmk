(function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)a=r[u],o[a]&&f.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var r=n[a];0!==o[r]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},o={app:0},s=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8bc500b1","chunk-06c6":"d97b8a30","chunk-2518":"2c002c1d","chunk-2b05":"7ac9be74","chunk-d3d4":"4ab76b95","chunk-e325":"c6402b31"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-06c6":1,"chunk-2518":1,"chunk-2b05":1,"chunk-d3d4":1,"chunk-e325":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-06c6":"69f8f413","chunk-2518":"a4f3bbb3","chunk-2b05":"b037f8b6","chunk-d3d4":"17fd0018","chunk-e325":"4e826147"}[t]+".css",a=c.p+i,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var r=o[s],l=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(l===i||l===a))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){r=u[s],l=r.getAttribute("data-href");if(l===i||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.request=i,n(o)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){a[t]=0}));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise(function(e,n){i=o[t]=[e,n]});e.push(i[2]=s);var l,u=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=r(t),l=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");s.type=i,s.request=a,n[1](s)}o[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,u.appendChild(f)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b68":function(t,e,n){"use strict";var i=n("9ead"),a=n.n(i);a.a},"15c5":function(t,e,n){},"2a8a":function(t,e,n){},"2f5d":function(t,e,n){"use strict";var i=n("d87e"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("c93e"),a=(n("cadf"),n("551c"),n("097d"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("load0",{attrs:{loadshow:t.$store.state.loadShow}})],1)},s=[],r=n("2f62"),c=n("c0d6"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"load"},[i("transition",[i("img",{attrs:{src:n("b1c2"),alt:""}})])],1)},u=[],f={name:"load",props:{loadshow:Boolean},data:function(){return{show:!0}},created:function(){},watch:{loadshow:function(t){this.show=t}}},d=f,A=(n("2f5d"),n("2877")),h=Object(A["a"])(d,l,u,!1,null,"0f8e4818",null);h.options.__file="load0.vue";var m=h.exports,p={name:"app",store:c["a"],components:{load0:m},data:function(){return{}},mounted:function(){},methods:{}},v=p,g=(n("7c55"),Object(A["a"])(v,o,s,!1,null,null,null));g.options.__file="App.vue";var b=g.exports,w=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("transition",{attrs:{name:t.transitionName,appear:""}},[n("keep-alive",{attrs:{exclude:"newsDetail"}},[n("router-view")],1)],1),n("footerB",{ref:"footer_ref"}),n("div",{staticClass:"gotop",on:{click:t.gotop}},[n("i",{staticClass:"iconfont icon-gotop"})])],1)},C=[],L=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footerB footer_B"},[n("ul",{staticClass:"_tab"},t._l(t.tabList,function(e){return n("li",{key:e.id,staticClass:"tabli",class:{tabliselect:t.activeTab==e},on:{click:function(n){t.select(e,e.path)}}},[n("i",{class:e.icon}),n("span",{domProps:{textContent:t._s(e.name)}})])})),t._t("default")],2)}),k=[],B={name:"footerB",components:{},data:function(){return{msg:"Welcome to footerB",activeTab:"",tabList:[{class:"tabli tabliselect",name:"资讯",icon:"iconfont icon-zixun",path:"/"},{name:"辣品",icon:"iconfont icon-xianp",path:"/xianp"},{name:"圈圈",icon:"iconfont icon-quanzi",path:"/circles"},{name:"我的",icon:"iconfont icon-mine",path:"/mine"}]}},created:function(){"/"==this.$route.path?this.activeTab=this.tabList[0]:"/xianp"==this.$route.path?this.activeTab=this.tabList[1]:"/circles"==this.$route.path?this.activeTab=this.tabList[2]:"/mine"==this.$route.path&&(this.activeTab=this.tabList[3])},methods:{select:function(t,e){this.activeTab=t,this.$router.push(e)}}},T=B,E=(n("6727"),Object(A["a"])(T,L,k,!1,null,null,null));E.options.__file="footer-b.vue";var _=E.exports,x=n("b1f8"),j={name:"home",components:{mainC:x["default"],footerB:_},data:function(){return{transitionName:"fade"}},methods:{gotop:function(){var t,e=this,n=document.body.scrollTop||document.documentElement.scrollTop;n-=40,t=setTimeout(function(){document.body.scrollTop?document.body.scrollTop=n:document.documentElement.scrollTop=n,n<=0?clearTimeout(t):e.gotop()},1)},setFlex:function(){if("newsDetail"!=this.$route.name)try{document.querySelector(".footer_B").style.display="flex"}catch(t){console.log("err: ",t)}}},watch:{$route:function(t,e){"index"==this.$route.name?this.$refs.footer_ref.activeTab=this.$refs.footer_ref.tabList[0]:"xianp"==this.$route.name?this.$refs.footer_ref.activeTab=this.$refs.footer_ref.tabList[1]:"circle"==this.$route.name?this.$refs.footer_ref.activeTab=this.$refs.footer_ref.tabList[2]:"mine"==this.$route.name&&(this.$refs.footer_ref.activeTab=this.$refs.footer_ref.tabList[3]),"newsDetail"==e.name?this.transitionName="slide-fade":this.transitionName="fade",this.setFlex()}},activated:function(){this.setFlex()}},S=j,I=(n("de16"),Object(A["a"])(S,y,C,!1,null,null,null));I.options.__file="Home.vue";var Q=I.exports;a["a"].use(w["a"]);var O=[{path:"*",name:"404",component:function(){return n.e("chunk-e325").then(n.bind(null,"cc86"))}},{path:"/",component:Q,meta:{title:"水印之家"},children:[{path:"/",name:"index",component:function(){return Promise.resolve().then(n.bind(null,"b1f8"))},meta:{title:"水印之家"}},{path:"/xianp",name:"xianp",component:function(){return n.e("chunk-06c6").then(n.bind(null,"ebf6"))},meta:{title:"辣品"}},{path:"/circles",name:"circles",component:function(){return n.e("chunk-d3d4").then(n.bind(null,"7dc6"))},meta:{title:"圈圈"}},{path:"/mine",name:"mine",component:function(){return n.e("chunk-2518").then(n.bind(null,"3cc8"))},meta:{title:"我的"}},{path:"/newsDetail/:id",name:"newsDetail",component:function(){return n.e("chunk-2b05").then(n.bind(null,"d6db"))},props:!0,meta:{title:"新闻详情"}}]},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],q=new w["a"]({routes:O,scrollBehavior:function(t,e,n){return n||(i=location.hash.indexOf("xianp")>-1?window.xianpScTop:location.hash.indexOf("circle")>-1?window.circleScTop:window.homeScTop,{x:0,y:i});var i}}),$=n("b970"),D=(n("8590"),n("fe3c")),H=n.n(D);n("bc3a");a["a"].use($["b"]),a["a"].config.productionTip=!1,H.a.attach(document.body),new a["a"]({router:q,store:c["a"],watch:{$route:function(t){this.changeLoading(),t.meta.title&&(document.title=t.meta.title)}},methods:Object(i["a"])({},Object(r["b"])(["changeLoad"]),{changeLoading:function(){var t=this;this.changeLoad(!0),this.$nextTick(function(){setTimeout(function(){t.changeLoad(!1)},500)})}}),mounted:function(){this.changeLoading()},render:function(t){return t(b)}}).$mount("#app")},6727:function(t,e,n){"use strict";var i=n("2a8a"),a=n.n(i);a.a},7299:function(t,e,n){"use strict";var i=n("c5f3"),a=n.n(i);a.a},"7c55":function(t,e,n){"use strict";var i=n("d3dd"),a=n.n(i);a.a},"9ead":function(t,e,n){},b1c2:function(t,e){t.exports="data:image/gif;base64,R0lGODlhEgASAIABAKa4zP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAwABACwAAAAAEgASAEACJwyOoYa3D6N8rVqgLp5M2+x9XcWBTTmGTqqa6qqxFInWUMzhk76TBQAh+QQJAwABACwAAAAAEgASAEACKQyOoYa3D6NUrdHqGJ44d3B9m1ZNZGZ+YXmKnsuq44qaNqSmnZ3rllIAACH5BAkDAAEALAAAAAASABIAQAIpDI6hhrcPo2zt0cRuvG5xoHxfyE2UZJWeKrLtmZ3aWqG2OaOjvfPwUgAAIfkECQMAAQAsAAAAABIAEgBAAigMjqGGtw8jbC3SxO67bnLFhQD4bZRkap4qli37qWSF1utZh7a+41ABACH5BAkDAAEALAAAAAASABIAQAIqDI6hhrcP42pNMgoUdpfanXVgJSaaZ53Yt6kj+a6lI7tcioN5m+o7KSkAACH5BAkDAAEALAAAAAASABIAQAIoDI6hhrcPI2tOKpom3vZyvVEeBgLdKHYhGjZsW63kMp/Sqn4WnrtnAQAh+QQJAwABACwAAAAAEgASAEACKAyOocvtCCN0TB5lM6Ar92hYmChxX2l6qRhqYAui8GTOm8rhlL6/ZgEAIfkECQMAAQAsAAAAABIAEgBAAigMjqHL7QgjdEyeJY2leHOdgZF4KdYJfGTynaq7XmGctuicwZy+j2oBACH5BAkDAAEALAAAAAASABIAQAInDI6hy+0II3RMHrosUFpjbmUROJFdiXmfmoafMZoodUpyLU5sO1MFACH5BAkDAAEALAAAAAASABIAQAImDI6hy+2GDozyKZrspBf7an1aFy2fuJ1Z6I2oho2yGqc0SYN1rRUAIfkECQMAAQAsAAAAABIAEgBAAiYMjqHL7W+QVLJaAOnVd+eeccliRaXZVSH4ee0Uxg+bevUJnuIRFAAh+QQJAwABACwAAAAAEgASAEACKoyBacvtnyI4EtH6QrV6X5l9UYgt2DZ1JRqqIOm1ZUszrIuOeM6x8x4oAAAh+QQJAwABACwAAAAAEgASAEACKIwNqcftryJAMrFqG55hX/wcnlN9UQeipZiGo9vCZ0hD6TbiN7hSZwEAIfkECQMAAQAsAAAAABIAEgBAAiiMH6CL7Z+WNHK2yg5WdLsNQB12VQgJjmZJiqnriZEl1y94423aqlwBACH5BAkDAAEALAAAAAASABIAQAIrjH+gi+2+IjCSvaoo1vUFPHnfxlllBp5mk4qt98KSSKvZCHZ4HtmTrgoUAAAh+QQFAwABACwAAAAAEgASAEACKIyPAcvpr5g0csJYc8P1cgtpwDceGblQmiey69W6oOfEon2f6KirUwEAIfkECQMAAQAsAAAPAAgAAwBAAgSMj6lXACH5BAkDAAEALAAAAAASABIAQAIYjI+JwK0Po5y02glUvrz7bzXiBpbLaD4FACH5BAkDAAEALAAAAAASABIAQAImjI8By8qfojQPTldzw/VymB3aCIidN6KaGl7kSnWpC6ftt00zDRUAIfkECQMAAQAsAAAAABIAEgBAAiaMjwHLyp+iNA9WcO6aVHOneWBYZeUXouJEiu1lWit7jhCX4rMEFwAh+QQJAwABACwAAAAAEgASAEACJ4yPAcvKn6I0r1pA78zWQX51XrWBSzl+Uxia7Jm+mEujW3trubg3BQAh+QQFAwABACwAAAAAEgASAEACJwyOoYa3D6N8rVqgLp5M2+x9XcWBTTmGTqqa6qqxFInWUMzhk76TBQA7"},b1f8:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainC",on:{click:function(e){t.mainCLK(e)}}},[n("headerT",{ref:"headfn"}),n("van-pull-refresh",{attrs:{disabled:t.refreshFlag},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("van-list",{attrs:{finished:t.finished,offset:10},on:{load:t.onLoadv},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("van-swipe",{attrs:{autoplay:3e3}},t._l(t.swipeList,function(t,e){return n("van-swipe-item",{key:e},[n("img",{attrs:{src:t.path}})])})),t._l(t.dataList,function(e,i){return n("div",{key:i,staticClass:"item",attrs:{nid:e.id},on:{click:function(n){t.newsDetail(e.id)}}},[n("p",[n("img",{attrs:{src:e.img,alt:""}})]),n("div",[n("span",[t._v(t._s(e.title))]),t.dataFirst==i+1?n("p",{staticClass:"dataFirst"},[t._v("置顶")]):n("p",[t._v(t._s(e.time))]),n("p",[t._v(t._s(e.num)+"评")])])])}),t.finished?n("div",[t._v("没有更多数据了")]):t._e()],2)],1),t._t("default")],2)},a=[],o=(n("cadf"),n("551c"),n("097d"),n("2b0e")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headerT"},[n("div",{staticClass:"hTop",class:t.uphide},[t._m(0),n("div",{staticClass:"div4"},[n("div",[n("i",{staticClass:"iconfont icon-rili",attrs:{today:t.today}}),n("i",{staticClass:"iconfont icon-search"}),n("i",{staticClass:"iconfont icon-diandian"})])])]),n("div",{staticClass:"titlepar",style:t.titleparstyle},[n("div",{staticClass:"title htitle"},[t._l(t.titleList,function(e,i){return n("div",{key:e.id,staticClass:"tcenter",class:{titlenow:t.activetitle==e},on:{click:function(n){t.clkTitle(e,n,i)}}},[t._v(t._s(e.name))])}),n("span",{staticClass:"titleline",style:t.titleline})],2),n("div",{staticClass:"menutitle",style:{display:"showmenu"==t.menuclass?"block":"none"}},[t._v("长按栏目排序或删除")])]),n("span",{staticClass:"arrow",class:t.arrow,style:t.arrowstyle,on:{click:t.showmenu}}),n("div",{staticClass:"menupar",style:{visibility:"showmenu"==t.menuclass?"visible":"hidden"}},[n("ul",{staticClass:"menu",class:t.menuclass},t._l(t.titleList,function(e){return n("li",{key:e.id,staticClass:"menu-item",class:{titleselect:t.activetitle==e},on:{click:function(n){t.selectTitle(e,n)}}},[t._v(t._s(e.name))])}))]),t._t("default")],2)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{calss:"div8"}},[n("i",{staticClass:"iconfont icon-drinks logo"}),n("span",[t._v("之家")])])}],c=(n("7f7f"),n("ac6a"),n("c93e")),l=n("2f62"),u=n("c0d6"),f={name:"headerT",components:{},store:u["a"],data:function(){return{msg:"Welcome to headerT",today:"",titleList:[{name:"最新"},{name:"排行榜"},{name:"华为"},{name:"上热评"},{name:"评测室"},{name:"发布会"},{name:"阳台"},{name:"手机"},{name:"数码"},{name:"极客学院"},{name:"VR"},{name:"智能汽车"},{name:"电脑"},{name:"京东精选"},{name:"Windows"}],uphide:"",titleparstyle:"",titleline:"",arrow:"iconfont icon-down",arrowstyle:"",menutitle:"",menuclass:"hidemenu",activetitle:""}},watch:{},created:function(){this.activetitle=this.titleList[0];var t=(new Date).getDate();this.today=+t>10?t:"0"+t},mounted:function(){},methods:Object(c["a"])({},Object(l["b"])(["setHomeTab"]),{showmenu:function(t){this.arrow.indexOf("down")>0?(this.arrowstyle="transition:.3s ease;transform:rotate(180deg)",this.titleparstyle="overflow-x:hidden;",this.arrow="iconfont icon-up",this.menuclass="showmenu",document.body.style.overflow="hidden"):(this.arrowstyle="transition:.3s ease;transform:rotate(0deg)",this.titleparstyle="overflow-x:scroll;",this.arrow="iconfont icon-down",this.menuclass="hidemenu",document.body.style.overflow="auto")},clkTitle:function(t,e,n){var i=e.currentTarget,a=(i.parentNode.offsetLeft,i.offsetLeft),o=parseInt(this.getStyle(i,"width"));this.activetitle=t;var s=window.innerWidth;document.querySelector(".title").scrollLeft=a-s/2,this.$store.state.homeHeader.scrollLeft=a-s/2,this.titleline="width: ".concat(o/2,"px;transition:.3s ease;transform:translateX(").concat(a+o/4,"px)")},selectTitle:function(t,e){var n,i=this,a=e.currentTarget;this.arrowstyle="transition:.3s ease;transform:rotate(0deg)",this.titleparstyle="overflow-x:scroll;",this.activetitle=t,this.arrow="iconfont icon-down",this.menuclass="hidemenu",this.titleList.forEach(function(t,e){t.name==a.innerText&&(n=i.titleList.indexOf(t))});var o=document.querySelector(".title").querySelectorAll("div")[n],s=(o.parentNode.offsetLeft,parseInt(this.getStyle(o,"width")));document.querySelector(".title").scrollLeft=o.offsetLeft-2*s,this.$store.state.homeHeader.scrollLeft=o.offsetLeft-2*s,this.titleline="width:".concat(s/2,"px;transform:translateX(").concat(o.offsetLeft+s/4,"px)"),document.body.style.overflow="auto"},getStyle:function(t,e){var n;return n=e?window.getComputedStyle(t,!1)[e]:window.getComputedStyle(t,!1),n},goleft:function(){var t=this;this.$nextTick(function(){document.querySelector(".title.htitle").scrollLeft=t.$store.state.homeHeader.scrollLeft})}}),activated:function(){this.goleft()}},d=f,A=(n("0b68"),n("2877")),h=Object(A["a"])(d,s,r,!1,null,null,null);h.options.__file="header-t.vue";var m=h.exports,p=n("b970");o["a"].use(p["a"]);var v={name:"mainC",components:{headerT:m},data:function(){return{scrollTop:"",refreshFlag:!1,loading:!1,finished:!1,isLoading:!1,swipeList:[{url:"javascript:;",path:"images/s1.jpg"},{url:"javascript:;",path:"images/s2.jpg"},{url:"javascript:;",path:"images/s3.jpg"},{url:"javascript:;",path:"images/s4.jpg"},{url:"javascript:;",path:"images/s5.jpg"},{url:"javascript:;",path:"images/s6.jpg"},{url:"javascript:;",path:"images/s7.jpg"}],dataFirst:1,dataList:[{id:"1",title:"《海岛大亨6》PC版跳票至2019年1月，主机版明夏发售",img:"images/l1.jpg",time:"22:54",num:"0"},{id:"2",title:"酷派Mega 5A发布：配展讯处理器，印度独占",img:"images/l2.jpg",time:"22:24",num:"2"},{id:"3",title:"国产红芯浏览器被指套壳谷歌Chrome，你怎么看？",img:"images/l3.jpg",time:"22:20",num:"10"},{id:"4",title:"WhatsApp创始人仍受雇于FaceBook：未放弃数亿美元股票",img:"images/l4.jpg",time:"21:54",num:"20"},{id:"5",title:"华硕ROG Zephrus S电竞笔记本正式发布，外观刚劲霸气",img:"images/l5.jpg",time:"21:25",num:"450"},{id:"6",title:"日本35岁男子要和初音结婚：已“同居”几月，将举办婚礼",img:"images/l6.jpg",time:"21:21",num:"123"},{id:"7",title:"京东高管解读财报：京东与谷歌在很多方面存在互补",img:"images/l7.jpg",time:"21:14",num:"56"},{id:"8",title:"台媒：今年只有OLED苹果iPhone可使用Apple Pencil",img:"images/l8.jpg",time:"20:01",num:"76"},{id:"9",title:"医学泰斗被外卖员撞伤致死，饿了么致歉",img:"images/l9.jpg",time:"18:54",num:"189"},{id:"10",title:"人脸识别机器人毁掉了我玩“找茬”最后的乐趣",img:"images/l10.jpg",time:"16:53",num:"156"}],sint:""}},created:function(){var t=this;this.sint=setInterval(function(){t.scrollTop=window.scTop},1)},watch:{scrollTop:function(t){this.refreshFlag=!(t<=10)}},methods:{onLoadv:function(){var t=this;console.log("scrollTop: ",document.documentElement.scrollTop),setTimeout(function(){for(var e=0;e<10;e++)t.dataList.push(t.dataList[e]);t.loading=!1,t.dataList.length>=40&&(t.finished=!0)},500)},onRefresh:function(){var t=this;setTimeout(function(){t.$toast("刷新成功"),t.isLoading=!1},500)},mainCLK:function(t){-1==t.target.className.indexOf("arrow")&&(this.$refs.headfn.arrow="iconfont icon-down",this.$refs.headfn.menuclass="hidemenu",document.body.style.overflow="auto")},newsDetail:function(t){this.$router.push("/newsDetail/".concat(t))}},beforeDestroy:function(){clearInterval(this.sint)}},g=v,b=(n("7299"),Object(A["a"])(g,i,a,!1,null,null,null));b.options.__file="main-c.vue";e["default"]=b.exports},c0d6:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=n("2f62");i["a"].use(a["a"]);var o={loadShow:!1,homeHeader:{scrollLeft:""},xianpHeader:{scrollLeft:""}},s={changeLoad:function(t,e){t.loadShow=e},setHomeTab:function(t,e){t.homeHeader.scrollLeft=e},setXianTab:function(t,e){t.xianpHeader.scrollLeft=e}},r={};e["a"]=new a["a"].Store({state:o,mutations:s,actions:r})},c5f3:function(t,e,n){},d3dd:function(t,e,n){},d87e:function(t,e,n){},de16:function(t,e,n){"use strict";var i=n("15c5"),a=n.n(i);a.a}});
//# sourceMappingURL=app.f624d3f5.js.map