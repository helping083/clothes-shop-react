import React from 'react';
import Button from '../button/';
import CartItem from '../cart-item/';
import {selectcartItems} from '../../store/cart/cart.selectors.js';
import {closecart} from '../../store/cart/cart.actions.js';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import './cart-dropdown.styles.scss';
import { bindActionCreators } from 'redux';


const cartDropdown = ({cartItems, history, closecart}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ? 
        cartItems.map(item => <CartItem key={item.id} item={item}/>)
        :<span className="empty-message">your cart is empty</span>
      }
    </div>
    <Button 
      onClick={() => {
        history.push('/checkout');
        closecart();
      }}
    >
      go to checkout
    </Button>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectcartItems
});

const mapDispatchToProps = dispatch => bindActionCreators({closecart}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(cartDropdown));