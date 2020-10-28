import React from 'react'
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';
import PropTypes from 'prop-types';

const cartItem = ({item: {imageUrl, price, name, quantity}}) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item'/>
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

cartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default cartItem;