import React from "react";
import AnimalCard from "./AnimalCard";
import animalData from "./data";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <br />
      <Container>
        <div>
          {animalData.map((animal) => (
            <AnimalCard key={animal.name} {...animal} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
