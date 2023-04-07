import React from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../paymentForm/PaymentForm';

const PUBLIC_KEY = "pk_live_51MtGJLBsGKDDlKM9WhKAIMEJhlElBL2PeT297ZL1oLzVH6Ivzpc41jpYo9MHn6c7RurxBds06rcUCENpSctnZNGJ00prHakZA6"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
    </Elements>
  )
}

export default StripeContainer