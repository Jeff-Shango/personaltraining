import React from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../paymentForm/PaymentForm';

const PUBLIC_KEY = "pk_test_51MtGJLBsGKDDlKM9SgUxTGdJxn22eztx0KOWwNxrnhjJiJIveJ3kO70susEIAfINsSMguEpXXrHJh3V65JJXKdQE00tmxJXYPE"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <div id="paymentContainer">
        <h1 id="paymentTitle">Your Cart</h1>

        <ul id="itemContainer">
          <li id="productItem">
            
          </li>
        </ul>
      </div>
        <PaymentForm/>
    </Elements>
  )
}

export default StripeContainer