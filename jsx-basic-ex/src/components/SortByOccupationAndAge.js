import React from "react";
function SortByOccupationAndAge() {
    const person = [
        { name: "John Doe", age: 25, occupation: "Engineer" },
        { name: "Jane Smith", age: 16, occupation: "Student" },
        { name: "Emily Davis", age: 19, occupation: "Intern" },
        { name: "Michael Brown", age: 12, occupation: "Student" },
      ];

  // Sort by occupation alphabetically, then by age ascending within each occupation
  const sortedPeople = [...person].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age; // If occupations are the same, sort by age
  });

  return (
    <div>
      <h2>Sorted People (By Occupation and Age)</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person, index) => (
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

export default SortByOccupationAndAge;
