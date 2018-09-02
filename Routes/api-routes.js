// Require the shops model
var db = require("../models");

// Routes
// ========
module.exports = function(app) {
    // GET route for getting all of the shops
    app.get("/api/shops/", function(req, res){
        db.Shops.findAll({})
        .then(function(dbShops) {
            res.json(dbShops);
        });
    });
    // POST route for saving a new shop
    app.post("/api/shops", function(req, res){
        console.log(req.body);
        db.Shops.create({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            hours: req.body.hours,
            roaster: req.body.roaster
        })
        .then(function(dbShops){
            res.json(dbShops);
        });
    });
    // DELETE route for deleting a shop (will be deleting by id)
    app.delete("/api/shops/:id", function(req, res){
        db.Shops.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbShops){
            res.json(dbShops);
        });
    });
    // PUT route for updating shops (will be updating by id)
    app.put("/api/shops", function(req, res){
        db.Shops.update(req.body, {
            where: {
                id: req.body.id
            }
        })
        .then(function(dbShops){
            res.json(dbShops);
        });
    });
};