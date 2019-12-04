import Vue from 'vue'
import App from './App'

import shouye from './pages/shouye/home.vue'
Vue.component('shouye',shouye)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
