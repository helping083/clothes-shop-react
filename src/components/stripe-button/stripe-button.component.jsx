import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {STRIPE_PUBLISH_KEY} from '../../config/stripe.config';

const stripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;

  const onToken = token => {
    console.log('token', token);
    alert('success');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={STRIPE_PUBLISH_KEY}
    />
  )
}

export default stripeCheckoutButton;