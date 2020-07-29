const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    reserveStartDate: Date,
    reserveEndDate: Date
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;