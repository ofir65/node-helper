const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  level: {
    type: Number,
    default: 1,
    required: true
  },
  birthday: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
