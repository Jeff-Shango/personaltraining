import axios from "axios"
import React, { useState, useRef } from 'react'
import "./stripeContainer.css"
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import emailjs from "emailjs-com";

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


const StripeContainer = ({ checkoutInfo }) => {
  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState({
    Name: "",
    Number: "",
    Email: "",
    Special_Notes: "",
    Type_Of_Session: "",
    Duration: ""
  })

  const form = useRef();
  // const [telephone, setTelephone] = useState(checkoutInfo.Number);
  // const [email, setEmail] = useState(checkoutInfo.Email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sessionType = checkoutInfo.Type_Of_Session;
    const duration = checkoutInfo.Duration;

    const formData = new FormData(form.current);

    formData.append("session_type", sessionType);
    formData.append("duration", duration);

    // const templateParams = Object.fromEntries(formData);

    emailjs.sendForm('service_4dfcr2e', 'StripeForm', form.current, '_NpdWJ5iCT6lmb6Un')
      .then((result) => {
          console.log(result.text);
      }).catch( (error) => {
          console.log("email error which is:", error);
          console.log(error.text);
      });

      try {
        const response = await axios.post("https://jeffbozierfitness.netlify.app/calendar", {
          formData: Object.fromEntries(formData),
        });
        if (response.data.success) {
          console.log("that has been stored successfully");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error storing form data:", error);
      }
    }
    // e.target.reset()
    // Handle the form submission
    // You can access the entered data using the name, telephone, and email state variables
  ;
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
            const response = await axios.post("http://jeffbozierfitness.netlify.app/payment", {
                amount: 5000,
                id
            }
            )

            // const dataShit = await axios.post("https://jeffbozierfitness.netlify.app/calendar", info)

            if(response.data.success) {
                console.log("Successful payment, mane");
                // const calendarData = {
                //   name: info.name,
                //   Number: info.telephone,
                //   Email: info.email,
                //   Special_Notes: info.message,
                //   Type_Of_Session: checkoutInfo.Type_Of_Session,
                //   Duration: checkoutInfo.Duration
                // };

                // const calendarResponse = await axios.post("https://jeffbozierfitness.netlify.app/calendar", calendarData);

                // if (calendarResponse.data) {
                //   console.log("it went over to the calendar successfully ");
                // }
                
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error, mane", error)
        }
    } else {
        console.log(error.message)
    }
}

const handleChange = (e) => {
  setInfo(prev=>({...prev, [e.target.name]: e.target.value}))
};

const paymentInfo = async e => {
    e.preventDefault()
    try {
      await axios.post("https://jeffbozierfitness.netlify.app/calendar", info)
      // navigate("/")
    }catch(err){
      console.log(err)
    }
} 

console.log(info)

  return (
    <>
    {!success ? (
      
      <form id="formStripeContainer" ref={form} onSubmit={(e) => {handleSubmit(e); handleStripeSubmit(e); paymentInfo(e)}}>
        <div id="selectedSessionContainer">
          <h3 id="programsTitle">
            Selected Session Details
          </h3>
          
          <p id="programsTitle" name="session_type">
            Type of Session: {checkoutInfo.Type_Of_Session}
          </p>
          
          <p id="programsTitle" name="duration">
            Duration: {checkoutInfo.Duration}
          </p>
        
        </div>

        <input onChange={handleChange} type="hidden" name="session_type" value={checkoutInfo.Type_Of_Session} />
        <input onChange={handleChange} type="hidden" name="duration" value={checkoutInfo.Duration} />



          <div className="inputBox">
            <input type="text" onChange={handleChange} name='name'  required />
            <span>Your Name</span>
          </div>

          <div className="inputBox">
            <input type="tel" onChange={handleChange} name='telephone'  required />
            <span>Your Number</span>
          </div>

          <div className="inputBox">
            <input type="email" onChange={handleChange} name='email'  required />
            <span>Your Email</span>
          </div>

          <div className="inputBox">
            <input type="text" onChange={handleChange} name='message' />
            <span>Extra Info</span>
          </div>


          {/* payment form */}

          <div className="inputBox">
            <fieldset className='FormGroup'>
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
          </div>
        <button type="submit" id="submitBtn">Pay</button>
      </form>
      
     ) : ( 
     <div>
        <h2 id="confirmationTxt">Thanks for booking a session!</h2>
    </div>
    )}
    </>
  );
};

export default StripeContainer
