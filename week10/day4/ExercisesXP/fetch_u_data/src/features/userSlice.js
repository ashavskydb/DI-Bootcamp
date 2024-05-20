
import { createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    fetchUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;

export const fetchUser = () => async (dispatch) => {
  dispatch(fetchUserStart());
  try {
    const response = await fetch(API_URL);
    const contentType = response.headers.get('content-type');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError(`Expected JSON, got ${contentType}`);
    }

    const data = await response.json();
    dispatch(fetchUserSuccess(data));
  } catch (error) {
    dispatch(fetchUserFailure(error.toString()));
  }
};

export default userSlice.reducer;
