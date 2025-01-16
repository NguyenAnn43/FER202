import React from "react";

function PeopleTable() {
    const person = [
        { name: "John Doe", age: 25, occupation: "Engineer" },
        { name: "Jane Smith", age: 16, occupation: "Student" },
        { name: "Emily Davis", age: 19, occupation: "Intern" },
        { name: "Michael Brown", age: 12, occupation: "Student" },
      ];

  return (
    <div>
      <h2>People Table</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {person.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;
