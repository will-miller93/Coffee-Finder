// Require the shops model
var db = require("../models");

// Routes
// ========
module.exports = function(app) {
    // GET route for getting all of the shops
    app.get("/api/shops/", function(req, res){
        db.shops
        .findAll({})
        .then(function(dbShops) {
            res.json(dbShops);
        });
    });
    // GET route for getting one specific shop (by shopId)
    app.get('api/shops/', function(req, res){
        console.log(req.params.shopId);
        db.shops
        .findOne({
            where: {
                shopId: req.params.shopId
            }
        })
        .then(function(dbShops){
            res.json(dbShops);
        });
    });
    // POST route for saving a new shop
    app.post("/api/shops/", function(req, res){
        console.log(req.body);
        db.shops
        .create(req.body)
        .then(function(dbShops){
            res.json(dbShops);
        });
    });
    // DELETE route for deleting a shop (will be deleting by id)
    // app.delete("/api/shops/:id", function(req, res){
    //     db.shops
    //     .destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //     .then(function(dbShops){
    //         res.json(dbShops);
    //     });
    // });
    // PUT route for updating shops (will be updating by id)
    // app.put("/api/shops", function(req, res){
    //     db.shops
    //     .update(req.body, {
    //         where: {
    //             shopId: req.params.shopId
    //         }
    //     })
    //     .then(function(dbShops){
    //         res.json(dbShops);
    //     });
    // });
    // ALT Put Request
    // app.put('/api/shops/', function(req, res){
    //     db.shops
    //     .findOne({
    //         where: {
    //             shopId: req.params.shopId
    //         }
    //     })
    //     .then(foundShop => {
    //         foundShop.update(req.body)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         console.log('there was an error in updating.');
    //     })
    // })
    app.put('/api/shops/', function(req, res){
        console.log(req.body);
        console.log(req.params);
        db.shops
        .update(req.body, {
            where: {
                shopId: req.body.shopId
            }
        })
        .then(function(dbShops){
            res.json(dbShops);
        })
        .catch(function(err){
            console.log(err);
            console.log('there was an error updating database');
        })
    })
};