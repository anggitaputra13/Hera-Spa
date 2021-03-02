import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Packet from '../views/Packet.vue'
import Detailpacket from '../views/Detailpacket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/packet',
    name: 'Packet',
    component: Packet
  },
  {
    path: '/packet/:id',
    name: 'Detailpacket',
    component: Detailpacket
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
