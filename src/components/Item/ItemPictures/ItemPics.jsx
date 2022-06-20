import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeLightboxStatus,
  nextPicture,
  prevPicture,
  setLightboxIndex,
} from '../../../store/Slices/ItemSlice';
import Thumbnails from '../../Thumbnails/Thumbnails';
import './ItemPics.scss';

const ItemPics = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { currentImgIndex, itemPictures, isLightboxOpen } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  return (
    <div className="itemPictures">
      <div className="largePicContainer">
        {width < 750 && (
          <span className="prev" onClick={() => dispatch(prevPicture())}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        )}

        <img
          onClick={() => {
            if (!isLightboxOpen && window.innerWidth > 750) {
              dispatch(changeLightboxStatus());
              dispatch(setLightboxIndex(currentImgIndex));
            }
          }}
          className="largePic"
          src={itemPictures[currentImgIndex]}
          alt=""
        />
        {width < 750 && (
          <span
            className="next"
            onDoubleClick={(e) => e.preventDefault}
            onClick={() => dispatch(nextPicture())}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        )}
      </div>

      <div className="thumbnailsContainer">
        <Thumbnails />
      </div>
    </div>
  );
};

export default ItemPics;
