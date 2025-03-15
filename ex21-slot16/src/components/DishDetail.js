// src/components/DishDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

function DishDetail({ dishes }) {
  const { dishId } = useParams(); // Get the dishId from the URL
  const dish = dishes.find((dish) => dish.id === parseInt(dishId)); // Find the dish

  if (!dish) {
    return <div>Dish not found!</div>;
  }

  return (
    <Card>
      <Card.Img variant="top" src={dish.image} alt={dish.name} />
      <Card.Body>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Text>{dish.description}</Card.Text>
        <Card.Text>Price: ${dish.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DishDetail;
