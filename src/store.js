import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loadShow: false,
  homeHeader: {
    scrollLeft: ''
  },
  xianpHeader: {
    scrollLeft: ''
  }
}

const mutations = {
  changeLoad(state, val){
    // 路由变化时的加载 loading
    state.loadShow = val;
  },
  setHomeTab(state, val) {  // 设置tab滚动距离
    state.homeHeader.scrollLeft = val;
  },
  setXianTab(state, val) {  // 设置tab滚动距离
    state.xianpHeader.scrollLeft = val;
  }
}

const actions = {}

export default new Vuex.Store({
  state, mutations, actions
})
