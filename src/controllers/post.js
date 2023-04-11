const {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
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

const update = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const { userId } = req.userToken;

    const user = await getPostById(id);
 
    if (user.userId !== userId) {
         return res.status(401).json({ message: 'Unauthorized user' });
     }

    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    
    const result = await updatePost(title, content, id);

    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const { id } = req.params;
    const postId = await getPostById(id);

    const { userId } = req.userToken;
    
    if (!postId) {
        return res.status(404).json({
            message: 'Post does not exist',
        });
    }

    if (postId.userId !== userId) {
         return res.status(401).json({ message: 'Unauthorized user' });
     }

    await deletePost(id);
    return res.status(204).end();
};

module.exports = { getPosts, getById, insertPost, update, remove };
