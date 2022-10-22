import Vue from 'vue'
import VueRouter from 'vue-router'
import MgPage from '../views/MgPage.vue'
import MgaPage from '../views/MgaPage.vue'
import MgpPage from '../views/MgpPage.vue'
import MgsPage from '../views/MgsPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Grupo MG', component: MgPage },
  { path: '/mga', name: 'MGA Ambientes Planejados', component: MgaPage },
  { path: '/mgp', name: 'MGP Pre-moldados e Construções', component: MgpPage },
  { path: '/mgs', name: 'MGS Seguranca', component: MgsPage },
  { path: '/agility', name: 'Agility',
    beforeEnter() { location.href = 'https://agilitytelecom.com.br/' } },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
