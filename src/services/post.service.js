const { Op } = require('sequelize');
const {
    BlogPost,
    User,
    Category,
    PostCategory,
    sequelize,
} = require('../models');

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
    const postId = await BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    return postId;
};

const createPost = async (req, userId) => {
    try {
        const result = await sequelize.transaction(async (t) => {
            const post = await BlogPost
            .create({ title: req.title,
                  content: req.content,
                  userId,
                  categoryIds: req.categoryIds,
                }, { transaction: t });
            const category = req.categoryIds.map(async (categoryId) =>
                PostCategory.create({ postId: post.id, categoryId }, { transaction: t }));
            await Promise.all(category);
            return post;
        });
        return result;
    } catch (err) {
        console.log(err);
    }
};

const updatePost = async (title, content, id) => {
    await BlogPost.update( 
        { title, content }, 
        { where: { id } },
    );  

    const result = await getPostById(id);

    return result;
};

const deletePost = async (id) => BlogPost.destroy(
        { where: { id } },
    );

const filterPost = async (searchTerm) => {
    const results = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
        where: {
            [Op.or]: [
                { title: { [Op.like]: `%${searchTerm}%` } },
                { content: { [Op.like]: `%${searchTerm}%` } },
            ],
        },
    });
    
        return results;
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost, filterPost };
