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


// DB Connection
mongoose.connect(process.env.MONGO_URL);


// Middleware
router.use(function(req, res, next) {
	// global middleware
	next();
});


// Routes
router.route('/')
	.get(function(req, res) {
		res.json({message: 'hooray! welcome to our api!'});
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


// No Valid Routes Left
router.route('*')
	.get(function(req, res){
		res.send(404);
	});

var port = Number(process.env.PORT || 5000);
var server = app.listen(port, function() {
    console.log('API available at: http://localhost:%d/api/%s/', port, version);
});