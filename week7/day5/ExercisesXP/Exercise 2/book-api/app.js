const express = require('express');
const app = express();

let books = [
    { id: 1, title: 'The Book 1', author: "Author 1", publishedYear: 2000 },
    { id: 2, title: 'The Book 2', author: "Author 2", publishedYear: 2001 },
    { id: 3, title: 'The Book 3', author: "Author 3", publishedYear: 2002 },
    { id: 4, title: 'The Book 4', author: "Author 4", publishedYear: 2003 },
];

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const { id } = req.params;
    const book = books.find((item) => item.id === id);

    if (!book) {
        return res.status(404).send("book not found");
    } else {
    res.status(200).json(book);
}
});

app.use(express.json());

app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
    const id = books.length + 1;
    const newBook = { id, title, author, publishedYear };
    books.push(newBook);
    res.status(201).json(newBook);
});