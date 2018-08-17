<template>
  <div id="app">
    <router-view></router-view>
    <load0 :loadshow='$store.state.loadShow'></load0>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
// vuex 状态管理
import store from '@/store.js'
// 自定义 loading 组件
import load0 from '@/components/load0'

export default {
  name: 'app',
  store,
  components: {
    load0
  },
  data () {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang='less'>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
