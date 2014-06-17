$(document).ready(function(){
  $.ajax({
     type: 'GET',
     url: 'http://www.cinemap.io/api/0.1/showings',
     success: function(data) {
       for (var item in data) {
         $("#showings-listing").append("<tr><td>" + data[item].venue_id  + "</td><td>" + data[item].feature_id + "</td><td>" + (new Date(data[item].showtime)).toUTCString() + "</td></tr>");
       }
     }
   });
});

// jQuery UI Datepicker JS init
var datepickerSelector = '#datepicker-01';
$(datepickerSelector).datepicker({
  showOtherMonths: true,
  selectOtherMonths: true,
  dateFormat: "d MM, yy",
  yearRange: '-1:+1'
}).prev('.btn').on('click', function (e) {
  e && e.preventDefault();
  $(datepickerSelector).focus();
});

// Now let's align datepicker with the prepend button
$(datepickerSelector).datepicker('widget').css({'margin-left': -$(datepickerSelector).prev('.btn').outerWidth()});


$(document).ready(function(){
  var data = {
    labels: [],
    datasets: [{
    fillColor : "rgba(151,187,205,0.5)",
    strokeColor : "rgba(151,187,205,1)",
    pointColor : "rgba(151,187,205,1)",
    pointStrokeColor : "#eee",
    data : []
      }]
    };
      $.getJSON("http://www.cinemap.io/api/0.1/counts/showtimes", function(json) {
          for (var i = 0; i < json.length; i++) {
            data.labels.push(json[i]["_id"]);
            data.datasets[0].data.push(json[i]["count"]);
          }

    //Get context with jQuery - using jQuery's .get() method.
	var ctx = $("#showtimes-line").get(0).getContext("2d");
	$("#showtimes-line").get(0).setAttribute('width', '1200');
	$("#showtimes-line").get(0).setAttribute('height', '800');
	//This will get the first returned node in the jQuery collection.
	var myNewChart = new Chart(ctx).Line(data);  
  });

  var chartData = generateChartData();

  var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "dark",
    "pathToImages": "http://www.amcharts.com/lib/3/images/",
    "dataProvider": chartData,
    "valueAxes": [{
        "position": "left",
        "title": "Unique visitors"
    }],
    "graphs": [{
        "fillAlphas": 0.4,
        "valueField": "visits"
    }],
    "chartScrollbar": {},
    "chartCursor": {
        "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
        "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
        "minPeriod": "mm",
        "parseDates": true
    }
  });

  chart.addListener("dataUpdated", zoomChart);
  // when we apply theme, the dataUpdated event is fired even before we add listener, so
  // we need to call zoomChart here
  zoomChart();
  // this method is called when chart is first inited as we listen for "dataUpdated" event
  function zoomChart() {
      // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
      chart.zoomToIndexes(chartData.length - 250, chartData.length - 1);
  }

  // generate some random data, quite different range
  function generateChartData() {
    var chartData = [];
    // current date
    var firstDate = new Date();
    // now set 500 minutes back
    firstDate.setMinutes(firstDate.getDate() - 1000);

    // and generate 500 data items
    for (var i = 0; i < 500; i++) {
      var newDate = new Date(firstDate);
      // each time we add one minute
      newDate.setMinutes(newDate.getMinutes() + i);
      // some random number
      var visits = Math.round(Math.random() * 40 + 10 + i + Math.random() * i / 5);
      // add data item to the array
      chartData.push({
          date: newDate,
           visits: visits
      });
    }
    return chartData;
  }
});




