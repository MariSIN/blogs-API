const express = require('express');

const LoginRouter = require('./login');
const UserRouter = require('./user');
const categoriesRouter = require('./categories');
const postsRouter = require('./post');

const router = express.Router();

router.use('/login', LoginRouter);
router.use('/user', UserRouter);
router.use('/categories', categoriesRouter);
router.use('/post', postsRouter);

module.exports = router;