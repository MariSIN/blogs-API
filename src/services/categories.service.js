const { Category } = require('../models');

const createCategory = (name) => Category.create({ name });

const getCategory = () => Category.findAll();

const getCategoryById = async (catg) => {
    const arrayCategory = catg.map((id) => Category.findByPk(id));

    const resolve = await Promise.all(arrayCategory);

    return resolve;
};

module.exports = {
    createCategory,
    getCategory,
    getCategoryById,
};
