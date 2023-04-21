import React, { useState } from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

import { CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import axios from 'axios';
import "./paymentForm.css"

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "black",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "20px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "black" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

const PaymentForm = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const item = searchParams.has("item") ? JSON.parse(searchParams.get("item")) : null;
    const sessionType = item ? item.Type_Of_Session : "";
    // const { item } = location.search ? JSON.parse(new URLSearchParams(location.search).get('item')) : {};
    // const { item } = location.search ? JSON.parse(location.search) : {};
    // console.log(item);

    // const { program, duration, price, frequency } = navigate.state || {};
    // const { item } = navigate.state || {};
    // console.log(item);
    // console.log(item);
    const [info, setInfo] = useState({
        customer_id: "",
        session_id: "",
        payment_description: ""
    })

    const handleChange = (e) => {
        setInfo(prev => ({...prev, [e.target.name]: e.target.value}))
    };


    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)

        })

        e.preventDefault()
        try{
            await axios.post("http://localhost:7500/add", info)
            console.log("sent to the database")
        }catch(err){
            console.log(err)
        }
        
        // customer_id: "",
        // session_id: "",
        // payment_description: ""
    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:7500/add", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("successful payment")
                setSuccess(true)
            }
        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

console.log(info)
alert(item)
const handleOnClick = () => {
    window.location.href = 'http://localhost:3000';
  };

  return (
    <>
        {!success ?
        <form onSubmit={handleSubmit} id="formContainer">

            <div className="TypeOfSession">
                <h3 id="typeShit">{sessionType}</h3>
            </div>

            <div className="inputBox">
            <input onChange={handleChange} type="text" name='customer_id' id='formInput' required="required"/>
            <span>Full Name</span>
            </div>

            <div className="inputBox">
            <input onChange={handleChange} type="text" id="formInput" name='session_id' required="required"/>
            <span>Session Type</span>
            </div>

            <div className="inputBox">
            <input onChange={handleChange} type="text" id="formInput" name='payment_description'/>
            <span>Extra Info</span>
            </div>
 
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button id='paymentButton'>Pay</button>
        </form>
        :
        <div className='succesfulContainer'>
        <h2>Thanks for buying a session, See you soon!</h2>
        <button id="successfulButton" onClick={handleOnClick}>
          Go back home!
        </button>
      </div>
        }
    </>
  )
}

export default PaymentForm;
