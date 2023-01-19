const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    email: {
        type: String,
        unique: true
    },
    name: String,
    password: String,
    // registerDate: Date,
    numberOfPosts: Number,
    numberOfLikes: Number,
    numberOfFriends: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;