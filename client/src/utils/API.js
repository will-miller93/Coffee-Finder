import axios from 'axios';

// write the methods for axios. these can be used in the react elements
// to get to end points that will connect with express routes.
export default {
    // get all shops
    getShops: function() {
        return axios.get('http://localhost:3306/api/shops');
    },
    // get one shop by id
    getOneShop: function(shopId) {
        console.log(shopId);
        return axios.get('http://localhost:3306/api/shops/' + shopId);
    },
    // add new shop to database
    addShop: function(shopData) {
        return axios.post('http://localhost:3306/api/shops', shopData);
    },
    // update shop by id
    updateShop: function(body) {
        return axios.put('http://localhost:3306/api/shops/', body);
    },
    // delete shop by id
    // deleteShop: function(id) {
    //     return axios.delete('/api/shops/' + id);
    // }
};