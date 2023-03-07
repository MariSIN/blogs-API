const express = require('express');
const userController = require('../controllers/user');
const validateUser = require('../middlewares/user');
const { validateToken } = require('../middlewares/token');

const userRouter = express.Router();

userRouter.post('/', 
validateUser.validateEmail,
 validateUser.validateName, 
 validateUser.validatePassword,
 userController.addUser);

 userRouter.get('/', validateToken, userController.getUsers);

 userRouter.get('/:id', validateUser.validateUserId, validateToken, userController.getById);

module.exports = userRouter;