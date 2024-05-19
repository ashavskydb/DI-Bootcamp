import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks, selectNovelBooks, selectPoetryBooks, selectDramaBooks } from '../features/booksSlice';

const BookList = () => {
  const [genre, setGenre] = useState('All');

  const books = useSelector(selectBooks);
  const novelBooks = useSelector(selectNovelBooks);
  const poetryBooks = useSelector(selectPoetryBooks);
  const dramaBooks = useSelector(selectDramaBooks);

  const getBooksByGenre = () => {
    switch (genre) {
      case 'Novel':
        return novelBooks;
      case 'Poetry':
        return poetryBooks;
      case 'Drama':
        return dramaBooks;
      default:
        return books;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setGenre('All')}>All</button>
        <button onClick={() => setGenre('Novel')}>Novel</button>
        <button onClick={() => setGenre('Poetry')}>Poetry</button>
        <button onClick={() => setGenre('Drama')}>Drama</button>
      </div>
      <ul>
        {getBooksByGenre().map((book) => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
