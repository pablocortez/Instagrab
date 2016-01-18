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
ig.use({
	client_id: '07545cf03ddf4b13bb6d40326761eb7c'.
	client_secret: 'b948b6b104604b71ba7ce452f7a0b054';
})

// SET THE ROUTES
// home page route - popular images
app.get('/', function(req, res) {
	
	// use the instagram package to get popular media
	ig.media_popular(function(err, medias, remaining, limit) {
		res.render('pages/index', { grams: medias});
	});


});

// START THE SERVER
app.listen(8080);
console.log('Server started at http://localhost:8080');