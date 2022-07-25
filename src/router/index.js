import Vue from 'vue'
import VueRouter from 'vue-router'
import InicioView from '../views/InicioView.vue'
import BuscadorView from '../views/BuscadorView.vue'
import Peleadores from '../views/Peleadores.vue'
import Resultado from '../views/Resultado.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
   
    component: InicioView
  },
  {
    path: '/buscador',
    name: 'buscador',
    
    component: BuscadorView
  },
  {
    path: '/peleadores',
    component: Peleadores
  },
  {
    path: '/peleadores/:id',
    component: Resultado
  },
  {
    path:'*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
