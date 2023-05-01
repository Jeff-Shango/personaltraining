import React, { useEffect } from 'react';
import "./breakdown.css";
import "../../../src/app.css"
import dashboardGif from "../assets/dashboardGif.mp4"

// function to animate elements from the left to the right (in-view) and reverse
function animateOnScroll() {
  const animateElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add "in-view" class to the target element
        entry.target.classList.add("in-view");
      } else {
        // Remove "in-view" class from the target element
        entry.target.classList.remove("in-view");
      }
    });
  }, {
    threshold: 0.10
  });

  animateElements.forEach((element) => {
    // Add the element to the IntersectionObserver
    observer.observe(element);

    // Set initial CSS values for animation
    element.style.transform = "translateX(-100%)";
    element.style.opacity = 0;

    // Add CSS transition property to animate the element
    element.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";

    // Add a class to indicate that the element has been initialized
    element.classList.add("animate-on-scroll-init");
  });

  document.addEventListener("scroll", () => {
    const initElements = document.querySelectorAll(".animate-on-scroll-init");

    initElements.forEach((element) => {
      // If the element is in view and not yet animated, animate it
      if (element.classList.contains("in-view") && !element.classList.contains("animated")) {
        element.style.transform = "translateX(0%)";
        element.style.opacity = 1;
        element.classList.add("animated");
      }
      // If the element is out of view, reverse the animation
      else if (!element.classList.contains("in-view") && element.classList.contains("animated")) {
        element.style.transform = "translateX(-100%)";
        element.style.opacity = 0;
        element.classList.remove("animated");
      }
    });
  });
}

animateOnScroll();


const Breakdown = () => {

  useEffect(() => {
    animateOnScroll();
  }, []);
  
  return (
    
    <div id='breakdownContainer'>

      {/* animated Canva flyer of pictures, change based on site traffic */}
      <section class="picContainersWrapper animate-on-scroll">
        <video src={dashboardGif} id="breakdownGif" className='animate-on-scroll' autoPlay muted loop/>
      </section>
    

    {/* lower section for breaking down that services are for everyone */}
    <section className="breakdownSection animate-on-scroll">
      <h2 class='sectionTitle'>What I Do!</h2>
      <p class="sectionText">Working with you wherever you are at, creating personalized plans for your budget and your experience. You are working within a space that is welcoming and has a growth-mindset.</p>
      <button class='breakdownButton' onClick={() => {window.location.href='http://localhost:3000/programs';}}>View Programs</button>
    </section>
    </div>
  )
}

export default Breakdown