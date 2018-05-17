const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CheckInSchema = new Schema({
    tripNumber: String,
    seatNumber: String,
    userID: Number,
});

module.exports = mongoose.model('CheckIn', CheckInSchema);
