(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06c6"],{3329:function(t,e,i){},"3f23":function(t,e,i){"use strict";var a=i("3329"),s=i.n(a);s.a},ebf6:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"xianp"},[i("div",{staticClass:"headerT headerX"},[i("div",{staticClass:"hTop",class:t.uphide},[t._m(0),t._m(1)]),i("div",{staticClass:"titlepar1",style:t.titleparstyle},[i("div",{staticClass:"title1"},[t._l(t.titleList,function(e,a){return i("div",{key:e.id,staticClass:"tcenter",class:{titlenow:t.activetitle==e},on:{click:function(i){t.clkTitle1(e,i,a)}}},[t._v(t._s(e.name))])}),i("span",{staticClass:"titleline1",style:t.titleline})],2)])]),i("van-swipe",{attrs:{autoplay:3e3}},t._l(t.swipeList,function(t,e){return i("van-swipe-item",{key:e},[i("img",{attrs:{src:t.path}})])})),i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[i("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.dataList,function(e,a){return i("div",{key:a,staticClass:"itemx"},[i("p",[i("img",{attrs:{src:e.img,alt:""}})]),i("div",[i("span",[t._v(t._s(e.title))]),i("div",[i("p",[i("span",[i("s",[t._v(t._s((+e.money).toFixed(2)))]),t._v("（"+t._s(100*(e.aftermoney/e.money).toFixed(2))+"折）")]),i("span",[t._v(t._s(e.num)+"月销")])]),i("p",[i("span",[t._v("券后 "+t._s(e.aftermoney)+" 元")]),i("span",[t._v("领 "+t._s(e.salemoney)+" 元券")])])])])])}))],1)],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{calss:"div1"}},[i("span",[t._v("咸品")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"div2"},[i("i",{staticClass:"iconfont icon-search"})])}],n=(i("cadf"),i("551c"),i("097d"),i("c0d6"),{name:"xianp",data:function(){return{msg:"辣品",loading:!1,finished:!1,isLoading:!1,swipeList:[{url:"javascript:;",path:"images/s1.jpg"},{url:"javascript:;",path:"images/s2.jpg"},{url:"javascript:;",path:"images/s3.jpg"},{url:"javascript:;",path:"images/s4.jpg"},{url:"javascript:;",path:"images/s5.jpg"},{url:"javascript:;",path:"images/s6.jpg"},{url:"javascript:;",path:"images/s7.jpg"}],titleList:[{name:"全部"},{name:"辣榜"},{name:"1元包邮"},{name:"9块9"},{name:"19块9"},{name:"福包"}],dataList:[],uphide:"",titleparstyle:"",titleline:"",activetitle:""}},created:function(){var t=this;this.activetitle=this.titleList[0];var e=[{id:"1",title:"《海岛大亨6》PC版跳票至2019年1月，主机版明夏发售",img:"images/l1.jpg",money:"59",num:"290",salemoney:"30"},{id:"2",title:"酷派Mega 5A发布：配展讯处理器，印度独占",img:"images/l2.jpg",money:"99",num:"2",salemoney:"10"},{id:"3",title:"国产红芯浏览器被指套壳谷歌Chrome，你怎么看？",img:"images/l3.jpg",money:"80",num:"10",salemoney:"20"},{id:"4",title:"WhatsApp创始人仍受雇于FaceBook：未放弃数亿美元股票",img:"images/l4.jpg",money:"210",num:"20",salemoney:"50"},{id:"5",title:"华硕ROG Zephrus S电竞笔记本正式发布，外观刚劲霸气",img:"images/l5.jpg",money:"68",num:"450",salemoney:"16"},{id:"6",title:"日本35岁男子要和初音结婚：已“同居”几月，将举办婚礼",img:"images/l6.jpg",money:"699",num:"123",salemoney:"88"},{id:"7",title:"京东高管解读财报：京东与谷歌在很多方面存在互补",img:"images/l7.jpg",money:"25",num:"56",salemoney:"5"},{id:"8",title:"台媒：今年只有OLED苹果iPhone可使用Apple Pencil",img:"images/l8.jpg",money:"102",num:"76",salemoney:"22"},{id:"9",title:"医学泰斗被外卖员撞伤致死，饿了么致歉",img:"images/l9.jpg",money:"236",num:"189",salemoney:"30"},{id:"10",title:"人脸识别机器人毁掉了我玩“找茬”最后的乐趣",img:"images/l10.jpg",money:"356",num:"156",salemoney:"60"}];e.forEach(function(e){t.dataList.push(e),e["aftermoney"]=e.money-e.salemoney})},mounted:function(){var t=document.querySelector(".title1").querySelectorAll(".tcenter")[0],e=t.offsetLeft;document.querySelector(".titleline1").style.transform="translateX(".concat(e+4,"px)")},methods:{clkTitle1:function(t,e){var i=e.currentTarget,a=(i.parentNode.offsetLeft,i.offsetLeft),s=parseInt(this.getStyle(i,"width"));this.activetitle=t;var n=window.innerWidth;document.querySelector(".title1").scrollLeft=a-n/2,this.$store.state.xianpHeader.scrollLeft=a-n/2,this.titleline="width: ".concat(s-8,"px;transition:.3s ease;transform:translateX(").concat(a+4,"px)")},getStyle:function(t,e){var i;return i=e?window.getComputedStyle(t,!1)[e]:window.getComputedStyle(t,!1),i},onLoad:function(){var t=this;setTimeout(function(){for(var e=0;e<10;e++)t.dataList.push(t.dataList[e]);t.loading=!1,t.dataList.length>=40&&(t.finished=!0,t.$toast("没有更多数据了，休息一下吧"))},500)},onRefresh:function(){var t=this;setTimeout(function(){t.$toast("刷新成功"),t.isLoading=!1},500)}},activated:function(){document.querySelector(".title1").scrollLeft=this.$store.state.xianpHeader.scrollLeft}}),l=n,o=(i("3f23"),i("2877")),r=Object(o["a"])(l,a,s,!1,null,null,null);r.options.__file="xianp.vue";e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-06c6.980ac9b7.js.map