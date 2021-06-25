import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateTask = ({ show, handleClose }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');



  return (

    <Modal show={show} onHide={handleClose}>
      <Modal.Header>Add Task +</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Task</Form.Label>
            <Form.Control as="textarea" rows={1} value={taskName} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ border: "none" }}>
        <Button color="secondary" onClick={handleClose}>Cancel</Button>
        <Button color="primary" onClick={handleClose}>Create</Button>

      </Modal.Footer>
    </Modal>

  )
}

export default CreateTask;
