import React from "react";

function OldestYoungest() {
  const person = [
    { name: "John Doe", age: 25, occupation: "Engineer" },
    { name: "Jane Smith", age: 16, occupation: "Student" },
    { name: "Emily Davis", age: 19, occupation: "Intern" },
    { name: "Michael Brown", age: 12, occupation: "Student" },
  ];

  // Find the oldest person
  const oldest = person.reduce((prev, current) => (prev.age > current.age ? prev : current));
  
  // Find the youngest person
  const youngest = person.reduce((prev, current) => (prev.age < current.age ? prev : current));

  return (
    <div>
      <h2>Oldest and Youngest Person</h2>
      <p>
        <strong>Oldest:</strong> {oldest.name} - Age: {oldest.age} - Occupation: {oldest.occupation}
      </p>
      <p>
        <strong>Youngest:</strong> {youngest.name} - Age: {youngest.age} - Occupation: {youngest.occupation}
      </p>
    </div>
  );
}

export default OldestYoungest;
