<template>
  <v-flex sm8 md6 lg4>
    <v-card>
      <v-toolbar color="primary-red" flat>
        <v-toolbar-title class="white--text">Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <login-form @success="success"/>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import LoginForm from './LoginForm'

export default {
  components: {
    LoginForm
  },

  methods: {
    success(data) {
      this.$store.dispatch('auth/saveToken', data)
      this.$store.dispatch('auth/setUser', data)
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
