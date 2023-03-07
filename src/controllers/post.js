const { getAllPosts } = require('../services/post.service');

const getPosts = async (_req, res) => {
    const posts = await getAllPosts();
    return res.status(200).json(posts); 
};

module.exports = { getPosts };