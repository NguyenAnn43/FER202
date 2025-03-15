import React, { useState } from "react";
import { Button } from "react-bootstrap";

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Render and Commit Demo</h1>
      <p>Count: {count}</p>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
};
export default RenderAndCommitDemo;
