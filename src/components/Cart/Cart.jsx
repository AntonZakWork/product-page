import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../store/Slices/CartSlice';
import './Cart.scss';
const Cart = () => {
  const { cartContent, itemCount } = useSelector((state) => state.cart);
  const { itemThumbnails } = useSelector((state) => state.item);
  console.log(cartContent);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart">
        <div className="cartHeader">Cart</div>

        {cartContent.length ? (
          cartContent.map((el) => (
            <div className="cartItemContainer">
              <div className="cartThumbnail">
                <img src={itemThumbnails[0]} alt="" />
              </div>
              <div className="cartItemText">
                <div>{el.itemName}</div>
                <div>
                  {el.price} x {itemCount} <b>${el.price.slice(1) * el.counterValue}.00</b>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(deleteItem(el.itemName));
                }}>
                <svg
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </div>
            </div>
          ))
        ) : (
          <div className="emptyCartText">Your cart is empty</div>
        )}

        {itemCount === 0 ? '' : <button>Checkout</button>}
      </div>
    </>
  );
};

export default Cart;
