// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION: This sets up the basic properties for our express server 
// ==============================================================================
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);
     app.use('/static', express.static(__dirname+'/app/public'));


// ==============================================================================
// LISTENER
// The below code effectively "starts" our server 
// ==============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
