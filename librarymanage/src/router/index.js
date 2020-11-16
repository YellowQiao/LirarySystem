import Vue from 'vue'
import VueRouter from 'vue-router'
import Mybookshelf from '../components/Mybookshelf'
import Borrowinfor from '../components/Borrowinfor'

Vue.use(VueRouter)

const routes = [
  {
    path: '/mybookshelf',
    name: 'Mybookshelf',
    component: Mybookshelf
  },
  {
    path: '/borrowinfor',
    name: 'Borrowinfor',
    component: Borrowinfor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
