import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './Tasks.css';
import CreateTask from './CreateTask';

const Tasks = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container>
        <h1> Tasks</h1>
      </Container>
      <Container>
        <Button className="taskButton" onClick={handleShow}>New Task</Button>
      </Container>
      <CreateTask show={show} handleClose={handleClose} />
    </div >
  )
}

export default Tasks;
