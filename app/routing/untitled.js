// Create an Node MySQL application with an ORM that executes once the server is launched.

// You will not need Express or Handlebars for this assignment. Use console.log to print the data collected to the console.
// Create a MySQL database with the tables and data which were slacked out to you

// Create a Node app and connect it to MySQL with a 'config' dir and with a 'connection.js' file inside of that directory

// Create an 'orm.js' file and make an ORM that will...

// Find all parties, ordering them by party cost
// Find parties by the name of the party
// Find the client with the most parties
// BONUS: create a function within your ORM that will let the user add more clients and parties to the database.

var mysql = require('mysql');
var orm = require('./config/orm.js');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'uma1234',
	database: 'quotes_db'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});
