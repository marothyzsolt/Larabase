import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies);

// set default config
Vue.$cookies.config('7d')

export default new Vue()
