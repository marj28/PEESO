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
                style="font-size: 16px"
            >
                <v-button-icon>
                    <v-icon>mdi-account-details</v-icon>
                </v-button-icon>
            <v-button-title>
            EMPLOYER LIST
            </v-button-title>
            </v-btn>
            <v-btn
                color="#77dd77"
                dark
                v-bind="attrs"
                v-on="on"
                class = "pa-md-4 mx-lg-auto mt-1"
                width="250px"
                style="font-size: 11px"
            >
                <v-button-icon>
                  <v-icon>mdi-account</v-icon>
                  </v-button-icon>
              <v-button-title>
              ESTABLISHMENT SURVEY FORM
              </v-button-title>
            </v-btn>
            
            
            
          </template>
          
          <v-card id="Employer">
            <v-card-title>
              <span class="text-h7">ESTABLISHMENT SURVEY FORM</span>
            </v-card-title>
            <v-stepper v-model="e1">
      <v-stepper-header style="font-size: 14px">
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
          style="height="
        >
          Establishment Details
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          Establishment Contact Details
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step 
         :complete="e1 > 3"
          step="3">
          Pre-Pandemic 
          <v-spacer></v-spacer>
          Employment Situation
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step 
        :complete="e1 > 4"
        step="4">
          Post-Lockdown 
          <v-spacer></v-spacer>
          Employment Situation
        </v-stepper-step>
      

      <v-divider></v-divider>
  
        <v-stepper-step 
        :complete="e1 > 5"
        step="5">
          Vacancy Details
        </v-stepper-step>

      <v-divider></v-divider>
  
        <v-stepper-step 
        :complete="e1 > 6"
        step="6">
          Qualification Requirements
        </v-stepper-step>
    </v-stepper-header>
  
      <v-stepper-items>
        <!-- First Stepper -->
        <v-stepper-content step="1">
          <v-card
            class="mb-12"
            color="grey lighten-4"
          >
          <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="4"
                  >
                   <v-text-field
                      label="Business Name"
                      required
                      outlined           
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="4"
                  >
                    <v-text-field
                      label="Trade Name"
                      required
                      outlined                     
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="4"
                  >
                    <v-text-field
                      label="Acronym / Abbreviation"
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
                      :items="btype"
                      label="Office Status"
                      outlined
                    >
                  </v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                   <v-text-field
                      label="Tax Identification Number"
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
                    :items="etype"
                    label="Employer Type"
                    required
                    multiple
                    chips
                    outlined>                                     
                  </v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12x"
                    md="3"
                  >
                    <v-select
                      :items="totalworkforce"
                      label="Total Work Force"
                      outlined>
                  </v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="3"
                  >
                   <v-text-field
                      label="Major Industry Group"
                      required
                      outlined                   
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                   <v-text-field
                      label="Street/Village"
                      required 
                      outlined                  
                    ></v-text-field>
                  </v-col>
                  <v-col 
                    cols="12"
                    sm="6"
                    md="2"
                    >
                    <v-text-field
                      label="Barangay"
                      type="address"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col 
                    cols="12"
                    sm="6"
                    md="2"
                    >
                    <v-text-field
                      label="Municipal/City"
                      type="address"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col 
                    cols="12"
                    sm="6"
                    md="2"
                    >
                    <v-text-field
                      label="Province"
                      type="address"
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
                <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                   <v-text-field
                      label="Name of Owner / President (Full Name)"
                      required 
                      outlined                  
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      label="Contact Person (Full Name)"                   
                  required
                  outlined              
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      label="Position"
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
                      label="Telephone Number"
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
                      label="Mobile Number"
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
                      label="Fax Number"
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
                      label="E-mail Address"
                      required  
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
                >
                Please indicate the number of reporting workers in the establishment <bold class="font-weight-bold">before implementation of GCQ/ECQ</bold>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                class="font-weight-bold"
              >
                Number of Workers: 
              </v-col>
              <v-col
                cols="12"
                md="4"
                sm="6"
                >
                <v-text-field
                  label="Male"                                    
                  required
                  outlined
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="6"
                >
                <v-text-field
                  label="Female"                                    
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"                
                >
                <v-text-field
                  label="Total"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="3"
                sm="6"
                >
                <v-text-field
                  label="Managerial Employees"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="3"
                sm="6"                
                >
                <v-text-field
                  label="Supervisory"
                  required
                  outlined
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="3"
                sm="6"
                >
                <v-text-field
                  label="Rank and File"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="3"                
                >
                <v-text-field
                  label="Total"
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
                  sm="12"
                  md="12"
                  class="ma-2"
                >
                Please indicate the number of reporting workers in the establishment <bold class="font-weight-bold">upon resumption of operation.</bold>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                class="font-weight-bold"
              >
                Number of Workers: 
              </v-col>
              <v-col
                cols="12"
                md="4"
                sm="6"
                >
                <v-text-field
                  label="Male"
                  required
                  dense
                  outlined
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="6"
                >
                <v-text-field
                  label="Female"
                  required
                  dense
                  outlined
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"                
                >
                <v-text-field
                  label="Total"
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="3"
                sm="6"
                >
                <v-text-field
                  label="Managerial Employees"
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="3"
                sm="6"                
                >
                <v-text-field
                  label="Supervisory"
                  required
                  dense
                  outlined
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="3"
                sm="6"
                >
                <v-text-field
                  label="Rank and File"
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="3"                
                >
                <v-text-field
                  label="Total"
                  outlined
                  required
                  dense
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                class="font-weight-bold"
              >
                Work Arrangement adopted upon resumption of operation of the Establishment (Please select all applicable): 
              </v-col>
              <v-col>
                <v-checkbox-group>
                  <v-checkbox
                    label="FULL WORK ARRANGEMENT. The establishment operates in a regular basis and with full workforce"
                  >
                  </v-checkbox>
                  <v-checkbox
                    label="FLEXIBLE WORK ARRANGEMENT. The establishment will adopt FWA such as reduction of normal workdays, forced leave, transfer of employees, etc."
                    >
                  </v-checkbox>
                  <v-checkbox
                    label="TEMPORARY CLOSURE. The establishment will be temporarily be closed"
                    >
                  </v-checkbox>
                  <v-checkbox
                    label="RETRENCHMENT/REDUCTION OF WORKFORCE. The establishment will reduce the number of employees"
                    >
                  </v-checkbox>
                </v-checkbox-group>
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
                md="12"
                >
                <v-text-field
                  label="Position Title"                  
                  required
                  outlined
                  >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="6"
                >
                <v-textarea
                  label="Job Description"                  
                  required
                  outlined
                  >
                </v-textarea>
              </v-col>
              <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-select
                      :items="natureofwork"
                      label="Nature of Work"
                      outlined
                      chips
                      multiple>
                  </v-select>
                  </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"  
                >
                <v-text-field
                  label="Place of Work"                  
                  required
                  outlined
                  ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"  
                >
                <v-text-field
                  label="Salary"                  
                  required
                  outlined
                  ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"  
                >
                <v-text-field
                  label="Vacancy Count"                  
                  required
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
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  class="ma-2"
                >
                For each identified vacant position.
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="6"
              >
                <v-text-field
                  label="Work Experience (month/s): "                  
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
                  label="Other qualifications: "                  
                  required
                  outlined
                  dense
                  ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                style="margin-top: -30px"
                >
                <v-radio-group
                  label="Accepts persons with disabilities (PWD):"
                  row>
                  <v-radio
                    label="Yes">
                  </v-radio>
                  <v-radio
                    label="No">
                  </v-radio>
                </v-radio-group>
              </v-col>
              <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    style="margin-top: -30px"
                  >
                    <v-select
                      :items="pwd"
                      label="If 'yes': "
                      multiple
                      dense
                      outlined
                    >
                  </v-select>
                  </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                style="margin-top: -30px"
                >
                <v-radio-group
                  label="Accepts returning OFWs: "
                  row>
                  <v-radio
                    label="Yes">
                  </v-radio>
                  <v-radio
                    label="No">
                  </v-radio>
                </v-radio-group>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="4"
                >
                <v-text-field
                  label="Educational Level: "                  
                  required
                  dense
                  outlined>

                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="4"
                >
                <v-text-field
                  label="Course / SHS Strand: "                  
                  required
                  dense
                  outlined>

                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="4"
                >
                <v-text-field
                  label="Licensed: "                  
                  required
                  dense
                  outlined>
                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="4"
                >
                <v-text-field
                  label="Eligibility:  "                  
                  required
                  dense
                  outlined>
                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="4"
                >
                <v-text-field
                  label="Certification: "                  
                  required
                  dense
                  outlined>
                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="4"
                >
                <v-text-field
                  label="Language / Dialect Spoken:  "                  
                  required
                  dense
                  outlined>
                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="6"
                >
                <v-text-field
                  label="Posting Date: (mm/dd/year) "                  
                  required
                  dense
                  outlined>
                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="6"
                >
                <v-text-field
                  label="Valid Until: (mm/dd/year) "                  
                  required
                  dense
                  outlined>
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        </v-card>
  
          <v-btn 
          @click="e1 = 5 "
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

          btype:['Main Office', 'Branch'],
          etype:['Public','National Government Agency','Local Government Unit','Government-owned and Controlled Corporation',
                  'State/Local University or College','Private','Direct Hire','Local Recruitment Agency',
                  'Overseas Recruitment Agency','D.O. 174'],
          totalworkforce: ['Micro (1-9)','Small (10-99)','Medium (100-199)','Large (200 and up)'],
          natureofwork: ['Permanent','Contractual','Project-based','Internship / OJT','Part-time','Work-from-Home / Online Job'],
          pwd: ['Visual','Hearing','Speech','Physical','Mental','Others']
        }
        
      },
    }
  </script>
  
  <style scoped>
    
    #Employer .v-stepper-header{
        font-size: 10px;
    }
    /* .v-text-field{
      margin-top: -20px
    } */
  </style>