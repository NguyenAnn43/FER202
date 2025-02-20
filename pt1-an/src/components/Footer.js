import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-warning text-center py-3">
      <Container>
        <Row>
          <Col lg={4}>
            <h5>Our Address</h5>
            <p>Khu đô thị FPT Đà Nẵng</p>
            <p>
              <p>+840231 11111</p>
              <p>+852 8765 4321</p>
            </p>
            <p>
              <a href="mailto:fptudn@fpt.edu.vn">fptudn@fpt.edu.vn</a>
            </p>
          </Col>
          <Col lg={4}>{/* Có thể thêm nội dung khác ở đây */}</Col>
          <Col lg={4}>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </Col>
        </Row>
        <p className="mt-3">Copyright &copy; 2023</p>
      </Container>
    </footer>
  );
}

export default Footer;
