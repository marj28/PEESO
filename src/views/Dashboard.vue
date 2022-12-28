<template style: fontColor = "black">
 <div :class="windowClass">
  <v-row class="secondary" no-gutters>
    <v-col md="4" sm="4" class="pa-1">
      <va-stat-card 
        color="fourth"
        icon="mdi-account-group-outline"
        label="Daily Applicants"
        data="120"
        sup="Total Number of Applicants"
        btn ="TOTAL MONTHLY APPLICANTS  :"
        mapplications =" 87687"
      >            
      </va-stat-card>
    </v-col>
    <v-col md="4" sm="4" class="pa-1">
      <va-stat-card 
        color="fourth"
        icon="mdi-account-group-outline"
        label="Available Open Jobs as of November"
        data="10,000"
        sup="Total Number of Jobs Available"
      />
    </v-col>
    <v-col md="4" sm="4" class="pa-1">
      <va-stat-card 
        color="fourth"
        icon="mdi-account-group-outline"
        label="Hired Applicants as of November"
        data="896,7800"
        sup="Total Number of Hired Applicants"
      />
    </v-col>
  </v-row>
  <v-row class="secondary" no-gutters style="height: 10px;"></v-row>
    <v-col md="12" class="pa-2">
      <v-card class="">
        <v-card-title class="subtitle-2"><span style="border-bottom: 1px solid #1c775a; color: #989898">PENDING TASKS<v-icon right small color="primary">mdi-open-in-new</v-icon> </span>
        </v-card-title>
          <v-card-text>
            <v-data-table
              class=""
              :headers="headers"
              :items="pending"
              hide-default-header
              hide-default-footer
            >
            </v-data-table>
          </v-card-text>
        </v-card>
    </v-col>
  <v-row no-gutters>
    <v-col md="4" class="pa-2">
      <v-card>
        <v-card-title class="subtitle-2">
          <span style="border-bottom: 1px solid #1c775a; color: #989898">APPLICANTS PROFESSION
            <v-tooltip bottom v-icon="mdi-magnify-expand">
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <v-icon right small color="primary" v-on:click="message = 'New Message'" v-on:mouseover="message = 'Click See All'">mdi-magnify-expand
                  </v-icon> 
                </span>
              </template>
                <span>Click to See All</span>
            </v-tooltip>
          </span>
        </v-card-title>
          <v-card-text>
            <v-data-table
              class="caption"
                :headers="headers"
                :items="profession"
                hide-default-header
                hide-default-footer
            ></v-data-table>
          </v-card-text>
      </v-card>
    </v-col>
    <v-col md="4" class="pa-2">
      <v-card>
        <v-card-title class="subtitle-2">
          <span style="border-bottom: 1px solid #1c775a; color: #989898">AVAILABLE SCHOLARSHIP SLOT 
            <v-tooltip bottom v-icon="mdi-magnify-expand">
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <v-icon right small color="primary" v-on:click="message = 'New Message'" v-on:mouseover="message = 'Click See All'">mdi-magnify-expand
                  </v-icon> 
                </span>
              </template>
                <span>Click to See All</span>
            </v-tooltip>
          </span>
        </v-card-title>
        <v-card-text>
          <v-data-table
            class="caption"
            :headers="headers"
            :items="scholarship"
            hide-default-header
            hide-default-footer
          ></v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col md="4" class="pa-2">
      <v-card>
        <v-card-title class="subtitle-2">
          <span style="border-bottom: 1px solid #1c775a; color: #989898">AVAILABLE TRAININGS SLOT 
            <v-tooltip bottom v-icon="mdi-magnify-expand">
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <v-icon right small color="primary" v-on:click="message = 'New Message'" v-on:mouseover="message = 'Click See All'">mdi-magnify-expand
                  </v-icon> 
                </span>
              </template>
                <span>Click to See All</span>
            </v-tooltip>
          </span>
        </v-card-title>
          <v-card-text>
            <v-data-table
              class="caption"
              :headers="headers"
              :items="trainings"
              hide-default-header
              hide-default-footer
            ></v-data-table>
          </v-card-text>
      </v-card>
    </v-col>
  </v-row>
    <v-row>
      <v-col md="4" class="pa-6">
        <canvas id="myChart" ></canvas>  
      </v-col>
      <v-col md="4" class="pa-6 ">
        <chart-random/>
      </v-col> 
      <v-col md="4" class="pa-6 ">
        <chart-random/>
      </v-col> 
    </v-row>
      <v-speed-dial
        v-model="fab"
        direction="top"
        transition="slide-y-reverse-transition"
        fixed
        bottom
        right
      >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="green darken-4"
          dark
          fab
        >
          <v-icon v-if="fab"> mdi-close </v-icon>
          <v-icon v-else> mdi-plus </v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        small
      >
        <v-icon color="green">mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        fab
        small
      >
        <v-icon color="green">mdi-plus</v-icon>
      </v-btn>
      <v-btn
        fab
        small
      >
        <v-icon color="green">mdi-star</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>


<script>
import Chart from 'chart.js/auto';
import {
  mapMutations,
} from 'vuex'
  export default {
    data: () => ({
      fab: false,
      headers: [
          {
            text: 'FISHCAR',
            align: 'left',
            value: 'name',
          },
          { text: 'COSTUMER', value: 'customer' },
          { text: 'ITEM', value: 'item' },
          { text: 'TIMESTAMP)', value: 'time' }
        ],
      pending:[
        {
          name:'For Approval',
          customer: 'Documents',
          item: '',
          time: '21'
        },
        {
          name:'For Recommendations',
          customer: 'Documents',
          item: '',
          time: '21'
        },
        {
          name:'For Processing',
          customer: 'Documents',
          item: '',
          time: '21'
        },
      ],
      scholarship:[
        // {
        //     name: 'Sulong Dunong',
        //     customer: "",
        //     item: "",
        //     time: "21"
        //   },
        {
            name: 'CHED',
            customer: "",
            item: "",
            time: "22"
          },
      {
            name: 'TES',
            customer: "",
            item: "",
            time: "21"
          }
      ],
      profession:[
        {
            name: 'Engineer',
            customer: " ",
            item: "",
            time: "21",
          },
          {
            name: 'Teacher',
            customer: "",
            // item: "# of Kilo: 13",
            time: "23", 
            },
          {
            name: 'HRM',
            customer: "",
            // item: "# of Kilo: 13",
            time: "29"
          },
          {
            name: 'Accountant',
            customer: "",
            // item: "# of Kilo: 13",
            time: "29"
          },
          {
            name: 'IT',
            customer: "",
            // item: "# of Kilo: 13",
            time: "29"
          },
          {
            name: 'Administration',
            customer: "",
            // item: "# of Kilo: 13",
            time: "29"
          }
        ],
      trainings:[
        {
            name: 'Slaughtering',
            customer: "",
            item: "",
            time: "123"
          },
        {
            name: 'Bee Keeping',
            customer: "",
            item: "",
            time: "44"
          },
          {
            name: 'Cookery',
            customer: "",
            item: "",
            time: "43"
          }
      ],
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
      ...mapMutations(['setAlert', 'setAlertColor', 'setAlertText', 'setLoggedIn'])      
    },

    props: {
    msg: String
  },
  mounted(){
    const ctx = document.getElementById('myChart');

    const data = {
  labels: [
    'Hired Applicants',
    'Waiting Applicants',
    'Prospects',
    'Scholars'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100,200],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(2, 104, 26)'
    ],
    hoverOffset: 4
  }]
};
const myChart = new Chart(ctx, {
  type: 'pie',
  data: data,
});

myChart;  
  }
}
</script>
