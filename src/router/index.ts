import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由登录判定
router.beforeEach(to => {
  const islogin = !!localStorage.getItem('token')
  if (!islogin && to.name !== 'login') {
    return { name: 'login' }
  }
})

export default router
