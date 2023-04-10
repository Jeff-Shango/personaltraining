import React, { useState } from 'react';
import "./programs.css";

const Programs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <div className="programTitleContainer">
        <h2 id="programsTitle">Programs</h2>
        <p className="programDescription">
            Among Strength & Conditioning and Striking based personal training, these programs can be mixed match and incorporate the other. Contact me today to gather more information and how your individualized packages can look.
        </p>
      </div>   

      <div className="programsContainer">
        <h2 id="programsTitle">Strength & Conditioning</h2>
        <p className="programDescription">
          My strength and conditioning regime is tailored to your needs, helping you target your desired muscle groups while maintaining mobility and functionality. I work with you to create a personalized plan that elevates you to the next level of your fitness goals. No matter where you're at in your fitness journey, I'm here to help you succeed.
          <br/> Click the image for pricing
        </p>
        <div id='programPicContainer' className='programPicContainerA' onClick={() => {window.location.href='http://localhost:3000/striking';}}/>
      </div>

      <div className="programsContainer">
        <h2 id="programsTitle">Striking</h2>
        <p className="programDescription">
          My experience in multiple martial arts enables me to help you build a strong foundation while learning advanced footwork and striking techniques. I specialize in boxing, kickboxing, and Thai boxing, and offer packages that include functional strength and conditioning training. Let me help you improve your fundamentals and take your skills to the next level.
          <br/> Click the image for pricing
        </p>
        <div id='programPicContainer' className='programPicContainerB' onClick={() => {window.location.href='http://localhost:3000/striking';}}/>
      </div>

      <div className="programsContainer">
        <h2 id="programsTitle">Personalize</h2>
        <p className="programDescription">
          Sometimes it may be challenging to fit a specific mold when it comes to your training sessions. Perhaps you want to mix and match your workouts to focus on different areas of your fitness, but you're not sure how to do it effectively. With me, I offer customized training sessions that are tailored to your unique needs and goals.<br/><br/>Whether you want to work on strength and conditioning one week and striking the next, or mix it up to target multiple areas in a single session, I can help you create a plan that works for you. My approach to training is flexible and adaptable, so we can adjust as needed to ensure that you're getting the most out of each session.<br/><br/>Not only will you receive personalized attention and guidance from me, but I also offer a range of packages to fit your budget and schedule. Whether you want to work with me one-on-one, in a small group setting, or virtually, I have options to suit your needs.
          <br/> Click the image for pricing
        </p>
        <div id='programPicContainer' className='programPicContainerC' onClick={() => {window.location.href='http://localhost:3000/striking';}}/>
      </div>
    </>
  )
}

export default Programs
