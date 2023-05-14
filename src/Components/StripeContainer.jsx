import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51MtGJLBsGKDDlKM95QhIu1EawubAQO1L3Dn7zbKNaHkUTIamKstKt27WMjwiL3rCA9tCrmMNYPjPZPUojWrYIml700CJjX5kjz"


const stripeTestPromise = loadStripe(PUBLIC_KEY)
const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
    </Elements>
  )
}

export default StripeContainer