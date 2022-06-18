import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Slices/CartSlice';
import itemSlice from './Slices/ItemSlice';

export const store = configureStore({
  reducer: {
    item: itemSlice,
    cart: cartSlice,
  },
});
