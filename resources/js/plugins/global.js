import Vue from "vue";
import VueGlobalVar from "vue-global-var";
import store from '~/store/index'
import swal from 'sweetalert';

Vue.use(VueGlobalVar, {
    globals: {
        $alert: swal,
        $loading: {
            get() {
                // TODO : FINISH, AND TESTING
                //store.state.loading;
            },
            start() {
                store.dispatch('loading/loadingStart');
            },
            stop() {
                store.dispatch('loading/loadingStop');
            }
        },
        $mixin: store.$mixin
    },
});

export default new Vue()