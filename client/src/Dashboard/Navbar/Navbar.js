import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



import { Navbar, Nav, NavDropdown, NavbarBrand, Container } from 'react-bootstrap';

const NavBar = () => {

  let today = new Date().toLocaleDateString()


  return (
    <Container >
      <Navbar fixed="top" expand="md" style={{ justifyContent: "space - around", paddingRight: "50px", paddingLeft: "20px", backgroundColor: "blue" }}>
        < Navbar.Toggle aria-controls="basic-navbar-nav" />

        <NavbarBrand className="mr-20">Dashboard</NavbarBrand>
        <NavbarBrand >{today}</NavbarBrand>


        <Navbar.Collapse id="basic-navbar-nav" >

          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">


              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sometthing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>


      </Navbar >
    </Container >

  )
}

export default NavBar;
