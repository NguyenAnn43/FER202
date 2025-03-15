import React, { useState } from "react";
import { Button } from "react-bootstrap"; // Import Button từ react-bootstrap

function EventHandlingDemo() {
  const [count, setCount] = useState(0); // Khởi tạo state count với giá trị ban đầu là 0

  const handleButtonClick = () => {
    setCount(count + 1); // Tăng giá trị count lên 1 khi button được click
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleButtonClick}>Click me</Button>
    </div>
  );
}

export default EventHandlingDemo;
