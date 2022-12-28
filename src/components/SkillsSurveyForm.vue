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
                style="font-size: 12px"
            >
                <v-button-icon>
                  <v-icon>mdi-account</v-icon>
                  </v-button-icon>
              <v-button-title>
              SKILLS SURVEY FORM
              </v-button-title>
            </v-btn>
            
            
            
          </template>
          
          <v-card id="Employer">
            <v-card-title>
              <span class="text-h7">SKILLS SURVEY FORM</span>
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
          :complete="e1 > 1.1"
          step="1.1"
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
          Educational 
          <v-spacer></v-spacer>
          Background
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step 
        :complete="e1 > 3"
          step="3">
          Client's 
          <v-spacer></v-spacer>
          Classification
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step 
        :complete="e1 > 4"
        step="4">
          Technical/Vocational 
          <v-spacer></v-spacer>
          and Other Training
        </v-stepper-step>
      

      <v-divider></v-divider>
  
        <v-stepper-step 
        :complete="e1 > 5"
        step="5">
          Eligibility/
          <v-spacer></v-spacer>
          Professional License
        </v-stepper-step>

      <v-divider></v-divider>
  
        <v-stepper-step 
        :complete="e1 > 6"
        step="6">
          Other Skills
        </v-stepper-step>

        <v-divider></v-divider>
  
        <v-stepper-step 
        :complete="e1 > 7"
        step="7">
          Preferred 
          <v-spacer></v-spacer>
          Intervention
        </v-stepper-step>

      <v-divider></v-divider>
  
        <v-stepper-step 
        :complete="e1 > 8"
        step="8">
          Job Preference
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
                    sm="6"
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
                    sm="6" 
                    md="3"
                  >
                    <v-text-field
                    label="Age"
                    outlined>
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    sm="12"
                  >
                    <v-select
                      :items="civilstatus"
                      label="Civil Status" required outlined>
                    </v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    sm="12"
                  >
                    <v-select
                      :items="gender"
                      label="Gender" required outlined>
                    </v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    sm="12"
                  >
                    <v-select
                      :items="religion"
                      label="Religion" required outlined>
                    </v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    sm="12"
                  >
                  <v-select
                      :items="disabilities"
                      label="Disability" 
                      required 
                      outlined 
                      multiple>
                    </v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    sm="12"
                  >
                  <v-select
                      :items="ethnicity"
                      label="Ethnic Group" 
                      required 
                      outlined>
                    </v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3">
                    <v-file-input
                      label="Attached ID here"
                      outlined
                      prepend-icon="mdi-camera"
                    ></v-file-input>
                  </v-col>
                  <v-col
                    cols="12"
                    md="12"
                    sm="12"
                    >
                    <p
                    class="font-weight-bold"
                    style="margin-top: -35px"
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
                    sm="12">
                  <v-text-field
                      label="Province"
                      required  
                      outlined                 
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="2"
                    sm="12">
                  <v-text-field
                      label="Municipality / City"
                      required  
                      outlined                 
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="2"
                    sm="12">
                  <v-text-field
                      label="Barangay"
                      required
                      outlined                   
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    sm="12">
                  <v-text-field
                      label="House No. / Street / Village"
                      required 
                      outlined                  
                    ></v-text-field>
                  </v-col>
                
                  <v-col
                    cols="12"
                    md="2"
                    sm="12"
                    class="font-weight-bold"
                    style="margin-top: -35px"
                  >
                  <p>Current Address</p>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    sm="6"
                    style="margin-top: -35px"
                  >
                    <v-checkbox label="Same with Home Address"></v-checkbox>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                    style="margin-top: -35px"
                    >
                    <v-radio-group row>
                      <v-radio label="Owned"></v-radio>
                      <v-radio label="Rented"></v-radio>
                      <v-radio label="Staying with Relatives"></v-radio>
                    </v-radio-group>

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
                    sm="12">
                  <v-text-field
                      label="Province"
                      required 
                      outlined                  
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="2"
                    sm="12">
                  <v-text-field
                      label="Municipality / City"
                      required  
                      outlined                 
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="2"
                    sm="12">
                  <v-text-field
                      label="Barangay"
                      required 
                      outlined                  
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    sm="12">
                  <v-text-field
                      label="House No. / Street / Village"
                      required 
                      outlined                  
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    sm="12">
                    <v-text-field
                      label="Contact Number"
                      required    
                      outlined               
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    sm="12">
                    <v-text-field
                      label="E-mail"
                      required 
                      outlined                  
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    sm="6">
                    <v-text-field
                      label="SSS"
                      required 
                      outlined                  
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    sm="6">
                    <v-text-field
                      label="TIN"
                      required
                      outlined                   
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
            @click="e1 = 1.1"
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

        <!-- One.one Stepper -->
        <v-stepper-content step="1.1">
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
                  Employment Status:
                </p>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="3"
                  id="step2"
                  
                >
                  <v-checkbox
                    v-model="ex4"
                    label="Employed"
                    color="secondary"
                    value="Employed"
                    hide-details
                    class="font-weight-bold"
                    style="margin-top: -20px"
                    >                     
                  </v-checkbox>
                  <v-checkbox
                    v-model="ex2"
                    class="ma-2 pa-2; font-weight-bold"
                    label="Wage Employed"
                    color="secondary"
                    value="Wage Employed"
                    hide-details
                  ></v-checkbox>
                  <v-spacer></v-spacer>
                  <v-text-field class="pa-2" style="margin-top: -10px; margin-left: 20px;" outlined label="Name of Company"></v-text-field>
                  <v-text-field class="pa-2" style="margin-top: -30px; margin-left: 20px;" outlined label="Company Address"></v-text-field>
                  <v-text-field class="pa-2" style="margin-top: -30px; margin-left: 20px;" outlined label="Major Industry Group"></v-text-field>
                  <v-text-field class="pa-2" style="margin-top: -30px; margin-left: 20px;" outlined label="Occupation"></v-text-field>
                  <v-text-field class="pa-2" style="margin-top: -30px; margin-left: 20px;" outlined label="Rank"></v-text-field>
                  <v-checkbox
                    v-model="ex4"
                    class="pa-2; font-weight-bold"
                    label="Self-Employed"
                    color="secondary"
                    value="Self-Employed"
                    style="margin-top: -30px"
                    hide-details
                ></v-checkbox>
                <v-select
                  class="pa-2"
                  style="margin-left: 20px;"
                  :items="['Fisherman/Fisherfolk','Vebdor/Retailer',  'Home-based worker', 'Transport',  'Domestic Worker',
                            'Freelancer','Artisan/Craft Worker', 'Others']"
                  label="Please Specify" required outlined>
                </v-select>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="2"
                >
                <v-checkbox
                    v-model="ex4"
                    label="Unemployed"
                    color="secondary"
                    value="Unemployed"
                    hide-details
                    class="font-weight-bold"
                    style="margin-top: -20px"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    class="ma-2 pa-2"
                    label="Fresh Graduate"
                    color="secondary"
                    value="Fresh Graduate"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    class="ma-2 pa-2"
                    label="Finished Contract"
                    color="secondary"
                    value="Finished Contract"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    class="ma-2 pa-2"
                    label="Resigned"
                    color="secondary"
                    value="Resigned"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    v-model="ex4"
                    class="ma-2 pa-2"
                    label="Terminated"
                    color="secondary"
                    value="Terminated"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    class="ma-2 pa-2"
                    label="Retiree"
                    color="secondary"
                    value="Retiree"
                    hide-details
                ></v-checkbox>
                  <v-text-field
                  label="Others: "
                  class="ma-2 pa-2"
                  outlined
                  >
                  </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="3">
                <v-container>
                <v-col
                  >
                  <p style="margin-top: -40px" class="font-weight-bold">Are you an OFW?</p>
                  <v-radio-group>
                    <v-radio label="Yes"></v-radio>
                    <v-text-field label="Specify Country: " outlined></v-text-field>
                    <v-radio label="No" style="margin-top: -15px"></v-radio>                    
                  </v-radio-group>
                </v-col>
                <v-col
                  >
                  <p style="" class="font-weight-bold">Are you a former OFW?</p>
                  <v-radio-group>
                    <v-radio label="Yes"></v-radio>
                    <v-text-field label="Latest Country of Deployment: " outlined></v-text-field>
                    <v-text-field label="Month and Year of Return to Philippines: " outlined></v-text-field>
                    <v-radio label="No" style="margin-top: -15px"></v-radio>                    
                  </v-radio-group>
                </v-col>
              </v-container>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="3">
                <p style="margin-top: -25px" class="font-weight-bold">Are you a 4Ps beneficiary?</p>
                  <v-radio-group>
                    <v-radio label="Yes"></v-radio>
                    <v-text-field label="Please provide Household ID No.: " outlined></v-text-field>
                    <v-radio label="No" style="margin-top: -15px"></v-radio>                    
                  </v-radio-group>
                  <v-spacer></v-spacer>
                  <p class="font-weight-bold">First Time Job Seeker?</p>
                  <v-radio-group>
                    <v-radio label="Yes"></v-radio>
                    <v-radio label="No" ></v-radio>                    
                  </v-radio-group>
              </v-col>
              </v-row>
            </v-container>
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
          @click="e1 = 1"
          class="ma-2"
          >
            Back
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
                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                  <h3>Currently in School?</h3>
                  <v-radio-group row>
                    <v-radio label="Yes"></v-radio>
                    <v-radio label="No"></v-radio>
                    <v-text-field 
                    row
                    outlined
                    label="If No, Please specify Highest Educational Attainment"
                    style="margin-top: 5px"></v-text-field>                    
                  </v-radio-group>
                  </v-col>
                  <p> </p>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                  <h3>Literacy Indicators:</h3>
                  <v-checkbox-group>
                    <v-checkbox label="Can Read?"></v-checkbox>
                    <v-checkbox label="Can Write?"></v-checkbox>
                  </v-checkbox-group>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="4"
                  >
                  <v-checkbox label="Can Perform Mathematical Operation?"></v-checkbox>
                  <v-radio-group>
                        <v-radio label="Addition"></v-radio>
                        <v-radio label="Multiplication"></v-radio>
                        <v-radio label="Subtraction"></v-radio>
                      </v-radio-group>
                  </v-col>
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
                      md="2">
                      <p class="font-weight-bold" id="move">
                        SECONDARY
                      </p>
                    </v-col> 
                    <v-col 
                      cols="12"
                      sm="6"
                      md="2"
                      id="move"
                      style="margin-top: -50px">
                      <v-checkbox label="Secondary (Non-K12)" id="move" ></v-checkbox>
                    </v-col> 
                    <v-col 
                      cols="12"
                      sm="6"
                      md="8"
                      id="move"
                      style="margin-top: -50px">
                      <v-checkbox label="Secondary (K12)" ></v-checkbox> 
                    </v-col>                     
                      <v-text-field outlined label="Senior High Strand">
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
  
            @click="e1 = 3"
          >
            Continue
          </v-btn>
          <v-btn 
          @click="e1 = 1.1"
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
                  sm="12"
                  md="12"
                  class="ma-2"
                >
                <h4>Include courses takens as part of college education.</h4>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="3"
                >
                <H4>TRAINING/VOCATIONAL COURSE</H4>
                <v-text-field
                label="" 
                outlined
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="2"
                >
                <H4>HOURS OF TRAINING</H4>
                <v-text-field
                label="" 
                outlined
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="3"
                >
                <H4>TRAINING INSTITUTION</H4>
                <v-text-field
                label="" 
                outlined
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="2"
                >
                <H4>SKILLS ACQUIRED</H4>
                <v-text-field
                label="" 
                outlined
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="2"
                >
                <H4>CERTIFICATE RECEIVED</H4>
                <v-text-field
                label="NC I, NC II, NC III, NC IV, etc" 
                outlined
                >
                </v-text-field>
              </v-col>
            </v-row>
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
              <v-col
                cols="12"
                sm="12"
                md="4"
                >
                <H4>ELIGIBILITY (Civil Service)</H4>
                <v-text-field
                label="" 
                outlined
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="2"
                >
                <H4>Date Taken</H4>
                <v-text-field
                label="" 
                outlined
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
                >
                <H4>PROFESSIONAL</H4>
                <v-text-field
                label="" 
                outlined
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="2"
                >
                <H4>Date Taken</H4>
                <v-text-field
                label="" 
                outlined
                >
                </v-text-field>
              </v-col>
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
          <v-container fluid>
            <v-row>
              <p class="font-weight-bold">Other Skills Acquired without Certificate</p>
              <v-col
                  cols="12"
                  sm="12"
                  md="3"
                  class="ma-2"
                >
                <v-checkbox-group >
                  <v-checkbox label="Auto Mechanic" ></v-checkbox>
                  <v-checkbox label="Beautician" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Carpentry Work" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Computer Literate" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Domestic Chores" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Driver" style="margin-top: -10px"></v-checkbox>
                </v-checkbox-group>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="3"
                  class="ma-2"
                >
                <v-checkbox-group>
                  <v-checkbox label="Electrician"></v-checkbox>
                  <v-checkbox label="Embroidery" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Gardening" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Masonry" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Painter/Artist" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Painting Jobs" style="margin-top: -10px"></v-checkbox>
                </v-checkbox-group>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="3"
                  class="ma-2"
                >
                <v-checkbox-group>
                  <v-checkbox label="Photography"></v-checkbox>
                  <v-checkbox label="Plumbing" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Sewing Dresses" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Stenography" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Tailoring" style="margin-top: -10px"></v-checkbox>
                  <v-text-field label="Others"></v-text-field>
                </v-checkbox-group>
              </v-col>
            </v-row>
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
          <v-container fluid>
            <v-row>
              <v-col
                  cols="12"
                  sm="12"
                  md="4"
                  class="ma-2"
                >
                <p class="font-weight-bold"> Preffered Intervention</p>
                <v-checkbox-group >
                  <v-checkbox label="Livelihood" ></v-checkbox>
                  <v-checkbox label="Skills Training" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="Employment Facilitation" style="margin-top: -10px"></v-checkbox>
                </v-checkbox-group>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="6"
                  class="ma-2"
                >
                <v-checkbox-group>
                  <v-checkbox label="Reintegration Program"></v-checkbox>
                  <v-checkbox label="Productivity Toolbox" style="margin-top: -10px"></v-checkbox>
                  <v-checkbox label="ECP Benefits" style="margin-top: -10px"></v-checkbox>
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
            <v-row>
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                <h4>Preferred Occupation</h4>
                <v-radio-group row>
                  <v-radio label="Part-time"></v-radio>
                  <v-radio label="Full-time"></v-radio>
                </v-radio-group>
                <v-text-field outlined></v-text-field>
              </v-col>
              
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                <h4>Preferred Work Location</h4>
                </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="6">
                <v-checkbox label="Local (Specify Cities/Municipalities)">
                </v-checkbox>
                <v-text-field outlined md="4"></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="6">
                <v-checkbox label="Overseas (Specify Countries)">
                </v-checkbox>
                <v-text-field outlined md="4"></v-text-field>
              </v-col>
            </v-row>
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

          disabilities: ['None','Visual',  'Hearing', 'Speech',  'Physical', 'Mental', 'Others (Please Specify)'],
          ethnicity: ['None','Mandaya',  'Lumad', 'Waray',  'Bicolano', 'Aeta', 'Others (Please Specify)'],
          civilstatus: ['Single','Married',  'Widowed'],
          gender: ['Female','Male',  'LGBTQ'],
          religion: ['Roman Catholic','Islam',  'Iglesia ni Cristo', 'Seventh-day Adventist']
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