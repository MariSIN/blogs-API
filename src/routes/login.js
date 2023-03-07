const express = require('express');

const validateLogin = require('../middlewares/login');

const loginController = require('../controllers/login');

const router = express.Router();

router.post('/', validateLogin.validateLogin, loginController.validLogin);

module.exports = router;
