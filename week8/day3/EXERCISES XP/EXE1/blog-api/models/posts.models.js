const { knex } = require('../config/data');

const Post = {
    getAllPosts: async () => {
        try {
            return await knex('posts').select('*');
        } catch (error) {
            throw new Error(`Error fetching posts: ${error}`);
        }
    },

    getPostById: async (id) => {
        try {
            const [post] = await knex('posts').where({ id }).select('*');
            return post;
        } catch (error) {
            throw new Error(`Error fetching post with id ${id}: ${error}`);
        }
    },

    createPost: async (newPost) => {
        try {
            const [createdPost] = await knex('posts').insert(newPost).returning('*');
            return createdPost;
        } catch (error) {
            throw new Error(`Error creating post: ${error}`);
        }
    },

    updatePost: async (id, updatedPost) => {
        try {
            await knex('posts').where({ id }).update(updatedPost);
            return true;
        } catch (error) {
            throw new Error(`Error updating post with id ${id}: ${error}`);
        }
    },

    deletePost: async (id) => {
        try {
            await knex('posts').where({ id }).del();
            return true;
        } catch (error) {
            throw new Error(`Error deleting post with id ${id}: ${error}`);
        }
    }
};

module.exports = { Post };

