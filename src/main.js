import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'es6-promise/auto'
import { store } from './store/store'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import Editor from './views/Editor.vue'
import Widget from './components/widget.vue'

const config = {
    apiKey: "AIzaSyDCJMocW-SkbB1IY_RjRU9pIH4Jp4zm2AY",
    authDomain: "little-widgets.firebaseapp.com",
    databaseURL: "https://little-widgets.firebaseio.com",
    projectId: "little-widgets",
    storageBucket: "little-widgets.appspot.com",
    messagingSenderId: "817255148693",
    appId: "1:817255148693:web:3b3def5238a370c0"
}

firebase.initializeApp(config)

export const db = firebase.firestore()

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
    {
      name: 'Editor',
      path: '/editor',
      component: Editor,
      props: true
    },
    {
        name: 'widget-prod',
        path: '/widget/:widget',
        component: Widget,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')