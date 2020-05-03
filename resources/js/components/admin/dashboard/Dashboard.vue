<template>
  <div>
    <h2 class="mb-4 primary--text headline">Dashboard</h2>

    <v-btn class="info" @click="start">
      Teszt
    </v-btn>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    user: {
      name: null,
      email: null,
    }
  }),

  computed: mapGetters({
    auth: 'auth/user'
  }),

  mounted() {
    this.user = Object.assign(this.user, this.auth)
  },
  methods: {
    start: function() {
      this.$loading.start();
    }
  }
}
</script>
