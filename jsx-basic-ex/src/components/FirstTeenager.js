import React from "react";

function FirstTeenager() {
  const person = [
    { name: "John Doe", age: 25, occupation: "Engineer" },
    { name: "Jane Smith", age: 16, occupation: "Student" },
    { name: "Emily Davis", age: 19, occupation: "Intern" },
    { name: "Michael Brown", age: 12, occupation: "Student" },
  ];

  // Find the first teenager in the array
  const teenager = person.find(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {teenager ? (
        <div>
          <p>Name: {teenager.name}</p>
          <p>Age: {teenager.age}</p>
          <p>Occupation: {teenager.occupation}</p>
        </div>
      ) : (
        <p>No teenager found.</p>
      )}
    </div>
  );
}

export default FirstTeenager;
