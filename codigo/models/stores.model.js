//CREACION DE MODELO STORES

const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  manager: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model("Store", storeSchema);