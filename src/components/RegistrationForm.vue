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
              REGISTRATION FORM
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
                    sm="6"
                    md="4"
                  >
                   <v-text-field
                      label="Business Name"
                      required                   
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Trade Name"               
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Acronym / Abbreviation"
                      required
                    ></v-text-field>
                    
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    sm="6"
                  >
                  <v-radio-group
                    v-model="row"
                    row
                    md="4"
                    
                    >
                    <v-radio 
                    label="Main Office"
                    value="MainOffice"
                    ></v-radio>
                    <v-radio
                    label="Branch"
                    value="Branch"
                    ></v-radio>
                    </v-radio-group>                
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                   <v-text-field
                      label="Tax Identification Number"
                      required                   
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                  <v-radio-group
                    v-model="column"
                    column
                    md="12"
                    label="Employer Type: "
                    >
                    <v-radio 
                    label="Public"
                    value="public"
                    ></v-radio>
                    <v-radio
                    label="National Government Agency"
                    value="nga"
                    ></v-radio>
                    <v-radio 
                    label="Local Government Unit"
                    value="lcu"
                    ></v-radio>
                    <v-radio
                    label="Government-owned and Controlled Corporation"
                    value="gcc"
                    ></v-radio>
                    <v-radio
                    label="State/Local University or College"
                    value="suc"
                    ></v-radio>
                    </v-radio-group>
                                    
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                    style="margin-top: 30px"
                  >
                  <v-radio-group
                    v-model="column"
                    column
                    md="12"
                    >
                    <v-radio 
                    label="Private"
                    value="private"
                    ></v-radio>
                    <v-radio
                    label="Direct Hire"
                    value="dh"
                    ></v-radio>
                    <v-radio 
                    label="Local Recruitment Agency"
                    value="lra"
                    ></v-radio>
                    <v-radio
                    label="Overseas Recruitment Agency"
                    value="ora"
                    ></v-radio>
                    <v-radio
                    label="D.O. 174"
                    value="do"
                    ></v-radio>
                    </v-radio-group>
                                    
                  </v-col>

                  <v-col
                    cols="12"
                    md="12"
                    sm="12"
                  >
                  <v-radio-group
                    v-model="row"
                    row
                    md="4"
                    label="Total Work Force: "
                    >
                    <v-radio 
                    label="Micro (1-9)"
                    value=""
                    
                    ></v-radio>
                    <v-radio
                    label="Small (10-99)"
                    value=""
                    ></v-radio>
                    <v-radio 
                    label="Medium (100-199)"
                    value=""
                    ></v-radio>
                    <v-radio
                    label="Large (200 and up)"
                    value=""
                    ></v-radio>
                    </v-radio-group>                
                  </v-col>
              
                  <v-col
                    cols="12"
                    sm="6"
                    md="12"
                  >
                   <v-text-field
                      label="Major Industry Group"
                      required                   
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
                    ></v-text-field>
                  </v-col>
                  <v-col 
                    cols="12"
                    sm="6"
                    md="3"
                    >
                    <v-text-field
                      label="Barangay"
                      type="address"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col 
                    cols="12"
                    sm="6"
                    md="3"
                    >
                    <v-text-field
                      label="Municipal/City"
                      type="address"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col 
                    cols="12"
                    sm="6"
                    md="3"
                    >
                    <v-text-field
                      label="Province"
                      type="address"
                      required
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
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      label="Contact Person (Full Name)"               
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      label="Position"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                   <v-text-field
                      label="Telephone Number"
                      required                   
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                   <v-text-field
                      label="Mobile Number"
                      required                   
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                   <v-text-field
                      label="Fax Number"
                      required                   
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                   <v-text-field
                      label="E-mail Address"
                      required                   
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
                  class="ma-2"
                >
                Please indicate the number of reporting workers in the establishment <bold class="font-weight-bold">before implementation of GCQ/ECQ</bold>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="12"
                class="font-weight-bold"
              >
                Number of Workers: 
              </v-col>
              <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  label="Male"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  label="Female"
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
                >
                <v-text-field
                  label="Managerial Employees"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="3"
                
                >
                <v-text-field
                  label="Supervisory"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="3"
                >
                <v-text-field
                  label="Rank and File"
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
                sm="4"
                md="12"
                class="font-weight-bold"
              >
                Number of Workers: 
              </v-col>
              <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  label="Male"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  label="Female"
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
                >
                <v-text-field
                  label="Managerial Employees"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="3"
                
                >
                <v-text-field
                  label="Supervisory"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="3"
                >
                <v-text-field
                  label="Rank and File"
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
                  >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="6"
                >
                <v-text-field
                  label="Job Description"
                  >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="6"
                >
                <v-radio-group
                  label="Nature of Work: "
                  class="font-weight-bold"
                  >
                  <v-radio
                    label="Permanent"
                    >
                  </v-radio>
                  <v-radio
                    label="Contractual"
                    >
                  </v-radio>
                  <v-radio
                    label="Project-based"
                    >
                  </v-radio>
                  <v-radio
                  label="Internship / OJT"
                    >
                  </v-radio>
                  <v-radio
                  label="Part-time"
                    >
                  </v-radio>
                  <v-radio
                  label="Work-from-Home / Online Job"
                    >
                  </v-radio>
                </v-radio-group>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"  
                >
                <v-text-field
                  label="Place of Work"
                  ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"  
                >
                <v-text-field
                  label="Salary"
                  ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"  
                >
                <v-text-field
                  label="Vacancy Count"
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
                  ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="6"
              >
                <v-text-field
                  label="Other qualifications: "
                  ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="6"
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
                md="6">
                If "yes":
                <v-checkbox-group>
                  <v-checkbox
                    label="Visual">
                  </v-checkbox>
                  <v-checkbox
                    label="Hearing">
                  </v-checkbox>
                  <v-checkbox
                    label="Speech">
                  </v-checkbox>
                  <v-checkbox
                    label="Physical">
                  </v-checkbox>
                  <v-checkbox
                    label="Mental">
                  </v-checkbox>
                </v-checkbox-group>
                <v-text-field
                label="Others (Please specify): "></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
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
                  label="Educational Level: ">

                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="4"
                >
                <v-text-field
                  label="Course / SHS Strand: ">

                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="4"
                >
                <v-text-field
                  label="Licensed: ">
                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="4"
                >
                <v-text-field
                  label="Eligibility:  ">
                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="4"
                >
                <v-text-field
                  label="Certification: ">
                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="4"
                >
                <v-text-field
                  label="Language / Dialect Spoken:  ">
                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="6"
                >
                <v-text-field
                  label="Posting Date: (mm/dd/year) ">
                </v-text-field>
              </v-col>
              <v-col 
                cols="12"
                sm="12"
                md="6"
                >
                <v-text-field
                  label="Valid Until: (mm/dd/year) ">
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
          dialog: false
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