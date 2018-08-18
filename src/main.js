import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {mapState, mapMutations} from 'vuex'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import FastClick from 'fastclick'

Vue.use(Vant);
Vue.config.productionTip = false

import axios from 'axios'
// Vue.prototype.$ajax = axios

FastClick.attach(document.body)
new Vue({
  router,
  store,
  watch: {
    '$route' (to) {
      this.changeLoading();
      if(to.meta.title){
        document.title = to.meta.title;
      }
    }
  },
  methods: {
    ...mapMutations([
      'changeLoad'
    ]),
    changeLoading() {
      // 先显示loading 后延时隐藏
      this.changeLoad(true);
      this.$nextTick(() => {
        setTimeout(() => {
          this.changeLoad(false);
        },1000)
      })
    }
  },
  mounted() {
    this.changeLoading()
  },
  render: h => h(App)
}).$mount('#app')
