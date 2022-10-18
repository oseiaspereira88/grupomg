import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AmbientesPage from '../views/AmbientesPage.vue'
import PreMoldadosPage from '../views/PreMoldadosPage.vue'
import SegurancaPage from '../views/SegurancaPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/ambientes-planejados',
    name: 'ambientes-planejados',
    component: AmbientesPage
  },
  {
    path: '/pre-moldados',
    name: 'pre-moldados',
    component: PreMoldadosPage
  },
  {
    path: '/mgs-seguranca',
    name: 'mgs-seguranca',
    component: SegurancaPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
