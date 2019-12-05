/*
 * @Author: your name
 * @Date: 2019-12-03 15:37:45
 * @LastEditTime: 2019-12-05 14:34:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mock\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mock from './mock'
import mocker from '../mocker/index'

// Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
