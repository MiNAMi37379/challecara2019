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
    path: '/schedule',
    name: 'schedule',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "schedule" */ '../views/Schedule.vue')
  },
  {
    path: '/doing',
    name: 'doing',
    component: () => import(/* webpackChunkName: "doing" */'../views/Doing.vue')
  },
  {
    path: '/join',
    name: 'join',
    component: () => import(/* webpackChunkName: "join" */'../views/Join.vue')
  },
  {
    path: '/mulch',
    name: 'mulch',
    component: () => import(/* webpackChunkName: "mulch" */'../views/Mulch.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
