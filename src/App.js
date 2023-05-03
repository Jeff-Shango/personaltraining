import React from "react";
import {TiSocialInstagram} from "react-icons/ti"
import { BsMap, BsPhone, BsEnvelope } from "react-icons/bs"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navlinks from "./Components/Navlinks/Navlinks";
import Breakdown from "./Components/breakdown/Breakdown";
import Sessions from "./Components/sessions/Sessions.jsx"
import Add from "./Components/add/Add"
import TermsCondition from "./terms/TermsCondition";
import ParQForm from "./Components/parq/ParQForm";
import Programs from "./Components/programs/Programs";
import Striking from "./Components/striking/Striking";
import Checkout from "./Components/checkout/Checkout";
import StripeContainer from "./Components/striking/StripeContainer";
import "./animateOnScrollFunction"
import "./app.css";
import TestSuccess from "./Components/TestSuccess";

function App() {
  return (
    <div className="App">
      <Navlinks/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <div className="container">
            <Dashboard/>
            <Breakdown/>
          </div>
        }/>    

          <Route path="/sessions" element={
          <div className="sessions">
            <Sessions/>
          </div>
          
        }/>

          <Route path="/add" element={
            <div className="add">
              <Add/>
            </div>
          } />
          <Route path="/termscondition" element={<TermsCondition/>}/>
          <Route path="/parq" element={<ParQForm/>}/>
          <Route path="/programs" element={<Programs/>}/>
          <Route path="/striking" element={<Striking/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/payment" element={<StripeContainer/>}/>
          <Route path="/paymentbreakdown" element={<TestSuccess/>}/>
        </Routes>
      </BrowserRouter>
      
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact Us</h4>
              <ul>
                <li>123 Main St, Anytown USA</li>
                <li>555-555-5555</li>
                <li><a href="mailto:jeff.bozierjr@gmail.com">jeff.bozierjr@gmail.com</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Follow Us</h4>
              <ul>
                <li><TiSocialInstagram/><a href="https://www.instagram.com/Tao_of_Jeff/">@Tao_of_Jeff</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Legal</h4>
              <ul>
                <li><a href="localhost:3000/#sectionTitle">About Us</a></li>
                <li><a href="localhost:3000/#termscondition">Terms of Service</a></li>
                <li>&copy; 2023 Jeff Bozier Jr.</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;
