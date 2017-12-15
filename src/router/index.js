import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Manager from '@/components/Manager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/manager',
      name: 'Manager',
      component: Manager
    }
  ]
})
