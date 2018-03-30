const axios = require('axios');

module.exports = {
    getInventory: (req, res, next) => {
        axios.get(`/api/inventory`).then(results => {
            console.log("It worked! Whohoo!");
            results
        ? res.status(200).json(results)
        : res.status(400).send("You're out of stock")
    })
        
    }
}