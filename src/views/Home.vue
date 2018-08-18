<template>
  <div class="home">
    <transition name='fade' appear>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  	<footerB ref='footer_ref'></footerB>
    <div class='gotop'>
      <i class='iconfont icon-gotop' @touchend='gotop'></i>
    </div>
  </div>
</template>

<script>
/**
 * 显示调配组件
 */
import footerB from '@/components/footer-b'

export default {
  name: 'home',
  components: {
  	footerB
  },
  data() {
    return {}
  },
  methods: {
    gotop() {
      goTop();
    }
  },
  watch: {
    '$route'(){
      // console.log('this.$route: ',this.$route);
      // 根据路由选择相应的高亮
      if(this.$route.path == '/'){
        this.$refs.footer_ref.activeTab = this.$refs.footer_ref.tabList[0];
        
      }else if(this.$route.path == '/xianp'){
        this.$refs.footer_ref.activeTab = this.$refs.footer_ref.tabList[1];

      }else if(this.$route.path == '/circle'){
        this.$refs.footer_ref.activeTab = this.$refs.footer_ref.tabList[2];

      }else if(this.$route.path == '/mine'){
        this.$refs.footer_ref.activeTab = this.$refs.footer_ref.tabList[3];

      }
    }
  }
}
</script>

<style lang='less'>
* {
  box-sizing: border-box;
}
body {
  min-width: 100vw;
  min-height: 100vh;
  background: #fff;
  overflow-x: hidden;
}
.home {
  min-width: 100vw;
  min-height: 100vh;
}
.mainC {
  width: 100%;
  padding-top: 22vmin;
  padding-bottom: 16vmin;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  position: absolute;
}
.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}
/* 下拉刷新 */
.van-pull-refresh {
  &,
  &__track {
    min-height: calc(100vh - 50px);
  }
}
// 回顶部按钮
@w: 40px;
.gotop {
  width: @w;
  height: @w;
  text-align: center;
  line-height: @w;
  position: fixed;
  bottom: 16vh;
  right: 3vw;
  border-radius: 50%;
  color: #fff;
  opacity: 0;
  background: rgba(90, 90, 90, .8);
  box-shadow: 0 2px 10px rgba(0,0,0,.1);

  &:active {
    background: rgba(70, 70, 70, .8);
  }
  >i {
    font-size: 1.2rem !important;
  }
}
.showGotop {
  opacity: 1;
  transition: .3s ease;
}
.headHide {
  transform: translateY(-10vmin);
}
.footHide {
  transform: translateY(14vmin);
  box-shadow: none;
}
</style>
