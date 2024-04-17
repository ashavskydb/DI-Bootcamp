
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'your_username',
        password: 'your_password',
        database: 'your_database'
    }
});

const getAllBooks = async (req, res) => {
    try {
    
        const books = await db.select('*').from('books');
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await db.select('*').from('books').where({ id }).first();
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBook = async (req, res) => {
    const { title, author, publishedYear } = req.body;
    try {
        
        const [newBookId] = await db('books').insert({ title, author, publishedYear }).returning('id');
        const newBook = { id: newBookId, title, author, publishedYear };
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook
};
