import Vue from 'vue'
import Vuex from 'vuex'
import Mixin from '~/plugins/mixins/index'

Vue.use(Vuex)

const requireContext = require.context('./modules', false, /.*\.js$/)

const modules = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
  )
  .reduce((modules, [name, module]) => {
    if (module.namespaced === undefined) {
      module.namespaced = true
    }

    return { ...modules, [name]: module }
  }, {})

var vuexStore = new Vuex.Store({
  modules
});

vuexStore.$mixin = Mixin(vuexStore, Vue);

export default vuexStore;