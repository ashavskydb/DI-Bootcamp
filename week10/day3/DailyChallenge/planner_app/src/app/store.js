import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/reducers';

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
});

export default store;
