import Vue from 'vue'
import Router from 'vue-router'
import mine from './views/mine.vue'
import register from './views/register.vue'
import login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mine',
      component: mine
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      redirect: '/number-login',
      name: 'login',
      component: login,
      children:[
        {
          path: '/number-login',
          name: 'number-login',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/number-login.vue')
        },
        {
          path: '/phone-login',
          name: 'phone-login',
          // route level code-splitting
          // this generates a separate chunk (phone-login.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "phone-login" */ './components/phone-login.vue')
        }
      ]
    },
    
  ]
})
