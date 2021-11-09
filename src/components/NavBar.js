import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SignUpModal from "./Signup";
import SignInModal from "./Signin";
import authStore from '../stores/authStore';
import Logout from "./Logout";
import { observer } from "mobx-react";


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
         <p className="red"> {authStore.user ? (
            <>
               Hello {authStore.user.username}
             
              <Logout />
            </>
          ) : (
            <>
              <SignUpModal />
              <SignInModal />
            </>
          )}</p>
        </Nav>
      </Container>
    </Navbar>
);
}

export default observer(NavBar);
