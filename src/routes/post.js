const express = require('express');
const { validateToken } = require('../middlewares/token');
const postController = require('../controllers/post');

const router = express.Router();

router.get('/', validateToken, postController.getPosts);

module.exports = router;
