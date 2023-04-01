import React, { useState } from 'react';
import { Navbar, Image, Container } from 'react-bootstrap';
import navBrand from "../assets/logoSolo.png";
import "./navlinks.css";
import {AiOutlineHome} from 'react-icons/ai';
import {FaFileMedical} from 'react-icons/fa'
import {RiBoxingFill} from 'react-icons/ri'
import {BsPersonFillAdd} from 'react-icons/bs'
import {GiPapers} from 'react-icons/gi'
import {BsFillCalendarRangeFill} from "react-icons/bs"
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
        <a id='navLink' href="/"onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
            <AiOutlineHome/>
            <p>Home</p>
        </a>

        <a id='navLink' href="/sessions" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>
            <BsFillCalendarRangeFill/>
            <p>sessions</p>
        </a>

        <a id='navLink' href="/programs" onClick={() => setActiveNav('/programs')} className={activeNav === '/programs' ? 'active' : ''}>
            <RiBoxingFill/>
            <p>programs</p>
        </a>

        <a id='navLink' href="/add"  onClick={() => setActiveNav('add')} className={activeNav === 'add' ? 'active' : ''}>
            <BsPersonFillAdd/>
            <p>add Session</p>
        </a>

        <a id='navLink' href="/termscondition"  onClick={() => setActiveNav('termscondition')} className={activeNav === 'termscondition' ? 'active' : ''}>
            <GiPapers/>
            <p>terms and conditon</p>
        </a>

        <a id='navLink' href="/parq"  onClick={() => setActiveNav('parq')} className={activeNav === 'parq' ? 'active' : ''}>
            <FaFileMedical/>
            <p>Par-Q</p>
        </a>
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