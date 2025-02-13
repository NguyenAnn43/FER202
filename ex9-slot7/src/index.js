import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleWeb from "./components/SimpleWeb";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import SimpleCard from "./components/SimpleCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <HelloWorld />
    <Counter />
    <SimpleCard />
    <SimpleWeb />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
