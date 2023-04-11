const { getCategoryById } = require('../services/categories.service');

const verifyPost = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;

    if (!title || !content || !categoryIds) {
        return res
            .status(400)
            .json({ message: 'Some required fields are missing' });
    }
    const findCategory = await getCategoryById(categoryIds);

    if (findCategory.includes(null)) {
        return res.status(400).json({
            message: 'one or more "categoryIds" not found',
        });
    }
    next();
};

module.exports = { verifyPost };
