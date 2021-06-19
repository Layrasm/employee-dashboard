import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {

  let today = new Date().toLocaleDateString()


  return (
    <Navbar>
      <Navbar.Collapse id="basic-navbar-nav">
        <h1>Dashboard</h1>
        <p>{today}</p>
        <h1>Hello</h1>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;
