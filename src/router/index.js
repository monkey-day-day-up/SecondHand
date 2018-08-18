import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import shoppingcar from '@/components/personalCenter/shoppingcar'
import release from '@/components/personalCenter/release'
import order from "@/components/mypage/order"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home

    },
    {
      path: '/my',
      name: 'my',
      component: order
    },
    {
      path: '/release',
      name: 'release',
      component:release
    },{
      path: '/shoppingcar',
      name: 'shoppingcar',
      component: shoppingcar
    },

  ]
})
