import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counterValue: 0,
  itemCount: 0,
  cartContent: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    plusItem(state) {
      state.counterValue += 1;
    },
    minusItem(state) {
      state.counterValue -= 1;
      if (state.counterValue < 0) state.counterValue = 0;
    },
    addToCart(state, action) {
      const findItem = state.cartContent.find((el) => el.itemName === action.payload.itemName);
      if (findItem) {
        findItem.counterValue += state.counterValue;
      } else {
        state.cartContent.push(action.payload);
      }
      state.itemCount += state.counterValue;
      state.counterValue = 0;
    },
    deleteItem(state, action) {
      const findItem = state.cartContent.find((el) => el.itemName === action.payload);
      state.itemCount -= findItem.counterValue;
      state.cartContent = state.cartContent.filter((el) => el.itemName !== action.payload);
    },
  },
});

export const { minusItem, plusItem, addToCart, resetCounterValue, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
