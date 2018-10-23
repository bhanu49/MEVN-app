import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Students from '@/components/Students'
import Sponsers from '@/components/Sponsers'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Students',
      name: 'Students',
      component:Students
    },
    {
      path: '/Sponsers',
      name: 'Sponsers',
      component: Sponsers
    }
  ],
})
