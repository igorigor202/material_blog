import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  status: 'loading', //loading | success | error
};

export const fetchSneakers = createAsyncThunk(
  'sneaker/fetchSneakersStatus',
  async (params, thunkApi) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://62fafe68abd610251c00224e.mockapi.io/posts?p=${currentPage}&l=5&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    console.log(thunkApi);
    return data;
  },
);

export const sneakerSlice = createSlice({
  name: 'sneaker',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: {
    [fetchSneakers.pending]: (state) => {
      state.status = 'loading';
      state.posts = [];
    },
    [fetchSneakers.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = 'success';
    },
    [fetchSneakers.rejected]: (state, action) => {
      state.status = 'error';
      state.posts = [];
    },
  },
});

export const { setPosts } = sneakerSlice.actions; // экспортируем все экшены выше

export default sneakerSlice.reducer;
