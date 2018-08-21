import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

const routes = [
  {
    path: '*',
    name: '404',
    component: () => import('./views/error404.vue')
  },
  {
    path: '/',
    name: 'App',
    component: App,
    meta: {
      title: '水印之家'
    },
    // 避免两个App
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/main-c'),
    meta: {
      title: '水印之家'
    },
  },
  {
    path: '/xianp',
    name: 'xianp',
    component: () => import('@/views/xianp'),
    meta: {
      title: '辣品'
    }
  },
  {
    path: '/circles',
    name: 'circles',
    component: () => import('@/views/circles'),
    meta: {
      title: '圈圈'
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/mine'),
    meta: {
      title: '我的'
    }
  },
  {
    path: '/newsDetail/:id',
    name: 'newsDetail',
    component: () => import('@/views/newsDetail'),
    props: true,
    meta: {
      title: '新闻详情'
    }
  }
]

export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    // console.log('homeScTop: %s, xianpScTop: %s, circleScTop: %s',window.homeScTop, window.xianpScTop, window.circleScTop)
    if (savedPosition) {
      return savedPosition
    } else {
      // 滚动条按页面分别处理
      let top;
      if(location.hash.indexOf('xianp') > -1){
        top = window.xianpScTop || 0;

      }else if(location.hash.indexOf('circles') > -1){
          top = window.circleScTop || 0;

      }else if(location.hash.indexOf('home') > -1){
          top = window.homeScTop || 0;
      }
      return { x: 0, y: top }
    }
  }
})
