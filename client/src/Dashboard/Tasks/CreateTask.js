import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateTask = ({ show, handleClose, addToList }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target

    e.preventDefault();

    if (name === "taskName") {
      setTaskName(value)
    } else {
      setDescription(value)
    }
  }

  const handleSave = () => {
    let taskObj = {}
    taskObj["Name"] = taskName
    taskObj["Description"] = description
    addToList(taskObj)
    handleClose()
  }


  return (

    <Modal show={show} onHide={handleClose}>
      <Modal.Header>Add Task +</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Task</Form.Label>
            <Form.Control as="textarea" rows={1} value={taskName} onChange={handleChange} name="taskName" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={handleChange} name="taskDescription" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ border: "none" }}>
        <Button color="secondary" onClick={handleClose}>Cancel</Button>
        <Button color="primary" onClick={handleSave}>Create</Button>

      </Modal.Footer>
    </Modal>

  )
}

export default CreateTask;
