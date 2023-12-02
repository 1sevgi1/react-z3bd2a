import React from 'react';
import './style.css';

function Navbar() {

  return (
    <nav className="navbar">
        <div className="buttons">
          <button className="button-cart">Cart (3)</button>
          <button className="button-cart-clear">Clear Cart</button>
        </div>
    </nav>
  );
}

export default Navbar;