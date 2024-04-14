const express = require('express');

const fetchPosts = require('./data/dataService');

const app = express();


app.get('/post', async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.json(posts);
        console.log('Data has been successfully retrieved and sent as a response.');
    }   catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
        console.error('Error fetching posts:', error);
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

