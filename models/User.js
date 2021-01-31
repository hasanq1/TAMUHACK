const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'Sales Admin',
    enum: ["Admin", "HR Admin", "Finance Admin","Tech Admin","Sales Admin"]
   },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

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

const User = mongoose.model('User', UserSchema);

module.exports = User;
