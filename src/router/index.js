import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Home'

Vue.use(Router)

let router = new Router({

  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    }

  ],

  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
