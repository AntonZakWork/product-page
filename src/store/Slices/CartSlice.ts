import { CartState, ItemInCart } from './../../Types/CartTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
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
    addToCart(state, action: PayloadAction<ItemInCart>) {
      const findItem = state.cartContent.find((el) => el.itemName === action.payload.itemName);
      if (findItem) {
        findItem.counterValue += state.counterValue;
      } else {
        state.cartContent.push(action.payload);
      }
      state.itemCount += state.counterValue;
      state.counterValue = 0;
    },
    deleteItem(state, action: PayloadAction<string>) {
      const findItem = state.cartContent.find((el) => el.itemName === action.payload);
      if(findItem) {
        state.itemCount -= findItem.counterValue;
        state.cartContent = state.cartContent.filter((el) => el.itemName !== action.payload);
      }
     
    },
  },
});

export const { minusItem, plusItem, addToCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
