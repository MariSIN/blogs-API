const {
    getAllPosts,
    getPostById,
    createPost,
} = require('../services/post.service');

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
    const { userId } = req.userToken;

    const post = await createPost(req.body, userId);

    return res.status(201).json(post);
};

module.exports = { getPosts, getById, insertPost };
