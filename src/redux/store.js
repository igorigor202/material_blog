import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice.js'; // название любое для импорта
import cart from './slices/cartSlice.js'; // название любое для импорта

export const store = configureStore({
  reducer: {
    filter, //название для слайса любое
    cart, //название для слайса любое
  },
});
