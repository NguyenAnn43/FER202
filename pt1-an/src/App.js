import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Col } from "react-bootstrap"; // Import Row and Col for App.js

function App() {
  const students = [
    {
      name: "Nguyễn Hữu Quốc Khánh",
      id: "DE100547",
      address: "DaNang",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNZRLfTcAKl9r90vpxHVCm5jkp7swLKyz-gsEiXHUf4LvaKJy4xPKO1R52xGGTPhoegI&usqp=CAU",
    },
    {
      name: "Chu Văn Thiên",
      id: "DE100547",
      address: "HaNoi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNZRLfTcAKl9r90vpxHVCm5jkp7swLKyz-gsEiXHUf4LvaKJy4xPKO1R52xGGTPhoegI&usqp=CAU",
    },
    {
      name: "Đồ huguyên Phúc",
      id: "DE100547",
      address: "QuangTri",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNZRLfTcAKl9r90vpxHVCm5jkp7swLKyz-gsEiXHUf4LvaKJy4xPKO1R52xGGTPhoegI&usqp=CAU",
    },
    {
      name: "Là Hoàng Minh",
      id: "DE100547",
      address: "HoiAn",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNZRLfTcAKl9r90vpxHVCm5jkp7swLKyz-gsEiXHUf4LvaKJy4xPKO1R52xGGTPhoegI&usqp=CAU",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container mt-4">
        <Row>
          {" "}
          {/* Row for the cards */}
          {students.map((student, index) => (
            <Col xs={12} md={4} key={index} className="mb-4">
              {" "}
              {/* Each card takes 6 columns on medium screens */}
              <StudentCard {...student} />
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
