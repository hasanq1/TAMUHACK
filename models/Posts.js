const mongoose = require('mongoose');


const UserPost = new mongoose.Schema({
    Post: {
        type: String,
        required: true
    },
    Title: {
        type: String,
    },
    Description: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

const Posts = mongoose.model('Posts', UserPost);

module.exports = Posts;
