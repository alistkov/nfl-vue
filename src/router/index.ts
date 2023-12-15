import { createRouter, createWebHistory } from 'vue-router'
const StandingsViewVue = () => import('@/views/StandingsView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'standings',
      component: StandingsViewVue
    }
  ]
})

export default router
