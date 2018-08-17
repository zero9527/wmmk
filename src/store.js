import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loadShow: false,
}

const mutations = {
  changeLoad(state, val){
    // 路由变化时的加载 loading
    state.loadShow = val;
  },
  setHomeTabIndex(state, index) {
    state.homeState.tabIndex = index
  }
}

const actions = {}

export default new Vuex.Store({
  state, mutations, actions
})
