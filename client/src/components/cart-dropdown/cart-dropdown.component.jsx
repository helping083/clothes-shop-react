import React from 'react';
import CartItem from '../cart-item/';
import {selectcartItems} from '../../store/cart/cart.selectors.js';
import {closecart} from '../../store/cart/cart.actions.js';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import { bindActionCreators } from 'redux';
import {useOutsideClick} from '../../effects/';
import PropTypes from 'prop-types';
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles';

const MODAL_CLASS_NAME = 'modalContainer';

const CartDropdown = ({cartItems, history, closecart}) => {
  const outsideClickEffect = useOutsideClick(MODAL_CLASS_NAME, closecart)
  
  return (
    <CartDropdownContainer className={MODAL_CLASS_NAME}>
      <CartItemsContainer>
        {
          cartItems.length ? 
          cartItems.map(item => <CartItem key={item.id} item={item}/>)
          :<EmptyMessageContainer>your cart is empty</EmptyMessageContainer>
        }
      </CartItemsContainer>
      <CartDropdownButton 
        onClick={() => {
          history.push('/checkout');
          closecart();
        }}
      >
        go to checkout
      </CartDropdownButton>
    </CartDropdownContainer>
  )
}


const mapStateToProps = createStructuredSelector({
  cartItems: selectcartItems
});

const mapDispatchToProps = dispatch => bindActionCreators({closecart}, dispatch)

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
  history: PropTypes.object,
  closecart: PropTypes.func.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));