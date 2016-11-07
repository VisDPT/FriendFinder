// Your api-routes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


var friendsList = require('../data/friend.js');


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
    // API GET Requests

    app.get('/api/friend', function(req, res) {
        res.json(friendsList);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate Javascript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post('/api/friend', function(req, res) {

        friendsList.push(req.body);
        res.json(true);
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out form

    app.post('/api/clear', function() {
        // Empty out the arrays of data
        friendsList = [];

        console.log(friendsList);
    });
};