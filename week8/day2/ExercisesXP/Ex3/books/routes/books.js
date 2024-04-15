const express = require('express');
const router = express.Router();

const books = [];

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  books[id] = updatedBook;
  res.json(updatedBook);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  books.splice(id, 1);
  res.sendStatus(204);
});

module.exports = router;
