<template>
  <v-card :class="color" dark sm="4" cols="12">
    <v-card-text style="height: 170px;">
      <v-icon v-if="icon != null" left large style="float: left; margin-top: 6px; margin-right: 12px;">{{icon}}</v-icon> 
        <p style="float: left;">
          <small class="overline font-weight-thin" style="border-bottom: 1px solid #dfeecb;">{{label}}</small><br />
            <span class="subtitle-1">{{data}}  <v-spacer></v-spacer>
              <sup v-if="sup">{{sup}}</sup>
            </span>
              <v-spacer></v-spacer>
              <v-divider></v-divider>
                <span class="d-flex align-center justify-center pa-4 mx-auto ml-10"> {{btn}} {{mapplications}}
                </span>
        </p> 
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "secondary"
    },
    icon: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    data: {
      type: String,
      default: ''
    },
    sup: {
      type: String,
      default: ''
    },
    btn:{
      type: String,
      default: ''
    },
    mapplications:{
      type: String,
      default: ''
    }
  }
}
</script>