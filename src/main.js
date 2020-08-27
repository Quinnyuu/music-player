import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus=new Vue()

import './assets/fonts/iconfont/iconfont.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
