<template>
    <div class="text-center" v-if="loadingIsActive > 0">
        <loading :active="loadingIsActive > 0"
                 :can-cancel="false"
                 color="#004a99"
                 background-color="#ccfff1"
                 loader="spinner"
                 :height="65"
                 :width="80"
                 :is-full-page="true"></loading>
    </div>
</template>

<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        computed: {
            loadingIsActive () {
                return this.$store.state.loading.loadingDialog
            }
        },
        components: {
            Loading
        },
    };
</script>
