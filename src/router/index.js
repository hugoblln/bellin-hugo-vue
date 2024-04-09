import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MonsterListView from '@/views/MonsterListView.vue'
import MonsterDetailsViews from '@/views/MonsterDetailsViews.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/monsterlist',
      name: 'monsterlist',
      component: MonsterListView
    },
    {
      path: '/monsterdetails/:monsterId',
      name: 'monsterdetails',
      component: MonsterDetailsViews
    }
  ]
})

export default router
