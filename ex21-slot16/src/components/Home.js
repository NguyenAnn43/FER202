import React from "react";
import { Link } from "react-router-dom";

const users = [
  { firstName: "John", lastName: "Done", age: 25 },
  { firstName: "Mary", lastName: "Thompson", age: 35 },
  { firstName: "John", lastName: "Smith", age: 30 },
  { firstName: "Emily", lastName: "Johnson", age: 25 },
  { firstName: "William", lastName: "Davis", age: 34 },
];

function Home() {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/user/${index}`}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
