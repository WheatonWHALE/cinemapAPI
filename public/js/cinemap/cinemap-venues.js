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