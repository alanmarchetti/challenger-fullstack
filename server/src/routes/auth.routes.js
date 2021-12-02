const routes = require('express').Router();
const authController = require('../controller/auth.controller');

// criar um usuario
routes.post('/signup', authController.singup);

// logar um usuario
routes.post('/signin', authController.signin);

module.exports = routes;