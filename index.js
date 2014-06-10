var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var logfmt = require('logfmt');
var cors = require('cors');
var ObjectID = require('mongodb').ObjectID;

var app = express();
var router = express.Router();

var version = "0.1";

//app.use(cors());
app.use(bodyParser());
app.use(logfmt.bodyParserStream());
app.use('/api/' + version, router);
app.use("/", express.static(__dirname + '/public'));

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGO_URL ||
  'mongodb://localhost/mydb';


console.log(mongoUri);


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
					console.log("ER: " + er);
					console.log("RS: " + rs);
					if (er || !rs) {
						res.send({});
					} else {
						res.send(rs);
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


router.route('/counts/:col')
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
						res.send("9");
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


// No Valid Routes Left
router.route('*')
	.get(function(req, res){
		res.send(404);
	});


var port = Number(process.env.PORT || 5000);
var server = app.listen(port, function() {
    console.log('API available at: http://localhost:%d/api/%s/', port, version);
});