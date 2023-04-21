import Vue from 'vue'
import App from './App'
import router from './router'
// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 导入 font-awesome
import 'font-awesome/css/font-awesome.min.css'
// 全局引入 echarts
import * as echarts from 'echarts'
// 全局引入 axios
import axios from 'axios'
// 引入全局变量
import constant from './assets/js/constant';
// 导入钱的图标
import './assets/icon/iconfont.js'
import './assets/icon/iconfont.css'

Vue.config.productionTip = false
// 使用 Element
Vue.use(ElementUI)
// 使用 echarts 挂载到 Vue 上
Vue.prototype.$echarts = echarts
// 将 echarts 挂载到 Vue 上
Vue.prototype.$axios = axios
Vue.prototype.$constant = constant

// 设置接口请求的前缀地址
// axios.defaults.baseURL = '/zhifou'
// 全局设置token
// 请求拦截器(在请求之前进行一些配置)
/* axios.interceptors.request.use(function (config) {
  // 设置token
  let token = sessionStorage.getItem('token')
  if(token === '2') {
    config.headers['token'] = token
  }
  console.log('2');
  return config
}) */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
