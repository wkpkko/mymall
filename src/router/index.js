import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Layout = () => import('@/layout');
// const Login = () => import('@/views/login');
const Notfound = () => import('@/views/404.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout
  },
  {
    path: '/login',
    name: 'Login',
    component:() => Notfound
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
