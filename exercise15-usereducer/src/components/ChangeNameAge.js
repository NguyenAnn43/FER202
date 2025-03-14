import React, { useReducer } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap"; // Import React Bootstrap components

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", value: e.target.value });
  };

  const handleAgeChange = (e) => {
    dispatch({ type: "SET_AGE", value: e.target.value });
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={state.name}
                onChange={handleNameChange}
                placeholder="Input name"
              />
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Age:</Form.Label>
              <Form.Control
                type="text"
                value={state.age}
                onChange={handleAgeChange}
                placeholder="Input age"
              />
            </Form.Group>
          </Form>

          <div className="mt-3">
            <h3>Name: {state.name}</h3>
            <h3>Age: {state.age}</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangeNameAge;
