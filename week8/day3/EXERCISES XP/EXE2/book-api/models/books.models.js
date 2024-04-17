
let books = [
    { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2020 },
    { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2019 },
    { id: 3, title: 'Book 3', author: 'Author 3', publishedYear: 2018 }
];


const getAllBooks = () => {
    return books;
};


const getBookById = (bookId) => {
    return books.find(book => book.id === bookId);
};


const createBook = (title, author, publishedYear) => {
    const id = books.length + 1;
    const newBook = { id, title, author, publishedYear };
    books.push(newBook);
    return newBook;
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook
};
