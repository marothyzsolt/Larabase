import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib'
import VuetifyToast from 'vuetify-toast-snackbar'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  },
  icons: {
    iconfont: 'fa',
  }
})
Vue.use(VuetifyToast)

export default new Vuetify()
