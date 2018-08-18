<template>
  <div class="load" v-show='show'>
    <transition>
      <img src="../../public/images/load0.gif" alt="">
    </transition>
  </div>
</template>

<script>
/**
 * 自定义 loading 组件
 * 页面加载时 显示 gif
 */
export default {
  name: 'load',
  props: {
    loadshow: Boolean
  },
  data () {
    return {
      show: true
    }
  },
  created () {
    // console.log('loadshow: ',this.loadshow);
  },
  watch: {
    loadshow: function(val) {
      this.show = val;
      // console.log('val: ',val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
h3 {
  margin: 40px 0 0;
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
.load {
  width: 50px;
  height: 50px;
  max-width: 50px;
  max-height: 50px;
  position: fixed;
  top: 20%;
  left: 50%;
  margin-left: -25px;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
  // background: rgba(0,0,0,.8);
  background: rgba(255,255,255,.9);
  z-index: 99;

  >img {
    width: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
}
</style>
