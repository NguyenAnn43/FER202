import React, { useState } from "react";

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false); // Initially hidden

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the visibility state
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} {/* Change button text */}
      </button>
      {isVisible && <p>Hello me!</p>} {/* Conditionally render the text */}
    </div>
  );
}

export default ToggleVisibility;
