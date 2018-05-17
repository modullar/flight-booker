const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    name: String,
    number: String
});

module.exports = mongoose.model('Trip', TripSchema);
