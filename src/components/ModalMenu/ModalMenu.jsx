import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalMenu } from '../../store/Slices/ItemSlice';
import './ModalMenu.scss';
const ModalMenu = () => {
  const { modalMenuStatus } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        modalMenuStatus && dispatch(toggleModalMenu());
      }}
      className="modalMenu">
      <div className="menuContent">
        <div className="closeModalMenu">
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="menuProps">
          <div>Collection</div>
          <div>Men</div>
          <div>Women</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
