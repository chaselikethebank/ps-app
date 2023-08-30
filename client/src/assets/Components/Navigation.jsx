import React from "react";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import psMiniLogo from "../logos/ps-mini-logo.png";
import System from "./System";

const Navigation = ({ userData }) => {
  return (
    <div className="nav">
      <img className="ps-mini" src={psMiniLogo} alt="Pro-Sprinkler logo" />

      <button href="/about">About</button>
      <button href="/contact">Contact</button>
      <button href="/zones/add">+ zone</button>
      <button href="/logout">Logout</button>
    </div>
  );
};

export default Navigation;
