import { createRouter, createWebHistory } from 'vue-router'
const StandingsView = () => import('@/views/StandingsView.vue')
const TeamsView = () => import('@/views/TeamsView.vue')
const DivisionsStandings = () => import('@/modules/standings/components/DivisionsStandings.vue')
const ConferencesStandings = () => import('@/modules/standings/components/ConferencesStandings.vue')
const PageNotFound = () => import('@/views/NotFoundView.vue')
const TeamDetailView = () => import('@/views/TeamDetailView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
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
      path: '/team/:id',
      name: 'team-detail',
      component: TeamDetailView
    },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound
    }
  ],
})

export default router
