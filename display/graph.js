
function drawChart(data) {
  console.log("draw chart w/ data: ", data);

  var canvas = $('<canvas id="theGraph" width="800" height="500"></canvas>');
  var graphHtml = $('<div id="graph"><hr><hr></div>');
  graphHtml.append(canvas);
  $('#results-wr').append(graphHtml);

  var ctx = document.getElementById('theGraph').getContext('2d');
  
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
  
      // The data for our dataset
      data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
              label: "Presentation Durations",
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45],
          }]
      },
  
      // Configuration options go here
      options: {}
  });
}




function drawSampleChart(data = {}) {
  console.log("draw chart w/ data: ", data);

  // var canvas = $('<canvas id="theGraph" width="800" height="500"></canvas>');
  // var graphHtml = $('<div id="graph"><hr><hr></div>');
  // graphHtml.append(canvas);
  // var container = $('<div class="container"></div>');
  // container.append(graphHtml);
  // $('#results').append(container);

  var chart = new CanvasJS.Chart("theGraph", {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "Target Presentation Durations"
    },
    axisY:{
      includeZero: false,
      title: " Target Presentation Duration (ms)"
    },
    axisX: {
      title: " Experimental Time (s)"
    },
    data: [{        
      type: "line",       
      dataPoints: results.dataPoints
    }]
  });
  chart.render();
  

  // var canvas = $('<canvas id="theGraph" width="800" height="500"></canvas>');
  // var graphHtml = $('<div id="graph"><hr><hr></div>');
  // graphHtml.append(canvas);
  // var container = $('<div class="container"></div>');
  // container.append(graphHtml);
  // $('#results').append(container);

  // var ctx = document.getElementById('theGraph').getContext('2d');
  
  // var chart = new Chart(ctx, {
  //     // The type of chart we want to create
  //     type: 'line',
  
  //     // The data for our dataset
  //     data: {
  //         labels: data.labels,
  //         datasets: [{
  //             label: "Presentation Durations",
  //             backgroundColor: 'rgb(255, 99, 132)',
  //             borderColor: 'rgb(255, 99, 132)',
  //             data: data.presentation_durations,
  //             cubicInterpolationMode: 'monotone'
  //         }]
  //     },
  
  //     // Configuration options go here
  //     options: {}
  // });
}

