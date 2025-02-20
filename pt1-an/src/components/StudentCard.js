import React, { useState } from "react";
import { Card, Form, Button, Image, Row } from "react-bootstrap";

function StudentCard(props) {
  const { name, id, address, image } = props;
  const [status, setStatus] = useState(null);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted:", { name, id, address, status });
    alert("Thông tin đã được lưu!");
  };

  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-center mb-3">
          {" "}
          {/* Center image */}
          <Image
            src={image}
            alt={name}
            rounded
            style={{ width: "171px", height: "180px" }}
          />
        </div>
        <Card.Title className="text-center">{id}</Card.Title>{" "}
        {/* Center title */}
        <Card.Text>{name}</Card.Text>
        <Card.Text>{address}</Card.Text>
        <Form.Group>
          <div className="d-flex justify-content-around">
            {" "}
            {/* Distribute radio buttons evenly */}
            <Form.Check
              type="radio"
              label="Absent"
              value="Absent"
              name="status"
              id={`absent-${id}`} // Unique ID for each student
              onChange={handleStatusChange}
              checked={status === "Absent"}
            />
            <Form.Check
              type="radio"
              label="Present"
              value="Present"
              name="status"
              id={`present-${id}`} // Unique ID for each student
              onChange={handleStatusChange}
              checked={status === "Present"}
            />
          </div>
        </Form.Group>
        <div className="d-flex justify-content-center">
          {" "}
          {/* Center button */}
          <Button variant="warning" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StudentCard;
