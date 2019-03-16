import Vue from 'vue'
import App from './App.vue'
import VueMqtt from 'vue-mqtt'
import BootstrapVue from 'bootstrap-vue'
import Axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { faEraser } from '@fortawesome/free-solid-svg-icons'
import { faFill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faRedo)
library.add(faFill)
library.add(faEraser)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(VueMqtt, 'ws://10.90.154.80:9001', {clientId: 'PixelPaint'})
Vue.prototype.$http = Axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: {}
}).$mount('#app')
