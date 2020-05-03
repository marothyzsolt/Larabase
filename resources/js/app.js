import 'babel-polyfill'
import Vue from 'vue'
import router from '~/router/index'
import store from '~/store/index'
import App from '$comp/App'
import '~/plugins/index'
import vuetify from '~/plugins/vuetify'
import VueCookies from '~/plugins/cookie'
import Validator from '~/plugins/validation'
import VueSilentbox from '~/plugins/slientbox'
import Globals from '~/plugins/global'
import { sync } from 'vuex-router-sync'

const unsync = sync(store, router)

Vue.use(Validator)

export const app = new Vue({
  router,
  store,
  vuetify,
  VueCookies,
  VueSilentbox,
  Globals,
  unsync,
  render: h => h(App)
}).$mount('#app')
