/*
 * @Author: your name
 * @Date: 2020-11-12 14:24:02
 * @LastEditTime: 2020-11-12 14:38:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \购物车\my-app\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import( '../views/Index.vue'),
    children:[ {
      path: '/about',
      name: 'About',
      component: () => import( '../views/Index/About.vue')
    },{
      path: '/home',
      name: 'Home',
      component: () => import( '../views/Index/Home.vue')
    }]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
