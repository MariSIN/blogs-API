const express = require('express');
const { validateToken } = require('../middlewares/token');
const postController = require('../controllers/post');

const router = express.Router();

router.post('/', validateToken, postController.insertPost);
router.get('/', validateToken, postController.getPosts);
router.get('/:id', validateToken, postController.getById);

module.exports = router;
