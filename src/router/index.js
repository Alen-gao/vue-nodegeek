import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Allen from '@/components/Allen'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Allen',
      name: 'Allen',
      component: Allen
    }
  ]
})
