import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productPage from '../views/productPage.vue'
import qaPage from '../views/qaPage.vue'
import introduce from '../views/introduce.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '標題',
      keepAlive: true, // 需要被缓存
    }
  },
  {
    path: '/productPage',
    name: 'productPage',
    component: productPage
  },
  {
    path: '/qaPage',
    name: 'qaPage',
    component: qaPage
  },
  {
    path: '/introduce',
    name: 'introducePage',
    component: introduce
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
