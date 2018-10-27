<template>
  <div class='mine' v-cloak>
    <ul class='mitem head'>
      <li>
        <img :src="user.head" alt="">
        <h3>{{user.name}}</h3>
        <span><span>Lv.{{user.level}} </span><van-icon name="arrow" /></span>
        <span><span>勋章{{user.prince}}个 </span><van-icon name="arrow" /></span>
        <div>
          签到
          <p>
            <span>+1 </span><van-icon name="value-card" />
          </p>
          <van-icon name="arrow" />
        </div>
      </li>
      <li>
        <div>
          <van-icon name="other-pay" />
          <p>评论</p>
        </div>
        <div>
          <van-icon name="description" />
          <p>帖子</p>
        </div>
        <div>
          <van-icon name="goods-collect" />
          <p>收藏</p>
        </div>
        <div>
          <van-icon name="browsing-history" />
          <p>足迹</p>
        </div>
      </li>
    </ul>
    <ul class='mitem'>
      <li>
        <van-icon name="receive-gift" />
        <span>金币商城</span>
        <p class='right'>
          <span>{{user.gold}}</span>&nbsp;
          <van-icon name="receive-gift" />
        </p>
      </li>
      <li>
        <van-icon name="checked" />
        <span>金币任务</span>
        <p class='right'>
          <span>+{{user.goldadd}}/12</span>&nbsp;
          <van-icon name="receive-gift" />
        </p>
      </li>
    </ul>
    <ul class='mitem'>
      <li>
        <van-icon name="more" />
        <span>我的消息</span>
      </li>
      <li>
        <van-icon name="debit-pay" />
        <span>我的钱包</span>
      </li>
    </ul>
    <ul class='mitem'>
      <li>
        <van-icon name="coupon" />
        <span>变色龙</span>
      </li>
      <li>
        <van-icon name="setting" />
        <span>设置</span>
      </li>
      <li>
        <van-icon name=like />
        <span>分享给好友</span>
      </li>
      <li>
        <van-icon name="warn" />
        <span>关于</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mine",
  components: {},
  data() {
    return {
      user: {}
    };
  },
  created() {
    // console.log('$route: ',this.$route);
    this.user = {
      name: "氪星超人",
      level: "18",
      prince: "1",
      head: "images/l1.jpg",
      gold: 2002,
      goldadd: 0
    };
    this.getList();
  },
  methods: {
    getList() {
      axios
        .get("/api/getGallery")
        .then(res => {
          console.log("res: ", res);
          if (res.code == 1) {
            this.user.head = res.data[0].path;
          }
        })
        .catch(err => {
          console.error("err: ", err);
        });
    }
  }
};
</script>

<style scoped lang='less'>
[v-cloak] {
  display: none;
}
li {
  display: block;
  margin: 0;
}
.mine {
  width: 100%;
  padding-bottom: 14vmin;
}
.mitem {
  position: relative;
  border-bottom: 8px solid #f6f6f6;
  text-align: left;
  &::after {
    content: "";
    width: 100%;
    height: 8px;
    position: absolute;
    box-shadow: 0 1px 0px rgba(150, 150, 150, 0.2) inset;
  }
  > li {
    padding: 0 5%;
    &:active {
      background: #f6f6f6;
    }
    > i {
      display: inline-block;
      padding: 10px 0;
      vertical-align: middle;
      margin-right: 5%;
    }
    > span {
      width: 90%;
      display: inline-block;
      padding: 4vw 0;
      vertical-align: middle;
      border-bottom: 1px solid #f6f6f6;
    }
    > .right {
      position: absolute;
      right: 5%;
      color: orange;
      > i {
        vertical-align: middle;
      }
      > span {
        vertical-align: middle;
      }
    }
  }
}
.head {
  > li {
    position: relative;
    padding: 0 5%;
    &:active {
      background: transparent;
    }
    > span {
      width: auto;
      border: none;
      padding: 2px 6px;
      margin-right: 6px;
      line-height: normal;
      border-radius: 20px;
      background: #eceff1;
      font-size: 0.8rem;
      > i {
        vertical-align: middle;
        font-size: 0.6rem;
      }
      > span {
        vertical-align: middle;
      }
    }
    &:nth-of-type(1) {
      padding-left: 30%;
      > div {
        position: absolute;
        top: 50%;
        right: 0;
        padding: 4px 10px;
        padding-right: 16px;
        border-radius: 30px 0 0 30px;
        background: #f6f6f6;
        font-size: 0.8rem;
        text-align: center;
        transform: translateY(-50%);
        > p {
          margin: 0;
          margin-top: 2px;
          color: orange;
          > i {
            vertical-align: middle;
          }
          > span {
            vertical-align: middle;
          }
        }
        > i {
          position: absolute;
          right: 2px;
          font-size: 0.7rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    &:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      padding: 14vw 8% 0;
      text-align: center;
      > div {
        &:active {
          color: red;
        }
        > p {
          margin-top: 4px;
        }
      }
    }
    > img {
      width: 20vw;
      height: 20vw;
      position: absolute;
      left: 5%;
      border-radius: 50%;
    }
  }
}
</style>
