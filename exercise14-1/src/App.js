import React from "react";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { ThemeProvider } from "./components/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <ThemeProvider>
        <div>
          <h1>Welcome to React!</h1>
          <ThemeToggleButton />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
