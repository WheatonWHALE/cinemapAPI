var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var logfmt = require('logfmt');
var cors = require('cors');
var hbs = require('hbs');
var ObjectID = require('mongodb').ObjectID;

var app = express();
var router = express.Router();
var homepage = express.Router();

var version = "0.1";

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
app.use(logfmt.bodyParserStream());
app.use('/api/' + version, router);
app.use('/', homepage);

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGO_URL ||
  'mongodb://localhost/mydb';

console.log(mongoUri);


homepage.route('/')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
	 	res.render('index', {});
	});


homepage.route('/features')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
	 	res.render('features', {});
	});


homepage.route('/venues')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
	 	res.render('venues', {});
	});


homepage.route('/showings')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
	 	res.render('showings', {});
	});


homepage.route('/upload')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
	 	res.render('upload', {});
	});


homepage.route('/about')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
	 	res.render('about', {});
	});


/**

RESTful API for CineMap

Route 						HTTP Verb 		Description
/api/features 				GET 			Get all the features.
/api/features				POST			Create a feature.
/api/features/:featureid	GET				Get a single feature.
/api/features/:featureid	PUT				Update a feature with new info.
/api/features/:featureid	DELETE			Delete a feature.

**/

// Middleware
router.use(function(req, res, next) {
	// global middleware
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
	// res.header("Access-Control-Allow-Origin", "*");
	// res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	// res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	// next();
});


router.route('/features')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
	 	mongo.Db.connect(mongoUri, function (err, db) {
			db.collection('features', function(er, collection) {
				var query = {};
				for (var key in req.query) {
					query[key] = req.query[key];
				}
				collection.find(query).toArray(function(er,rs) {
		    		res.send(rs);
		    	}); // ends collection.find
			}); // ends db.collection
		}); // ends end mongo.Db.connect
	}) // ends .get
	.put(function(req, res, next) { // updating 
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) { // creating 
	  mongo.Db.connect(mongoUri, function (err, db){
	  	db.collection('features', function(er, collection) {
	  		var documentToInsert = {title: req.query.title, external: req.query.external};
	  		collection.insert(documentToInsert, function(err, records){
	  			res.send(records[0]);
	  		});
	  	}); // ends db.collection
	  }); // ends mongo.Db.connect
	})// ends post (creating)
	.delete(function(req, res, next) {
	  next(new Error('not implemented'));
	});


router.route('/features/:featureid')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
		mongo.Db.connect(mongoUri, function (err, db) {
			db.collection('features', function(er, collection) {
				try {
					var tempObjectID = new ObjectID(req.params.featureid);
				} catch (e) {
					var tempObjectID = 0;
				}
				collection.findOne({"_id": tempObjectID}, function(er,rs) {
					if (er || !rs) {
						res.send({});
					} else {
						res.send(rs);
					}
		    	});
			});
		});
	})
	.put(function(req, res, next) {
		mongo.Db.connect(mongoUri, function (err, db) {
			db.collection('features', function(er, collection) {
				try {
					var tempObjectID = new ObjectID(req.params.featureid);
				} catch (e) {
					var tempObjectID = 0;
				}
				var query = {};
				for (var key in req.query) {
					query[key] = req.query[key];
				}
				console.log({$set: query});
				console.log(tempObjectID);
				collection.update({"_id": tempObjectID}, {$set: query}, function(er,rs) {
					if (er || !rs) {
						res.send({});
					} else {
						collection.findOne({"_id": tempObjectID}, function(er,rs) {
							if (er || !rs) {
								res.send({});
							} else {
								res.send(rs);
							}
				    	});
					}
		    	});
			});
		});
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
		mongo.Db.connect(mongoUri, function (err, db) {
			db.collection('features', function(er, collection) {
				try {
					var tempObjectID = new ObjectID(req.params.featureid);
				} catch (e) {
					var tempObjectID = 0;
				}
				collection.remove({"_id": tempObjectID}, function(er,rs) {
					if (er || !rs) {
						res.send("Feature not found.");
					} else {
						res.send("Feature removed.");
					}
		    	});
			});
		});
	});


router.route('/venues')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
		mongo.Db.connect(mongoUri, function (err, db) {
			db.collection('venues', function(er, collection) {
		   		var query = {};
		   		for (var keys in req.query) {
		   			query[keys] = req.query[keys];
		   		}
				collection.find(query).toArray(function(er,rs) {
					res.send(rs);
		    	});
			});
		});
	})
	.put(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
	  next(new Error('not implemented'));
	});


router.route('/venues/:venueid')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
		mongo.Db.connect(mongoUri, function (err, db) {
			db.collection('venues', function(er, collection) {
				try {
					var tempObjectID = new ObjectID(req.params.venueid);
				} catch (e) {
					var tempObjectID = 0;
				}
				collection.findOne({"_id": tempObjectID}, function(er,rs) {
					if (er || !rs) {
						res.send({});
					} else {
						res.send(rs);
					}
		    	});
			});
		});
	})
	.put(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
		mongo.Db.connect(mongoUri, function (err, db) {
			db.collection('venues', function(er, collection) {
				try {
					var tempObjectID = new ObjectID(req.params.featureid);
				} catch (e) {
					var tempObjectID = 0;
				}
				collection.remove({"_id": tempObjectID}, function(er,rs) {
					if (er || !rs) {
						res.send("Venue not found.");
					} else {
						res.send("Venue removed.");
					}
		    	});
			});
		});
	});


router.route('/showings')
	.all(function(req, res, next) {
		// route-specific middleware
		next();
	})
	.get(function(req, res, next) {
	 	mongo.Db.connect(mongoUri, function (err, db) {
			db.collection('showings', function(er, collection) {
				var query = {};
				for (var key in req.query) {
					query[key] = new Date(req.query[key]);
				} // ends for 

				if (req.query.startdate && req.query.enddate) {
					query = {
						showtime: {
							$gte: new Date(req.query.startdate),
							$lte: new Date(req.query.enddate)
						}
					}
				}
				collection.find(query).toArray(function(er,rs) {
		    		res.send(rs);
		    	}); // ends collection.find
			}); // ends db.collection
		}); // ends end mongo.Db.connect
	}) // ends .get
	.put(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
	  next(new Error('not implemented'));
	});


router.route('/showings/:showingid')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
		mongo.Db.connect(mongoUri, function (err, db) {
			db.collection('showings', function(er, collection) {
				try {
					var tempObjectID = new ObjectID(req.params.showingid);
				} catch (e) {
					var tempObjectID = 0;
				}
				collection.findOne({"_id": tempObjectID}, function(er,rs) {
					if (er || !rs) {
						res.send({});
					} else {
						res.send(rs);
					}
		    	});
			});
		});
	})
	.put(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
		mongo.Db.connect(mongoUri, function (err, db) {
			db.collection('showings', function(er, collection) {
				try {
					var tempObjectID = new ObjectID(req.params.featureid);
				} catch (e) {
					var tempObjectID = 0;
				}
				collection.remove({"_id": tempObjectID}, function(er,rs) {
					if (er || !rs) {
						res.send("Showing not found.");
					} else {
						res.send("Showing removed.");
					}
		    	});
			});
		});
	});


router.route('/counts/temporal')
	.all(function(req, res, next) {
		// route-specific middleware
		next();
	})
	.get(function(req, res, next) {
		mongo.Db.connect(mongoUri, function (err, db) {
			try {
				var collectionName = req.params.col;
				var query = {};
				for (var key in req.query) {
					query[key] = new Date(req.query[key]);
				}
				if (req.query.startdate && req.query.enddate) {
					query = {
						showtime: {
							$gte: new Date(req.query.startdate),
							$lte: new Date(req.query.enddate)
						}
					}
				}				
				db.collection(collectionName, function(er, collection) {
					collection.count(query, function(er,rs) {
						res.send("'"+ rs +"'");
			    	});
				});
			} catch (e) {
				res.send("Invalid collection name.");
			}
		});
	})
	.put(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
	  next(new Error('not implemented'));
	});


router.route('/counts/states')
	.all(function(req, res, next) {
		// route-specific middleware
		next();
	})
	.get(function(req, res, next) {
		mongo.Db.connect(mongoUri, function (err, db) {
			db.collection("venues", function(er, collection) {
				collection.aggregate([{$group : {_id: '$address.state', count: { $sum: 1 }}}, {$sort: {_id: 1}}], function(er,rs) {
					res.send(rs);
		    	});
			});
		});
	})
	.put(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
	  next(new Error('not implemented'));
	});


router.route('/counts/showtimes')
	.all(function(req, res, next) {
		// route-specific middleware
		next();
	})
	.get(function(req, res, next) {
		mongo.Db.connect(mongoUri, function (err, db) {
			db.collection("showings", function(er, collection) {
				collection.aggregate([{$group : {_id: '$showtime', count: { $sum: 1 }}}, {$sort: {_id: 1}}], function(er,rs) {
					res.send(rs);
		    	});
			});
		});
	})
	.put(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
	  next(new Error('not implemented'));
	});


router.route('/amchart/heatmap')
	.all(function(req, res, next) {
		// route-specific middleware
		next();
	})
	.get(function(req, res, next) {
		mongo.Db.connect(mongoUri, function (err, db) {
			db.collection("venues", function(er, collection) {
				collection.aggregate([
							{$group : {_id: '$address.state', value: { $sum: 1 }}},
							{$sort: {_id: 1}},
							{$project: {id: {$concat: ['US-', '$_id']}, value: 1}}], function(er,rs) {
					res.send(rs);
		    	});
			});
		});
	})
	.put(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
	  next(new Error('not implemented'));
	});


function make_state_venue_counts() {
	var states = ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"];
	var faked_counts = [];
	for (var i = 0; i < states.length; i++) {
		faked_counts.push({
			id: 'US-' + states[i],
			value: Math.floor(Math.random()*100)
		});
	}
	return faked_counts;
}


router.route('/amchart/faked')
	.all(function(req, res, next) {
		// route-specific middleware
		next();
	})
	.get(function(req, res, next) {
		res.send(make_state_venue_counts());
	})
	.put(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
	  next(new Error('not implemented'));
	});


router.route('/amchart/motionchart')
	.all(function(req, res, next) {
		// route-specific middleware
		next();
	})
	.get(function(req, res, next) {
		var sentCount = req.query["count"];
		var total = sentCount ? sentCount : 100;
		var temporalData = [];
		for (var i = 0; i < total; i++) {
			temporalData.push(make_state_venue_counts());
		}
		res.send(temporalData);
		next();
	})
	.put(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
	  next(new Error('not implemented'));
	});

router.route('/search/venues')
	.all(function(req, res, next) {
		// route-specific middleware
		next();
	})
	.get(function(req, res, next){
		//console.log(" inside get of /search/venues");
		mongo.Db.connect(mongoUri, function (err, db) {
			db.collection('venues', function(er, collection) {
				var lookfor = req.query["name"];
				var regex = new RegExp(lookfor, "i");
				collection.find({'name': regex}).toArray(function(er,rs) {
		    		res.send(rs);
		    		console.log(rs);
		    	}); // ends collection.find
			}); // ends db.collection
		}); // ends end mongo.Db.connect
	}) // ends .get
	
	.put(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
	  next(new Error('not implemented'));
	});




// No Valid Routes Left
router.route('*')
	.get(function(req, res){
		res.send(404);
	});


var port = Number(process.env.PORT || 5000);
var server = app.listen(port, function() {
    console.log('API available at: http://localhost:%d/api/%s/', port, version);
});