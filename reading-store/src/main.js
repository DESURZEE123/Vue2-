import Vue from 'vue'
import App from './App'
import router from './router'
import Vant, {
  Icon,
  NavBar,
  Lazyload
} from "vant"

// rem适配
import "amfe-flexible"
// 全局 css
import "@/style/index.less"; 
import "vant/lib/index.css";

// import "@/assets/css/fonts.css";

Vue.config.productionTip = false
Vue.use(Vant, Icon)
Vue.use(NavBar);
Vue.use(Lazyload)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
/* new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app"); */