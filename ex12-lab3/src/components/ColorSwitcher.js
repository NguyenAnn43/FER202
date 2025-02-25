import React, { useState } from "react";

function ColorSwitcher() {
  const [selectedColor, setSelectedColor] = useState("white"); // Default background color

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="white">Select a color</option> {/* Default option */}
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div
        style={{
          backgroundColor: selectedColor,
          width: "200px",
          height: "100px",
          border: "1px solid black",
        }}
      ></div>
    </div>
  );
}

export default ColorSwitcher;
