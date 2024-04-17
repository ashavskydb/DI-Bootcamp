const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);


app.use((req, res) => {
    res.status(404).json({ message: 'source not found' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'error.message' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// const postsRouter = require('./routes/posts');
// app.use('/posts', postsRouter);

