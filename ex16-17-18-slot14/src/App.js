import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EventHandlingDemo from "./components/EventHandlingDemo";
import RenderAndCommitDemo from "./components/RenderAndCommitDemo";
import React from "react";
import SnapshotDemo from "./components/SnapshotDemo";

function App() {
  return (
    <div className="App">
      <EventHandlingDemo />
      <br />
      <br />
      <RenderAndCommitDemo />
      <br />
      <br />
      <SnapshotDemo />
    </div>
  );
}

export default App;
