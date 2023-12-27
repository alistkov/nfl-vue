import { createRouter, createWebHistory } from 'vue-router'
const StandingsView = () => import('@/views/StandingsView.vue')
const TeamsView = () => import('@/views/TeamsView.vue')
const GamesView = () => import('@/views/GamesView.vue')
const DivisionsStandings = () => import('@/modules/standings/components/DivisionsStandings.vue')
const ConferencesStandings = () => import('@/modules/standings/components/ConferencesStandings.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'standings' }
    },
    {
      path: '/standings',
      name: 'standings',
      component: StandingsView,
      redirect: { name: 'divisions-standings' },
      children: [
        {
          path: 'divisions',
          name: 'divisions-standings',
          component: DivisionsStandings,
        },
        {
          path: 'conferences',
          name: 'conferences-standings',
          component: ConferencesStandings,
        },
      ]
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsView
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView
    },
  ],
})

export default router
