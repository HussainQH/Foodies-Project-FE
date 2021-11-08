import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SignUpModal from "./Signup";
import SignInModal from "./Signin";
import authStore from '../stores/authStore';



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
    <p>   {authStore.user ?   authStore.user.username : "welcome guest" } </p>
       
       (
          <>
          <p>   {authStore.user ?   authStore.user.username : "welcome guest" } </p>
            <SignUpModal /> 
            <SignInModal />
          </>
        )
      </Nav>
    </Container>
  </Navbar>
);
}

export default NavBar;
