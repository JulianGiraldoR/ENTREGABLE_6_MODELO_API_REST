const clientServices = require('../services/clients.service');

const getClients = (size) => new Promise((resolve, reject) => {
  try {
    let clients = [];
    clients = clientServices.readClients()
    if(size){
      resolve(clients.slice(0, size));
    }else{
      resolve( clients );
    }
  } catch (error) {
    reject({code: 500, message: "Error unexpected", log: error });
  }
});

const getClient = (id) => new Promise((resolve, reject) => {
  try {
    resolve( clientServices.readClient(id) );
  } catch (error) {
    reject( error );
  }
});

const postClient = (body) => new Promise((resolve, reject) => {
  try {
    resolve( clientServices.createClient(body) );
  } catch (error) {
    reject(error);
  }
});

const putClient = (clientID, body) => new Promise((resolve, reject) => {
  try {
    resolve( clientServices.updateClient(clientID, body) );
  } catch (error) {
    reject(error);
  }
});

const deleteClient = (id) => new Promise((resolve, reject) => {
  try {
    resolve( clientServices.deleteClient(id) );
  } catch (error) {
    reject(error);
  }
});

module.exports = {
  getClients,
  getClient,
  postClient,
  putClient,
  deleteClient
}
