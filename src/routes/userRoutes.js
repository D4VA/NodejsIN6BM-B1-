'use strict'

var express = require('express')
var UserController = require('../controllers/userController')

//RUTAS

var api = express.Router()
api.post('/registrar', UserController.register);

module.exports = api;

