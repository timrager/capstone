const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomId: String,
    roomName: String
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;