const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const SupportSchema = new mongoose.Schema({
 supporter_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false
 },
 supporter_name: {
  type: String,
  required: false,
 },
 supporter_email: {
  type: String,
 },
  content: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Support', SupportSchema);
