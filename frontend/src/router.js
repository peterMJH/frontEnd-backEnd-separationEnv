import Vue from 'vue'
import Router from 'vue-router'
import List from './components/List.vue'
import GetOne from './components/GetOne.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'getList',
      component: List
    },
    {
      path: '/:id',
      name: 'findOne',
      component: GetOne
    }
  ]
})
