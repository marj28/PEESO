<template>
    <v-navigation-drawer
      v-model="$store.state.drawer"
      absolute
      dark
      class="body-1"
      id="va-drawer"
      color="#1c775a"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="$store.state.applogo"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>PEESO</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      
      <v-list dense>
      <v-list-item-group color="fff" >
          <v-list-item>
          <v-list-item-icon>
            <v-icon small>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="caption" >
              Main</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-subheader>INFORMATION</v-subheader>
        <v-line-break ></v-line-break>
        <!-- <Navbar/> -->
        <v-list-group :value="false" no-action sub-group>
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>Admin</v-list-item-title>
                                </v-list-item-content>
                            </template>
                                <v-list-item v-for="item in items" :key="item.text" router :to="item.route">
                                <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                                <v-list-item-title>{{ item.text }}</v-list-item-title>
                                <v-list-item-icon>
                                    <v-icon v-text="icon"></v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-group>


          <Popup/>
          <EstablishmentSurveyForm/>
          <SkillsSurveyForm/>
          <ScholarshipForm />
          <RegistrationForm/>
          <GrowMicroPlusForm/>
          <EntrepreneurialProgramRegForm/>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
// import { createPublicKey } from 'crypto';
import Popup from '../Popup'
import EstablishmentSurveyForm from '../EstablishmentSurveyForm'
import SkillsSurveyForm from '../SkillsSurveyForm'
import ScholarshipForm from '../ScholarshipForm'
import RegistrationForm from '../RegistrationForm'
import GrowMicroPlusForm from '../GrowMicroPlusForm'
import EntrepreneurialProgramRegForm from '../EntrepreneurialProgramRegForm'

import {
  mapMutations
} from 'vuex'
  export default {
    components: {Popup, EstablishmentSurveyForm, SkillsSurveyForm, ScholarshipForm, RegistrationForm, 
                  GrowMicroPlusForm, EntrepreneurialProgramRegForm
                }, 
    data () {
      return {
        item: 1,
        mini: false,
        
        items: [
                {
                    icon: 'mdi-view-dashboard',
                    text: 'Dashboard', route: '/popup'
                },
                {
                    icon: 'mdi-card-bulleted-settings-outline',
                    text: 'settings',
                    route: '/settings'
                },
                {
                    icon: 'mdi-bluetooth-audio',
                    text: 'Bluetooth', route: '/create'
                },
                {
                    icon: 'mdi-auto-fix',
                    text: 'Sample', route: '/Sample'
                },
            ],
      }
    },
    computed: {
    },
    methods: {
      ...mapMutations(['setDrawer']),
      form(){
        
      }
    }
  }
</script>