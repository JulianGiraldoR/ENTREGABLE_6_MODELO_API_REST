const express = require('express');

const usersRouters = require('./users.router');
const booksRouters = require('./books.router');
const clientsRouters = require('./clients.router');
const storesRouters = require('./stores.router');


function routerApi(app){
  const router = express.Router();
  app.use("", router);
  router.use('/users', usersRouters);
  router.use('/books', booksRouters);
  router.use('/clients', clientsRouters);
  router.use('/stores', storesRouters);
};

module.exports = routerApi;
