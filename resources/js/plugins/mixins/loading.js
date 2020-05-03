
export default {
    data: {},

    methods: {
        start() {
            this.$store.dispatch('loading/loadingStart')
        },
        stop() {
            this.$store.dispatch('loading/loadingStop')
        }
    }
}