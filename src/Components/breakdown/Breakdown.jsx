import React, { useEffect } from 'react';
import "./breakdown.css";
import "../../../src/app.css"
import dashboardGif from "../assets/dashboardGif.mp4"

function animateOnScroll() {
  // Select all elements with the class "animate-on-scroll"
  const animateElements = document.querySelectorAll(".animate-on-scroll");

  // Create an IntersectionObserver with threshold of 0.05
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          // If the element is in view, add the "in-view" class
          if (entry.intersectionRatio > 0) {
              entry.target.classList.add("in-view");
          }
          // If the element is out of view, remove the "in-view" class
          if (entry.intersectionRatio <= 0) {
              entry.target.classList.remove("in-view");
              entry.target.classList.add("animate-on-scroll");
          }
      });
  });

  // Observe each element with the class "animate-on-scroll"
  animateElements.forEach((element) => {
      observer.observe(element);
  });

}

animateOnScroll()


const Breakdown = () => {

  
  return (
    
    <div id='breakdownContainer'>
      <div class="picContainersWrapper">
        <video src={dashboardGif} id="breakdownGif" className='animate-on-scroll' autoPlay muted loop/>
      </div>
      <h2 class='sectionTitle'>What I Do!</h2>
      <p class="sectionText">Working with you wherever you are at, creating personalized plans for your budget and your experience. You are working within a space that is welcoming and has a growth-mindset.</p>
      <button class='breakdownButton' onClick={() => {window.location.href='http://localhost:3000/programs';}}>View Programs</button>
    </div>
  )
}

export default Breakdown