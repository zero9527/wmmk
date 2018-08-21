<template>
  <div class="xianp">
    <div class="headerT headerX">
      <div class='hTop' :class='uphide'>
        <div calss='div1'>
          <span>咸品</span>
        </div>
        <div class='div2'>
          <!-- <i class='iconfont icon-rili'></i> -->
          <i class='iconfont icon-search'></i>
        </div>
      </div>
      <div class='titlepar1' :style='titleparstyle'>
        <div class='title1'>
          <div class='tcenter' 
          v-for='(item, index) in titleList'
          @click='clkTitle1(item, $event, index)' 
          :class='{titlenow: activetitle == item}' :key='item.id'>{{item.name}}</div>
          <span class='titleline1' :style='titleline'></span>
        </div>
      </div>
    </div>
    <!-- 下拉刷新 -->
    <van-pull-refresh
      v-model="isLoading"
      :disabled='refreshFlag'
      @refresh="onRefresh">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in swipeList" :key="index">
          <img :src="item.path" />
        </van-swipe-item>
      </van-swipe>
      <!-- 横向辣榜 -->
      <p class='btitle'>
        <span><i></i>辣榜</span>
        <span><i class='redbtn'>></i>更多</span>
      </p>
      <ul class='bList'>
        <li class='bitem' v-for='(item, index) in bList' :key='index'>
          <img :src='item.img' alt="">
          <div class='tag'>{{index+1}}</div>
          <p>{{item.title}}</p>
          <span>{{item.text}}</span>
          <b class='redbtn'>领{{item.sale}}元券</b>
        </li>
      </ul>
      <!-- 列表 包含上拉加载 -->
      <van-list
        v-model="loading"
        :finished="finished">
        <div class='itemx' v-for='(item, index) in xdataList' :key='index'>
          <p><img :src="item.img" alt=""></p>
          <div>
            <span>{{item.title}}</span>
            <div>
              <p>
                <span><s>{{(+item.money).toFixed(2)}}</s>（{{(item.aftermoney/item.money).toFixed(2)*100}}折）</span>
                <span>{{item.num}}月销</span>
              </p>
              <p>
                <span>券后 {{item.aftermoney}} 元</span>
                <span>领 {{item.salemoney}} 元券</span>
              </p>
            </div>
          </div>
        </div>
        <div v-if='finished' class='nomore'>没有更多数据了</div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'xianp',
  data () {
    return {
      msg: '辣品',
      scrollTop: '',
      refreshFlag: false,
      loading: false,
      finished: false,
      isLoading: false,
      swipeList: [
        {
          url: 'javascript:;',
          path: 'images/s1.jpg'
        },
        {
          url: 'javascript:;',
          path: 'images/s2.jpg'
        },
        {
          url: 'javascript:;',
          path: 'images/s3.jpg'
        },
        {
          url: 'javascript:;',
          path: 'images/s4.jpg'
        },
        {
          url: 'javascript:;',
          path: 'images/s5.jpg'
        },
        {
          url: 'javascript:;',
          path: 'images/s6.jpg'
        },
        {
          url: 'javascript:;',
          path: 'images/s7.jpg'
        }
      ],
      titleList: [
        {name: '全部'},
        {name: '辣榜'},
        {name: '1元包邮'},
        {name: '9块9'},
        {name: '19块9'},
        {name: '福包'}
      ],
      bList: [],  // 辣榜
      xdataList: [],
      uphide: '',                   // logo栏下滑消失
      titleparstyle: '',            // titlepar样式(是否滚动)
      titleline: '',                // 栏目下面的横线
      activetitle: '',  // 下拉栏目选中
      sint: ''
    }
  },
  created() {
    this.activetitle = this.titleList[0];
    let list = [
      {id: '1',title: '《海岛大亨6》PC版跳票至2019年1月，主机版明夏发售',img:'images/l1.jpg',money: '59', num: '290', salemoney: '30'},
      {id: '2',title: '酷派Mega 5A发布：配展讯处理器，印度独占',img:'images/l2.jpg',money: '99', num: '2', salemoney: '10'},
      {id: '3',title: '国产红芯浏览器被指套壳谷歌Chrome，你怎么看？',img:'images/l3.jpg',money: '80', num: '10', salemoney: '20'},
      {id: '4',title: 'WhatsApp创始人仍受雇于FaceBook：未放弃数亿美元股票',img:'images/l4.jpg',money: '210', num: '20', salemoney: '50'},
      {id: '5',title: '华硕ROG Zephrus S电竞笔记本正式发布，外观刚劲霸气',img:'images/l5.jpg',money: '68', num: '450', salemoney: '16'},
      {id: '6',title: '日本35岁男子要和初音结婚：已“同居”几月，将举办婚礼',img:'images/l6.jpg',money: '699', num: '123', salemoney: '88'},
      {id: '7',title: '京东高管解读财报：京东与谷歌在很多方面存在互补',img:'images/l7.jpg',money: '25', num: '56', salemoney: '5'},
      {id: '8',title: '台媒：今年只有OLED苹果iPhone可使用Apple Pencil',img:'images/l8.jpg',money: '102', num: '76', salemoney: '22'},
      {id: '9',title: '医学泰斗被外卖员撞伤致死，饿了么致歉',img:'images/l9.jpg',money: '236', num: '189', salemoney: '30'},
      {id: '10',title: '人脸识别机器人毁掉了我玩“找茬”最后的乐趣',img:'images/l10.jpg',money: '356', num: '156', salemoney: '60'},
    ]
    list.forEach((item) => {
      this.xdataList.push(item);
      item['aftermoney'] = item.money - item.salemoney;
    })

    let bList = [
      {id: 1,title: '【北京同仁堂】农家野生蜂蜜拉拉啊了',img:'images/l6.jpg',text: '券后39.8+10红包',sale: '10'},
      {id: 2,title: '韩国进口，LG竹子盐派按按压魔力',img:'images/l1.jpg',text: '券后38.8+10红包',sale: '30'},
      {id: 3,title: '灵感针织，轻便，畅跑，361',img:'images/l9.jpg',text: '券后79+10红包',sale: '30'},
      {id: 4,title: '【北京同仁堂】农家野生蜂蜜拉拉啊了',img:'images/l2.jpg',text: '券后59+10红包',sale: '40'},
      {id: 5,title: '【北京同仁堂】农家野生蜂蜜拉拉啊了',img:'images/l4.jpg',text: '券后14+10红包',sale: '5'},
      {id: 6,title: '【北京同仁堂】农家野生蜂蜜拉拉啊了',img:'images/l7.jpg',text: '券后34+10红包',sale: '18'},
      {id: 7,title: '【北京同仁堂】农家野生蜂蜜拉拉啊了',img:'images/l5.jpg',text: '券后69+10红包',sale: '20'},
      {id: 8,title: '【北京同仁堂】农家野生蜂蜜拉拉啊了',img:'images/l8.jpg',text: '券后19+10红包',sale: '12'},
    ];
    this.bList = bList;
    this.sint = setInterval(() => {
      // 解决任意向上滑动都会下拉刷新问题
      this.scrollTop = window.xianpScTop;
    },1)
  },
  watch: {
    scrollTop: function(val) {
      // console.log('val: ',val);
      this.refreshFlag = val <= 10 ? false : true;
      // 到底部了
      if(window.innerHeight + val >= document.body.scrollHeight - 1){
        if (this.xdataList.length >= 40) return;
        this.loading = true;
        this.onLoadv();
      }
    }
  },
  mounted() {
    // 设置初始 title下划线位置
    let titlediv = document.querySelector('.title1').querySelectorAll('.tcenter')[0];
    let w = titlediv.offsetLeft;
    document.querySelector('.titleline1').style.transform = `translateX(${w+4}px)`;
  },
  methods: {
    // 未展开时点击
    clkTitle1 (item, e) {
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
    onLoadv() {
      // 上拉加载
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.xdataList.push(this.xdataList[i]);
        }
        this.loading = false;

        if (this.xdataList.length >= 40) {
          this.finished = true; // 结束
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
  },
  activated() {
    // 恢复 header 的滚动位置
    document.querySelector('.title1').scrollLeft = this.$store.state.xianpHeader.scrollLeft;
  },
  deavticated() {
    clearInterval(this.sint);
  },
  beforeDestroy() {
    clearInterval(this.sint);
  }
} 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.xianp {
    width: 100%;
    padding-top: 22vmin;
    padding-bottom: 16vmin;
}
.headerX {
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
        margin-right: 16px;
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
.titleline1 {
  height: 2.6px;
  width: 1.6rem;
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

.van-swipe {
  cursor: pointer;
  &-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 150px;
  }
  img {
    width: 100%;
    // height: auto;
    height: 41vw;
    display: block;
    padding: 4px 6px;
    box-sizing: border-box;
    border: none;
    background: url('../../public/images/load0.gif') no-repeat;
    background-position: 50%;
    background-size: 10px 10px;
    pointer-events: none;
  }
}
&--vertical {
  height: 200px;
  .van-swipe-item {
    line-height: 200px;
  }
}
.btitle {
  margin: 0;
  padding: 2px 10px;
  overflow: hidden;
  color: red;
  &>span:nth-of-type(1) {
    float: left;
  }
  &>span:nth-of-type(2) {
    float: right;
    >i {
      padding: 0 2px;
      margin-right: 6px;
    }
  }
}
.bList {
  width: 100vw;
  display: flex;
  position: relative;
  padding: 10px;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  >.bitem {
    flex: 0 0 20vw;
    width: 24vw;
    margin: 0;
    margin-right: 10px;
    padding-right: 10px;
    font-size: .9rem;
    box-sizing: content-box;
    &:last-of-type {
      margin-right: 20px;
    }
    >.tag {
      top: 5%;
      padding-top: 2px;
      color: #fff;
      background: red;
    }
    >img {
      width: 100%;
      border-radius: 2px;
    }
    >p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin: 4px 0;
    }
    >span {
      width: 100%;
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: red;
      margin: 4px 0;
      overflow: hidden;
    }
    >b {
      font-weight: normal;
    }
  }
}
/* 列表 */
.itemx {
  min-height: 100px;
  display: flex;
  position: relative;
  padding: 10px 2%;
  >p {
      flex: 1 0 30%;
      margin: 0;
      background: #f6f6f6;
    >img {
      width: 100%;
      height: 100%;
      background: url('../../public/images/load0.gif') no-repeat;
      background-position: 50%;
      background-size: 10px 10px;
    }
  }
  >div {
    flex: 3 0 70%;
    position: relative;
    padding-left: 10px;
    padding-right: 5px;
    >span {
      height: 36%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-align: left;
    }
    > div {
      color: #999;
      font-size: .9rem;
      position: relative;
      >p {
        position: relative;
        margin-bottom: 0;
        &::after {
          content: '';
          display: inline-block;
          clear: both;
        }
        >span {
          &:nth-of-type(1) {
            left: 5%;
            float: left;
          }
          &:nth-of-type(2) {
            right: 2%;
            float: right;
          }
        }
        &:nth-of-type(2)>span {
          padding: 2px 4px;
          color: #fff;
          border-radius: 2px;
          background: #fa2c2c;
          box-shadow: 0 2px 4px rgba(0,0,0,.2);
        }
      }
    }
  }
}
.redbtn {
  padding: 2px 4px;
  color: #fff;
  border-radius: 2px;
  background: #fa2c2c;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
}
.tag {
  width: 18px;
  height: 16px;
  position: absolute;
  background: red;
  transform: translate3d(0,0,0);
  font-size: .8rem;
  &::before {
    content: '';
    width: 0;
    height: 0;
    position: fixed;
    left: 0;
    bottom: -8px;
    border-style: solid;
    border-width: 8px;
    border-color: red transparent transparent red;
    z-index: -1;
  }
  &::after {
    content: '';
    width: 0;
    height: 0;
    position: fixed;
    right: 0;
    bottom: -8px;
    border-style: solid;
    border-width: 8px;
    border-color: red red transparent transparent;
    z-index: -1;
  }
}
</style>
