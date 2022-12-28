<template>
  <v-row justify="center">
      <v-dialog
        v-model="dialog"
        id="dialog"
        persistent
        max-width="1500px"
      >
      
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="#77dd77"
              dark
              v-bind="attrs"
              v-on="on"
              class = "pa-md-4 mx-lg-auto mt-1"
              width="250px"
              style="font-size: 10px"
          >
              <v-button-icon>
                <v-icon>mdi-account</v-icon>
                </v-button-icon>
            <v-button-title>
            ENTREPRENEURIAL PROGRAM FORM
            </v-button-title>
          </v-btn>
          
          
          
        </template>
        
        <v-card id="Employer">
          <v-card-title>
            <span class="text-h7">ENTREPRENEURIAL PROGRAM REGISTRATION FORM</span>
          </v-card-title>
          <v-stepper v-model="e1">
    <v-stepper-header style="font-size: 14px">
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
        style="height="
      >
        Personal 
        <v-spacer></v-spacer>
        Information  
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Client's 
        <v-spacer></v-spacer>
        Classification
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step 
      :complete="e1 > 3"
        step="3">
        Employment
        <v-spacer></v-spacer>
        Information
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step 
      :complete="e1 > 4"
      step="4">
        Work History
      </v-stepper-step>
    

    <v-divider></v-divider>

      <v-stepper-step 
      :complete="e1 > 5"
      step="5">
        Educational
        <v-spacer></v-spacer>
        Background
      </v-stepper-step>

    <v-divider></v-divider>

      <v-stepper-step 
      :complete="e1 > 6"
      step="6">
        Technical/Vocational
        <v-spacer></v-spacer>
        Training
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step 
      :complete="e1 > 7"
      step="7">
        Entrepreneurial 
        <v-spacer></v-spacer>
        Training
      </v-stepper-step>

    <v-divider></v-divider>

      <v-stepper-step 
      :complete="e1 > 8"
      step="8">
       Certification 
       <v-spacer></v-spacer>
       and Undertaking
      </v-stepper-step>

    <v-divider></v-divider>
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
                  >
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
                    >
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
                    >
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
                    >
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
                      :items="civilstatus"
                      label="Civil Status" required outlined>
                    </v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="12"
                  >
                    <v-select
                      :items="gender"
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
            id="step2"
          >
          <v-card-text>
            <v-container fluid>
              <v-row> 
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                <p class="font-weight-bold">
                  Employment Information:
                </p>
              </v-col>
                <v-row
                  cols="12"
                  sm="12"
                  md="2"
                  id="step2"                  
                  >                
                  <v-checkbox
                    v-model="ex4"
                    label="Employed"
                    color="secondary"
                    value="Employed"
                    hide-details
                    class="font-weight-bold"
                    >                     
                  </v-checkbox>  
                  <v-col style="margin-top: 20px">
                    <v-radio-group >
                    <v-radio label="Wage Employed"></v-radio>
                    <v-radio label="Self-Employed"></v-radio>
                  </v-radio-group>
                  </v-col>                
                </v-row>
                <v-row
                  cols="12"
                  sm="3"
                  md="10"
                  id="step2"
                  
                >                
                  <v-checkbox
                    v-model="ex4"
                    label="Unemployed"
                    color="secondary"
                    value="Unemployed"
                    hide-details
                    class="font-weight-bold"
                    style="margin-top: -10px"
                    >                     
                  </v-checkbox>  
                  <v-col>
                    <v-radio-group row>
                    <v-radio label="Fresh Graduate"></v-radio>
                    <v-radio label="Finished Contract"></v-radio>
                    <v-radio label="Resigned"></v-radio>
                    <v-radio label="Terminated"></v-radio>
                    <v-radio label="Retiree"></v-radio>
                    <v-radio label="Others: "></v-radio>
                  </v-radio-group>
                  </v-col>              
                </v-row>
                <v-row
                cols="12"
                sm="12"
                md="6">
                <v-container>
                <v-col
                  >
                  <p style="margin-top: -30px" class="font-weight-bold">Are you looking for work (Local)?</p>
                  <v-radio-group row >
                    <v-radio label="Yes"></v-radio>
                    <v-radio label="No"></v-radio>                                       
                  </v-radio-group>
                </v-col>
                <v-col 
                cols="12"
                sm="12"
                md="12">
                  <v-text-field label="If Yes, what is your preferred occupation? " outlined></v-text-field> 
                </v-col>
                </v-container>
              </v-row>
              <v-row
                cols="12"
                sm="12"
                md="6">
                <v-container>
                <v-col
                  >
                  <p style="margin-top: -30px" class="font-weight-bold">Are you looking for work (Abroad)?</p>
                  <v-radio-group row >
                    <v-radio label="Yes"></v-radio>
                    <v-radio label="No"></v-radio>                                       
                  </v-radio-group>
                </v-col>
                <v-col 
                cols="12"
                sm="12"
                md="12">
                  <v-text-field label="If Yes, what is your preferred occupation? " outlined></v-text-field> 
                </v-col>
                </v-container>
              </v-row>
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
          <h4>Work History</h4>
        <v-container fluid md="12">
          <v-col md="12">
            <v-row style="margin-top: 10px">
            <v-text-field label="Company" outlined ></v-text-field>
            <v-text-field label="Address" outlined></v-text-field>
            <v-text-field label="Position" outlined></v-text-field>
            <v-text-field label="Inclusive Dates" outlined></v-text-field>
            <v-text-field label="Status" outlined></v-text-field>
          </v-row>
          </v-col>          
        </v-container>
      </v-card-text>
      </v-card>

      <v-btn
        id="v-btn-c"
        color="secondary"

        @click="e1 = 5"
      >
        Continue
      </v-btn>
      <v-btn 
      @click="e1 = 3"
      class="ma-2"
      >
        Back
      </v-btn>
      </v-stepper-content>

      <!-- Fifth Stepper -->
      <v-stepper-content step="5">
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
                    <v-text-field outlined label="Course">
                    </v-text-field>
                    <v-text-field outlined label="Year Graduated">
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Level Reached)">
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Year Last Attended)">
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
                        SECONDARY
                      </p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-text-field outlined label="School">
                    </v-text-field>
                    <v-text-field outlined label="Course">
                    </v-text-field>
                    <v-text-field outlined label="Year Graduated">
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Level Reached)">
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Year Last Attended)">
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
                        TERTIARY
                      </p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-text-field outlined label="School">
                    </v-text-field>
                    <v-text-field outlined label="Course">
                    </v-text-field>
                    <v-text-field outlined label="Year Graduated">
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Level Reached)">
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Year Last Attended)">
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
                        GRADUATE STUDIES/POST-GRADUATE
                      </p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-text-field outlined label="School">
                    </v-text-field>
                    <v-text-field outlined label="Course">
                    </v-text-field>
                    <v-text-field outlined label="Year Graduated">
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Level Reached)">
                    </v-text-field>
                    <v-text-field outlined label="If Undergraduate (Year Last Attended)">
                    </v-text-field>
                  </v-row>
          </v-row>
        </v-container>
      </v-card-text>
      </v-card>

      <v-btn
        id="v-btn-c"
        color="secondary"

        @click="e1 = 6"
      >
        Continue
      </v-btn>
      <v-btn 
      @click="e1 = 4"
      class="ma-2"
      >
        Back
      </v-btn>
      </v-stepper-content>

      <!-- Sixth Stepper -->
      <v-stepper-content step="6">
        <v-card
          class="mb-12"
          color="grey lighten-4"
        >
        <v-card-text>
          <h4>Technical / Vocational and Other Training</h4>
          <v-container fluid md="12">
          <v-col md="12">
            <v-row style="margin-top: 10px">
            <v-text-field label="Training / Vocational Course" outlined ></v-text-field>
            <v-text-field label="Duration" outlined></v-text-field>
            <v-text-field label="Training Provider" outlined></v-text-field>
          </v-row>
          </v-col>          
        </v-container>
        <v-container fluid md="12">    
          <v-col md="12">
            <v-row style="margin-top: 10px">
            <v-text-field label="" outlined></v-text-field>
            <v-text-field label="Duration" outlined></v-text-field>
            <v-text-field label="" outlined></v-text-field>
          </v-row>
          </v-col>      
        </v-container>
      </v-card-text>
      </v-card>

      <v-btn
        id="v-btn-c"
        color="secondary"

        @click="e1 = 7"
      >
        Continue
      </v-btn>
      <v-btn 
      @click="e1 = 5"
      class="ma-2"
      >
        Back
      </v-btn>
    </v-stepper-content>

      <!-- Seventh Stepper -->
      <v-stepper-content step="7">
        <v-card
          class="mb-12"
          color="grey lighten-4"
        >
        <v-card-text>
          <h4 class="font-weight-bold">Entrepreneurial Training Application (Check your desired training)</h4>
        <v-container fluid>
          <v-row>
            
            <v-col
                cols="12"
                sm="12"
                md="3"
              >
              <v-checkbox-group >
                <v-checkbox label="Balloon Twisting Training" ></v-checkbox>
                <v-checkbox label="Banana Chips Training" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Bangus Deboning" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Basic Haircut and Hairdo Training" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Basic Layout Designing" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Basic Nail Care Training" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Bath Soap Training" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Bottled Sardines Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Brownies and Butter Scotch Making" style="margin-top: -10px"></v-checkbox>
              </v-checkbox-group>              
              <v-textfield label="Others" outlined></v-textfield>
            </v-col>
            <v-col
                cols="12"
                sm="12"
                md="3"
              >
              <v-checkbox-group>
                <v-checkbox label="Cake Making"></v-checkbox>
                <v-checkbox label="Candle Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Center Balloon Designing" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Chicken Cordon Bleu" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Concentrated Calamansi" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Detergent Powder Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Dishwashing Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Embotido Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Empanada Making" style="margin-top: -10px"></v-checkbox>
              </v-checkbox-group>
            </v-col>
            <v-col
                cols="12"
                sm="12"
                md="3"
              >
              <v-checkbox-group>
                <v-checkbox label="Fabric Conditioner Making"></v-checkbox>
                <v-checkbox label="Fashion Accessories Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Flower Arrangement" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Garland and Bouquet Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Ham Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Kakanin Making (Kutsinta, Biko and Palitaw)" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Key Chain Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Mango Puree Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Mushroom Production Training" style="margin-top: -10px"></v-checkbox>
              </v-checkbox-group>
            </v-col>
            <v-col
                cols="12"
                sm="12"
                md="3"
              >
              <v-checkbox-group>
                <v-checkbox label="Paper Bag Making"></v-checkbox>
                <v-checkbox label="Perfume Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Pickles Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Puto Flan and Puto Cheese Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Rug Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Siomai Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Table and Skirting" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="Tocino and Longganisa Making" style="margin-top: -10px"></v-checkbox>
                <v-checkbox label="T-shirt Making" style="margin-top: -10px"></v-checkbox>
              </v-checkbox-group>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      </v-card>

      <v-btn
        id="v-btn-c"
        color="secondary"

        @click="e1 = 8"
      >
        Continue
      </v-btn>
      <v-btn 
      @click="e1 = 6"
      class="ma-2"
      >
        Back
      </v-btn>
      </v-stepper-content>

      <!-- Eight Stepper -->
      <v-stepper-content step="8">
        <v-card
          class="mb-12"
          color="grey lighten-4"
        >
        <v-card-text>
        <v-container fluid>
          
        </v-container>
      </v-card-text>
      </v-card>

        <v-btn 
        @click="e1 = 7 "
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

        civilstatus: ['Single','Married',  'Widowed'],
        gender: ['Female','Male',  'LGBTQ'],
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

  //     2ND OPTION FOR DROPBOX
  //     handleInputFocus() {
  //    // Focus footerInput manually
  //    this.$refs["footerInput"][0].focus();
  //    // Keep the dropdown open
  //    this.$refs["selectElement"][0].open = true;
  // },

  // getModelvalue(){
  //   console.log("inputValue", this.inputValue)
  // }
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
  #step1 .v-text-field{
    margin-top: -20px;
  }
  /* #step2 .v-text-field{
    margin-top: -20px;
  } */
  #move{
    margin-top: -50px
  }
</style>