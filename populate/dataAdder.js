var showListings = [
	{title: 'Neighbors', theater: 'Sharon Cinemas 8', hour: [16,19], minute: [35,15]},
	{title: 'Neighbors', theater: 'Showcase Cinema de Lux Patriot Place', hour: [14,15,16,18,19,21,22], minute: [30,55,55,35,45,20,20]},
	{title: 'Neighbors', theater: 'Showcase Cinemas North Attleboro', hour: [14,17,19,22], minute: [50,15,40,15]},
	{title: 'Neighbors', theater: 'Regal Silver City Galleria 10', hour: [13,16,19,21], minute: [35,35,30,55]},
	{title: 'Neighbors', theater: 'Regal Swansea Stadium 12', hour: [13,16,19,22], minute: [50,50,50,40]},
	{title: 'Neighbors', theater: 'Showcase Cinemas Seekonk Route 6', hour: [14,16,19,21], minute: [25,50,25,55]},
	{title: 'Godzilla', theater: 'Sharon Cinemas 8', hour: [16,18], minute: [15,50]},
	{title: 'Godzilla', theater: 'Showcase Cinema de Lux Patriot Place', hour: [13,13,15,16,18,19,21,22], minute: [0,30,50,20,40,10,35,0]},
	{title: 'Godzilla', theater: 'Showcase Cinemas North Attleboro', hour: [13,13,15,16,18,19,21,22], minute: [0,30,50,20,40,10,35,0]},
	{title: 'Godzilla', theater: 'Regal Silver City Galleria 10', hour: [13,16,19,22], minute: [30,25,40,30]},
	{title: 'Godzilla', theater: 'Regal Swansea Stadium 12', hour: [13,13,16,19,19,22], minute: [0,15,0,10,25,20]},
	{title: 'Godzilla', theater: 'Showcase Cinemas Seekonk Route 6', hour: [13,13,16,16,19,19,22], minute: [15,45,15,45,15,45,20]},
	{title: 'X-Men: Days of Future Past', theater: 'Sharon Cinemas 8', hour: [22], minute: [0]},
	{title: 'X-Men: Days of Future Past', theater: 'Showcase Cinema de Lux Patriot Place', hour: [22], minute: [15]},
	{title: 'X-Men: Days of Future Past', theater: 'Regal Silver City Galleria 10', hour: [22], minute: [15]},
	{title: 'X-Men: Days of Future Past', theater: 'Regal Swansea Stadium 12', hour: [22], minute: [0]},
	{title: 'X-Men: Days of Future Past', theater: 'Showcase Cinema de Lux Randolph', hour: [22], minute: [15]},
	{title: 'Million Dollar Arm', theater: 'Sharon Cinemas 8', hour: [16,10], minute: [0,45]},
	{title: 'Million Dollar Arm', theater: 'Showcase Cinema de Lux Patriot Place', hour: [12,15,18], minute: [35,35,55]},
	{title: 'Million Dollar Arm', theater: 'Showcase Cinemas North Attleboro', hour: [13,16,19,20], minute: [0,0,0,5]},
	{title: 'Million Dollar Arm', theater: 'Regal Silver City Galleria 10', hour: [13,16,19,20], minute: [10,10,10,0]},
	{title: 'Million Dollar Arm', theater: 'Regal Swansea Stadium 12', hour: [13,16,19,20], minute: [35,25,15,10]},
	{title: 'Million Dollar Arm', theater: 'Showcase Cinemas Seekonk Route 6', hour: [12,16,19,20], minute: [30,5,10,0]},
	{title: 'The Amazing Spider-Man 2', theater: 'Sharon Cinemas 8', hour: [15,18], minute: [50,40]},
	{title: 'The Amazing Spider-Man 2', theater: 'Showcase Cinema de Lux Patriot Place', hour: [12,12,15,15,18,21], minute: [5,40,10,45,30,40]},
	{title: 'The Amazing Spider-Man 2', theater: 'Showcase Cinemas North Attleboro', hour: [13,16,18,19,20], minute: [10,20,30,35,40]},
	{title: 'The Amazing Spider-Man 2', theater: 'Regal Silver City Galleria 10', hour: [15,19,22], minute: [45,5,15]},
	{title: 'The Amazing Spider-Man 2', theater: 'Regal Swansea Stadium 12', hour: [13,16,16,20], minute: [25,10,45,0]},
	{title: 'The Amazing Spider-Man 2', theater: 'Showcase Cinemas Seekonk Route 6', hour: [12,15,18,21], minute: [15,20,30,45]},
	{title: 'Godzilla 3D', theater: 'Showcase Cinema de Lux Patriot Place', hour: [11,12,14,15,16,18,19,21], minute: [15,30,0,20,50,10,40,5]},
	{title: 'Godzilla 3D', theater: 'Showcase Cinemas North Attleboro', hour: [12,15,18,21], minute: [45,45,45,50]},
	{title: 'Godzilla 3D', theater: 'Regal Silver City Galleria 10', hour: [13,15,19,22], minute: [0,55,20,0]},
	{title: 'Godzilla 3D', theater: 'Regal Swansea Stadium 12', hour: [13,16,16,19,22,22], minute: [45,15,40,40,5,35]},
	{title: 'Godzilla 3D', theater: 'Showcase Cinemas Seekonk Route 6', hour: [12,15,18,21], minute: [45,45,45,50]},
	{title: 'Godzilla 3D', theater: 'Showcase Cinema de Lux Randolph', hour: [11,14,17,20], minute: [30,25,10,5]},
	{title: 'Blended', theater: 'Sharon Cinemas 8', hour: [19], minute: [0]},
	{title: 'Blended', theater: 'Showcase Cinema de Lux Patriot Place', hour: [19,21], minute: [0,30]},
	{title: 'Blended', theater: 'Showcase Cinemas North Attleboro', hour: [19], minute: [0]},
	{title: 'Blended', theater: 'Regal Silver City Galleria 10', hour: [19,21], minute: [0,30]},
	{title: 'Blended', theater: 'Regal Swansea Stadium 12', hour: [19,22], minute: [0,10]},
	{title: 'Blended', theater: 'Showcase Cinemas Seekonk Route 6', hour: [19], minute: [0]},
	{title: 'X-Men: Days of Future Past in 3D', theater: 'Showcase Cinema de Lux Patriot Place', hour: [22], minute: [0]},
	{title: 'X-Men: Days of Future Past in 3D', theater: 'Regal Silver City Galleria 10', hour: [22], minute: [0]},
	{title: 'X-Men: Days of Future Past in 3D', theater: 'Regal Swansea Stadium 12', hour: [22], minute: [20]},
	{title: 'X-Men: Days of Future Past in 3D', theater: 'Showcase Cinema de Lux Randolph', hour: [22], minute: [0]},
	{title: 'The Other Women', theater: 'Sharon Cinemas 8', hour: [16,19], minute: [15,10]},
	{title: 'The Other Women', theater: 'Showcase Cinema de Lux Patriot Place', hour: [13,16,19], minute: [15,0,0]},
	{title: 'The Other Women', theater: 'Showcase Cinemas North Attleboro', hour: [13,16,19,21], minute: [40,35,20,55]},
	{title: 'The Other Women', theater: 'Regal Silver City Galleria 10', hour: [13,16,18,21], minute: [20,15,55,40]},
	{title: 'The Other Women', theater: 'Regal Swansea Stadium 12', hour: [13,16,19,21], minute: [20,20,5,50]},
	{title: 'The Other Women', theater: 'Showcase Cinemas Seekonk Route 6', hour: [12,16,19,22], minute: [50,25,20,10]},
	{title: 'Heaven is for Real', theater: 'Showcase Cinemas North Attleboro', hour: [13,16,19,22], minute: [30,10,10,0]},
	{title: 'Heaven is for Real', theater: 'Regal Silver City Galleria 10', hour: [13,16,18,21], minute: [10,25,45,10]},
	{title: 'Heaven is for Real', theater: 'Regal Swansea Stadium 12', hour: [13,16,19,21], minute: [30,30,0,35]},
	{title: 'Heaven is for Real', theater: 'Showcase Cinemas Seekonk Route 6', hour: [12,16,18,21], minute: [40,10,55,40]},
	{title: 'Heaven is for Real', theater: 'Showcase Cinema de Lux Randolph', hour: [11,14,16,18,21], minute: [35,0,20,50,20]},
	{title: 'Rio 2', theater: 'Sharon Cinemas 8', hour: [16,18], minute: [25,35]},
	{title: 'Rio 2', theater: 'Showcase Cinema de Lux Patriot Place', hour: [11,13,16], minute: [25,55,25]},
	{title: 'Rio 2', theater: 'Showcase Cinemas North Attleboro', hour: [13,15], minute: [5,50]},
	{title: 'Rio 2', theater: 'Regal Silver City Galleria 10', hour: [13,15,19], minute: [0,30,0]},
	{title: 'Rio 2', theater: 'Regal Swansea Stadium 12', hour: [13,15,18], minute: [5,45,45]},
	{title: 'Rio 2', theater: 'Showcase Cinema de Lux Randolph', hour: [12,16], minute: [55,0]},
	{title: 'Captain America: The Winter Soldier', theater: 'Showcase Cinema de Lux Patriot Place', hour: [12,15,18,21], minute: [0,25,45,55]},
	{title: 'Captain America: The Winter Soldier', theater: 'Showcase Cinemas North Attleboro', hour: [19,22], minute: [5,5]},
	{title: 'Captain America: The Winter Soldier', theater: 'Regal Silver City Galleria 10', hour: [13,15,18], minute: [5,35,50]},
	{title: 'Captain America: The Winter Soldier', theater: 'Regal Swansea Stadium 12', hour: [12,16,19,22], minute: [55,5,20,30]},
	{title: 'Captain America: The Winter Soldier', theater: 'Showcase Cinemas Seekonk Route 6', hour: [22], minute: [5]},
	{title: 'Captain America: The Winter Soldier', theater: 'Showcase Cinema de Lux Randolph', hour: [12,15,21], minute: [40,45,55]},
	{title: 'Legends of Oz: Dorthys Return', theater: 'Showcase Cinema de Lux Patriot Place', hour: [11,14,16], minute: [55,15,45]},
	{title: 'Legends of Oz: Dorthys Return', theater: 'Showcase Cinemas North Attleboro', hour: [12,14,16], minute: [15,30,40]},
	{title: 'Legends of Oz: Dorthys Return', theater: 'Regal Silver City Galleria 10', hour: [13,16], minute: [25,30]},
	{title: 'Legends of Oz: Dorthys Return', theater: 'Regal Swansea Stadium 12', hour: [13,15], minute: [10,30]},
	{title: 'Legends of Oz: Dorthys Return', theater: 'Showcase Cinemas Seekonk Route 6', hour: [12,14,16], minute: [10,30,55]},
	{title: 'Legends of Oz: Dorthys Return', theater: 'Showcase Cinema de Lux Randolph', hour: [12,14,16], minute: [20,30,45]},
	{title: 'Moms Night Out', theater: 'Showcase Cinema de Lux Patriot Place', hour: [13,16,19,21], minute: [45,30,15,50]},
	{title: 'Moms Night Out', theater: 'Showcase Cinema de Lux Randolph', hour: [11,13,16,18,21], minute: [5,30,5,30,10]},
	{title: 'The Amazing Spider-Man 2 in 3D', theater: 'Showcase Cinema de Lux Patriot Place', hour: [19,22], minute: [5,10]},
	{title: 'The Amazing Spider-Man 2 in 3D', theater: 'Regal Silver City Galleria 10', hour: [13], minute: [15]},
	{title: 'The Amazing Spider-Man 2 in 3D', theater: 'Regal Swansea Stadium 12', hour: [12], minute: [50]},
	{title: 'The Amazing Spider-Man 2 in 3D', theater: 'Showcase Cinema de Lux Randolph', hour: [19,22], minute: [10,15]},
	{title: 'Divergent', theater: 'Route One Cinema Pub', hour: [20], minute: [5]},
	{title: 'The Grand Budapest Hotel', theater: 'Sharon Cinemas 8', hour: [16], minute: [20]},
	{title: 'The Grand Budapest Hotel', theater: 'Showcase Cinemas North Attleboro', hour: [12,16,18,21], minute: [50,5,55,35]},
	{title: 'The Grand Budapest Hotel', theater: 'Showcase Cinemas Seekonk Route 6', hour: [18,21], minute: [50,30]},
	{title: 'Godzilla: An IMAX 3D Experience', theater: 'Showcase Cinema de Lux Randolph', hour: [12,15,18,21], minute: [35,40,35,30]},
	{title: 'The Lego Movie', theater: 'East Providence 10', hour: [12,14,16,18,21], minute: [25,35,45,55,5]},
	{title: 'Brick Mansions', theater: 'Route One Cinema Pub', hour: [20], minute: [35]},
	{title: 'Brick Mansions', theater: 'Showcase Cinema de Lux Randolph', hour: [19], minute: [15]},
	{title: 'Mr.Peabody & Sherman', theater: 'East Providence 10', hour: [12,14,16,18,20], minute:[10,30,40,50,55]},
	{title: 'Bears', theater: 'Showcase Cinemas North Attleboro', hour: [12,14,17], minute:[30,40,0]},
	{title: 'Draft Day', theater: 'Route One Cinema Pub', hour: [18], minute: [0]},
	{title: 'Draft Day', theater: 'Showcase Cinema de Lux Patriot Place', hour: [19,22], minute: [25,0]},
	{title: 'Muppests Most Wanted', theater: 'Route One Cinema Pub', hour: [16], minute: [15]},
	{title: 'Transcendence', theater: 'Route One Cinema Pub', hour: [18], minute: [25]},
	{title: 'Transcendence', theater: 'East Providence 10', hour: [12,15,18,21], minute: [30,0,30,10]},
	{title: 'Non-Stop', theater: 'East Providence 10', hour: [12,14,16,19,21], minute: [15,35,55,15,35]},
	{title: 'Ride Along', theater: 'East Providence 10', hour: [13,15,17,19,21], minute: [0,10,20,25,40]},
	{title: 'Need for Speed', theater: 'East Providence 10', hour: [18,21], minute: [20,5]},
	{title: '300: Rise of an Empire', theater: 'East Providence 10', hour: [12,14,16,18,20], minute: [5,15,25,35,45]},
	{title: 'Frozen', theater: 'East Providence 10', hour: [12,14,17,19,21], minute: [40,50,5,20,30]}
];

var movieName = [
	'Neighbors', 
	'Godzilla', 
	'X-Men: Days of Future Past', 
	'Million Dollar Arm', 
	'The Amazing Spider-Man 2', 
	'Godzilla 3D', 
	'Blended', 
	'X-Men: Days of Future Past in 3D', 
	'The Other Women', 
	'Heaven is for Real', 
	'Rio 2',
	'Captain America: The Winter Soldier',
	'Legends of Oz: Dorthys Return',
	'Moms Night Out',
	'The Amazing Spider-Man 2 in 3D',
	'Divergent',
	'The Grand Budapest Hotel',
	'Godzilla: An IMAX 3D Experience',
	'The Lego Movie',
	'Brick Mansions',
	'Mr.Peabody & Sherman',
	'Bears',
	'Draft Day',
	'Noah',
	'Muppests Most Wanted',
	'Transcendence',
	'Non-Stop',
	'Ride Along',
	'Need for Speed',
	'300: Rise of an Empire',
	'Frozen'
];

// geocode: [42.163113, -71.061668]

var TheaterAddress = [
	{name: 'Sharon Cinemas 8', address: ['700 South Main Street', 'Sharon', 'MA'], geocode: [42.094707, -71.219491]},
	{name: 'Showcase Cinema de Lux Patriot Place', address: ['24 Patriot Place', 'Foxboro', 'MA'], geocode: [42.094218, -71.265650]},
	{name: 'Showcase Cinemas North Attleboro', address: ['640 South Washington Street', 'North Attleboro', 'MA'], geocode: [41.954466, -71.341838]},
	{name: 'Regal Silver City Galleria 10', address: ['2 Galleria Mall Drive', 'Taunton', 'MA'], geocode: [41.864427, -71.051431]},
	{name: 'Regal Swansea Stadium 12', address: ['207 Swansea Mall Drive', 'Swansea', 'MA'], geocode: [41.756302, -71.217185]},
	{name: 'Showcase Cinemas Seekonk Route 6', address: ['100 Commerce Way', 'Seekonk', 'MA'], geocode: [41.797065, -71.323079]},
	{name: 'Route One Cinema Pub', address: ['652 East Washington St.', 'North Attleboro', 'MA'], geocode: [41.985304, -71.326971]},
	{name: 'East Providence 10', address: ['60 Newport Avenue', 'Rumford', 'RI'], geocode: [41.857816, -71.351147]},
	{name: 'Showcase Cinema de Lux Randolph', address: ['73 Mazzeo Drive', 'Randolph', 'MA'], geocode: [42.163113, -71.061668]} 
];

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

var FeatureSchema = new Schema({
	title: String,
	external: String
});

var VenueSchema = new Schema({
	name: String,
	address: {
		street: String,
		city: String,
		state: String,
		zip: Number
	},
	geocode: {
		latitude: Number,
		longitude: Number
	},
	external: String
});

var Feature = mongoose.model('Feature', FeatureSchema);
var Venue = mongoose.model('Venue', VenueSchema);
var Showing = mongoose.model('Showing', ShowingSchema);


// Clear three collections and add data from above.
Feature.remove({}, function(err) { 
	console.log('feature collection removed') 
	Venue.remove({}, function(err) { 
		console.log('venue collection removed') 
		Showing.remove({}, function(err) { 
			console.log('showing collection removed') 
			// Add Features
			var movieList = [];
			for ( var i = 0; i < movieName.length; i++ ){
				movieList.push({title: movieName[i], external: "N/A"});
			};
			Feature.create(movieList, function(err) {
				// Add Venues
				var TheaterArray = []
				for (var x = 0; x < TheaterAddress.length; x++){
						var current_Theater = TheaterAddress[x];
						TheaterArray.push({name : current_Theater.name, 
										   address: {street : current_Theater.address[0], city : current_Theater.address[1], state : current_Theater.address[2]},
										   geocode: {latitude: current_Theater.geocode[0], longitude: current_Theater.geocode[1]}
										});
				};
				Venue.create(TheaterArray, function(err) {
					// Add Showings
					for (var i = 0; i < showListings.length; i++) {
						for (var x = 0; x < showListings[i].hour.length; x++) {
							addOneShowing(showListings[i], x);
						};
					};
				});				
			}); 
		});
	});
});


// Add a single showing after adding venue and feature collections
function addOneShowing(showing, x_index) {
	Venue.findOne({name: showing.theater}, "_id", function (err, venue) {
		if (err) {
			console.log(err);
		};
		Feature.findOne({title: showing.title}, "_id", function (er, feature) {
			if (er) {
				console.log(er);
			};
			var foo = new Date(2014, 4, 22, showing.hour[x_index], showing.minute[x_index]);
			var showtimes = new Showing({showtime: foo, venue_id: venue._id, feature_id: feature._id});
			showtimes.save(function(errr) {
				if (errr) {
					console.log("Errr: " + errr);
				};
				console.log("Added " + showing.title + " at " + showing.hour[x_index] + ":" + showing.minute[x_index]);			
			});
		});
	});	
};