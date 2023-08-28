const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  participants: {
    type: Number,
    required: true,
  },
  themeskind: {
    type: Number,
    required: true
  },
  themescontent: {
    type: String,
    required: true
  },
  date: {
    type: Date,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
    required: true
  },
  volun_id : {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false
  },
  elder_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false
  }
});

module.exports = mongoose.model('Post', PostSchema);
