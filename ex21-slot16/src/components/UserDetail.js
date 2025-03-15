import React from "react";
import { useParams, Link } from "react-router-dom";

const users = [
  { firstName: "John", lastName: "Done", age: 25 },
  { firstName: "Mary", lastName: "Thompson", age: 35 },
  { firstName: "John", lastName: "Smith", age: 30 },
  { firstName: "Emily", lastName: "Johnson", age: 25 },
  { firstName: "William", lastName: "Davis", age: 34 },
];

function UserDetail() {
  const { id } = useParams();
  const user = users[id];

  if (!user) {
    return <h2>User not found!</h2>;
  }

  return (
    <div>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Age: {user.age}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default UserDetail;
