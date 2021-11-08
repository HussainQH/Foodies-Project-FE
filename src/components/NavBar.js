import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SignUpModal from "./Signup";



function NavBar() {
  return (
    <Navbar
    style={{ backgroundColor: "#E67F0D" }}
    className="navbar"
    bg="dark"
    variant="dark"
  >
    <Container>
      <Nav className="me-auto">
       (
          <>
            
            <SignUpModal />
          </>
        )
      </Nav>
    </Container>
  </Navbar>
);
}

export default NavBar;
