import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkoutItem/';
import {selectcartItems, selectcartTotal} from '../../store/cart/cart.selectors';
import StripeButton from '../../components/stripe-button/';
import './checkout.styles.scss';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const {cartItems, total} = this.props;
    return (
      <div className='checkout-page'>
        <div className='checkout-header'>
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {
          cartItems.map(cartItem => 
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
          )
        }
        <div className='total'>
          <span>TOTAL: ${total}</span>
        </div>
        {/*todo: find a better way to hide those*/}
        {cartItems.length > 0 && <div className="test-warning">
          *Please use the following test credit card for payment
          <br/>
          4242 4242 4242 4242
          <br/>
          Exp: 01/22 - CVV: 123
        </div>}
        {cartItems.length > 0 && <StripeButton price={total} isDisabled={cartItems.length > 0}/>}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectcartItems,
  total: selectcartTotal
});

export default connect(mapStateToProps,null)(Checkout);