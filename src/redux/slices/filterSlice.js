import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: 'rating',
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'changeCategory',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.sortType = action.payload.sortType;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, setSortType, setCurrentPage, setFilters } = filterSlice.actions; // экспортируем все экшены выше

export default filterSlice.reducer;
