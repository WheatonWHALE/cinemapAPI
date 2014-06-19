
var startMillis = new Date(2014,0,1).getTime(); // Get millis for January 1st 1900 
var endMillis = new Date(2015,0,1).getTime(); // Get millis for January 1st 2100 
//=======================================================================================================================================================
var mongoose   = require('mongoose');

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGO_URL ||
  'mongodb://localhost/mydb';


mongoose.connect(mongoUri);


var Schema = mongoose.Schema;

var ShowingSchema = new Schema({
	showtime: Date,
	venue_id: {type: mongoose.Schema.Types.ObjectId, ref: 'theater'},
	feature_id: {type: mongoose.Schema.Types.ObjectId, ref: 'movie'}
});

var Showing = mongoose.model('Showing', ShowingSchema);


// ========================================================================================================================================================
for (var i = 0; i < 1000; i++) {
	// create random date
	var randomDate = new Date(startMillis + Math.random()*(endMillis-startMillis));
	randomDate.toISOString(); // Output UTC string for randomDate
	var counts = Math.random() * 100;
	console.log(randomDate); // check the Date
	for (var x = 0; x < counts; x++) {
		var showtimes = new Showing({showtime: randomDate, venue_id: "538cca941d43652484000001", feature_id: "538cca941d43652484000020"});
		showtimes.save(function(errr) {
			if (errr) {
				console.log("Errr: " + errr);
			};
			console.log("Added");			
		});
	};
	
};


