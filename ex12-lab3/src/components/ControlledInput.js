import React, { useState } from "react";

function ControlledInput() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Input text: {inputText}</p>
    </div>
  );
}

export default ControlledInput;
