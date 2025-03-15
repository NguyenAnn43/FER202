import React, { useState } from "react";
import { Button } from "react-bootstrap";

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <h1>Event Handling Demo</h1>
      <p>Count: {count}</p>
      <Button onClick={() => handleButtonClick(1)}>Increase Count</Button>
      <Button onClick={() => handleButtonClick(-1)}>Decrease Count</Button>
    </div>
  );
};

export default EventHandlingDemo;
