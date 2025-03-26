const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Last Year',
          data: [94.5, 87.3, 74.1, 69.2, 64.5, 62.1, 58.3, 56.2, 52.3, 63.8, 69.6, 84.3],
          borderWidth: 1
        },
        {
            label: 'Current Year',
            data: [96.1, 85.4, 82.8, 77.4, 62.3, 59.6, 63.9, 58.4, 54.1, 73.3, 81.8, 93.6],
            borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });