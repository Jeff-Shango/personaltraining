import React from 'react'
import "./dashboard.css";
import Carousel from 'react-bootstrap/Carousel';
import slideA from "../assets/logoSolo.png";


const Dashboard = () => {
  return (
    <Carousel className='carouselContainer'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideA}
          alt="First slide"
        />
        <Carousel.Caption className='captionText'>
          <h3>Welcome</h3>
          <p>Thank you for stopping by! Looking forward to working with you!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideA}
          alt="Second slide"
        />

        <Carousel.Caption className='captionText'>
          <h3>Something for Everybody</h3>
          <p>Look at the list of plans, and see if there is anything that fits. If not, we can create one!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideA}
          alt="Third slide"
        />

        <Carousel.Caption className='captionText'>
          <h3>Events</h3>
          <p>
            Promoting local talent, and featured events! Be on the Lookout!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Dashboard;