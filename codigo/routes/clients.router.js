const express = require('express');
const response = require('../lib/response-message');
const log = require('../lib/log-messages');

const clientController = require('../controllers/clients.controller');

const router = express.Router();



router.get('', (req, res) => {
  const { size } = req.query;
  clientController.getClients(size)
    .then( clients => {
      response(res, {code: 200, key: "clients", payload: clients})
    })
    .catch(error => {
      log.logError(error.log);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.get('/:id', (req, res) =>{
  const { id } = req.params;
  clientController.getClient(id)
    .then( client => {
      response(res, {code: 200, key: "client", payload: client})
    })
    .catch(error => {
      log.logError(error.log);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.post('', (req, res) => {
  const { body } = req;
  clientController.postClient(body)
    .then( result => {
      response(res, { code: result.code, key: "message", payload: result.message});
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.put('/:clientID', (req, res) => {
  const { clientID } = req.params;
  const { body } = req;
  clientController.putClient(clientID, body)
    .then(result => {
      response(res, {code: result.code, key: "message", payload: result.message})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  clientController.deleteClient(id)
    .then(result => {
      response(res, {code: result.code, key: "message", payload: result.message})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    })
});

module.exports = router;