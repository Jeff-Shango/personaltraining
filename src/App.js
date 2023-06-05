import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import {TiSocialInstagram} from "react-icons/ti"
import { BsGithub } from "react-icons/bs"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navlinks from "./Components/Navlinks/Navlinks";
import Breakdown from "./Components/breakdown/Breakdown";
// import Sessions from "./Components/sessions/Sessions.jsx"
// import Add from "./Components/add/Add"
import TermsCondition from "./terms/TermsCondition";
import ParQForm from "./Components/parq/ParQForm";
import Programs from "./Components/programs/Programs";
// import Striking from "./Components/striking/Striking";
import Checkout from "./Components/checkout/Checkout";
import Products from "./Components/Products/Products"
// import StripeContainer from "./Components/striking/StripeContainer";
import "./animateOnScrollFunction"
import "./app.css";
// import TestSuccess from "./Components/TestSuccess";
import "../src/Components/footer/footerStyling.css";
import logo from "./Components/assets/logoSolo.png";


function App() {
  return (
    <div className="App">
      <Navlinks/>
      <BrowserRouter>
        <Routes>
          <Route path="jeffbozierfitness.netlify.app/" element={
          <div className="container">
            <Dashboard/>
            <Breakdown/>
          </div>
        }/>    
{/* 
          <Route path="jeffbozierfitness.netlify.app/sessions" element={
          <div className="sessions">
            <Sessions/>
          </div>
          
        }/> */}

          {/* <Route path="jeffbozierfitness.netlify.app/add" element={
            <div className="add">
              <Add/>
            </div>
          } /> */}
          <Route path="jeffbozierfitness.netlify.app/termscondition" element={<TermsCondition/>}/>
          <Route path="jeffbozierfitness.netlify.app/parq" element={<ParQForm/>}/>
          <Route path="jeffbozierfitness.netlify.app/programs" element={<Programs/>}/>
          {/* <Route path="jeffbozierfitness.netlify.app/striking" element={<Striking/>}/> */}
          <Route path="jeffbozierfitness.netlify.app/checkout" element={<Checkout/>}/>
          <Route path="jeffbozierfitness.netlify.app/products" element={<Products/>}/>
          {/* <Route path="jeffbozierfitness.netlify.app/payment" element={<StripeContainer/>}/> */}
          {/* <Route path="jeffbozierfitness.netlify.app/paymentbreakdown" element={<TestSuccess/>}/> */}
        </Routes>
      </BrowserRouter>
      
      <footer className='animate-on-scroll'>
      
      <button id="logoButton">
        <a href="#theTop" className="footer_logo">
          {logo}
        </a>
      </button>

      <ul className="permalinks">
        <li><a href="#theTop">Home</a></li>
        <li><a href="/termscondition">Terms & Conditions</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/programs">Programs</a></li>
        <li><a href="/striking">Order Now</a></li>
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
  );
}

export default App;
