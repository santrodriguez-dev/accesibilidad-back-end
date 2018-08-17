var express = require('express');
var router = express.Router();

//Controladores
const AutenticacionController = require('../controllers').autenticacion;

/* GET users listing. */
router.post('/', AutenticacionController.iniciarSesion);

module.exports = router;
