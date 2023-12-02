import React from 'react';
import './style.css';

import Navbar from './Navbar';
import StorePage from './StorePage';
import Cart from './Cart';

export default function App() {
  return (
    <div>
      <Navbar />
      <StorePage />
      <Cart />
    </div>
  );
}
