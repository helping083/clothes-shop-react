import React from 'react'
import {connect} from 'react-redux';
import {togglecartHidden} from '../../store/cart/cart.actions.js';
import {selectCartItemsCount} from '../../store/cart/cart.selectors.js';
import {createStructuredSelector} from 'reselect';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

const cartIcon = ({togglecartHidden, itemCount}) => {
  return(
  <CartContainer onClick={togglecartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
)}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  togglecartHidden: () => dispatch(togglecartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);