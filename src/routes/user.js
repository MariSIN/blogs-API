const express = require('express');
const userController = require('../controllers/user');
const validateUser = require('../middlewares/user');

const userRouter = express.Router();

userRouter.post('/', 
validateUser.validateEmail,
 validateUser.validateName, 
 validateUser.validatePassword,
 userController.addUser);

module.exports = userRouter;