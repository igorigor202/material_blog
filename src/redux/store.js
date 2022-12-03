import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice.js'; // название любое для импорта

export const store = configureStore({
  reducer: {
    filter, //можно просто counterReducer и соотственнно в App.js
  },
});
