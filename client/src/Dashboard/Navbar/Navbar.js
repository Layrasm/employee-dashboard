import React from 'react';


import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavBar = () => {

  let today = new Date().toLocaleDateString()


  return (
    <Navbar expand="md" >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <h1>Dashboard</h1>
      <p>{today}</p>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto">

          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">


            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;
