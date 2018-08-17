var express = require('express');
var router = express.Router();

//Controladores
const AutenticacionController = require('../controllers').autenticacion;

//Definición de servicios REST

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;