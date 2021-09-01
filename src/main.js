/* eslint-disable dot-notation */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'boxicons'
import axios from 'axios'
import 'boxicons/css/boxicons.min.css'

import 'vuesax/dist/vuesax.css'

axios.defaults.baseURL = 'https://pavilioncms-dev.herokuapp.com/api/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('AccessToken')
Vue.use(Vuesax, {
  // options here
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
