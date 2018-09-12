///// DEPENDENCIES /////
var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var routes = require('./Routes/api-routes');

// Set up the Express App //
// ====================== //
var app = express()
var PORT = process.env.PORT || 3306;
app.use(cors());
// require models for sync
var db = require("./models");

// parse the application/ x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse the application/json
app.use(bodyParser.json());
app.use(express.static("client/build"));

// Routes //
routes(app);


// Syncing the sequelize models and then starting the express app //
// ============================================================== //
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});