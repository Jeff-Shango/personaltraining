import { loadStripe } from '@stripe/stripe-js'
import axios from "axios"
import React, { useState } from 'react'
import "./stripeContainer.css"
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}
const PUBLIC_KEY = "code"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = ({ checkoutInfo }) => {
  const [success, setSuccess] = useState(false)
  // const [telephone, setTelephone] = useState(checkoutInfo.Number);
  // const [email, setEmail] = useState(checkoutInfo.Email);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission
    // You can access the entered data using the name, telephone, and email state variables
  };
    const stripe = useStripe()
    const elements = useElements()

    const handleStripeSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 5000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment, mane")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error, mane", error)
        }
    } else {
        console.log(error.message)
    }
}

  return (
    <>
    <Elements stripe={stripeTestPromise}>
    {!success ? 
      <div>
        <h3>Selected Session Details</h3>
        <p>Type of Session: {checkoutInfo.Type_Of_Session}</p>
        <p>Duration: {checkoutInfo.Duration}</p>
        <form onSubmit={() => {handleSubmit(); handleStripeSubmit()}}>
          <div className="inputBox">
            <input type="text" name='name'  required />
            <span>Your Name</span>
          </div>

          <div className="inputBox">
            <input type="tel" name='telephone'  required />
            <span>Your Number</span>
          </div>

          <div className="inputBox">
            <input type="email" name='email'  required />
            <span>Your Email</span>
          </div>

          <div className="inputBox">
            <input type="text" name='Special_Notes' />
            <span>Extra Info</span>
          </div>

          <input type="submit" value="Submit" />

          {/* payment form */}

        <fieldset className='FormGroup'>
            <div className="FormRow">
                <CardElement options={CARD_OPTIONS}/>
            </div>
        </fieldset>
        <button>Pay</button>
     </form>
      </div>
     :
     <div>
        <h2>Thanks for booking a session!</h2>
    </div>}
    </Elements>
    </>
  )
}

export default StripeContainer
