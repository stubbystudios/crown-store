import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_iS3qdgpMj6gRW2StUFqrcqaj00wsBwvruH';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      alert('Payment successful!');
    }).catch(error => {
      console.log('Payment error: ', error);
      alert(
        'There was an issue with your payment. Please make sure you use the provided club credit card.'
      );
    });
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='Crown Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;