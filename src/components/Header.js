import React from "react";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
   

    /******************/
    <Navbar bg="dark" variant="dark">
        <Container>
          <a href=""><img src="../img/cine (2).png" alt="logo" /></a>

          <Nav className="me-auto">
            <Nav.Link href="Inicio">Inicio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;