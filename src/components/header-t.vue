<template>
  <div class="headerT">
    <div class='hTop' :class='uphide'>
      <div calss='div8'>
        <i class='iconfont icon-drinks logo'></i>
        <span>之家</span>
      </div>
      <div class='div4'>
        <div>
          <i class='iconfont icon-rili' :today='today'></i>
          <i class='iconfont icon-search'></i>
          <i class='iconfont icon-diandian'></i>
        </div>
      </div>
    </div>
    <div class='titlepar' :style='titleparstyle'>
      <div class='title'>
        <div class='tcenter' 
        v-for='(item, index) in titleList'
        @click='clkTitle(item, $event, index)' 
        :class='{titlenow: activetitle == item}' :key='item.id'>{{item.name}}</div>
        <span class='titleline' :style='titleline'></span>
      </div>
      <div class='menutitle' :style='{display: menuclass == "showmenu" ? "block" : "none"}'>长按栏目排序或删除</div>
    </div>
    <span class='arrow' 
    :class='arrow' 
    :style='arrowstyle'
    @click='showmenu'></span>
    <div class='menupar' :style='{visibility: menuclass == "showmenu" ? "visible" : "hidden"}'>
      <ul class='menu' :class='menuclass'>
        <li class="menu-item" 
        v-for='item in titleList' 
        :class='{titleselect: activetitle == item}'
        @click='selectTitle(item, $event)' :key='item.id'>{{item.name}}</li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import store from '@/store'

export default {
  name: 'headerT',
  components: {},
  store,
  data () {
    return {
      msg: 'Welcome to headerT',
      today: '',
      titleList: [
        {name: '最新'},
        {name: '排行榜'},
        {name: '华为'},
        {name: '上热评'},
        {name: '评测室'},
        {name: '发布会'},
        {name: '阳台'},
        {name: '手机'},
        {name: '数码'},
        {name: '极客学院'},
        {name: 'VR'},
        {name: '智能汽车'},
        {name: '电脑'},
        {name: '京东精选'},
        {name: 'Windows'},
      ],
      uphide: '',                   // logo栏下滑消失
      titleparstyle: '',            // titlepar样式(是否滚动)
      titleline: '',                // 栏目下面的横线
      arrow: 'iconfont icon-down',  // 栏目箭头
      arrowstyle: '',               // 栏目箭头样式
      menutitle: '',                // 栏目标题
      menuclass: 'hidemenu',        // 栏目类名
      activetitle: '',  // 下拉栏目选中
    }
  },
  watch: {},
  created () {
    this.activetitle = this.titleList[0];
    let today = new Date().getDate();
    this.today = +today > 10 ? today : '0' + today;
  },
  mounted () {},
  methods: {
    ...mapMutations([
      'setHomeTab'
    ]),
    // 点击三角形显示栏目
    showmenu (e) {
      if(this.arrow.indexOf('down') > 0){
        this.arrowstyle = 'transition:.3s ease;transform:rotate(180deg)';
        this.titleparstyle = 'overflow-x:hidden;';
        // 显示menu
        this.arrow = 'iconfont icon-up';
        this.menuclass = 'showmenu';
        document.body.style.overflow = 'hidden';

      }else{
        this.arrowstyle = 'transition:.3s ease;transform:rotate(0deg)';
        this.titleparstyle = 'overflow-x:scroll;';
        // 隐藏menu
        this.arrow = 'iconfont icon-down';
        this.menuclass = 'hidemenu';
        document.body.style.overflow = 'auto';
      }
    },
    // 未展开时点击
    clkTitle (item, e, index) {
      let el = e.currentTarget;
      let posleft = el.parentNode.offsetLeft;
      let osleft = el.offsetLeft;
      let width = parseInt(this.getStyle(el, 'width'));
      // console.log('width: ',width);
      this.activetitle = item;
      let w = window.innerWidth;
      document.querySelector('.title').scrollLeft = osleft-w/2;
      this.$store.state.homeHeader.scrollLeft = osleft-w/2;
      this.titleline = `width: ${width/2}px;transition:.3s ease;transform:translateX(${osleft+width/4}px)`;
    },
    // 栏目下拉时点击
    selectTitle (item, e) {
      let el = e.currentTarget;
      let tindex;   // 获取点击的标题在栏目中的位置
      // 下拉选中并收起 menu
      // console.log('item: ',item);
      this.arrowstyle = 'transition:.3s ease;transform:rotate(0deg)';
      this.titleparstyle = 'overflow-x:scroll;';
      this.activetitle = item;
      this.arrow = 'iconfont icon-down';
      this.menuclass = 'hidemenu';
      // 获取点击的标题在栏目中的位置
      this.titleList.forEach((item, index) => {
        if(item.name == el.innerText){
          tindex = this.titleList.indexOf(item)
        }
      })
      let titlediv = document.querySelector('.title').querySelectorAll('div')[tindex];
      let posleft = titlediv.parentNode.offsetLeft;
      let width = parseInt(this.getStyle(titlediv, 'width'));
      // console.log('scrollLeft: ',document.querySelector('.title').scrollLeft);
      document.querySelector('.title').scrollLeft = titlediv.offsetLeft-width*2;
      this.$store.state.homeHeader.scrollLeft = titlediv.offsetLeft-width*2;
      this.titleline = `width:${width/2}px;transform:translateX(${titlediv.offsetLeft+width/4}px)`;
      document.body.style.overflow = 'auto';
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
    }
  },
  activated() {
    // 恢复 header 的滚动位置
    document.querySelector('.title').scrollLeft = this.$store.state.homeHeader.scrollLeft;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.headerT {
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
  .titlepar {
    width: 94%;
    height: 10vmin;
    // min-height: 6vh;
    position: relative;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 10%;
    overflow-x: hidden;
    &::after {
      content: '';
      height: 100%;
      width: 2px;
      position: absolute;
      top: 0;
      left: 95%;
      box-shadow: 0 0 10px rgba(0,0,0,.3);
      z-index: -1;
    }
    .title {
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
        margin-right: 30px;
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
  .arrow {
    width: 10vw;
     height: 10vmin;
    line-height: 10vmin;
    position: absolute;
    right: 0;
    top: 10vmin;
    text-align: center;
    background: linear-gradient(to right, rgba(256,256,256,.9) 30%, #fff 50%);
  }
    
  .menupar {
    position: absolute;
    padding: 0;
    top: 0;
    margin-top: 20vmin;
    overflow: hidden;
    z-index: -1;

    .menu {
      position: relative;
      display: flex;
      padding-bottom: 2px;
      flex-wrap: wrap;
      transition: .6s ease;
      transform: translateY(-200%);
      border-bottom: 2px solid #eee;
      background: #fbf9fe;
    }
    .menu-item {
      flex: 1 0 20%;
      margin: 4vmin 14px;
      padding: 6px 0;
      text-align: center;
    }
  }
}
.iconfont {
  font-size: 20px;
}
.icon-rili{
  &::after {
    // content: '29';
    content: attr(today);
    position: absolute;
    left: 50%;
    top: 72%;
    transform: translate(-50%, -50%);
    font-size: .6rem !important;
  }
}
.hidemenu {
    transform: translateY(-200%) !important;
}
.showmenu {
    transform: translateY(0%) !important;
}
.titlenow {
  color: #fa2c2c;
}
.titleline {
  height: 2.6px;
  width: 1.2rem;
  display: block;
  position: absolute;
  bottom: 4px;
  border-radius: 30px;
  transform: translateX(7.75px);
  background: #fa2c2c;
}
.titleselect {
  color: #fff;
  border-radius: 4px;
  background: #fa2c2c;
}
.tcenter {
  text-align: center;
}
.div8 {
  width: 80%;
}
.div4 {
  width: 40%;
}
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
</style>
