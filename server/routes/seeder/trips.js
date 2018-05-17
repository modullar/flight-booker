const express = require('express');
const router = express.Router();
const faker = require('faker');
const Trip = require('../../models/Trip');

router.get('/', function (req, res, next) {
    const trips = ["Berlin-Rome", "London-Chicago"];
    for (let i = 0; i < trips.length; i++) {
        let trip = new Trip({
            name: trips[i]
        });
        trip.save();
    }

    res.redirect('/')
});


module.exports = router;
