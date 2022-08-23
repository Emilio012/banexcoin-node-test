// CONTROLLER
const clientesController = require('../controllers/clientes');
// END OF CONTROLLER


// PACKAGES
const express = require('express');
const router = express.Router();
//  END OF PACKAGES


// ROUTES
router.get('/api/v1/clientes', clientesController.list);
router.post('/api/v1/clientes/registro', clientesController.create);
router.get('/api/v1/clientes/:id', clientesController.info);
router.put('/api/v1/clientes/:id', clientesController.update);
// END OF ROUTES


module.exports = router;