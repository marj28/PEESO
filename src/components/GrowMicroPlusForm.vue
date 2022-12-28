<template>
    <v-row justify="center">
        <v-dialog
          v-model="dialog"
          id="dialog"
          persistent
          max-width="1200px"
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
              GROW MICRO PLUS FORM
              </v-button-title>
            </v-btn>
            
            
            
          </template>
          
          <v-card id="Employer">
            <v-card-title>
              <span class="text-h7">GROW MICRO PLUS FORM</span>
            </v-card-title>
            <v-stepper v-model="e1">
      <v-stepper-header style="font-size: 14px">
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
          Client's Classification
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step 
         :complete="e1 > 3"
          step="3">
          Grow Micro Information
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step 
        :complete="e1 > 4"
        step="4">
          Loan Details
        </v-stepper-step>
    </v-stepper-header>
  
      <v-stepper-items>
        <!-- First Stepper -->
        <v-stepper-content step="1">
          <v-card
            class="mb-12"
            color="grey lighten-4"
            id="step1"
          >
          <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                   <v-text-field
                      label="Surname"
                      required  
                      outlined                 
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                    <v-text-field
                      label="First Name" 
                      outlined              
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                    <v-text-field
                      label="Middle Name"
                      required
                      outlined
                    ></v-text-field>
                    
                  </v-col>
                  <v-col 
                    cols="12" 
                    sm="12" 
                    md="3"
                    >
                    <v-select
                      :items="['Jr.','Sr.',  'III', 'etc']"
                      label="Suffix" required
                      outlined>
                    </v-select>
                  </v-col>
                  <v-col
                    cols="12" 
                    sm="12" 
                    md="3"
                    
                    >
                    <div >
                          <!-- <div class="mb-1">
                            <code>{{ activePicker || 'null' }}</code>
                          </div> -->
                          <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field v-model="date" label="Date of Birth" prepend-icon="mdi-calendar" readonly
                                v-bind="attrs" v-on="on" outlined></v-text-field>
                            </template>
                            <v-date-picker v-model="date" :active-picker.sync="activePicker"
                              :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                              min="1950-01-01" @change="save"></v-date-picker
                              >
                          </v-menu>
                        </div>
                  </v-col>
                  <v-col
                    cols="12" 
                    sm="12" 
                    md="3"
                  >
                    <v-text-field
                    label="Place of Birth"
                    outlined>
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12" 
                    sm="6" 
                    md="3"
                  >
                    <v-text-field
                    label="Cellphone Number"
                    outlined>
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12" 
                    sm="6" 
                    md="3"
                  >
                    <v-text-field
                    label="Email Address"
                    outlined>
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="12"
                    sm="12"
                    >
                    <p
                    class="font-weight-bold"
                    
                    >Home Address</p>
                  </v-col>
                  <v-col
                    cols="12"
                    md="2"
                    sm="12"
                    style="margin-top: -30px"
                  >
                  <v-text-field
                      label="Region"
                      required    
                      outlined               
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="2"
                    sm="12"
                    style="margin-top: -30px">
                  <v-text-field
                      label="Province"
                      required  
                      outlined                 
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="2"
                    sm="12"
                    style="margin-top: -30px">
                  <v-text-field
                      label="Municipality / City"
                      required  
                      outlined                 
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="2"
                    sm="12"
                    style="margin-top: -30px">
                  <v-text-field
                      label="Barangay"
                      required
                      outlined                   
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    sm="12"
                    style="margin-top: -30px">
                  <v-text-field
                      label="House No. / Street / Village"
                      required 
                      outlined                  
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="12"
                  >
                    <v-select
                      :items="['Single','Married',  'Widowed']"
                      label="Civil Status" required outlined>
                    </v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="12"
                  >
                    <v-select
                      :items="['Female','Male',  'LGBTQ']"
                      label="Gender" required outlined>
                    </v-select>
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
              <p class="font-weight-bold">Client's Classification</p>
              <v-col
                  cols="12"
                  sm="12"
                  md="3"
                  class="ma-2"
                >
                <v-checkbox-group >
                  <v-checkbox label="Senior Citizen" ></v-checkbox>
                  <v-checkbox label="Solo-Parent" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="IP / Muslim" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="OFW Returnee" style="margin-top: -10px"></v-checkbox>
                  
                </v-checkbox-group>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="3"
                  class="ma-2"
                >
                <v-checkbox-group>
                  <v-checkbox label="Parent w/ malnourished children" ></v-checkbox>
                  <v-checkbox label="Person Deprived with Liberty (PDL)" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Former PDL" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Rebel Returnee" style="margin-top: -10px"></v-checkbox>
                </v-checkbox-group>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="3"
                  class="ma-2"
                >
                <v-checkbox-group>
                  <v-checkbox label="Enumerated as Child Laborer"></v-checkbox>
                  <v-checkbox label="Child Laborer Parent" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Agrarian Reform Beneficiaries (ARB)" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="4Ps" style="margin-top: -10px"></v-checkbox>
                  <v-text-field label="Others" outlined></v-text-field>
                </v-checkbox-group>
              </v-col>
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
                md="12"
                class="font-weight-bold"
              >
                Grow Micro Information: 
              </v-col>
              <v-col
                cols="12"
                md="7"
                >
                <v-text-field
                  label="Kind of Business "
                  outlined
                ></v-text-field>
              </v-col>
              <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                    <v-select
                      :items="growmicroyears"
                      label="No. of Years in Grow Micro Program"
                      outlined>
                  </v-select>
                  </v-col>
              <v-col
                cols="12"
                md="2"                
                >
                <v-text-field
                  label="No. of Cycle"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="6"
                >
                <v-text-field
                  label="Income from Business (Monthly) "
                  outlined
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
                
                >
                <v-text-field
                  label="Other Source of Income "
                  outlined
                ></v-text-field>
              </v-col>              
            </v-row>
          </v-container>
        </v-card-text>    
      </v-card>

        <v-btn
          id="v-btn-c"
          color="secondary"

          @click="e1 = 4"
        >
          Continue
        </v-btn>
        <v-btn 
        @click="e1 = 2"
        class="ma-2"
        >
          Back
        </v-btn>
      </v-stepper-content>

      <!-- Fourth Stepper -->
        <v-stepper-content step="4">
          <v-card
            class="mb-12"
            color="grey lighten-4"
          >
          <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col
                cols="12"
                sm="4"
                md="12"
                class="font-weight-bold"
              >
                Loan Details:  
              </v-col>
              <v-col
                cols="12"
                md="4"
                >
                <v-select
                  :items="['Regular','OFW',  'REAL', 'TRICYCLE DRIVER']"
                  label="Category" required
                  outlined>
                </v-select>
              </v-col>
              <v-col
                cols="12"
                md="4"
                >
                <v-select
                  :items="['PHP 5,000.00','PHP 10,000.00',  'PHP 15,000.00', 'PHP 20,000.00', 'PHP 25,000.00']"
                  label="Amount of Loan Applied" required
                  outlined>
                </v-select>
              </v-col>
              <v-col
                cols="12"
                md="4"
                >
                <v-select
                  :items="['Daily','Weekly',  'Monthly']"
                  label="Mode of Payment" required
                  outlined>
                </v-select>
              </v-col>
              <v-col
                cols="12"
                md="12"
                >
                <v-textarea
                  label="Purpose of Loan"
                  outlined
                ></v-textarea>
              </v-col>
              </v-row>
          </v-container>
        </v-card-text>
        </v-card>
  
        <v-btn 
          @click="e1 = 3 "
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

          growmicroyears: ['1 year','2 years','3-5 years','6-10 years','11-20 years']
        }
      },
    }
  </script>
  
  <style scoped>
    /* #v-btn-c{
      margin-top: -60px;
      
    } */
    #Employer .v-stepper-header{
        font-size: 10px;
    }
  </style>