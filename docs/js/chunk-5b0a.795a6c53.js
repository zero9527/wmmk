(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b0a"],{"2f70":function(t,e,i){"use strict";var a=i("e2d0"),s=i.n(a);s.a},"865f":function(t,e,i){"use strict";var a=i("e4e6"),s=i.n(a);s.a},ac6a:function(t,e,i){for(var a=i("cadf"),s=i("0d58"),n=i("2aba"),o=i("7726"),l=i("32e9"),r=i("84f2"),c=i("2b4c"),d=c("iterator"),m=c("toStringTag"),u=r.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=s(p),v=0;v<f.length;v++){var h,g=f[v],_=p[g],b=o[g],L=b&&b.prototype;if(L&&(L[d]||l(L,d,u),L[m]||l(L,m,g),r[g]=u,_))for(h in a)L[h]||n(L,h,a[h],!0)}},d6db:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"newsDetail"},[i("div",{staticClass:"headerT"}),i("h3",{staticClass:"title"},[t._v(t._s(t.info.title))]),i("p",{staticClass:"newsattr"},[t._v(t._s(t.info.time)+" "+t._s(t.info.editor))]),i("div",{staticClass:"content",domProps:{innerHTML:t._s(t.info.content)}}),i("p",{staticClass:"attr"},[i("span",[t._v("责任编辑："+t._s(t.info.editor))]),i("span",{staticClass:"mbtn"},[t._v("我要纠错")])]),i("div",{staticClass:"score"},[i("p",[t._v("打分后显示文章质量得分，当前68人打分")]),i("div",[i("span",{staticClass:"mbtn",on:{touchend:function(e){t.score(0)}}},[t._v("无价值")]),i("span",{staticClass:"mbtn",on:{touchend:function(e){t.score(1)}}},[t._v("还可以")]),i("span",{staticClass:"mbtn",on:{touchend:function(e){t.score(2)}}},[t._v("有价值")])])]),i("div",{staticClass:"rela"},[i("h3",[t._v("相关文章")]),t._l(t.rela,function(e,a){return i("ul",{key:a},[i("li",[i("img",{attrs:{src:e.img,alt:""}})]),i("li",[i("p",[t._v(t._s(e.title))]),i("span",[t._v(t._s(e.date))])])])})],2),i("div",{staticClass:"talk"},[i("h3",[t._v("最热评论")]),t._l(t.hotTalk,function(e,a){return i("ul",{key:a},[i("li",[i("img",{attrs:{src:e.head,alt:""}}),i("p",{staticClass:"level"},[t._v("Lv."+t._s(e.level))])]),i("li",[i("div",[i("span",[t._v(t._s(e.name)+" "+t._s(e.device))]),i("p",[t._v(t._s(e.location)+" "+t._s(e.time))]),i("b",[t._v(t._s(e.agree)+"顶")])]),i("p",[t._v(t._s(e.content))])])])}),t._m(0)],2),i("div",{staticClass:"footerB"},[i("van-icon",{attrs:{name:"edit"}}),i("input",{attrs:{type:"text",placeholder:"写评论"}}),i("span",[i("van-icon",{attrs:{name:"chat"}}),i("van-icon",{attrs:{name:"like-o"}}),i("van-icon",{attrs:{name:"share"}})],1)],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",{staticStyle:{"font-weight":"normal",color:"#999"}},[t._v("查看更多评论")])])}],n=(i("ac6a"),i("cadf"),i("551c"),i("097d"),{name:"newsDetail",components:{},props:["id"],data:function(){return{info:{},rela:[],hotTalk:[]}},created:function(){this.id=this.$route.params.id,this.info={title:"Pixelbook更多细节曝光：4K屏、8GB内存，还有背光键盘",time:"2018-08-16 20:56",editor:"浮生",content:'IT之家8月16日消息 上个月爆料大神Evan Blass曾表示，第二代Pixelbook将会于今年秋天加入产品线，它将拥有更窄的边框。今日XDA在一篇报道中，总结了这款产品被曝光出来的一些详细特性。\n      <p><img width=\'100%\' src="images/s5.jpg" alt=""></p>\n▲图为初代Pixelbook <br /><br />\n文中称，之前有Reddit用户在Chromium的boards.yaml文件中发现了一款名为Atlas的Chromebook产品，其中还显示其分辨率为4K，且不支持SD卡。\n<p><img width=\'100%\' src="images/s2.jpg" alt=""></p>\n文中提到另外一则消息来自Chrome Unboxed，称Atlas采用了Nanya NT6CL256T32CM-H1 8GB LPDDR3内存。但尽管其他的Chromebook的产品还未提供这一级别的内存配置，初代的Pixelbook的内存已经是8GB起步了。\n<p><img width=\'100%\' src="images/s6.jpg" alt=""></p>\n其他消息还显示，Atlas将具备呼叫谷歌助手专用的按键，并将配备背光键盘。XDA表示，目前新一代Pixelbook的候选产品有Nocturne、Atlas和Cheza三款，后者据称是<a href=\'javascript:;\' style=\'color: red;border-bottom: 1px solid red;\'>一款类似于Windows二合一笔记本的产品。</a>'},this.rela=[{id:"1",title:"数据中心有个老大难，谷歌要用人工智能解决它",img:"images/l1.jpg",date:"2018.8.16"},{id:"2",title:"谷歌配屏幕只能音响曝光：台湾制造商代工",img:"images/l2.jpg",date:"2018.8.16"},{id:"3",title:"谷歌CEO皮差异：谷歌离在中国推搜索产品“还远呢”",img:"images/l3.jpg",date:"2018.8.15"}],this.hotTalk=[{id:"1",head:"images/l6.jpg",level:"11",name:"绿箭侠",device:"Gooogle Pixel2XL",location:"天津网友",time:"2018-8-15 22:12",content:"顶我上去",agree:"56"},{id:"2",head:"images/l7.jpg",level:"14",name:"猪猪侠",device:"IphoneX",location:"上海网友",time:"2018-8-15 20:02",content:"我才是二楼",agree:"656"},{id:"3",head:"images/l8.jpg",level:"23",name:"熊大",device:"Huawei P20pro",location:"广东网友",time:"2018-8-15 21:23",content:"捡到钱了",agree:"756"}]},mounted:function(){this.pageinit()},methods:{pageinit:function(){document.querySelector(".footerB").setAttribute("class","footerB footHide"),document.body.scrollTop=0,document.documentElement.scrollTop=0,document.querySelector(".footer_B").style.display="none"},score:function(t){var e=document.querySelector(".score").querySelectorAll(".mbtn");e.forEach(function(t){t.setAttribute("class","mbtn")}),e[+t].setAttribute("class","mbtn fred")}}}),o=n,l=(i("865f"),i("2f70"),i("2877")),r=Object(l["a"])(o,a,s,!1,null,"bbc47738",null);r.options.__file="newsDetail.vue";e["default"]=r.exports},e2d0:function(t,e,i){},e4e6:function(t,e,i){}}]);
//# sourceMappingURL=chunk-5b0a.795a6c53.js.map