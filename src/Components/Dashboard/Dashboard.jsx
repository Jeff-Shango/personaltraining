import React from 'react'
import "./dashboard.css";
import Carousel from 'react-bootstrap/Carousel';

const Dashboard = () => {
  return (
    <>
    <Carousel className='carouselContainer'>
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
    <p id='dashboardText'>Get in fighting shape with my personalized coaching and training for boxing and Muay Thai. I offer customized packages to work on technique, strength, and conditioning. Contact me now to get started!</p>
    <div className="bottomDashboard">
      <button type='button' onClick={() => {window.location.href='http://localhost:3000/programs';}} className="sessions striking">Striking Sessions</button>
      <button type='button' onClick={() => {window.location.href='http://localhost:3000/programs';}} className="sessions scSessions">Strength & Conditioning Sessions</button>
      <button type='button' onClick={() => {window.location.href='http://localhost:3000/programs';}} className="sessions packages">Packages</button>
    </div>
    </>
  );
}

export default Dashboard;