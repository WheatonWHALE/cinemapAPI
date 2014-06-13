$(document).ready(function(){
  $.ajax({
     type: 'GET',
     url: 'http://www.cinemap.io/api/0.1/features',
     success: function(data) {
       for (var item in data) {
         $("#features-listing").append("<tr><td>" + data[item].title  + "</td><td>" + data[item].external + "</td></tr>");
       }
     }
   });
});