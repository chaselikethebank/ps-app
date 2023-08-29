import React from "react";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import reactLogo from "../logos/react.svg";
import psMiniLogo from "../logos/ps-mini-logo.png";


const Footer = () => {
  return (
    <Navbar expand="lg" className="read-the-docs">
      <Navbar.Brand href="/">
       <img className="ps-mini" src={psMiniLogo} alt="Pro-Sprinkler logo" />
        </Navbar.Brand>
      
      {/* <Nav>
        <NavItem>
          <a href="/">Home</a>
        </NavItem>
        <NavItem>
          <a href="/about">About</a>
        </NavItem>
        <NavItem>
          <a href="/contact">Contact</a>
        </NavItem>
      </Nav> */}
    </Navbar>
  );
};

export default Footer;
