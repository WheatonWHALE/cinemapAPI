var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var logfmt = require('logfmt');
var ObjectID = require('mongodb').ObjectID;

var app = express();
var router = express.Router();

var version = "0.1";

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
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
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
	  next(new Error('not implemented'));
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
				collection.find(query).toArray(function(er,rs) {
					console.log(query);
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