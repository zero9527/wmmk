<template>
  <div>
    <p>{{msg}}</p>
    <p>id: {{id}}</p>
  </div>
</template>

<script>
/**
 * 新闻详情页
 */
export default {
  components: {},
  props: ['id'],
  data () {
    return {
      msg: '这是详情页',
    }
  },
  created () {
    // 路由参数最快这个时候获取得到
    this.id = this.$route.params.id;
  },
  mounted() {
    this.hideFoot();
  },
  methods: {
    hideFoot(){
      // 隐藏底部
      document.querySelector('.footerB')
      .setAttribute('class', 'footerB footHide');
    }
  },
  updated() {
    // 隐藏底部
    this.hideFoot();
  }
}
</script>

<style scoped>

</style>
