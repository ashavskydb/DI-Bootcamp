import { configureStore } from '@reduxjs/toolkit';
import ageReducer from '../features/ageSlice';

const store = configureStore({
  reducer: {
    age: ageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
