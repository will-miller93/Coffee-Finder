// requiring MySql
const mySql = require('mysql');

// Establishing a variable for Connection
var connection;

// Connect with either JawsDB with Heroku or with Local Credentials.
if (process.env.JAWSDB_URL) {
    connection = mySql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mySql.createConnection({
        // personal credentials here
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'CoffeeShops_DB'
    });
};

// make the connection here.
connection.connect(function(err){
    if (err) throw err;
    // console log when connected for confirmation.
    console.log('Connected as ID ' + connection.threadId + '\n');
});

// Error handling for connection
connection.on('error', function(err){
    console.log("[mysql err]", err);
});

// Export this file
module.exports = connection;