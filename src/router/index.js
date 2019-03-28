import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/user/login',
      name: 'userLogin',
      component: () => import('@/pages/user/login.vue')
    }
  ]
})
