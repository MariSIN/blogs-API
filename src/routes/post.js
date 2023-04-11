const express = require('express');
const { validateToken } = require('../middlewares/token');
const { verifyPost } = require('../middlewares/post');
const postController = require('../controllers/post');

const router = express.Router();

router.post('/', validateToken, verifyPost, postController.insertPost);
router.get('/', validateToken, postController.getPosts);
router.get('/:id', validateToken, postController.getById);
router.put('/:id', validateToken, postController.update);

module.exports = router;
