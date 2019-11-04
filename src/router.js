import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/ragdoll',
      name: 'ragdoll',
      
      component: () => import('./views/ragdoll.vue')
    },
    {
      path: '/munchkin',
      name: 'munchkin',
      
      component: () => import('./views/munchkin.vue')
    },
    {
      path: '/scottish',
      name: 'scottish',
      
      component: () => import('./views/scottish.vue')
    },
    {
      path: '/american',
      name: 'american',
      
      component: () => import('./views/american.vue')
    },
    {
      path: '/exotic',
      name: 'exotic',
      
      component: () => import('./views/exotic.vue')
    },
    {
      path: '/russian',
      name: 'russian',
      
      component: () => import('./views/russian.vue')
    },
    {
      path: '/norwegian',
      name: 'norwegian',
      
      component: () => import('./views/norwegian.vue')
    },
    {
      path: '/bengal',
      name: 'bengal',
      
      component: () => import('./views/bengal.vue')
    },
    {
      path: '/maine',
      name: 'maine',
      
      component: () => import('./views/maine.vue')
    },
    {
      path: '/kitten',
      name: 'kitten',
      
      component: () => import('./views/kitten.vue')
    }
  ]
})
