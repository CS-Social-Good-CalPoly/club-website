import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoDesktop from '../../images/CSSG.svg';
import Container from 'react-bootstrap/Container';
import '../../assets/SharedAssets/Nav2.css'

function Nav2() {
  return (
    <div className="mynav-container font-link">
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/WhatWeDo">
                    <img
                        src={logoDesktop}
                        height="51"
                        className="d-inline-block align-top"
                        // height="0"
                        // alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="spacer"></Nav>

                <Nav>
                    <Nav.Link href="Projects">Projects</Nav.Link>
                    <Nav.Link href="Calendar">Calendar</Nav.Link>
                    <Nav.Link href="Officers">Officers</Nav.Link>
                    <Nav.Link href="Contact">Contact Us</Nav.Link>
                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default Nav2;