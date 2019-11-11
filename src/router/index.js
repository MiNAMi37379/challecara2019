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
    component: () => import(/* webpackChunkName: "schedule" */ '../views/Schedule.vue')
  },
  {
    path: '/doing',
    name: 'doing',
    component: () => import(/* webpackChunkName: "doing" */ '../views/Doing.vue')
  },
  {
    path: '/multi',
    name: 'multi',
    component: () => import(/* webpackChunkName: "multi" */ '../views/Multi.vue')
  },
  {
    path: '/join',
    name: 'join',
    component: () => import(/* webpackChunkName: "join" */ '../views/Schedule.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
