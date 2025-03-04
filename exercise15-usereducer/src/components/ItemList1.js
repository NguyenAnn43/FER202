import React, { useReducer, useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  ListGroup,
  Dropdown,
} from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.item.id
            ? { ...item, name: action.item.name }
            : item
        ),
      };
    case "SORT_ALPHABETICAL":
      return {
        ...state,
        items: [...state.items].sort((a, b) => a.name.localeCompare(b.name)),
      };
    case "SORT_CREATED_TIME":
      return {
        ...state,
        items: [...state.items].sort((a, b) => a.id - b.id),
      };
    case "FILTER_ITEMS":
      return {
        ...state,
        items: state.items.filter((item) =>
          item.name.toLowerCase().includes(action.filterText.toLowerCase())
        ),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
};

function ItemList1() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedItemName, setEditedItemName] = useState("");
  const [sortType, setSortType] = useState(null);
  const [filterText, setFilterText] = useState("");

  const handleAddItem = () => {
    if (newItemName) {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleEditItem = (item) => {
    setEditingItemId(item.id);
    setEditedItemName(item.name);
  };

  const handleSaveEdit = (item) => {
    dispatch({ type: "EDIT_ITEM", item: { ...item, name: editedItemName } });
    setEditingItemId(null);
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
  };

  const handleSort = (type) => {
    setSortType(type);
    dispatch({ type: type });
  };

  const handleFilter = (e) => {
    const text = e.target.value;
    setFilterText(text);
    dispatch({ type: "FILTER_ITEMS", filterText: text });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form>
            <Form.Group controlId="formItem">
              <Form.Label>Enter Item:</Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddItem} className="w-100">
              Add Item
            </Button>
          </Form>

          <div className="mt-3">
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="dropdown-sort">
                {sortType
                  ? sortType === "SORT_ALPHABETICAL"
                    ? "Sort by Name"
                    : "Sort by Created Time"
                  : "Sort by"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSort("SORT_ALPHABETICAL")}>
                  Sort by Name
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort("SORT_CREATED_TIME")}>
                  Sort by Created Time
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Form.Group controlId="formFilter" className="mt-3">
            <Form.Control
              type="text"
              value={filterText}
              onChange={handleFilter}
              placeholder="Filter items"
            />
          </Form.Group>

          <h3 className="mt-4">Item List:</h3>
          <ListGroup>
            {state.items.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {editingItemId === item.id ? (
                  <>
                    <Form.Control
                      type="text"
                      value={editedItemName}
                      onChange={(e) => setEditedItemName(e.target.value)}
                    />
                    <Button
                      variant="success"
                      onClick={() => handleSaveEdit(item)}
                    >
                      Save
                    </Button>
                    <Button variant="secondary" onClick={handleCancelEdit}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    {item.name}
                    <div>
                      <Button
                        variant="warning"
                        onClick={() => handleEditItem(item)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList1;
