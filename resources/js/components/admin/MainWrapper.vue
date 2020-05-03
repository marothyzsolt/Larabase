<template>
  <div class="fill-height">
    <app-nav :mini="mini" @nav-toggle="navToggle"></app-nav>
    <top-menu @nav-toggle="navToggle"></top-menu>

    <v-content>
      <v-container fluid>
        <transition name="fade" mode="out-in">
          <v-container fluid grid-list-xl>
            <v-layout row justify-center wrap>
              <v-flex md12>
                <transition name="fade" mode="out-in">
                  <router-view></router-view>
                </transition>
              </v-flex>
            </v-layout>
          </v-container>
        </transition>
      </v-container>
    </v-content>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from './shared/AppNav'
import TopMenu from './shared/TopMenu'
import AppFooter from './shared/AppFooter'
import {mapGetters} from 'vuex'

export default {
  components: {
    AppNav,
    TopMenu,
    AppFooter
  },

  methods: {
    navToggle() {
      this.$store.dispatch('nav/toggleNav')
    }
  },
  computed: {
    ...mapGetters({
      mini: 'nav/mini',
    }),
  },
  beforeCreate() {
  },
}
</script>
