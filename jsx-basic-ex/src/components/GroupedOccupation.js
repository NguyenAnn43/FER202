import React from "react";

function GroupedOccupation() {
    const person = [
        { name: "John Doe", age: 25, occupation: "Engineer" },
        { name: "Jane Smith", age: 16, occupation: "Student" },
        { name: "Emily Davis", age: 19, occupation: "Intern" },
        { name: "Michael Brown", age: 12, occupation: "Student" },
      ];
  // Grouping people by occupation
  const groupedByOccupation = person.reduce((result, person) => {
    if (!result[person.occupation]) {
      result[person.occupation] = [];
    }
    result[person.occupation].push(person);
    return result;
  }, {});

  return (
    <div>
      <h2>People Grouped by Occupation</h2>
      {Object.keys(groupedByOccupation).map((occupation) => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <ul>
            {groupedByOccupation[occupation].map((person, index) => (
              <li key={index}>
                {person.name} - Age: {person.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedOccupation;
