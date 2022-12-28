<template>
  <v-app>
    <!-- <Navbar2 /> -->
    <v-content>
      <core-toolbar  :class="windowClass" v-if="IsLoggedIn"/>
      <core-drawer v-if="IsLoggedIn"/>
      <core-view :class="windowClass"/>
        <div>
          <PieChart :pieData="pieData" />
        </div>
    </v-content>
      <v-snackbar
        v-model="showAlert"
        :color="alertColor"
        :timeout="2000"
        :top="'top'" >
        {{alertText }}
      </v-snackbar>
  </v-app>
</template>

<script>
// import Navbar2 from '@/components/Navbar2';

import {
  mapMutations
} from 'vuex'
export default {
  name: 'App',
  components: { 
  },

  data: () => ({
  }),
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  computed:{
      showAlert: {
        get () {
          return this.$store.state.show_alert
          },
          set (val) {
            this.setAlert(val)
          }
      },
      alertText() {
        return this.$store.state.alert_text
      },
      alertColor(){
          return this.$store.state.alert_color
      },
      windowClass() {
        if(this.$store.state.responsive){
          return "va-reponsive"
        } else {
          return "va-not-reponsive"
        }
      },
      IsLoggedIn(){
        return this.$store.state.is_logged
      }
  },
  methods: {
    ...mapMutations(['setDrawer', 'setResponsive', 'setAlert']),
      onResponsiveInverted() {
          if (window.innerWidth < 991) {
          this.setResponsive(true)
          } else {
            this.setDrawer(true)
            this.setResponsive(false)
          }
    }
  }

};
</script>

<style>
  #va-drawer, #va-toolbar {
    text-transform: uppercase !important;
  }
  .va-not-reponsive {
    padding-left: 255px;
  }
  /* #mainVue {
    background-image: url('./assets/cityhall.jpg');
    background-size: auto;
    background-color: green;
  } */
  main{
    /* background-image: url('./assets/cityhall.jpg');
    background-size: auto; */
    background-size: auto;
    background-color: rgb(181, 234, 181);
  }
</style>