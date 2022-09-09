//CREACION DEL MODELO CLIENTS

const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  identificationCard: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  }
  
})

module.exports = mongoose.model("Client", clientSchema);