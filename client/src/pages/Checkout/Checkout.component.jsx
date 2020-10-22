import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkoutItem/';
import {selectcartItems, selectcartTotal} from '../../store/cart/cart.selectors';
import StripeButton from '../../components/stripe-button/';
import {
  CheckoutPageContainer, 
  CheckoutHeaderContainer, 
  HeaderBlockContainer,
  TotalBlock,
  WarningDiv
} from './checkout.styles';

const Checkout = ({cartItems, total}) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {
        cartItems.map(cartItem => 
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        )
      }
      <TotalBlock>
        <span>TOTAL: ${total}</span>
      </TotalBlock>
      {/*todo: find a better way to hide those*/}
      {cartItems.length > 0 && <WarningDiv>
        *Please use the following test credit card for payment
        <br/>
        4242 4242 4242 4242
        <br/>
        Exp: 01/22 - CVV: 123
      </WarningDiv>}
      { 
        cartItems.length > 0 &&
        <div
          style={{
            margin: '50px 0px'
          }}
        >
          <StripeButton 
            price={total} 
            isDisabled={cartItems.length > 0}
          />
        </div> 
      }
    </CheckoutPageContainer>
  )
}


const mapStateToProps = createStructuredSelector({
  cartItems: selectcartItems,
  total: selectcartTotal
});

export default connect(mapStateToProps,null)(Checkout);