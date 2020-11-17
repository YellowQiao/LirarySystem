import Vue from 'vue'
import VueRouter from 'vue-router'
import Mybookshelf from '../components/Mybookshelf'
import Borrowinfor from '../components/Borrowinfor'
import ModifyUserInfor from '../components/ModifyUserInfor'

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
  },
  {
    path: '/modifyUserInfor',
    name: 'ModifyUserInfor',
    component: ModifyUserInfor
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
