/*
 * @Author: your name
 * @Date: 2020-11-12 14:24:02
 * @LastEditTime: 2020-11-13 22:14:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \购物车\my-app\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import install from "./plugins/inde.js"
import "./assets/style.min.css"
import "./utils/rem.js"

Vue.config.productionTip = false
Vue.use(install)


new Vue({
  
  router,
  store,
  render: h => h(App)
}).$mount('#app')
