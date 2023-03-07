const express = require('express');

const LoginRouter = require('./login');
const UserRouter = require('./user');

const router = express.Router();

router.use('/login', LoginRouter);
router.use('/user', UserRouter);

module.exports = router;