import React from "react";

function AreAllTeenagers() {
  const person = [
    { name: "John Doe", age: 25, occupation: "Engineer" },
    { name: "Jane Smith", age: 16, occupation: "Student" },
    { name: "Emily Davis", age: 19, occupation: "Intern" },
    { name: "Michael Brown", age: 12, occupation: "Student" },
  ];

  // Check if all people are teenagers
  const allTeenagers = person.every(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>Are All Teenagers?</h2>
      {allTeenagers ? (
        <p>Yes, all people are teenagers.</p>
      ) : (
        <p>No, not all people are teenagers.</p>
      )}
    </div>
  );
}

export default AreAllTeenagers;
