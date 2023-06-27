import React, { useState, useEffect} from 'react'
import "./dashboard.css";
import "../../../src/app.css"
import Carousel from 'react-bootstrap/Carousel';


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


const Dashboard = () => {
  
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleRight, setVisibleRight] = useState(false);

  
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 200) {
    setIsVisible(false);
    console.log('it is above');
  } else {
    setIsVisible(true);
  }
};



const handleScrollRight = () => {
  const scrollPosition = window.pageYOffset;
  if (scrollPosition < 1700) {
    setVisibleRight(false);
    console.log('it is below')
  } else {
    setVisibleRight(true);
  }
};

  useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollRight);
    return () => {
      window.removeEventListener('scroll', handleScrollRight);
    };
  }, []);

  useEffect(() => {
    animateOnScroll()
  }, [])
  
  return (
    <>

    
    {/* quick link buttons */}
    <button className={`custom-button ${isVisible ? 'visible' : 'hidden'}`} onClick={() => {window.location.href='/programs';}} id="floatingButton" style={{cursor: "pointer", opacity: isVisible ? 1 : 0.2, zIndex:9999, display: isVisible ? "block" : "none"}}>
      Order a Class
    </button>

    <button className={`custom-button ${isVisibleRight ? 'visible' : 'hidden'}`} onClick={() => {window.location.href='#theTop';}} id="floatingButtonRight" style={{opacity: isVisibleRight ? 1 : 0.2, zIndex:9999, display: isVisibleRight ? "block" : "none"}}>
      Go to Top
    </button>
    {/* carousel section: used for identifying most important news based aspects */}
    <Carousel className='carouselContainer' id='theTop'>
      {/* slide 1 */}
      <Carousel.Item className='carItem carItemA'>
        <Carousel.Caption className='captionText captionTextA'>
          <h3>Welcome</h3>
          <p>Thank you, I look forward to working with you on your fitness goals!</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* slide 2 */}
      <Carousel.Item className='carItem'>
        <Carousel.Caption className='captionText'>
          <h3>Videos Coming Soon!</h3>
          <p>Video breakdowns of technique will be available! Send suggestions of what technical breakdowns you want to see.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* slide 3 */}
      <Carousel.Item className='carItem carItemB'>
        <Carousel.Caption className='captionText'>
          <h3>Events</h3>
          <p>
            Promoting local talent, and featured events! Be on the Lookout!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



{/* lower half of the top half of the landing page */}
      <p id='dashboardText'>
        Get in fighting shape with my personalized coaching and training for boxing and Muay Thai. I offer customized packages to work on technique, strength, and conditioning. Contact me now to get started!
      </p>
    <div className="bottomDashboard">
      <button type='button' onClick={() => {window.location.href='/programs';}} className="sessions striking">Program Breakdown</button>
      <button type='button' onClick={() => {window.location.href='/products';}} className="sessions signUp">Buy a Session</button>
      <button type='button' onClick={() => {window.location.href='/termsCondition';}} className="sessions packages">Terms and Condition</button>
      <button type='button' onClick={() => {window.location.href='/parq';}} className="sessions parQ">Par-Q form</button>
    </div>


    </>
  );
}

export default Dashboard;