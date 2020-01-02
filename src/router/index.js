import Vue from 'vue'
import  '@/assets/css/mui.min.css'
import  '@/assets/css/app.css'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import card  from '@/components/card'
import grid  from '@/components/grid'
import index  from '@/components/index'
import home  from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/',
      name: 'grid',
      component: grid
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
