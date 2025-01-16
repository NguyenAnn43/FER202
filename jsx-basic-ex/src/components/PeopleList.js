import React from "react";

function PeopleList() {
    const person = [
        { name: "John Doe", age: 25, occupation: "Engineer" },
        { name: "Jane Smith", age: 16, occupation: "Student" },
        { name: "Emily Davis", age: 19, occupation: "Intern" },
        { name: "Michael Brown", age: 12, occupation: "Student" },
      ];

  return (
    <div>
      <h2>List of People</h2>
      <ul>
        {person.map((person, index) => (
          <li key={index}>
            {person.name}, Age: {person.age}, Occupation: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
