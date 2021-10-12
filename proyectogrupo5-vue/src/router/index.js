import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import menu from '../views/menu.vue'
import cliente from '../views/cliente.vue'
import profesional from '../views/profesional.vue'
import agendar from '../views/agendar.vue'
import servicio from '../views/servicio.vue'
import signin from '../views/signin.vue'



Vue.use(VueRouter)

const routes = [
 {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {

  path: '/menu',
    name: 'menu',
    component: menu
  },
{
  path: '/cliente',
    name: 'cliente',
    component: cliente
  },

  {
    path: '/profesional',
      name: 'profesional',
      component: profesional
    },
  
  {
    path: '/servicio',
        name: 'servicio',
        component: servicio
    },

 {
        path: '/signin',
          name: 'signin',
          component: signin
    },
 
 {
  path: '/agendar',
    name: 'agendar',
    component: agendar
},


  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
