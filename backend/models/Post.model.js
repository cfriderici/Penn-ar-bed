const mongoose = require('mongoose');

const bottlepostSchema = new mongoose.Schema({
    id: String,
    place: String,
    date: Date,
    title: String,
    text: String,
    edited: Date,
    share: String,
    comments: String,
    likes: String, 
    star: Boolean
  });
  
  const Bottlepost = mongoose.model("bottlepost", bottlepostSchema);

  module.exports = Bottlepost;