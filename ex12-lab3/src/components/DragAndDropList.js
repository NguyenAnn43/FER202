import React, { useState } from "react";

function DragAndDropList() {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (dropIndex) => {
    if (draggingItem === null || draggingItem === dropIndex) return;

    const newItems = [...items];
    const draggedItem = newItems[draggingItem];

    newItems.splice(draggingItem, 1); // Remove from original position
    newItems.splice(dropIndex, 0, draggedItem); // Insert at new position

    setItems(newItems);
    setDraggingItem(dropIndex); // Update dragging item index
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDragEnd={handleDragEnd}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DragAndDropList;
