const express = require('express');
const userController = require('../controllers/user');
const validateUser = require('../middlewares/user');
const { validateToken } = require('../middlewares/token');

const router = express.Router();

router.post('/', 
validateUser.validateEmail,
 validateUser.validateName, 
 validateUser.validatePassword,
 userController.addUser);

 router.get('/', validateToken, userController.getUsers);
 router.get('/:id', validateToken, userController.getById);
 router.delete('/me', validateToken, userController.remove);

module.exports = router;