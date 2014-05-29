var express = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var logfmt = require('logfmt');


var app = express();
var router = express.Router();

var version = "0.1";

app.use(bodyParser());
app.use(logfmt.bodyParserStream());
app.use('/api/' + version, router);
app.use("/", express.static(__dirname + '/public'));

// DB Connection
//var mongoUri = process.env.MONGO_URL || 'mongodb://localhost/mydb';
//mongoose.connect(mongoUri);


// Middleware
router.use(function(req, res, next) {
	// global middleware
	next();
});


// Routes
router.route('/')
	.get(function(req, res) {
		res.render('index.html');
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


// Update


// Delete


// Testing

router.route('/testing')
	.all(function(req, res, next) {
	  // route-specific middleware
	  next();
	})
	.get(function(req, res, next) {
	  res.json({message: "success"});
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