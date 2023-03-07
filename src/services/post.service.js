const { BlogPost, User, Category } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
  return posts;
};

const getPostById = async (id) => {
    const postsById = await BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    
    return postsById;
};

module.exports = { getAllPosts, getPostById };
