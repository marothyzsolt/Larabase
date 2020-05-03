<template>
  <v-app id="app">
    <loading/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
  import Loading from "~/components/base/Loading"

  export default {
    components:{
      Loading
    }
  }
</script>
