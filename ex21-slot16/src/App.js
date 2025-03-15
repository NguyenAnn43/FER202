// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import UserDetail from "./components/UserDetail";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/user/:id" element={<UserDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DishCard from "./components/DishCard";
import DishDetail from "./components/DishDetail";
import Navbar from "./components/Navbar";

const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "images/uthappizza.png",
    category: "mains",
    label: "Hot",
    price: "4.99",
    featured: true,
    description:
      "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "images/zucchipakoda.png",
    category: "appetizer",
    label: "",
    price: "1.99",
    featured: false,
    description:
      "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
  },
  {
    id: 2,
    name: "Vadonut",
    image: "images/vadonut.png",
    category: "appetizer",
    label: "New",
    price: "1.99",
    featured: false,
    description:
      "A quintessential ConFusion experience, is it a vada or is it a donut?",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "images/elaicheesecake.png",
    category: "dessert",
    label: "",
    price: "2.99",
    featured: false,
    description:
      "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
  },
];

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Container className="mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <Row>
                  {dishes.map((dish) => (
                    <Col md={6} lg={4} key={dish.id}>
                      <DishCard dish={dish} />
                    </Col>
                  ))}
                </Row>
              }
            />
            <Route
              path="/dish/:dishId"
              element={<DishDetail dishes={dishes} />}
            />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
