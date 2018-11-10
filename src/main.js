import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false
new Vue({ 
  router
}).$mount('#app')
