import { createSlice } from '@reduxjs/toolkit';
import item1 from '../../assets/image-product-1.jpg';
import item2 from '../../assets/image-product-2.jpg';
import item3 from '../../assets/image-product-3.jpg';
import item4 from '../../assets/image-product-4.jpg';
import thumbnail1 from '../../assets/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/image-product-4-thumbnail.jpg';
const initialState = {
  itemPictures: [item1, item2, item3, item4],
  itemThumbnails: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
  currentImgIndex: 0,
  item: {
    companyName: 'SNEAKER COMPANY',
    itemName: 'Fall Limited Edition Sneakers',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: '$125.00',
    discount: '50%',
    previousPrice: '$250.00',
  },
  showPopupStatus: false,
};
export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setCurrentImage(state, action) {
      state.currentImgIndex = action.payload;
    },
    changePopupStatus(state) {
      state.showPopupStatus = !state.showPopupStatus;
    },
  },
});

export const { setCurrentImage, changePopupStatus } = itemSlice.actions;
export default itemSlice.reducer;
