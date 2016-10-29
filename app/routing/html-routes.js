// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var path = require('path');
var express = require('express');
var app = express();

// ==============================================================================
// ROUTING 
// ==============================================================================

//app.use('/static', express.static('public'));
module.exports = function(app) {
    // app.use('/static', express.static(__dirname + '/public'));


    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------


    app.get('/survey', function(req, res) {
    	//res.json("helloworld");
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
        // if (err) throw err;
        // console.log(err);
    });

    // // If no matching route is found default to home
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

};
