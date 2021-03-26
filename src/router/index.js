import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Packet from '../views/packet/Packet.vue'
import Massage from '../views/packet/Massage.vue'
import Fullbody from '../views/packet/Fullbody.vue'
import Facials from '../views/packet/Facials.vue'
import Nails from '../views/packet/Nails.vue'
import Detailpacket from '../views/detail-packet/Detailpacket.vue'
import Detailmassage from '../views/detail-packet/Detail-massage.vue'
import Detailfullbody from '../views/detail-packet/Detail-fullbody.vue'
import Detailfacials from '../views/detail-packet/Detail-facials.vue'
import Detailnails from '../views/detail-packet/Detail-nails.vue'

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
    path: '/massage',
    name: 'Massage',
    component: Massage
  },
  {
    path: '/fullbody',
    name: 'Fullbody',
    component: Fullbody
  },
  {
    path: '/facials',
    name: 'Facials',
    component: Facials
  },
  {
    path: '/nails',
    name: 'Nails',
    component: Nails
  },
  {
    path: '/massage/:id',
    name: 'Detailmassage',
    component: Detailmassage
  },
  {
    path: '/packet/:id',
    name: 'Detailpacket',
    component: Detailpacket
  },
  {
    path: '/fullbody/:id',
    name: 'Detailfullbody',
    component: Detailfullbody
  },
  {
    path: '/facials/:id',
    name: 'Detailfacials',
    component: Detailfacials
  },
  {
    path: '/nails/:id',
    name: 'Detailnails',
    component: Detailnails
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
