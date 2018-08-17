<template>
  <div class="error404">
    <img src="../../public/images/404.jpg" alt="加载中...">
    <h3 v-html='msg'></h3>
  </div>
</template>

<script>
export default {
  name: 'error404',
  data () {
    return {
      msg: `出现不可描述的问题，<br/>暂时用这个页面顶替一下，稍后很快修复`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
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
.error404 {
  width: 80%;
  max-width: 800px;
  position: relative;
  left: 0;
  right: 0;
  margin: auto;

  >img {
    width: 100%;
  }

  >h3 {
    text-align: center;
  }
}
</style>
