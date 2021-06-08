import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Header = () => {

  let today = new Date().toLocaleDateString()






  return (
    <Jumbotron fluid>
      <Container>
        <h1>Dashboard</h1>
        <p>{today}</p>
      </Container>
    </Jumbotron>
  )
}

export default Header
