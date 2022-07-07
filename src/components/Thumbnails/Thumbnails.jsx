import React from 'react';
import { useAppDispatch } from '../../Hooks/useTypedDispatch';
import { useTypedSelector } from '../../Hooks/useTypedSelector';
import { setCurrentImage, setLightboxIndex } from '../../store/Slices/ItemSlice';
import './Thumbnails.scss';
const Thumbnails = () => {
  const { itemThumbnails, currentImgIndex, isLightboxOpen, currentLightboxImgIndex } =
    useTypedSelector((state) => state.item);
  const dispatch = useAppDispatch();
  return (
    <>
      {itemThumbnails.map((el, index) => (
        <div
          key={index}
          onClick={() => {
            isLightboxOpen ? dispatch(setLightboxIndex(index)) : dispatch(setCurrentImage(index));
          }}
          className={
            isLightboxOpen
              ? currentLightboxImgIndex === index
                ? 'thumbnail active'
                : 'thumbnail'
              : currentImgIndex === index
              ? 'thumbnail active'
              : 'thumbnail'
          }>
          <img src={el} alt="" />
        </div>
      ))}
    </>
  );
};

export default Thumbnails;
