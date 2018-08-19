<template>
  <div class="footerB">
    <ul class='_tab'>
      <li v-for='tab in tabList' 
      :key='tab.id'
        class='tabli'
        :class='{tabliselect: activeTab == tab}'
        @click='select(tab, tab.path)'>
        <i :class="tab.icon"></i>
        <span v-text='tab.name'></span>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
/**
 * 公共底部
 */
import store from '@/store'

export default {
  name: 'footerB',
  components: {},
  data () {
    return {
      msg: 'Welcome to footerB',
      activeTab: '',
      tabList: [
        {
          class: 'tabli tabliselect',
          name: '资讯',
          icon: 'iconfont icon-zixun',
          path: '/'
        },
        {
          name: '辣品',
          icon: 'iconfont icon-xianp',
          path: '/xianp'
        },
        {
          name: '圈圈',
          icon: 'iconfont icon-quanzi',
          path: '/circles'
        },
        {
          name: '我的',
          icon: 'iconfont icon-mine',
          path: '/mine'
        }
      ]
    }
  },
  created () {
    // console.log('this.$route: ',this.$route);
    // 根据路由选择相应的高亮
    if(this.$route.path == '/'){
      this.activeTab = this.tabList[0];

    }else if(this.$route.path == '/xianp'){
      this.activeTab = this.tabList[1];

    }else if(this.$route.path == '/circles'){
      this.activeTab = this.tabList[2];

    }else if(this.$route.path == '/mine'){
      this.activeTab = this.tabList[3];

    }
  },
  methods: {
    // 点击底部导航
    select (tab, path) {
      this.activeTab = tab;
      this.$router.push(path);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.footerB {
  width: 100%;
  height: 14vmin;
  display: flex;
  position: fixed;
  align-items: center;
  bottom: 0;
  box-shadow: 0 -2px 10px rgba(0,0,0,.1);
  z-index: 100;
  background: #fbf9fe;
  transition: transform .3s ease;

  ._tab {
    width: 100%;
    display: flex;
    align-items: center;

    .tabli {
      flex: 1;
      display: flex;
      flex-flow: column;
      align-items: center;
      color: #999;

      &>span {
        margin-top: 4px;
      }
    }
  }
}
.tabliselect {
  color: #fa2c2c !important;
}
.iconfont {
  font-size: 1rem !important;
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
