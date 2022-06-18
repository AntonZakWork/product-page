import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentImage } from '../../store/Slices/ItemSlice';
import './Thumbnails.scss';
const Thumbnails = () => {
  const { itemThumbnails, currentImgIndex } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  return (
    <>
      {itemThumbnails.map((el, index) => (
        <div
          key={index}
          onClick={() => dispatch(setCurrentImage(index))}
          className={currentImgIndex == index ? 'thumbnail active' : 'thumbnail'}>
          <img src={el} alt="" />
        </div>
      ))}
    </>
  );
};

export default Thumbnails;
