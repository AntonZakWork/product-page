import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLightboxStatus, setLightboxIndex } from '../../../store/Slices/ItemSlice';
import Thumbnails from '../../Thumbnails/Thumbnails';
import './ItemPics.scss';

const ItemPics = () => {
  const { currentImgIndex, itemPictures, isLightboxOpen } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  return (
    <div className="itemPictures">
      <div className="largePicContainer">
        <img
          onClick={() => {
            if (!isLightboxOpen) {
              dispatch(changeLightboxStatus());
              dispatch(setLightboxIndex(currentImgIndex));
            }
          }}
          className="largePic"
          src={itemPictures[currentImgIndex]}
          alt=""
        />
      </div>

      <div className="thumbnailsContainer">
        <Thumbnails />
      </div>
    </div>
  );
};

export default ItemPics;
