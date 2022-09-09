//CRUD MODELO CLIENTS


const clientSchema = require('../models/clients.model');

const readClients = () => new Promise((resolve, reject) => {
  clientSchema.find()
    .then((clients) => resolve( clients ))
    .catch((error) => reject({code: 500, message: error}))
});

const readClient = (id) => new Promise((resolve , reject) => {
  clientSchema.findById(id)
    .then((client) => resolve(client))
    .catch((error) => reject({code: 500, message: error}) );
});

const createClient = (client) => new Promise((resolve, reject) => {
  const clientDB = clientSchema(client);
  clientDB.save()
    .then(() => resolve({code: 201, message: "Client created successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const updateClient = (id, client) => new Promise((resolve , reject) => {
  clientSchema.findByIdAndUpdate(id, client)
    .then(() => resolve({code: 201, message: "Client updated successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const deleteClient = (id) => new Promise((resolve , reject) => {
  clientSchema.findByIdAndDelete(id)
    .then(() => resolve({code: 200, message: "Client deleted successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

module.exports = {
  readClients,
  readClient,
  createClient,
  updateClient,
  deleteClient
}