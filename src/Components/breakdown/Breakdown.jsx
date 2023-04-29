import React from 'react';
import "./breakdown.css";
import "../../../src/app.css"

const Breakdown = () => {
  return (
    <div id='breakdownContainer'>
      <div class="picContainersWrapper">
        <div class="picContainer"></div>
        <div class="picInnerContainer"></div>
      </div>
      <h2 class='sectionTitle'>What I Do!</h2>
      <p class="sectionText">Working with you wherever you are at, creating personalized plans for your budget and your experience. You are working within a space that is welcoming and has a growth-mindset.</p>
      <button class='breakdownButton' onClick={() => {window.location.href='http://localhost:3000/programs';}}>View Programs</button>
    </div>
  )
}

export default Breakdown