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
    const sessionDuration = item ? item.duration : "";
    const sessionPrice = item ? item.price : "";
    const sessionFrequency = item ? item.frequency : "";
    // const { item } = location.search ? JSON.parse(new URLSearchParams(location.search).get('item')) : {};
    // const { item } = location.search ? JSON.parse(location.search) : {};
    // console.log(item);

    // const { program, duration, price, frequency } = navigate.state || {};
    // const { item } = navigate.state || {};
    // console.log(item);
    // console.log(item);
    const [info, setInfo] = useState({
        Type_Of_Session: {sessionType},
        duration: {sessionDuration},
        price: {sessionPrice},
        frequency: {sessionFrequency},
        Name: "",
        Number: "",
        Email: "",
        Special_Notes: ""
    })

    const handleChange = (e) => {
        setInfo(prev => ({...prev, [e.target.name]: e.target.value}));

        if (e.elementType === 'card') {
            const card = e.complete ? e.elements.getElement(CardElement) : null;
            if (card) {
                setInfo(prev => ({
                    ...prev, 
                    last_four_digits: card._frame.id.slice(-4),
                    card_company: card._frame.id.includes('visa') ? 'visa' :
                        card._frame.id.includes('mastercard') ? 'mastercard' :
                        card._frame.id.includes('amex') ? 'amex' :
                        card._frame.id.includes('discover') ? 'discover' :
                        card._frame.id.includes('jcb') ? 'jcb' :
                        card._frame.id.includes('diners') ? 'diners' :
                        card._frame.id.includes('unionpay') ? 'unionpay' :
                    ''
                }))
            }
        }
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

        try{
            await axios.post("http://localhost:7500/payment", info)
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
const handleOnClick = () => {
    window.location.href = 'http://localhost:3000';
  };

  return (
    <>

        <stripe-pricing-table pricing-table-id="prctbl_1N08mwBsGKDDlKM96z4WXcVw"
        publishable-key="pk_test_51MtGJLBsGKDDlKM9SgUxTGdJxn22eztx0KOWwNxrnhjJiJIveJ3kO70susEIAfINsSMguEpXXrHJh3V65JJXKdQE00tmxJXYPE">
        </stripe-pricing-table>

        {/* {!success ?
        <form onSubmit={handleSubmit} id="formContainer">

            <div className="TypeOfSession">
                <label htmlFor="sessionType" id="paymentCheckList">Session Type:</label>
                <h3 name="Type_Of_Session" id="typeShit">{sessionType}</h3>

                <label htmlFor="sessionDuration" id="paymentCheckList">Session Duration Type:</label>
                <h3 id="duration" name="duration">{sessionDuration}</h3>

                <label htmlFor="sessionPrice" id="paymentCheckList">Session Price:</label>
                <h3 name="price" id="price">{sessionPrice}</h3>

                <label htmlFor="sessionFrequency" id="paymentCheckList">Session Frequency:</label>
                <h3 name="frequency" id="frequency">{sessionFrequency}</h3>
            </div>

            <div className="inputBox">
            <input onChange={handleChange} type="text" name='Name' id='formInput' required="required"/>
            <span>Full Name</span>
            </div>

            <div className="inputBox">
            <input onChange={handleChange} type="tel" name='Number' id='formInput' required="required"/>
            <span>Telephone</span>
            </div>

            <div className="inputBox">
            <input onChange={handleChange} type="email" name='Email' id='formInput' required="required"/>
            <span>E-mail</span>
            </div>

            <div className="inputBox">
            <input onChange={handleChange} type="text" id="formInput" name='Special_Notes'/>
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
        } */}
    </>
  )
}

export default PaymentForm;
