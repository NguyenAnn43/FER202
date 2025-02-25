import React, { useState } from "react";
import { Card } from "react-bootstrap"; // Import Card component

function SearchFilter({ items }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Card key={index} className="mb-2" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{item}</Card.Title>
                <Card.Text>{item}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchFilter;
