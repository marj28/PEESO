<template>
    <v-toolbar flat dense dark color="secondary" id="va-toolbar">
      <v-app-bar-nav-icon @click="togle()" v-if="$store.state.responsive"></v-app-bar-nav-icon>

      <v-toolbar-title class="caption">{{currentRouteName}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="caption">Hi, User</span>
      <v-icon small right color="fourth">mdi-power-standby</v-icon>
    </v-toolbar>
</template>

<script>
import {
  mapMutations
} from 'vuex'
export default {
    data: () => ({
    title: null
  }),
  computed:{
    currentRouteName() {
        return this.$route.name;
    }
  },
  methods: {
    ...mapMutations(['setDrawer']),
    togleDrawer () {
      this.setDrawer(true)
    }
  }
}
</script>
 