
const { Post } = require('../models/posts.models');




const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.query();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await Post.query().findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'not found' });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createPost = async (req, res) => {
    try {
        const post = await Post.query().insert(req.body);
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updatePost = async (req, res) => {
    try {
        await Post.query().findById(req.params.id).patch(req.body);
        res.sendStatus(204);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deletePost = async (req, res) => {
    try {
        await Post.query().findById(req.params.id).delete();
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
