// src/components/DishCard.js
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link

function DishCard({ dish }) {
  return (
    <Card>
      <Card.Img variant="top" src={dish.image} alt={dish.name} />
      <Card.Body>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Text>{dish.description}</Card.Text>
        <Link to={`/dish/${dish.id}`}>
          {" "}
          {/* Use Link to navigate */}
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default DishCard;
