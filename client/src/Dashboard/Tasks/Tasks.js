import React, { useState } from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import './Tasks.css';
import CreateTask from './CreateTask';

const Tasks = () => {

  const [show, setShow] = useState(false);
  const [allTasks, setAllTasks] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToList = (task) => {
    let updateList = allTasks
    updateList.push(task);
    setAllTasks(updateList)
  }

  return (
    <div>
      <Container>
        <h1> Tasks</h1>
      </Container>
      <Container>
        <Button className="taskButton" onClick={handleShow}>New Task</Button>
      </Container>
      <div style={{ display: "flex" }}>
        {allTasks.map((obj) =>
          <Card style={{ width: '20rem', }}>
            <Card.Header>{obj.Name}</Card.Header>
            <Card.Body >
              <Card.Text className="hide-native-scrollbar" style={{ height: '10rem', overflowY: 'scroll' }}>{obj.Description}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
      <CreateTask show={show} handleClose={handleClose} addToList={addToList} />
    </div >
  )
}

export default Tasks;
