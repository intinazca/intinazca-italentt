'use strict'
//archivo de controlador de rutas, creamos las url

var express = require('express');
var usuariosController = require('../controlerusarios');
var router =  express.Router();

router.get('/test', usuariosController.test);
router.post('/guardar', usuariosController.guardarUsuario);

module.exports = router;