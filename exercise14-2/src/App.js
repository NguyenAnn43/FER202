import React, { useState } from "react";
import { CartProvider } from "./components/CartContext";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";
import "./styles.css";
// Sample dishes array
const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "images/img1.jpg",
    price: "4.99",
    description: "A unique combination of Indian Uthappam and Italian pizza.",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "images/img2.jpg",
    price: "1.99",
    description: "Deep fried Zucchini with chickpea batter.",
  },
  {
    id: 2,
    name: "Vadonut",
    image: "images/img3.jpg",
    price: "1.99",
    description: "A combination of vada and donut.",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "images/img4.jpg",
    price: "2.99",
    description: "New York Style Cheesecake with Indian cardamoms.",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <CartProvider>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <DishesList dishes={dishes} />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
