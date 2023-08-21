import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: () => import('@/pages/main/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
