var express = require('express');
var router = express.Router();

const AutenticacionController = require('../controllers').autenticacion;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/registro', function (req, res) {
  const f={
    ff:'dddd',
    v:'dddd',
    s:'dddd',
    a:'dddd',
  }
  res.send(f);
});

router.post('/login', AutenticacionController.iniciarSesion);

module.exports = router;