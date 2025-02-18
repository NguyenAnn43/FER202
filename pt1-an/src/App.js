import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function App() {
  const students = [];
  return (
    <div className="App">
      <Header />
      <Container className="mt-4">
        <Row>
          {students.map((student, index) => (
            <StudentCard key={index} {...student} />
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
