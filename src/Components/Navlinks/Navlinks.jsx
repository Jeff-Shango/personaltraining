import React, { useState } from 'react';
import { Navbar, Image, Container } from 'react-bootstrap';
import navBrand from "../assets/logoSolo.png";
import "./navlinks.css";
import {AiOutlineHome, AiOutlineUser, AiFillDatabase} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri'
import {MdEmojiPeople} from 'react-icons/md'

const Navlinks = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark' className='navbarContainer'>
    <Container>
        <Navbar.Brand>
             <Image src={navBrand} fluid/>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
             <Navbar.Collapse id='responsive-navbar-nav'>
    <nav >
        <a id='navLink' href="#header"
    onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a id='navLink' href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a id='navLink' href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
        <a id='navLink' href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
        <a id='navLink' href="#portfolio"  onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillDatabase/></a>
        <a id='navLink' href="#testimonials"  onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><MdEmojiPeople/></a>
        <a id='navLink' href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
  </nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
      )
    }
    
    export default Navlinks;
    // <Navbar fixed='top' collapseOnSelect expand="lg" bg='dark' variant='dark' className='navbarContainer'>
    //     <Container>
    //     <Navbar.Brand>
    //         <Image src={navBrand} fluid/>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    //         <Navbar.Collapse id='responsive-navbar-nav'>
    //             <Nav className='mr-auto navItems'>
    //                 <Nav.Link className='navItem' href='#'>Home</Nav.Link>
    //                 <Nav.Link className='navItem' href='#'>Sessions</Nav.Link>
    //                 <Nav.Link className='navItem' href='#'>Plans</Nav.Link>
    //                 <Nav.Link className='navItem' href='#'>Schedule</Nav.Link>
    //             </Nav>
    //             <Nav className='outerContainer align-items-center'>
    //                 <BsFillBellFill className='bellIcon'/>
    //                 <Button className='joinButton' variant='outline-light'>Join Now</Button>
    //             </Nav>
    //         </Navbar.Collapse>
    //         </Container>
    // </Navbar>