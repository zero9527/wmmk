<template>
  <div class="mainC" @click='mainCLK($event)'>
    <headerT ref='headfn'></headerT>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in swipeList" :key="index">
        <img :src="item.path" />
      </van-swipe-item>
    </van-swipe>
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 列表 包含上拉加载 -->
      <van-list
        v-model="loading"
        :finished="finished"
        :offset=20
        @load="onLoad" @click.native='newsDetail($event)'>
        <div class='item' v-for='(item, index) in dataList' 
        :key='index' :nid='item.id'>
          <p><img :src="item.img" alt=""></p>
          <div>
            <span>{{item.title}}</span>
            <p v-if='dataFirst == index+1' class='dataFirst'>置顶</p>
            <p v-else>{{item.time}}</p>
            <p>{{item.num}}评</p>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
import headerT from '@/components/header-t'
import { List } from 'vant';

Vue.use(List);
export default {
  name: 'mainC',
  components: {
    headerT
  },
  data () {
    return {
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
      dataFirst: 1,
      dataList: [
        {id: '1',title: '《海岛大亨6》PC版跳票至2019年1月，主机版明夏发售',img:'images/l1.jpg',time: '22:54', num: '0',},
        {id: '2',title: '酷派Mega 5A发布：配展讯处理器，印度独占',img:'images/l2.jpg',time: '22:24', num: '2'},
        {id: '3',title: '国产红芯浏览器被指套壳谷歌Chrome，你怎么看？',img:'images/l3.jpg',time: '22:20', num: '10'},
        {id: '4',title: 'WhatsApp创始人仍受雇于FaceBook：未放弃数亿美元股票',img:'images/l4.jpg',time: '21:54', num: '20'},
        {id: '5',title: '华硕ROG Zephrus S电竞笔记本正式发布，外观刚劲霸气',img:'images/l5.jpg',time: '21:25', num: '450'},
        {id: '6',title: '日本35岁男子要和初音结婚：已“同居”几月，将举办婚礼',img:'images/l6.jpg',time: '21:21', num: '123'},
        {id: '7',title: '京东高管解读财报：京东与谷歌在很多方面存在互补',img:'images/l7.jpg',time: '21:14', num: '56'},
        {id: '8',title: '台媒：今年只有OLED苹果iPhone可使用Apple Pencil',img:'images/l8.jpg',time: '20:01', num: '76'},
        {id: '9',title: '医学泰斗被外卖员撞伤致死，饿了么致歉',img:'images/l9.jpg',time: '18:54', num: '189'},
        {id: '10',title: '人脸识别机器人毁掉了我玩“找茬”最后的乐趣',img:'images/l10.jpg',time: '16:53', num: '156'},
      ],
    }
  },
  computed: {},
  methods: {
    onLoad() {
      // 上拉加载
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.dataList.push(this.dataList[i]);
        }
        this.loading = false;

        if (this.dataList.length >= 40) {
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
    mainCLK(e){
      // console.log('e: ',e);
      // console.log('headfn: ',this.$refs.headfn);
      if(e.target.className.indexOf('arrow') == -1){
        this.$refs.headfn.arrow = 'iconfont icon-down';
        this.$refs.headfn.menuclass = 'hidemenu';
        document.body.style.overflow = 'auto';
      }
    },
    // 点击首页咨询项目
    newsDetail(e) {
      // console.log('e: ',e);
      // 子项目
      let item = e.target.offsetParent.parentNode;
      // console.log('item: ',item);
      if(item.className == 'item'){
        let nid = item.getAttribute('nid');
        // console.log('nid: ',nid);
        this.$router.push(`/newsDetail/${nid}`);

      }else if(e.target.offsetParent.className == 'item'){
        let nid = e.target.offsetParent.getAttribute('nid');
        // console.log('nid: ',nid);
        this.$router.push(`/newsDetail/${nid}`);
      }
    }
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
.dataFirst {
  padding: 2px 4px;
  color: #fff !important;
  border-radius: 2px;
  background: #fa2c2c;
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
/* 列表 */
.item {
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
    padding: 0 2%;
    >span {
      height: 50%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-align: left;
    }
    > p {
      margin-bottom: 0;
      color: #999;
      font-size: .8rem;
      &:nth-of-type(1)  {
        position: absolute;
        bottom: 0;
        left: 5%;
      }
      &:nth-of-type(2)  {
        position: absolute;
        bottom: 0;
        right: 2%;
      }
    }
  }
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

</style>
