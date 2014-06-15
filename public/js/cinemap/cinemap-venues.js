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
      $.getJSON("http://www.cinemap.io/api/0.1/counts/states", function(json) {
          for (var i = 0; i < json.length; i++) {
            data.labels.push(json[i]["_id"]);
            data.datasets[0].data.push(json[i]["count"]);
          }

    //Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#line").get(0).getContext("2d");
    $("#line").get(0).setAttribute('width', '800');
    $("#line").get(0).setAttribute('height', '600');
    //This will get the first returned node in the jQuery collection.
    var myNewChart = new Chart(ctx).Radar(data);  
  });
});





$(document).ready(function(){
    var map;
    AmCharts.ready(function() {
        $.getJSON("http://www.cinemap.io/api/0.1/amchart/heatmap", function(json) {
            var areas = [];
            for (var i = 0; i < json.length; i++) {
                areas.push(json[i]);
            }

            map = new AmCharts.AmMap();
            map.pathToImages = "../ammap/images/";

            map.colorSteps = 10;

            var dataProvider = {
                mapVar: AmCharts.maps.usaLow,
                areas: areas
            };

            map.areasSettings = {
                autoZoom: true
            };
            map.dataProvider = dataProvider;

            var valueLegend = new AmCharts.ValueLegend();
            valueLegend.right = 10;
            valueLegend.minValue = "little";
            valueLegend.maxValue = "a lot!";
            map.valueLegend = valueLegend;
            map.write("mapdiv");
        });
    });
});


$(document).ready(function(){
    var map2;
    AmCharts.ready(function() {
        $.getJSON("http://www.cinemap.io/api/0.1/amchart/faked", function(json) {
            var areas = [];
            for (var i = 0; i < json.length; i++) {
                areas.push(json[i]);
            }

            map2 = new AmCharts.AmMap();
            map2.pathToImages = "../ammap/images/";

            map2.colorSteps = 10;

            var dataProvider = {
                mapVar: AmCharts.maps.usaLow,
                areas: areas
            };

            map2.areasSettings = {
                autoZoom: true
            };
            map2.dataProvider = dataProvider;

            var valueLegend = new AmCharts.ValueLegend();
            valueLegend.right = 10;
            valueLegend.minValue = "little";
            valueLegend.maxValue = "a lot!";
            map2.valueLegend = valueLegend;
            map2.write("mapdiv2");
        });
    });
});