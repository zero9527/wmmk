<template>
  <div id="app">
    <!-- <transition :name='transitionName' appear>
    </transition> -->
    <keep-alive exclude="newsDetail">
      <router-view></router-view>
    </keep-alive>
    <footerB ref='footer_ref'></footerB>
    <div class='gotop' @click='gotop'>
      <i class='iconfont icon-gotop'></i>
    </div>
    <load0 :loadshow='$store.state.loadShow'></load0>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
// vuex 状态管理
import store from '@/store.js'
// 自定义 loading 组件
import load0 from '@/components/load0'
import footerB from '@/components/footer-b'

export default {
  name: 'app',
  store,
  components: {
    load0,
    footerB
  },
  data () {
    return {
      transitionName: 'fade'
    }
  },
  mounted() {},
  methods: {
    // 回顶部
    gotop() {
      let scint;
      let scTop = document.body.scrollTop || document.documentElement.scrollTop;
      // console.log('scTop: ',scTop);
      scTop -= 70;
      scint = setTimeout(() => {
          document.body.scrollTop
              ? (document.body.scrollTop = scTop)
              : (document.documentElement.scrollTop = scTop);

          if (scTop <= 0) {
              clearTimeout(scint);
              return;
          }
          this.gotop();
      }, 1)
    },
    setFlex(){
      if(this.$route.name != 'newsDetail'){
        try{
          document.querySelector('.footer_B')
          .style.display = 'flex';
        } catch (err){
          console.log('err: ',err);
        }
      }
    }
  },
  watch: {
    '$route'(to, from){
      // console.log('this.$route: ',this.$route);
      // console.log('from: ',from);
      // 根据路由选择相应的高亮
      if(this.$route.name == 'home'){
        this.$refs.footer_ref.activeTab = this.$refs.footer_ref.tabList[0];
        
      }else if(this.$route.name == 'xianp'){
        this.$refs.footer_ref.activeTab = this.$refs.footer_ref.tabList[1];

      }else if(this.$route.name == 'circles'){
        this.$refs.footer_ref.activeTab = this.$refs.footer_ref.tabList[2];

      }else if(this.$route.name == 'mine'){
        this.$refs.footer_ref.activeTab = this.$refs.footer_ref.tabList[3];

      }
      if(from.name == 'newsDetail'){
        this.transitionName = 'slide-fade'
      }else{
        this.transitionName = 'fade';
      }
      this.setFlex();
    }
  },
  activated() {
    this.setFlex();
  }
}
</script>

<style lang='less'>
body {
  margin: 0;
}
#app {
  min-width: 100vw;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
* {
  box-sizing: border-box;
}
body {
  min-width: 100vw;
  min-height: 100vh;
  background: #fff;
  overflow-x: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  position: absolute;
}
.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(80vw);
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
    font-size: 6vw !important;
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
.item:active,
.itemx:active {
  background: #f6f6f6;
}
.nomore {
  margin: 10px 0;
  color: #999;
}
</style>
