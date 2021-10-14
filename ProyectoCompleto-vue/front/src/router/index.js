import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import agendar from '../views/agendar.vue'
import cliente from '../views/cliente.vue'

import profesional from '../views/profesional.vue'
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
    path: '/signin',
    name: 'signin',
    component: signin
  },

  {
    path: '/agendar',
    name: 'agendar',
    component: agendar
  },

  {
    path: '/servicio',
    name: 'servicio',
    component: servicio
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
    path: '/inicioAgenda',
    name: 'InicioAgenda',
    component: () => import('../views/Agendas/InicioAgenda.vue')
  },
  {
    path: '/agendaProf_01',
    name: 'AgendaProf_01',
    component: () => import('../views/Agendas/AgendaProf_01.vue')
  },
  {
    path: '/agendaProf_02',
    name: 'AgendaProf_02',
    component: () => import('../views/Agendas/AgendaProf_02.vue')
  },
  {
    path: '/agendaProf_03',
    name: 'AgendaProf_03',
    component: () => import('../views/Agendas/AgendaProf_03.vue')
  },
  {
    path: '/listaCitas',
    name: 'ListaCitas',
    component: () => import('../views/Admin/ListaCitas.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
