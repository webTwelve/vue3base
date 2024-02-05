import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import Cookies from 'js-cookie'
import { Routes } from './routes'
console.log(Routes)
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login/index.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/layout/index.vue'),
    children: Routes
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})
router.beforeEach((to, _, next) => {
  const token = Cookies.get('token')
  if (!token && to.name != 'Login') next({ name: 'Login' })
  else next()
})
export default router
