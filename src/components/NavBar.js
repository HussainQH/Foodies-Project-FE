import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SignUpModal from "./Signup";
import SignInModal from "./Signin";
import authStore from "../stores/authStore";
import Logout from "./Logout";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
function NavBar() {
  return (
    <ul>
      {" "}
      {authStore.user ? (
        <>
          <li className="display-block">
            <a className="active">Hello {authStore.user.username}</a>{" "}
          </li>
          <li>
            <img
              className="userimage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"
            />
          </li>

          <li className="logout">
            <Logout />
          </li>
        </>
      ) : (
        <>
          <li class="active" href="#home">
            <Link to="/">Home</Link>
          </li>

          <li>
            <Signup />
          </li>

          <li>
            <Signin />
          </li>
        </>
      )}
    </ul>
  );
}

export default observer(NavBar);
