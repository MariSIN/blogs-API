const express = require('express');

const categoryController = require('../controllers/categories');

const { validateToken } = require('../middlewares/token');

const router = express.Router();

router.post('/', validateToken, categoryController.addCategory);
router.get('/', validateToken, categoryController.getAllCategories);

module.exports = router;