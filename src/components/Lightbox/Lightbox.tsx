import React from 'react';
import './Lightbox.scss';
import { changeLightboxStatus, nextPicture, prevPicture } from '../../store/Slices/ItemSlice';
import Thumbnails from '../Thumbnails/Thumbnails';
import { useTypedSelector } from '../../Hooks/useTypedSelector';
import { useAppDispatch } from '../../Hooks/useTypedDispatch';
const Lightbox = () => {
  const { currentLightboxImgIndex, itemPictures, isLightboxOpen } = useTypedSelector(
    (state) => state.item,
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="modal">
        <div className="itemContainer"></div>
        <div className="itemPictures">
          <div className="largePicContainer">
            <span
              className="prev"
              onDoubleClick={(e: React.MouseEvent) => e.preventDefault}
              onClick={() => dispatch(prevPicture())}>
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </span>
            <div
              onClick={() => {
                dispatch(changeLightboxStatus());
              }}
              className="closeIcon">
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#fff"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <img
              onClick={() => {
                !isLightboxOpen && dispatch(changeLightboxStatus());
              }}
              className="largePic"
              src={itemPictures[currentLightboxImgIndex]}
              alt=""
            />
            <span
              className="next"
              onDoubleClick={(e: React.MouseEvent) => e.preventDefault}
              onClick={() => dispatch(nextPicture())}>
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </div>

          <div className="thumbnailsContainer">
            <Thumbnails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lightbox;
