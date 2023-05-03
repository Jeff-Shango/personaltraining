import React, { useEffect, useRef} from 'react';
import "./breakdown.css";
import "../../../src/app.css"
import dashboardGif from "../assets/dashboardGif.mp4"
import emailjs from 'emailjs-com'

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
    threshold: 0.1
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

// pausing picture animation 

// end of functioning 


const Breakdown = () => {

  const form = useRef();


  useEffect(() => {
    animateOnScroll();

    const videoElement = document.getElementById('breakdownGif');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    }, {
      threshold: 0.2
    });
    observer.observe(videoElement);
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4dfcr2e', 'template_cbdgzvt', form.current, '_NpdWJ5iCT6lmb6Un')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    
    <div id='breakdownContainer'>

      {/* animated Canva flyer of pictures, change based on site traffic */}
      <div class="picContainersWrapper">
        <video src={dashboardGif} className=" animate-on-scroll" id="breakdownGif" autoPlay muted loop/>
      </div>
    

    {/* lower section for breaking down that services are for everyone */}
    <div className="breakdownSection animate-on-scroll">
      <h2 class='sectionTitle' id='sectionTitle'>What I Do!</h2>
      <p class="sectionText">Working with you wherever you are at, creating personalized plans for your budget and your experience. You are working within a space that is welcoming and has a growth-mindset.</p>
      <button class='breakdownButton' onClick={() => {window.location.href='http://localhost:3000/programs';}}>View Programs</button>
    </div>

        {/* contact info */}
        <form ref={form} onSubmit={sendEmail} id='formContainer'>
          <div className="inputBox">
            <input type="text" name='name' required />
            <span>Your Name</span>
          </div>

          <div className="inputBox">
            <input type="text" name='email'  required />
            <span>Your Email</span>
          </div>

          <div className="inputBox">
            <textarea name="message" rows="7"  required></textarea>
            <span>Your Message</span>
          </div>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>


    </div>
  )
}

export default Breakdown