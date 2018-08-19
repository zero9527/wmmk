import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '*',
    name: '404',
    component: () => import('./views/error404.vue')
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '水印之家'
    },
    children: [
      // {
      //   path: '/',
      //   name: 'index',
      //   component: () => import('@/components/main-c'),
      //   meta: {
      //     title: '水印之家'
      //   }
      // },
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
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      // 滚动条按页面分别处理
      let top;
      if(location.hash.indexOf('xianp') > -1){
        top = window.xianpScTop;

      }else if(location.hash.indexOf('circle') > -1){
          top = window.circleScTop;

      }else{
          top = window.homeScTop;
      }
      return { x: 0, y: top }
    }
  }
})
