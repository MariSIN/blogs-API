const express = require('express');

const LoginRouter = require('./login');
const UserRouter = require('./user');
const categoriesRouter = require('./categories');

const router = express.Router();

router.use('/login', LoginRouter);
router.use('/user', UserRouter);
router.use('/categories', categoriesRouter);

module.exports = router;