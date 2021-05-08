// import mongoose and Schema
const mongoose, { Schema } = require('mongoose');

// create user schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

// create user model
const User = mongoose.model('User', userSchema);

module.exports = User;