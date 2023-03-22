import React from 'react';
import { Button, Container, Navbar, Image, Nav } from 'react-bootstrap';
import navBrand from "../assets/logoSolo.png";
import "./navlinks.css";
import {BsFillBellFill} from "react-icons/bs";

const Navlinks = () => {
  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg='dark' variant='dark' className='navbarContainer'>
        <Container>
        <Navbar.Brand>
            <Image src={navBrand} fluid/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto navItems'>
                    <Nav.Link className='navItem' href='#'>Home</Nav.Link>
                    <Nav.Link className='navItem' href='#'>Sessions</Nav.Link>
                    <Nav.Link className='navItem' href='#'>Plans</Nav.Link>
                    <Nav.Link className='navItem' href='#'>Schedule</Nav.Link>
                </Nav>
                <Nav className='outerContainer align-items-center'>
                    <BsFillBellFill className='bellIcon'/>
                    <Button className='joinButton' variant='outline-light'>Join Now</Button>
                </Nav>
            </Navbar.Collapse>
            </Container>
    </Navbar>


  )
}

export default Navlinks;