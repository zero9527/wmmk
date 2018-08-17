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
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/components/main-c'),
        meta: {
          title: '水印之家'
        }
      },
      {
        path: '/xianp',
        name: 'xianp',
        component: () => import('@/views/xianp'),
        meta: {
          title: '咸品'
        }
      },
      {
        path: '/circle',
        name: 'circle',
        component: () => import('@/views/circle'),
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
  routes
})
