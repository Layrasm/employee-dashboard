import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CreateTask = ({ show, handleClose }) => {

  return (

    <Modal show={show} onHide={handleClose}>
      <Modal.Header>Add Task</Modal.Header>
      <Modal.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Modal.Body>
      <Modal.Footer>
        <Button color="secondary" onClick={handleClose}>Cancel</Button>
        <Button color="primary" onClick={handleClose}>Do Something</Button>{' '}

      </Modal.Footer>
    </Modal>

  )
}

export default CreateTask;
