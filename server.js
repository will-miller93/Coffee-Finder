///// DEPENDENCIES /////
var express = require("express");
var bodyParser = require("body-parser");

// Set up the Express App //
// ====================== //
var app = express();
var PORT = process.env.PORT || 3306;

// require models for sync
var db = require("./models");

// Set up the Express app and handle the DataParsing
// parse the application/ x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse the application/json
app.use(bodyParser.json());

// static directory
// this may be different with react.
// app.use(express.static("public"));

// Routes //
// ====== //
require("./routes/api-routes.js")(app);

// Syncing the sequelize models and then starting the express app //
// ============================================================== //
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});