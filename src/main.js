// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import'element-ui/lib/theme-chalk/index.css'
import api from './http'
import global from './http/modules/global'
import 'font-awesome/css/font-awesome.min.css'
import store from './store'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(api)

Vue.prototype.global=global //挂载全局配置模块

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
 render: h=>h(App)
})
