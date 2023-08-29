import React from "react";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import reactLogo from "../logos/react.svg";
import psMiniLogo from "../logos/ps-mini-logo.png";


const Footer = () => {
  return (
    <Navbar expand="lg">
     
      Built on: <img className="react-logo" src={reactLogo} alt="React logo" />
      By: <a href="buildmacro.tech">Build</a>

      
    </Navbar>
  );
};

export default Footer;