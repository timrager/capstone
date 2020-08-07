const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    streetAddress: String,
    city: String,
    state: String,
    zip: String, 
    phone: String,
    roomId: String,
    reserveStartDate: String,
    reserveEndDate: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;