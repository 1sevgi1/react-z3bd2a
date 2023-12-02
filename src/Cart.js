import React from 'react';
import './style.css';

import CartProduct from './CartProduct';

function Cart() {

  return (
    <div className="cart">
      <div className="cart-top">
        <div>Cart</div>
        <div className="cart-top-exit">+</div>
      </div>
      <CartProduct title={'Orange'} price={0.99} />
      <CartProduct title={'Apple'} price={0.59} />
      <CartProduct title={'Lemon'} price={0.89} />
      <div className="cart-total-price">
        <div>Total price: $2.47</div>
      </div>
      <div className="cart-bottom">
        <button>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
}

export default Cart;