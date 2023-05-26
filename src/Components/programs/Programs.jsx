import React, { useState, useEffect } from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import {TiSocialInstagram} from "react-icons/ti"
import { BsGithub } from "react-icons/bs"
import "./programs.css";
import fightVideo from '../assets/fightVideoA.mp4';
import strengthVideo from '../assets/strengthVideo.mp4';
import nunchuk from '../assets/nunchukVideo.mp4'

const Programs = () => {

  const [isVisibleRight, setVisibleRight] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScrollRight);
    return () => {
      window.removeEventListener('scroll', handleScrollRight);
    };
  }, []);

  const handleScrollRight = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition < 1700) {
      setVisibleRight(false);
      console.log('it is below')
    } else {
      setVisibleRight(true);
    }
  };

  return (
    <>
      <div className="programTitleContainer">

        {/* quick link buttons */}
    <button className={`custom-button ${isVisibleRight ? 'visible' : 'hidden'}`} onClick={() => {window.location.href='http://localhost:3000/programs#programsTitle';}} id="floatingButtonRight" style={{opacity: isVisibleRight ? 1 : 0.2, zIndex:9999, display: isVisibleRight ? "block" : "none"}}>
      Go to Top
    </button>

        <h2 id="programsTitle">Programs</h2>
        <p className="programDescription">
            Among Strength & Conditioning and Striking based personal training, these programs can be mixed match and incorporate the other. Contact me today to gather more information and how your individualized packages can look.
        </p>
      </div>   

      <div className="videoContainer">
        <video id='strengthVideo' src={strengthVideo} muted autoPlay controls/>
      </div>

      <div className="programsContainer">
        <h2 id="programsTitle">Strength & Conditioning</h2>
        <p className="programDescription">
          My strength and conditioning regime is tailored to your needs, helping you target your desired muscle groups while maintaining mobility and functionality. I work with you to create a personalized plan that elevates you to the next level of your fitness goals. No matter where you're at in your fitness journey, I'm here to help you succeed.
          <br/><em>Click the image for pricing</em>
        </p>
        <div id='programPicContainer' className='programPicContainerA' onClick={() => {window.location.href='http://localhost:3000/products';}}/>
      </div>

      <div className="videoContainer">
        <video id='videoFight' src={fightVideo} autoPlay controls/>
      </div>


      <div className="programsContainer">
        <h2 id="programsTitle">Striking</h2>
        <p className="programDescription">
          My experience in multiple martial arts enables me to help you build a strong foundation while learning advanced footwork and striking techniques. I specialize in boxing, kickboxing, and Thai boxing, and offer packages that include functional strength and conditioning training. Let me help you improve your fundamentals and take your skills to the next level.
          <br/><em>Click the image for pricing</em>
        </p>
        <div id='programPicContainer' className='programPicContainerB' onClick={() => {window.location.href='http://localhost:3000/products';}}/>
      </div>

      <div className="videoContainer">
        <video id='videoFight' src={nunchuk} autoPlay controls/>
      </div>
      
      <div className="programsContainer">
        <h2 id="programsTitle">Personalize</h2>
        <p className="programDescription">
          Sometimes it may be challenging to fit a specific mold when it comes to your training sessions. Perhaps you want to mix and match your workouts to focus on different areas of your fitness, but you're not sure how to do it effectively. With me, I offer customized training sessions that are tailored to your unique needs and goals.<br/><br/>Whether you want to work on strength and conditioning one week and striking the next, or mix it up to target multiple areas in a single session, I can help you create a plan that works for you. My approach to training is flexible and adaptable, so we can adjust as needed to ensure that you're getting the most out of each session.<br/><br/>Not only will you receive personalized attention and guidance from me, but I also offer a range of packages to fit your budget and schedule. Whether you want to work with me one-on-one, in a small group setting, or virtually, I have options to suit your needs.
          <br/><em>Click the image for pricing</em>
        </p>
        <div id='programPicContainer' className='programPicContainerC' onClick={() => {window.location.href='http://localhost:3000/products';}}/>
      </div>

      <footer>
      
      <button id="logoButton">
        <a href="/products#theTop" className="footer_logo">
        </a>
      </button>

      <ul className="permalinks">
        <li><a href="/">Home</a></li>
        <li><a href="/termscondition">Terms & Conditions</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/programs">Programs</a></li>
        <li><a href="/products">Order Now</a></li>
        <li><a href="/videos">Videos</a></li>
        <li><a href="/#formContainer">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/jeff-bozier-jr/"><AiFillLinkedin /></a>
        <a href="https://github.com/jeff-shango"><BsGithub/></a>
        <a href="https://instagram.com/the_tao_of_jeff?igshid=YmMyMTA2M2Y="><TiSocialInstagram/></a>
      </div>

      <div className="footer_socials">
        <small>&copy; Jeff Bozier. 2023</small>
      </div>
    </footer>
    </>
  )
}

export default Programs
