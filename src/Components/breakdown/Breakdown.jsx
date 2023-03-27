import React from 'react';
import "./breakdown.css";

const Breakdown = () => {
  return (
    <div id='breakdownContainer'>
      <div className="picContainer">
        <div className="picInnerContainer"></div>
      </div>
      <h2 id='sectionTitle'>What I Do!</h2>
      <p className="sectionText">Working with you wherever you are at, creating personalized plans for your budget and your experience. You are working within a space that is welcoming and has a growth-mindset.</p>
      <button className='breakdownButton'>View Programs</button>
    </div>
  )
}

export default Breakdown