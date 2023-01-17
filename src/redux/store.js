import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice.js';
import cart from './slices/cartSlice.js';
import sneaker from './slices/sneakerSlice.js';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    sneaker,
  },
});
