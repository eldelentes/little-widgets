import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'es6-promise/auto'
import { store } from './store/store'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
