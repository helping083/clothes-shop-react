import React from 'react';
import Button from '../button/';
import './cart-dropdown.styles.scss';


const cartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <Button>go to checkout</Button>
  </div>
)

export default cartDropdown