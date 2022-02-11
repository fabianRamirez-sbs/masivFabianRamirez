import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Home'
import Ratings from '@/views/Ratings/Ratings'
import About from '@/views/About/About'

Vue.use(Router)

let router = new Router({

  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }

  ]
})

export default router
