const {
    getAllPosts,
    getPostById,
    createPost,
} = require('../services/post.service');
const { getCategoryById } = require('../services/categories.service');

const getPosts = async (_req, res) => {
    const posts = await getAllPosts();
    return res.status(200).json(posts);
};
const getById = async (req, res) => {
    const { id } = req.params;

    const postId = await getPostById(id);

    if (!postId) {
        return res.status(404).json({
            message: 'Post does not exist',
        });
    }

    return res.status(200).json(postId);
};

const insertPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { userId } = req.userToken;
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

    const post = await createPost(req.body, userId);

    return res.status(201).json(post);
};

module.exports = { getPosts, getById, insertPost };
