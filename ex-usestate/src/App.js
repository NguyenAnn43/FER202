import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import Name from "./components/Name";
import ProductList from "./components/ProductList";
import SearchFilter from "./components/SearchFilter";

function App() {
  const items = ["Apple", "Banana", "Orange", "Grape", "Mango", "Pineapple"];

  return (
    <div>
      <Counter />;
      <Name />;
      <ProductList />;
      <div>
        <h1>Search Filter Example</h1>
        <SearchFilter items={items} />
      </div>
    </div>
  );
}

export default App;
