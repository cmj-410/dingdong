import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/Login/LoginView.vue'

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
  },
  {
    path: '/shop/:id',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop/ShopView.vue')
  },
  {
    path: '/orderConfirm',
    name: 'orderConfirm',
    component: () => import(/* webpackChunkName: "orderConfirm" */ '../views/OrderConfirm/OrderConfirmView.vue')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import(/* webpackChunkName: "person" */ '../views/Person/PersonView.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import(/* webpackChunkName: "address" */ '../views/Address/AddressView.vue')
  },
  {
    path: '/newAddress',
    name: 'newAddress',
    component: () => import(/* webpackChunkName: "newAddress" */ '../views/Address/NewAddress.vue')
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
