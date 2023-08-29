import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import psMiniLogo from '../logos/ps-mini-logo.png'
import System from './System';

const Navigation = ({userData}) => {
  console.log(userData)
  return (
    <div className='nav'>
    <Navbar >
      <img className="ps-mini" src={psMiniLogo} alt="Pro-Sprinkler logo" />
      
      
        <button href="/zones/add" > + zone</button>
        <button href="/logout">Logout</button>
    </Navbar>
<System userData={userData}/>

    </div>

  );
  
};

export default Navigation;
