var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var logfmt = require('logfmt');


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


router.route('/search')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
	  next(new Error('not implemented'));
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


// Create


// Read

router.route('/features')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
	  mongo.Db.connect(mongoUri, function (err, db) {
		   db.collection('features', function(er, collection) {
		     collection.find({}).toArray(function(er,rs) {
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


router.route('/venues')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
	  mongo.Db.connect(mongoUri, function (err, db) {
		   db.collection('venues', function(er, collection) {
		     collection.find({}).toArray(function(er,rs) {
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


router.route('/showings')
	.all(function(req, res, next) {
		// route-specific middleware
		next();
	})
	.get(function(req, res, next) {
	  mongo.Db.connect(mongoUri, function (err, db) {
		   db.collection('showings', function(er, collection) {
		     collection.find({}).toArray(function(er,rs) {
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


// Update


// Delete


// Testing

router.route('/testing')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
	  mongo.Db.connect(mongoUri, function (err, db) {
		   db.collection('features', function(er, collection) {
		     collection.find({"title": req.query.title}).toArray(function(er,rs) {
		       res.send(rs);
		     });
		   });
		 });
	})
	.put(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.post(function(req, res, next) {
	  mongo.Db.connect(mongoUri, function (err, db) {
		   db.collection('features', function(er, collection) {
		     collection.insert({'title': req.body.title, 'year': req.body.year, 'box': req.body.box}, function(er,rs) {
		     	res.send(rs);
		     });
		   });
		 });
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