/*
TODO in this file: 
	-Configure these packages
		- Set instagram API key
		- Set EJS as our templating engine
		- Set Express assets directory (for CSS)

	-Create route for the homepage
		- Grab Instagram popular images
		- Pass to our views

	-Start the server	
*/

// Grab the packages we need

var express = require('express');
var app		= express();
var ig 		= require('instagram-node').instagram();

// Configure the app -- tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set view engine to ejs
app.set('view engine', 'ejs');

// configure instagram app with client-id

// SET THE ROUTES
app.get('/', function(req, res) {
	res.render('pages/index');
});

// START THE SERVER
app.listen(8080);
console.log('Server started at http://localhost:8080');