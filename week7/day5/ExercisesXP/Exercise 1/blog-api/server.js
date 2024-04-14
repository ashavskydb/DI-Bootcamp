
const express = require('express');

const app = express();
const PORT = 3000;

let data = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];
app.use(express.json());

app.get('/posts', (req, res) => {
  res.json(data);
});

app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = data.find(post => post.id === postId);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json(post);
});


app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: data.length + 1, title, content };
  data.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  let post = data.find(post => post.id === postId);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  post.title = title;
  post.content = content;
  res.json(post);
});


app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const index = data.findIndex(post => post.id === postId);
  if (index === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }
  data.splice(index, 1);
  res.sendStatus(204);
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
