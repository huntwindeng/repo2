import Vue from 'vue'
import App from './App'
import router from './router'
//导入axios
import Axios from "axios"
//将axios挂载到原型
Vue.prototype.axios = Axios

// this.axios.defaults.baseURL = '/api'  //关键代码
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
