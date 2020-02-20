import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#074e28',
          borderColor: '#074e28',
          data: [40, 39, 10, 40, 39, 80, 40]
        },
        {
          label: 'Data Two',
          backgroundColor: '#FFCB00',
          borderColor: '#FFCB00',
          data: [50, 45, 15, 60, 93, 17, 10]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}