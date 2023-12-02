import React from 'react';
import './style.css';

function ProductCard({img, title, price}) {

  return (
    <div className="product-card">
      <img className="card-img" src={img} alt="Card image cap" />
      <div className="card-block">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">Price: ${price}</p>
        <button className="button-add-to-cart">Add</button>
      </div>
    </div>
  );
}

export default ProductCard;