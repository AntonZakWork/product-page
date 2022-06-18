import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.scss';
const Cart = () => {
  const { cartContent } = useSelector((state) => state.cart);
  return (
    <>
      <div className="cart">
        <div className="cartHeader">Cart</div>
        <div className="cartContent">
          {cartContent.length
            ? cartContent.map((el) => <div>{el.itemName}</div>)
            : 'Your cart is empty'}
        </div>
      </div>
    </>
  );
};

export default Cart;
