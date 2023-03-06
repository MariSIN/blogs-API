const express = require('express');

const validateLogin = require('../middlewares/login');

const loginController = require('../controllers/login');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin.validateLogin, loginController.validLogin);

module.exports = loginRouter;
