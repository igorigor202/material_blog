import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: 'rating',
};

export const filterSlice = createSlice({
  name: 'changeCategory', //название склада
  initialState, //начальное состояние (аналог useState)
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { setCategoryId, setSortType } = filterSlice.actions; // экспортируем все экшены выше

export default filterSlice.reducer; //reducer - функция
