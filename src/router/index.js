import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/baguettes',
    name: 'baguettes',
    component: () => import( '../views/Baguettes.vue')
  },
  {
    path: '/bijoux',
    name: 'bijoux',
    component: () => import( '../views/Bijoux.vue')
  },
  {
    path: '/heart',
    name: 'heart',
    component: () => import( '../views/Heart.vue')
  },
  {
    path: '/vetements',
    name: 'vetements',
    component: () => import( '../views/Vetements.vue')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import( '../views/Nouveautes.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import( '../views/Team.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
