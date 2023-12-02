import React from 'react';
import './style.css';

function CartProduct({title, price}) {

  return (
    <div className="cart-product">
      <h4 className="product-title">{title}</h4>
      <p className="product-text">Price: ${price}</p>
      <p className="product-amount">4</p>
      <button className="button-remove">Delete</button>
    </div>
  );
}

export default CartProduct;