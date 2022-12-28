import {Line, mixins} from 'vue-chartjs'
const { reactiveData } = mixins

export default {
  extends: Line,
  mixins: [reactiveData],
  data () {
    return {
      chartData: null,
      options: {responsive: true,  maintainAspectRatio: false},
      gradient: null,
      
    }
  },
  created () {
    this.fillData()
  },

  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    // this.gradient.addColorStop(0, '#fff') // show this color at 0%;
    // this.gradient.addColorStop(0.4, '#19365A'); // show this color at 50%
    // this.gradient.addColorStop(0.7, '#19365A'); // show this color at 100%
    this.gradient.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradient.addColorStop(1, "rgba(255, 255, 255, 0.24)");
    this.renderChart(this.chartData, this.options)
    this.fillData()
  },

  methods: {
    fillData () {
      this.chartData = {
        labels: ['January' + this.getRandomInt(), 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'PEESO',
            backgroundColor: this.gradient,
            borderColor: "#FFF",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            borderWidth: 0.5,
            fill: true,
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
      this.options = {
        responsive: true, 
        maintainAspectRatio: false,
        legend: {
          labels: {
              fontColor: "white",
              fontSize: 11,
              fontFamily: 'Montserrat'
          },
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true,
                  fontColor: '#A7B2C0',
                  fontFamily: 'Montserrat'
              },
          }],
        xAxes: [{
              ticks: {
                  fontColor: '#A7B2C0',
                  fontFamily: 'Montserrat'
              },
          }]
      } 
      }
    },

    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}