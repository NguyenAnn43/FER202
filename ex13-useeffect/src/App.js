import logo from "./logo.svg";
import "./App.css";
import React from "react";
import UserPosts from "./components/UserPosts";
import CountdownTimer from "./components/CountdownTimer";
import WindowSize from "./components/WindowSize";
import ValidatedInput from "./components/ValidatedInput";

function App() {
  const validateName = (value) => value.length >= 3;
  const nameErrorMessage = "Name must be at least 3 characters long.";

  return (
    <div className="App">
      <UserPosts userId={1} />
      <CountdownTimer initialValue={10} />
      <WindowSize />
      <ValidatedInput
        validationFunction={validateName}
        errorMessage={nameErrorMessage}
      />
    </div>
  );
}

export default App;
