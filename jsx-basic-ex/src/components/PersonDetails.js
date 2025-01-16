import React from "react";
  
function PersonDetails() {
    const person = [
        { name: "John Doe", age: 25, occupation: "Engineer" },
        { name: "Jane Smith", age: 16, occupation: "Student" },
        { name: "Emily Davis", age: 19, occupation: "Intern" },
        { name: "Michael Brown", age: 12, occupation: "Student" },
      ];

  return (
    <div>
        <div>
            {person.map((person, index) =>(
                <div key={index}>
                    <h3>{person.name}</h3>
                    <p>Age: {person.age}</p>
                    <p>Occupation: {person.occupation}</p>
                </div>
            ))}
        </div>

      
    </div>
  );
}

export default PersonDetails;
