import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载写法
const Home = () => import('@/views/home/Home')
const cateGory = () => import('@/views/category/cateGory')
const Cart = () => import('@/views/cart/Cart')
const proFile = () => import('@/views/profile/proFile')
const Detail = () => import('@/views/detail/Detail')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home,
  },
  {
    path: '/cateGory',
    component: cateGory,
  },
  {
    path: '/Cart',
    component: Cart,
  },
  {
    path: '/proFile',
    component: proFile,
  },
  {
    path: '/Detail/:id',
    component: Detail,
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router