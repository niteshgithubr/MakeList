// Sample data for the charts
const chartData1 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };
  
  const chartData2 = {
    // Sample data for the second chart
  };
  
  const chartData3 = {
    // Sample data for the third chart
  };
  
  // Function to show the chart based on the selected tab
  function showChart(chartType) {
    const ctx = document.getElementById('myChart').getContext('2d');
    let chartData;
  
    if (chartType === 'chart1') {
      chartData = chartData1;
    } else if (chartType === 'chart2') {
      chartData = chartData2;
    } else if (chartType === 'chart3') {
      chartData = chartData3;
    }
  
    if (window.currentChart) {
      window.currentChart.destroy();
    }
  
    window.currentChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  
  // Show the first chart by default
  showChart('chart1');
  