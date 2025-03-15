import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import lionImage from "./images/lion.jpg";
import gorillaImage from "./images/gorilla.jpg";
import zebraImage from "./images/zebra.jpg";

function AnimalCard({ name, scientificName, size, diet, additional }) {
  const getImage = () => {
    switch (name) {
      case "Lion":
        return lionImage;
      case "Gorilla":
        return gorillaImage;
      case "Zebra":
        return zebraImage;
      default:
        return null;
    }
  };

  const showAdditional = (additional) => {
    const alertInformation = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    alert(alertInformation);
  };

  return (
    <Card style={{ width: "18rem", margin: "10px", display: "inline-block" }}>
      <Card.Img
        variant="top"
        src={getImage()}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Scientific Name: {scientificName}
          <br />
          {size} kg
          <br />
          {diet.join(", ")}.
        </Card.Text>
        <Button variant="primary" onClick={() => showAdditional(additional)}>
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  additional: PropTypes.shape({
    notes: PropTypes.string,
    link: PropTypes.string,
  }),
};

AnimalCard.defaultProps = {
  additional: {
    notes: "No Additional Information",
    link: "No Additional Information",
  },
};

export default AnimalCard;
