import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemCount: 0,
  cartContent: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    plusItem(state) {
      state.itemCount += 1;
    },
    minusItem(state) {
      state.itemCount -= 1;
      if (state.itemCount < 0) state.itemCount = 0;
    },
    addToCart(state, action) {
      state.cartContent.push(action.payload.item);
      state.itemCount = action.payload.count;
    },
    setItemCount(state, action) {
      state.itemCount = action.payload;
    },
  },
});

export const { minusItem, plusItem, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
