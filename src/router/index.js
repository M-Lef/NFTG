import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: import('@/views/User.vue')
  },
  {
    path: '/docs',
    name: 'docs',
    component: import('@/views/Docs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
