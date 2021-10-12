import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
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
