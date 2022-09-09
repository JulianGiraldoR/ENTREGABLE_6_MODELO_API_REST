// CREACION MODELO BOOKS

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  Author: {
    type: String,
    required: true,
  },
  Tittle: {
    type: String,
    required: true,
  },
  yearPublication: {
    type: Date,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  ISBN: {
    type: Number,
    require: true
  }
})

module.exports = mongoose.model("Book", bookSchema);