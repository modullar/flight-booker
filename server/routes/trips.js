const express = require('express');
const router = express.Router();

const Trip = require('../models/Trip');

router.get('/', function (req, res, next) {
  let perPage = 3;
  let page = parseInt(req.query.page) || 0;
  let pages = 0;
  let nextUrl = '';
  let prevUrl = '';
  Trip.count().exec(function (err, count) {
    Trip.find()
      .limit(perPage)
      .skip(perPage * page)
      .exec(function (err, trips) {
        pages = Math.floor(count / perPage);
        if (page === 0) {
          res.json({
            trips,
            currentPage: page,
            pages,
            count,
            prevUrl: ``,
            nextUrl: `http://localhost:3000/trips?page=${page + 1}`
          })

        } else if (page === pages - 1) {
          res.json({
            trips: trips,
            currentPage: page,
            pages,
            count,
            prevUrl: `http://localhost:3000/trips?page=${page - 1}`,
            nextUrl: ``
          })
        } else if (page > 0 && page < pages) {
          res.json({
            trips: trips,
            currentPage: page,
            pages,
            count,
            prevUrl: `http://localhost:3000/trips?page=${page - 1}`,
            nextUrl: `http://localhost:3000/trips?page=${page + 1}`
          })
        }else {
          res.redirect('/trips')
        }

      });
  });
});

router.get('/:id', function (req, res, next) {
  Trip.findById(req.params.id, function (err, trip) {
    if (err) return console.log(err);
    res.status(200).json(trip);
  })
});

module.exports = router;
