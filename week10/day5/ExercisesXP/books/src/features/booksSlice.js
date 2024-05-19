import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'Doctor Zhivago', author: 'Boris Pasternak', genre: 'Novel' },
    { id: 2, title: 'The Master and Margarita', author: 'Mikhail Bulgakov', genre: 'Novel' },
    { id: 3, title: 'Poems About the Beautiful Lady', author: 'Alexander Blok', genre: 'Poetry' },
    { id: 4, title: 'Petersburg', author: 'Andrei Bely', genre: 'Novel' },
    { id: 5, title: 'The Silver Dove', author: 'Andrei Bely', genre: 'Novel' },
    { id: 6, title: 'The Song of Hiawatha', author: 'Valery Bryusov', genre: 'Poetry' },
    { id: 7, title: 'Petrograd Dreams', author: 'Anna Akhmatova', genre: 'Poetry' },
    { id: 8, title: 'Three Sisters', author: 'Anton Chekhov', genre: 'Drama' },
    { id: 9, title: 'My Poems', author: 'Marina Tsvetaeva', genre: 'Poetry' },
    { id: 10, title: 'My Sister - Life', author: 'Boris Pasternak', genre: 'Poetry' }
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

export const selectBooks = (state) => state.books.books;

export const selectNovelBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Novel')
);

export const selectPoetryBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Poetry')
);

export const selectDramaBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Drama')
);

export default booksSlice.reducer;
