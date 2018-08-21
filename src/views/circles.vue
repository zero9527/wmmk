<template>
  <div class="circles">
    <div class='headerT headerQ'>
      <div class='hTop' :class='uphide'>
        <div calss='div1'>
          <span>圈圈</span>
        </div>
        <div class='div2'>
          <!-- <i class='iconfont icon-rili'></i> -->
          <i class='iconfont icon-search'></i>
        </div>
      </div>
      <ul class='typeq'>
        <li v-for='(head, index) in headList' 
        :key='index'
        @click='headCLK(head.id)'>
          <van-icon :name="head.icon" />
          <p>{{head.name}}</p>
          <span>+{{head.num}}</span>
        </li>
      </ul>
      <div class='titlepar1' :style='titleparstyle'>
        <div class='title1 titlec'>
          <div class='tcenter' 
          v-for='(item, index) in titleList'
          @click='clkTitle2(item, $event, index)' 
          :class='{titlenow: activetitle == item}' :key='item.id'>{{item.name}}</div>
          <span class='titleline2' :style='titleline'></span>
        </div>
      </div>
    </div>
    <!-- 下拉刷新 -->
    <van-pull-refresh
      v-model="isLoading"
      :disabled='refreshFlag'
      @refresh="onRefresh">
      <!-- 列表 包含上拉加载 -->
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad">
        <ul class='itemc' v-for='(item, index) in cdataList' :key='index'>
          <li>
            <img :src="item.head" alt="">
            <span>{{item.name}}</span>
            <p>{{item.headType}}</p>
          </li>
          <li>
            [{{item.textType}}]&nbsp;{{item.content}}
          </li>
          <li>
            <span>{{item.addtime}}</span>
            <b>{{item.talkman}}</b>
            <span>{{item.updatetime}}</span>
            <p>{{item.num}}回帖</p>
          </li>
        </ul>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: 'circles',
  data () {
    return {
      headList:[],
      titleList: [
        {name: '最新回复'},
        {name: '热帖'},
        {name: '最新发表'},
        {name: '精华'},
      ],
      cdataList: [],
      uphide: '',                   // logo栏下滑消失
      titleparstyle: '',            // titlepar样式(是否滚动)
      titleline: '',                // 栏目下面的横线
      activetitle: '',  // 下拉栏目选中
      headActive: '',   // 圈圈选中
      scrollTop: '',
      refreshFlag: false,
      loading: false,
      finished: false,
      isLoading: false,
      sint: ''
    }
  },
  created() {
    this.activetitle = this.titleList[0];
    this.headList = [
      {id: 1,name:'畅谈',num: '4768',icon:'coupon'},
      {id: 2,name:'极客圈',num: '168',icon:'card'},
      {id: 3,name:'Win10手机圈',num: '68',icon:'hot'},
      {id: 4,name:'Win10圈',num: '124',icon:'gift-card'},
      {id: 5,name:'安卓圈',num: '432',icon:'shop-collect'},
      {id: 6,name:'IOS圈',num: '402',icon:'credit-pay'},
      {id: 7,name:'软媒产品',num: '39',icon:'underway'},
      {id: 8,name:'站务处理',num: '22',icon:'warn'},
      {id: 9,name:'咨询投递',num: '0',icon:'checked'},
    ];
    
    this.cdataList = [
      {id: '1',name:'哈哈',content: '《海岛大亨6》PC版跳票至2019年1月',headType:'畅谈',textType:'杂谈',head:'images/l1.jpg',addtime: '12:59',updatetime:'13:12', num: '290', talkman: '嘿嘿'},
      {id: '2',name:'祖国的花朵',content: '酷派Mega 5A发布',headType:'IOS圈',textType:'windows',head:'images/l2.jpg',addtime: '09:12',updatetime:'10:12', num: '2', talkman: '我是谁'},
      {id: '3',name:'铁壁阿童木',content: '国产红芯浏览器被指套壳谷歌Chrome，你怎么看？',headType:'畅谈',textType:'安卓',head:'images/l3.jpg',addtime: '18:45',updatetime:'19:12', num: '10', talkman: '明天是几号'},
    ];

    this.sint = setInterval(() => {
      // 解决任意向上滑动都会下拉刷新问题
      this.scrollTop = window.scTop;
    },1)
  },
  watch: {
    scrollTop: function(val) {
      // console.log('val: ',val);
      this.refreshFlag = val <= 10 ? false : true;
    }
  },
  mounted() {
    this.titlelineInit();
  },
  methods: {
    // 未展开时点击
    clkTitle2 (item, e) {
      let el = e.currentTarget;
      let posleft = el.parentNode.offsetLeft;
      let osleft = el.offsetLeft;
      let width = parseInt(this.getStyle(el, 'width'));
      // console.log('width: ',width);
      this.activetitle = item;
      let w = window.innerWidth;
      document.querySelector('.title1').scrollLeft = osleft-w/2;
      this.$store.state.xianpHeader.scrollLeft = osleft-w/2;
      this.titleline = `width: ${width-8}px;transition:.3s ease;transform:translateX(${osleft+4}px)`;
    },
    headCLK(id) {
      console.log(`id: ${id}`);
    },
    titlelineInit() {
      this.$nextTick(() => {
        let titleitem = document.querySelector('.titlec').querySelectorAll('.tcenter')[0];
        // console.log('titleitem: ',titleitem.offsetLeft);
        document.querySelector('.titleline2')
        .setAttribute('style', `transform:translateX(${titleitem.offsetLeft+4}px); 
        width: ${titleitem.offsetWidth-8}px;`);
      })
    },
    onLoad() {
      // 上拉加载
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.cdataList.push(this.cdataList[i]);
        }
        this.loading = false;

        if (this.cdataList.length >= 40) {
          this.finished = true; // 结束
          this.$toast('没有更多数据了，休息一下吧');
        }
      }, 500);
    },
    onRefresh() {
      // 下拉加载
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    },
    // 获取样式
    getStyle (el, attr) {
      var style;
      if(attr){
        style = window.getComputedStyle(el, false)[attr];

      }else{
        style = window.getComputedStyle(el, false);
      }
      return style;
    },
    updated(){
      this.titlelineInit();
    },
    activated(){
      this.titlelineInit();
    },
    beforeDestroy() {
      clearInterval(this.sint);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.circles {
  width: 100%;
  padding-top: 50vmin;
}
.typeq {
  width: 100%;
  // height: 26vmin;
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  margin: 10px 0;
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  >li {
    display: inline-block;
    padding: 0 2px;
    margin: 0;
    margin-right: 6px;
    padding: 0 6px;
    user-select: none;
    &:active {
      background: #f6f6f6;
    }
    >i {
      font-size: 8vw;
    }
    >p {
      margin: 4px 0;
    }
    >span {
      color: red;
    }
  }
}
.headerQ {
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff;
  box-shadow: 0 1px 10px rgba(0,0,0,.1);
  transition: transform .3s ease;
  z-index: 99;
  .hTop {
    display: flex;
    justify-content: space-between;
    >div>span {
      color: #fa2c2c;
    }
    >.div2 {
      white-space: nowrap;
      >i {
        margin-right: 1rem;
      }
    }
  }
  &>div {
    min-height: 10vmin;
    padding: 2vmin;
  }
  .logo {
    margin: 0 4px;
    color: red;
    font-weight: bold;
  }
  .icon-rili,
  .icon-search,
  .icon-diandian {
    width: 33.33%;
    display: inline-block;
    position: relative;
    text-align: center;
    font-size: 1.2rem !important;
  }
  .titlepar1 {
    width: 100%;
    height: 10vmin;
    // min-height: 6vh;
    position: relative;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 10%;
    overflow-x: hidden;
    .title1 {
      height: 10vmin;
      width: 100vw;
      line-height: 10vmin;
      position: relative;
      overflow-y: hidden;
      overflow-x: scroll;
      white-space: nowrap;
   
      &>div {
        display: inline-block;
        padding: 0 2px;
        margin-right: 8vw;
      }
    }
    .menutitle {
      width: 100%;
      height: 12vmin;
      line-height: 12vmin;
      position: fixed;
      top: 11vmin;
      left: 0;
      display: none;
      background: #fbf9fe;
      text-align: center;
    }
  }
}

.titlenow {
  color: #fa2c2c;
}
.titleline2 {
  height: 2.6px;
  width: 3.2rem;
  display: block;
  position: absolute;
  bottom: 4px;
  border-radius: 30px;
  // transform: translateX(7.75px);
  background: #fa2c2c;
}
.titleselect {
  color: #fff;
  border-radius: 4px;
  background: #fa2c2c;
}
.itemc {
  position: relative;
  padding: 10px 5%;
  text-align: left;
  border-bottom: 1px solid #eee;
  >li {
    display: block !important;
    &:nth-of-type(1) {
      font-size: .8rem;
      >p {
        position: absolute;
        right: 5%;
        top: 0;
        padding: 2px 8px;
        border-radius: 20px;
        background: #f6f6f6;
      }
    }
    &:nth-of-type(2){
      margin: 10px 0;
    }
    &:nth-of-type(3) {
      font-size: .8rem;
      >p {
        position: absolute;
        right: 5%;
        bottom: 0;
        color: #999;
      }
    }
    >span {
      color: #999;
      vertical-align: middle;
    }
    >img {
      width: 8vw;
      height: 8vw;
      margin-right: 8px;
      border-radius: 50%;
      vertical-align: middle;
    }
    >b {
      font-weight: normal;
      margin: 0 8px;
    }
  }
}
.circles {
  .headHide {
    -webkit-transform: translateY(-10vmin);
    transform: translateY(-38vmin);
  }
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0;
}
a {
  color: #42b983;
}
</style>
