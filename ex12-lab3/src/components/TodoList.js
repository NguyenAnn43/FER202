import React, { useState } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";

function TodoList() {
  const [task, setTask] = useState(""); // Stores the current task input
  const [todos, setTodos] = useState([]); // Stores the array of todo items

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    if (task.trim() !== "") {
      // Check if task is not empty or just spaces
      setTodos([...todos, task]); // Add the task to the todos array
      setTask(""); // Clear the input field
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1); // Remove the task at the specified index
    setTodos(newTodos);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={task}
                onChange={handleInputChange}
                placeholder="Please input a Task"
              />
              <Button type="submit" variant="danger">
                Add Todo
              </Button>
            </form>
          </Col>
          <Col>
            <Card>
              <Card.Title>Todo List</Card.Title>
              <ul>
                {todos.map((todo, index) => (
                  <li key={index}>
                    {todo}
                    <Button
                      onClick={() => handleDelete(index)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TodoList;
