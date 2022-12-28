<script>
import Chart from 'chart.js/auto';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    console.log('asdasd','asdasd')
    const ctx = document.getElementById('myChart');
    const data = {
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
  
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
  