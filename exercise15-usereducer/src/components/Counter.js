import React, { useReducer } from "react";
import { Button, Container, Row, Col } from "react-bootstrap"; // Import React Bootstrap components

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h1>Counter: {state.count}</h1>
          <Button
            variant="primary"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            +
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            -
          </Button>{" "}
          <Button variant="danger" onClick={() => dispatch({ type: "RESET" })}>
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;
