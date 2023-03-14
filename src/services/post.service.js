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
    const postsById = await BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    return postsById;
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

module.exports = { getAllPosts, getPostById, createPost };
