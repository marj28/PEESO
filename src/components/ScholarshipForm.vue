<template>
    <v-row justify="center">
        <v-dialog
          v-model="dialog"
          id="dialog"
          persistent
          max-width="1400px"
        >
        
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="#77dd77"
                dark
                v-bind="attrs"
                v-on="on"
                class = "pa-md-4 mx-lg-auto mt-1"
                width="250px"
                style="font-size: 12px"
            >
                <v-button-icon>
                  <v-icon>mdi-account</v-icon>
                  </v-button-icon>
              <v-button-title>
              SCHOLARSHIP FORM
              </v-button-title>
            </v-btn>
          </template>
          
          <v-card id="Employer">
            <v-card-title>
              <span class="text-h7">SCHOLARSHIP APPLICATION FORM</span>
            </v-card-title>
            <v-stepper v-model="e1">
      <v-stepper-header style="font-size: 16px">
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
          style="height="
        >
          Personal Information
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          Student's Educational Attainment
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step 
         :complete="e1 > 3"
          step="3">
          Other Information
        </v-stepper-step>
    </v-stepper-header>
  
      <v-stepper-items >
        <!-- First Stepper -->
        <v-stepper-content step="1" >
          <v-card
            class="mb-12"
            color="grey lighten-4"
            
          >
          <v-card-text>
              <v-container>
                <v-row >  
                  <v-col
                    cols="12"
                    sm="12"
                    md="4"
                    
                  >
                   <v-text-field
                      label="Surname"
                      required  
                      dense 
                      outlined                
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="4"
                  >
                    <v-text-field
                      label="First Name"
                      outlined   
                      dense                         
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="4"
                  >
                    <v-text-field
                      label="Middle Name"
                      required
                      dense
                      outlined
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12" 
                    sm="12" 
                    md="3"
                    >
                    <div>
                          <!-- <div class="mb-1">
                            <code>{{ activePicker || 'null' }}</code>
                          </div> -->
                          <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field v-model="date" label="Date of Birth" outlined dense prepend-icon="mdi-calendar" readonly
                                v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" :active-picker.sync="activePicker"
                              :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                              min="1950-01-01" @change="save"></v-date-picker>
                          </v-menu>
                        </div>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                    <v-text-field
                      label="Citizenship"
                      required
                      outlined
                      dense
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                    <v-text-field
                      label="Contact Details / Mobile No."
                      required
                      dense
                      outlined
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                    <v-text-field
                      label="Email Address"
                      required
                      outlined
                      dense
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      label="Present Address"
                      required
                      outlined
                      dense
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      label="Permanent Address"
                      required
                      outlined
                      dense
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                    <v-text-field
                      label="Last School Year Attended 2021-2022"
                      required
                      outlined
                      dense
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                    <v-text-field
                      label="Grade Level S.Y. 2021-2022"
                      required
                      dense
                      outlined
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                    <v-text-field
                      label="School Attended for S.Y. 2022-2023"
                      required
                      dense
                      outlined
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                    <v-text-field
                      label="Grade Level for S.Y. 2022-2023"
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-select
                      :items="parentsStatus"
                      label="Current Status of Parents"
                      outlined
                      dense
                      multiple>
                  </v-select>
                  </v-col>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-col
                    cols="12"
                    sm="12"
                    md="7"
                  >
                    <v-text-field
                      label="Father's Full Name"
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="2"
                  >
                    <v-text-field
                      label="Contact No."
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                    <v-text-field
                      label="Occupation"
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="7"
                  >
                    <v-text-field
                      label="Mother's Full Name"
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="2"
                  >
                    <v-text-field
                      label="Contact No."
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                    <v-text-field
                      label="Occupation"
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="7"
                  >
                    <v-text-field
                      label="Guardian's Full Name"
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="2"
                  >
                    <v-text-field
                      label="Contact No."
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                    <v-text-field
                      label="Occupation"
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
        </v-card>
  
          <v-btn
            id="v-btn-c"
            color="secondary"
            @click="e1 = 2"
          >
            Continue
          </v-btn>
  
          <v-btn
          id="v-btn-c"
          class="ma-4"
          @click="dialog=false">
            Cancel
          </v-btn>
        </v-stepper-content>
        
        <!-- Second Stepper -->
        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            color="grey lighten-4"
          >
          <v-card-text>
            <v-container fluid>
              <v-row>
                <v-row
                      cols="12"
                      sm="2"
                      md="12"
                      class="ma-2"
                      id="move"
                    >
                    <v-col 
                      cols="12"
                      sm="12"
                      md="12">
                      <p class="font-weight-bold" style="margin-top: -20px">
                        ELEMENTARY
                      </p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-text-field outlined label="Name of School">
                    </v-text-field>
                    <v-text-field outlined label="Year / Level">
                    </v-text-field>
                    <v-text-field outlined label="Date of Attendance">
                    </v-text-field>
                  </v-row>
                  <v-row
                      cols="12"
                      sm="2"
                      md="12"
                      class="ma-2"
                    >
                    <v-col 
                      cols="12"
                      sm="12"
                      md="12"
                      id="move">
                      <p class="font-weight-bold">
                        JUNIOR HS
                      </p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-text-field outlined label="Name of School">
                    </v-text-field>
                    <v-text-field outlined label="Year / Level">
                    </v-text-field>
                    <v-text-field outlined label="Date of Attendance">
                    </v-text-field>
                  </v-row>
                  <v-row
                      cols="12"
                      sm="2"
                      md="12"
                      class="ma-2"
                    >
                    <v-col 
                      cols="12"
                      sm="12"
                      md="12"
                      id="move">
                      <p class="font-weight-bold">
                        SENIOR HS
                      </p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-text-field outlined label="Name of School">
                    </v-text-field>
                    <v-text-field outlined label="Year / Level">
                    </v-text-field>
                    <v-text-field outlined label="Date of Attendance">
                    </v-text-field>
                  </v-row>                  
              </v-row>
            </v-container>
          </v-card-text>    
  
        </v-card>
  
          <v-btn
            id="v-btn-c"
            color="secondary"
  
            @click="e1 = 3"
          >
            Continue
          </v-btn>
          <v-btn 
          @click="e1 = 1"
          class="ma-2"
          >
            Back
          </v-btn>
        </v-stepper-content>
  
        <!-- Third Stepper -->
        <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-4"
        >
      
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="6">
              <p>
                Do you have brother's & sister's enjoying the same scholarship program?
              </p>
              <v-checkbox
              label="Yes">
              </v-checkbox>
              <v-checkbox
              label="No">
              </v-checkbox>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="6">
                <p>
                If yes, kindly state their name(s): 
                </p>
                <v-text-field hint="Names here" outlined></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12">
                <p class="text-subtitle-2 text-center">We hereby certify the correctness of the above information.</p>
              </v-col>
              <v-spacer></v-spacer>
              <v-col
                cols="12"
                sm="12"
                md="4">
                <v-file-input
                  label="Attached ID here"
                  filled
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>    
      </v-card>

      <v-btn 
          @click="e1 = 2 "
          class="ma-2"
          >
            Back
          </v-btn>
          <v-btn 
          class="ma-2"
          color="secondary"
          @click="dialog = false"
          value="save"
          >
            Save
          </v-btn>
      </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
          </v-card>
        </v-dialog>
      </v-row>    
    </template>
  
  <script>
  export default {
  
      data () {
        return {
          e1: 1,
          dialog: false,
          activePicker: null,
          date: null,
          menu: false,
          includeFiles: true,
          enabled: false,

          parentsStatus: ['Living Together','Senior Citizen','Solo Parent','OFW','Separated','4Ps','Indigenous People',
                          'Person with Disability'],
        }
      },
      watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
        },
      },
      methods: {
      save (date) {
        this.$refs.menu.save(date)
        },
      }
    }
  </script>
  
  <style scoped>
    /* #v-btn-c{
      margin-top: -60px;
      
    } */
    #Employer .v-stepper-header{
        font-size: 10px;
    }

    /* v-stepper-items{
      font-size: 8px;
    } */
    .v-text-field{
      margin-top: -15px
    }
  </style>