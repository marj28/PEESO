<template>
 <div :class="windowClass">
   <v-container>
    Dashboard here
   </v-container>
  </div>
</template>
<script>
import {
  mapMutations
} from 'vuex'
  export default {
    data: () => ({
     
    }),
    created() {
      this.setLoggedIn(true)
    },
    computed:{
       windowClass() {
        if(this.$store.state.responsive){
          return "va-reponsive"
        } else {
          return "va-not-reponsive"
        }
      },
    },
    methods: {
      ...mapMutations(['setAlert', 'setAlertColor', 'setAlertText', 'setLoggedIn']),
      
    },
  }
</script>