const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const MsgSchema = new mongoose.Schema({
  post_id: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: false
  },
  
  from : {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false
  },
  content: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Msg', MsgSchema);
