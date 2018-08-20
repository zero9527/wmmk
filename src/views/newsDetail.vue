<template>
  <div class='newsDetail'>
    <div class='headerT'></div>
    <h3 class='title'>{{info.title}}</h3>
    <p class='newsattr'>{{info.time}} {{info.editor}}</p>
    <div class='content' v-html='info.content'></div>
    <p class='attr'>
      <span>责任编辑：{{info.editor}}</span>
      <span class='mbtn'>我要纠错</span>
    </p>
    <div class='score'>
      <p>打分后显示文章质量得分，当前68人打分</p>
      <div>
        <span class='mbtn' @touchend='score(0)'>无价值</span>
        <span class='mbtn' @touchend='score(1)'>还可以</span>
        <span class='mbtn' @touchend='score(2)'>有价值</span>
      </div>
    </div>
    <div class='rela'>
      <h3>相关文章</h3>
      <ul v-for='(re, index) in rela' :key='index'>
        <li><img :src="re.img" alt=""></li>
        <li>
          <p>{{re.title}}</p>
          <span>{{re.date}}</span>
        </li>
      </ul>
    </div>
    <div class='talk'>
      <h3>最热评论</h3>
      <ul v-for='(hot, index) in hotTalk' :key='index'>
        <li>
          <img :src="hot.head" alt="">
          <p class='level'>Lv.{{hot.level}}</p>
        </li>
        <li>
          <div>
            <span>{{hot.name}} {{hot.device}}</span>
            <p>{{hot.location}} {{hot.time}}</p>
            <b>{{hot.agree}}顶</b>
          </div>
          <p>{{hot.content}}</p>
        </li>
      </ul>
      <div>
        <h3 style='font-weight:normal;color: #999;'>查看更多评论</h3>
      </div>
    </div>
    <div class='footerB'>
      <van-icon name="edit" />
      <input type="text" placeholder="写评论">
      <span>
        <van-icon name="chat" />
        <van-icon name="like-o" />
        <van-icon name="share" />
      </span>
    </div>
  </div>
</template>

<script>
/**
 * 新闻详情页
 */
export default {
  name: 'newsDetail',
  components: {},
  props: ['id'],
  data () {
    return {
      info: {},
      rela: [],
      hotTalk: []
    }
  },
  created () {
    // 路由参数最快这个时候获取得到
    this.id = this.$route.params.id;
    this.info = {
      title: 'Pixelbook更多细节曝光：4K屏、8GB内存，还有背光键盘',
      time: '2018-08-16 20:56',
      editor: '浮生',
      content: `IT之家8月16日消息 上个月爆料大神Evan Blass曾表示，第二代Pixelbook将会于今年秋天加入产品线，它将拥有更窄的边框。今日XDA在一篇报道中，总结了这款产品被曝光出来的一些详细特性。
      <p><img width='100%' src="images/s5.jpg" alt=""></p>
▲图为初代Pixelbook <br /><br />
文中称，之前有Reddit用户在Chromium的boards.yaml文件中发现了一款名为Atlas的Chromebook产品，其中还显示其分辨率为4K，且不支持SD卡。
<p><img width='100%' src="images/s2.jpg" alt=""></p>
文中提到另外一则消息来自Chrome Unboxed，称Atlas采用了Nanya NT6CL256T32CM-H1 8GB LPDDR3内存。但尽管其他的Chromebook的产品还未提供这一级别的内存配置，初代的Pixelbook的内存已经是8GB起步了。
<p><img width='100%' src="images/s6.jpg" alt=""></p>
其他消息还显示，Atlas将具备呼叫谷歌助手专用的按键，并将配备背光键盘。XDA表示，目前新一代Pixelbook的候选产品有Nocturne、Atlas和Cheza三款，后者据称是<a href='javascript:;' style='color: red;border-bottom: 1px solid red;'>一款类似于Windows二合一笔记本的产品。</a>`
    };
    this.rela = [
      {id: '1', title: '数据中心有个老大难，谷歌要用人工智能解决它',img: 'images/l1.jpg',date: '2018.8.16'},
      {id: '2', title: '谷歌配屏幕只能音响曝光：台湾制造商代工',img: 'images/l2.jpg',date: '2018.8.16'},
      {id: '3', title: '谷歌CEO皮差异：谷歌离在中国推搜索产品“还远呢”',img: 'images/l3.jpg',date: '2018.8.15'},
    ];
    this.hotTalk = [
      {id: '1',head: 'images/l6.jpg',level:'11',name:'绿箭侠',device: 'Gooogle Pixel2XL',location:'天津网友',time:'2018-8-15 22:12',content:'顶我上去',agree:'56'},
      {id: '2',head: 'images/l7.jpg',level:'14',name:'猪猪侠',device: 'IphoneX',location:'上海网友',time:'2018-8-15 20:02',content:'我才是二楼',agree:'656'},
      {id: '3',head: 'images/l8.jpg',level:'23',name:'熊大',device: 'Huawei P20pro',location:'广东网友',time:'2018-8-15 21:23',content:'捡到钱了',agree:'756'},
    ];
  },
  mounted() {
    this.pageinit();
  },
  methods: {
    pageinit(){
      // 隐藏底部
      document.querySelector('.footerB')
      .setAttribute('class', 'footerB footHide');
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      // console.log(document.querySelector('.footer_B'))
      document.querySelector('.footer_B')
      .style.display = 'none';
    },
    score(type){
      // 0:无价值，1：还可以，2：有价值
      let mbtn = document.querySelector('.score').querySelectorAll('.mbtn');
      mbtn.forEach((item) => {
        item.setAttribute('class', 'mbtn');
      })
      mbtn[+type].setAttribute('class', 'mbtn fred');
    }
  }
}
</script>

<style scoped lang='less'>
.title {
  padding: 0 10%;
}
.newsattr {
  color: #999;
  padding: 0 5%;
}
.attr {
  color: #999;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
}
.content {
  line-height: 1.6;
  padding: 4px 5%;
  text-align: justify;
}
.mbtn {
  padding: 2px 10px;
  border-radius: 2px;
  color: #333;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  &:active {
    box-shadow: 0 1px 4px rgba(206, 51, 51, 0.2) inset;
  }
}
.score {
  >p {
    color: #999;
  }
  >div {
    display: flex;
    padding: 4px 5%;
    justify-content: space-between;
    >span {
      padding: 4px 20px;
    }
  }
}
.rela {
  position: relative;
  >h3 {
    position: relative;
    text-align: left;
    padding-left: 14px;
    &::before {
      content: '';
      width: 6px;
      height: 100%;
      display: inline-block;
      position: absolute;
      left: 0;
      background: red;
    }
  }
  >ul {
    display: flex;
    padding: 4px 5%;
    margin-bottom: 6px;
    >li {
      position: relative;
      margin: 0;
      padding-left: 5%;
      text-align: left;
      &:nth-of-type(1) {
        flex: 1 0 30%;
        background: #f6f6f6;
      }
      &:nth-of-type(2) {
        flex: 3 0 70%;
      }
      >img {
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
      >p {
        margin: 0;
      }
      >span {
        display: inline-block;
        margin-top: 10px;
        color: #999;
      }
    }
  }
}
.talk {
  position: relative;
  >h3 {
    position: relative;
    text-align: left;
    padding-left: 14px;
    &::before {
      content: '';
      width: 6px;
      height: 100%;
      display: inline-block;
      position: absolute;
      left: 0;
      background: red;
    }
  }
  >ul {
    display: flex;
    margin-bottom: 10px;
    padding: 6px 0;
    border-bottom: 1px solid #f6f6f6;
    >li {
      font-size: .9rem;
      &:nth-of-type(1) {
        flex: 1 0 10%;
      }
      &:nth-of-type(2) {
        flex: 1 0 90%;
      }
      >img {
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
      }
      >.level {
        padding: 2px 4px;
        line-height: 1;
        border-radius: 2px;
        color: #888;
        background: #e6e6e6;
      }
      >p {
        margin-top: 0;
        font-size: 1rem;
        text-align: left;
      }
      >div {
        position: relative;
        text-align: left;
        >p {
          margin-top: 0;
          color: #999;
        }
        >b {
          position: absolute;
          top: 0;
          right: 20%;
          color: #999;
          font-weight: normal;
        }
      }
    }
  }
}
.footerB {
  width: 100%;
  height: 14vmin;
  background: #fff;
  z-index: 101;
  i {
    padding: 0 10px;
    font-size: 6vw;
  }
  >input {
    width: 40%;
    height: 100%;
    padding: 4px;
    border: none;
    outline: none;
  }
  >span {
    width: 40%;
    display: inline-flex;
    justify-content: space-between
  }
}
.fred {
  color: red;
}
</style>
<style>
a:active {
  color: rgb(136, 0, 0) !important;
  border-bottom: 1px solid rgb(187, 11, 11) !important;
}
</style>
