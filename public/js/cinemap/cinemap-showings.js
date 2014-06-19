$(document).ready(function(){

// Tom's graph
// must add this line to the hbs to work <div><canvas id="showtimes-line" data-type="Line"></canvas></div>

 //  var data = {
 //    labels: [],
 //    datasets: [{
 //    fillColor : "rgba(151,187,205,0.5)",
 //    strokeColor : "rgba(151,187,205,1)",
 //    pointColor : "rgba(151,187,205,1)",
 //    pointStrokeColor : "#eee",
 //    data : []
 //      }]
 //    };
 //      $.getJSON("http://www.cinemap.io/api/0.1/counts/showtimes", function(json) {
 //          for (var i = 0; i < json.length; i++) {
 //            data.labels.push(json[i]["_id"]);
 //            data.datasets[0].data.push(json[i]["count"]);
 //          }

 //    //Get context with jQuery - using jQuery's .get() method.
	// var ctx = $("#showtimes-line").get(0).getContext("2d");
	// $("#showtimes-line").get(0).setAttribute('width', '1200');
	// $("#showtimes-line").get(0).setAttribute('height', '800');
	// //This will get the first returned node in the jQuery collection.
	// var myNewChart = new Chart(ctx).Line(data);  
 //  });

//=========================================================================================================================================================

//----------
// am chart \
// ----------

  var G = [];
  var PG = [];
  var PG13 = [];
  var R = [];
  var chartData = [];

  $.getJSON("http://www.cinemap.io/api/0.1/counts/showtimes", function(json) {
          for (var i = 0; i < json.length; i++) {
            var newDate = json[i]["_id"];
            // set count
            var counts = json[i]["count"];

            var a1 = json[i]["count"];
            var b1 = json[i]["count"];

            var a2 = json[i]["count"];
            var b2 = json[i]["count"];

            var a3 = json[i]["count"];
            var b3 = json[i]["count"];

            var a4 = json[i]["count"];
            var b4 = json[i]["count"];
            
            // push data to the array
            console.log("before push");
            chartData.push({
              date: newDate,
              counts: counts
            }); // ends chartData.push
            G.push({
              date: newDate,
              value: a1,
              volume: b1
            }); // ends pushing to G
            PG.push({
              date: newDate,
              value: a2,
              volume: b2
            }); // ends PG.push
            PG13.push({
              date: newDate,
              value: a3,
              volume: b3
            }); // ends PG13
            R.push({
              date: newDate,
              value: a4,
              volume: b4
            }); // ends pushing to R

          } // ends for loop
          var chart = AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "light",
            "pathToImages": "http://www.amcharts.com/lib/3/images/",
            "dataProvider": chartData,
            "valueAxes": [{
                "position": "left",
                "title": "Count"
            }],
            "graphs": [{
                "fillAlphas": 0.4,
                "valueField": "counts"
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

          var chart2 = AmCharts.makeChart("chartdiv2", {
            type: "stock",
              "theme": "none",
              pathToImages: "http://www.amcharts.com/lib/3/images/",

            dataSets: [{
                title: "Rated G Movies",
                fieldMappings: [{
                  fromField: "value",
                  toField: "value"
                }, {
                  fromField: "volume",
                  toField: "volume"
                }],
                dataProvider: G,
                categoryField: "date"
              },

              {
                title: "Rated PG Movies",
                fieldMappings: [{
                  fromField: "value",
                  toField: "value"
                }, {
                  fromField: "volume",
                  toField: "volume"
                }],
                dataProvider: PG,
                categoryField: "date"
              },

              {
                title: "Rated PG-13 Movies",
                fieldMappings: [{
                  fromField: "value",
                  toField: "value"
                }, {
                  fromField: "volume",
                  toField: "volume"
                }],
                dataProvider: PG13,
                categoryField: "date"
              },

              {
                title: "Rated R Movies",
                fieldMappings: [{
                  fromField: "value",
                  toField: "value"
                }, {
                  fromField: "volume",
                  toField: "volume"
                }],
                dataProvider: R,
                categoryField: "date"
              }
            ],

            panels: [{

                showCategoryAxis: false,
                title: "Value",
                percentHeight: 70,

                stockGraphs: [{
                  id: "g1",

                  valueField: "value",
                  comparable: true,
                  compareField: "value",
                  balloonText: "[[title]]:<b>[[value]]</b>",
                  compareGraphBalloonText: "[[title]]:<b>[[value]]</b>"
                }],

                stockLegend: {
                  periodValueTextComparing: "[[percents.value.close]]%",
                  periodValueTextRegular: "[[value.close]]"
                }
              },

              {
                title: "Volume",
                percentHeight: 30,
                stockGraphs: [{
                  valueField: "volume",
                  type: "column",
                  showBalloon: false,
                  fillAlphas: 1
                }],


                stockLegend: {
                  periodValueTextRegular: "[[value.close]]"
                }
              }
            ],

            chartScrollbarSettings: {
              graph: "g1"
            },

            chartCursorSettings: {
              valueBalloonsEnabled: true,
                  fullWidth:true,
                  cursorAlpha:0.1
            },

            periodSelector: {
              position: "left",
              periods: [{
                period: "MM",
                selected: true,
                count: 1,
                label: "1 month"
              }, {
                period: "YYYY",
                count: 1,
                label: "1 year"
              }, {
                period: "YTD",
                label: "YTD"
              }, {
                period: "MAX",
                label: "MAX"
              }]
            },

            dataSetSelector: {
              position: "left"
            }
        });

          chart2.addListener('rendered', function (event) {
            $( ".amChartsPeriodSelector .amChartsInputField" ).datepicker({
                dateFormat: "dd-mm-yy"
            });
          });

          chart.addListener("dataUpdated", zoomChart);
          zoomChart();
          function zoomChart() {
            chart.zoomToIndexes(chartData.length - 250, chartData.length - 1);
          }
    }); // ends getjson  
});

// ============================================================================================================================================================


