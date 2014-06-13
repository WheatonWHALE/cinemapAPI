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
});