const router = require('express').Router();

const userController = require("../controllers/userController");
const organizadorController = require("../controllers/organizadorController");
const eventoController = require("../controllers/eventoController");
const ingressoController = require("../controllers/ingressoController");

// Rotas userController
router.post('/user', userController.createUser);
router.get('/user', userController.getAllUsers);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

// Rotas organizadorController
router.post('/organizador', organizadorController.createOrganizador);
router.get('/organizador', organizadorController.getAllOrganizador);
router.put('/organizador', organizadorController.updateOrganizador);
router.delete('/organizador/:id', organizadorController.deleteOrganizador);

// Rotas eventoController
router.post('/evento', eventoController.createEvento);
router.get('/evento', eventoController.getAllEventos);
router.put('/evento', eventoController.updateEvento);
router.delete('/evento/:id', eventoController.deleteEvento);

// Rotas ingressoController
router.post('/ingresso', ingressoController.createIngresso);
router.get('/ingresso', ingressoController.getAllIngressos);
router.put('/ingresso', ingressoController.updateIngresso);
router.delete('/ingresso/:id', ingressoController.deleteIngresso);

module.exports = router;