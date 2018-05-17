const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeatSchema = new Schema({
  cost: Number,
  number: Number
});

module.exports = mongoose.model('Seat', seatNumber);
