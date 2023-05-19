import React, { useState } from 'react';
import logo from "../assets/logoSolo.png";
import { AiFillLinkedin } from "react-icons/ai";
import {TiSocialInstagram} from "react-icons/ti"
import { BsGithub } from "react-icons/bs"
import { NavDropdown } from 'react-bootstrap';
import { MdShoppingCartCheckout } from 'react-icons/md';
import "../striking/striking.css";
import StripeContainer from '../StripeContainer';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import "./products.css"
import "../footer/footerStyling.css"

const PUBLIC_KEY = "pk_test_51MtGJLBsGKDDlKM9wCqrIYKODUGE9jtCQoDLriv8h3AfWD6BrVuyFeXwgr0vBilxRK6bSd1qbyuBKqhHu2v599j300iZ0lp6IL"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const Products = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState({
    Duration: "",
    Type_Of_Session: ""
  })

  const handleOnClick = (type, duration) => {
    const item = {
      Type_Of_Session: type,
      Duration: duration
    };
    setCheckoutInfo(item);
    console.log(item);
  };
  
  const dropdownTextStriking = showFullText ? (    
    <>
    Click here to close!
  </>
) : (
    <>
    Learning to strike is more than just throwing.<br/>
    Click here to read more...
  </>
);



const dropdownTextWeights = showFullText ? (
    <>
      Click here to close!
    </>
  ) : (
    <>
      Are you looking to build muscle.<br/>
      Click here to read more...
    </>
  );
  
  const dropdownTextMixed = showFullText ? (
    <>
        Click here to close!
    </>
) : (
    <>
        Looking to combine both striking and weights?<br/>
        Click here to read more...
    </>
)

  return (
    <div className='App'>
      <h1 id='theTop'>Personal Training</h1>
      {showItem ? <Elements stripe={stripeTestPromise}><StripeContainer checkoutInfo={checkoutInfo}/></Elements> 
      : 
      <>
    {/* striking section */}
    <div id='strikingContainer'>
        <h1 className="strikingTitle">Striking Programs</h1>
        <NavDropdown id='readMore' title={dropdownTextStriking} onClick={() => setShowFullText(!showFullText)}>
        Learning to strike is more than just throwing a punch at someone's face or avoiding getting hit in your own. It requires a deep understanding of distance, footwork, countering, body mobility, and more. As your trainer, I bring years of experience to the table and can break down these complex concepts to fit your level of understanding.
        <br/><br/>
        Whether you're a seasoned athlete or a beginner, I have programs tailored to meet your goals. With my guidance, you'll learn to strike with precision and efficiency, all while having fun and staying motivated. So let's get started on your journey to mastering the art of striking!
        </NavDropdown>

        <ul id="programs">
            <h3 id="strikingProgramTitle">Striking Programs</h3>
            <li id="strikingProgramItem">
                30 minutes: $50 per session
                    <button 
                        id='checkoutButton'
                        onClick={() => {setShowItem(true); handleOnClick("Striking", "30minutes")}}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li>

            <li id="strikingProgramItem">
                60 minutes: $75 per session
                    <button 
                        id='checkoutButton'
                        onClick={() => {setShowItem(true); handleOnClick("Striking", "60 minutes")}}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li>

            {/* <li id="strikingProgramItem">
                2x a week @ 30 minutes: $350 per session (Save $50)
                    <button 
                        id='checkoutButton'
                        onClick={() => {setShowItem(true); handleOnClick("Striking", "")}}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li> */}

            {/* <li id="strikingProgramItem">
                3x a week @ 30 minutes: $525 per session (Savings of $75)
                    <button 
                        id='checkoutButton'
                        onClick={() => handleOnClick()}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li> */}

            {/* <li id="strikingProgramItem">
                2x a week @ 60 minutes: $600 per session (Savings of $100)
                    <button 
                        id='checkoutButton'
                        onClick={() => handleOnClick()}
                        >
                        <MdShoppingCartCheckout/></button>
            </li> */}

            {/* <li id="strikingProgramItem">
                3x a week @ 60 minutes: $900 per month (Savings of $150)
                    <button 
                        id='checkoutButton'
                        onClick={() => handleOnClick()}
                        >
                        <MdShoppingCartCheckout/></button>
            </li> */}
        </ul>
    </div>

    {/* weight lifting section */}

    <div id='weightLiftingContainer'>
        <h1 id="weightLiftingTitle">Weight Lifting Programs</h1>
        <NavDropdown id='readMore'title={dropdownTextWeights} onClick={() => setShowFullText(!showFullText)}>
        Are you looking to build muscle, tone your body, trim down fat, and improve your mobility and flexibility? Let me help you achieve your fitness goals with a personalized workout plan tailored to your specific needs. With my expertise, I can introduce new exercises and techniques to keep your workouts fresh and effective, while also providing you with a clear understanding of the purpose behind each exercise. Whether you're a beginner or an experienced athlete, I can work with you to develop a plan that helps you achieve your fitness dreams. Let's work together to transform your body and improve your overall health and wellness.   
        </NavDropdown>

        <ul id="programs">
            <h3 id="weightLiftingProgramTitle">Weight Lifting Programs</h3>
            <li id="weightLiftingProgramItem">
                30 minutes: $50 per session
                    <button 
                        id='checkoutButton'
                        onClick={() => {setShowItem(true); handleOnClick("Weight Lifting", "30} minutes")}}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li>

            <li id="weightLiftingProgramItem">
                60 minutes: $75 per session
                    <button 
                        id='checkoutButton'
                        onClick={() => {setShowItem(true); handleOnClick("Weight Lifting", "60} minutes")}}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li>

            {/* <li id="weightLiftingProgramItem">
                2x a week @ 30 minutes: $350 per session (Save $50)
                    <button 
                        id='checkoutButton'
                        onClick={() => handleOnClick()}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li> */}

            {/* <li id="weightLiftingProgramItem">
                3x a week @ 30 minutes: $525 per session (Savings of $75)
                    <button 
                        id='checkoutButton'
                        onClick={() => handleOnClick()}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li> */}

            {/* <li id="weightLiftingProgramItem">
                2x a week @ 60 minutes: $600 per session (Savings of $100)
                    <button 
                        id='checkoutButton'
                        onClick={() => handleOnClick()}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li> */}

            {/* <li id="weightLiftingProgramItem">
                3x a week @ 60 minutes: $900 per month (Savings of $150)
                    <button 
                        id='checkoutButton'
                        onClick={() => handleOnClick()}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li> */}
        </ul>
    </div>

        {/* mixed program section section */}

        <div id='mixedProgramContainer'>
        <h1 className="mixedProgramTitle">Mixed Programs</h1>
        <NavDropdown id='readMore' title={dropdownTextMixed} onClick={() => setShowFullText(!showFullText)}>
        Looking to combine the benefits of both striking and weight lifting? My personalized program offers the perfect blend of both worlds. Whether you're looking to focus more on your striking skills while incorporating weights for added strength or using weights as the primary goal while incorporating striking as a cardio workout, I can tailor the program to meet your specific needs.<br/><br/>
            With my program, you can expect a well-rounded approach that includes mobility and flexibility exercises, along with new and challenging exercises to keep your workouts fresh and interesting. Plus, I will work with you to ensure that you understand the purpose of each exercise and how it will help you reach your fitness goals.<br/><br/>
            So, whether you want to improve your striking skills, build muscle and tone your body, or just get in shape, my program can help you achieve your goals. Contact me now to get started on your personalized workout plan.
        </NavDropdown>

        <ul id="programs">
            <h3 id="mixedProgramTitle">Mixed Programs</h3>
            <li id="mixedProgramItem">
                60 minutes (30 minutes of each): $125 per session
                    <button 
                        id='checkoutButton'
                        onClick={() => {setShowItem(true); handleOnClick("Mixed Program", "60} minutes")}}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li>

            {/* <li id="strikingProgramItem">
                2x a week @ 60 minutes: $700 per month (Savings of $80)
                    <button 
                        id='checkoutButton'
                        onClick={() => handleOnClick()}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li> */}

            {/* <li id="strikingProgramItem">
                3x a week @ 60 minutes: $1,050per month (savings of $100) 
                    <button 
                        id='checkoutButton'
                        onClick={() => handleOnClick()}
                        >
                            <MdShoppingCartCheckout/>
                        </button>
            </li> */}
        </ul>
    </div>
        <p className="endingDescription">Please note that prices can change at the discretion of the trainer and the client, feel free to communicate what it is you're looking for a fitness package!
        </p>

      </>}

      <footer>
      
      <button id="logoButton">
        <a href="/products#theTop" className="footer_logo">
        </a>
      </button>

      <ul className="permalinks">
        <li><a href="/">Home</a></li>
        <li><a href="/termscondition">Terms & Conditions</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/programs">Programs</a></li>
        <li><a href="/products">Order Now</a></li>
        <li><a href="/videos">Videos</a></li>
        <li><a href="/#formContainer">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/jeff-bozier-jr/"><AiFillLinkedin /></a>
        <a href="https://github.com/jeff-shango"><BsGithub/></a>
        <a href="https://instagram.com/the_tao_of_jeff?igshid=YmMyMTA2M2Y="><TiSocialInstagram/></a>
      </div>

      <div className="footer_socials">
        <small>&copy; Jeff Bozier. 2023</small>
      </div>
    </footer>
    </div>

    
  )
}

export default Products