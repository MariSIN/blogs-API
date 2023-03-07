const { createCategory, getCategory } = require('../services/categories.service');

const addCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            message: '"name" is required',
        });
    }

    const category = await createCategory(name);

    return res.status(201).json(category);
};

const getAllCategories = async (_req, res) => {
    const allCategories = await getCategory();

    return res.status(200).json(allCategories);
};

module.exports = {
    addCategory,
    getAllCategories,
};