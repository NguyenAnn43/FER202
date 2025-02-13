import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

function SimpleWeb() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar bg="transparent" variant="dark" expand="lg">
        <Container style={{ backgroundColor: "orange" }}>
          <Row>
            <Col href="#home">
              <img
                src="https://www.senviet.art/wp-content/uploads/2021/12/fptulogo.jpg"
                alt="FPT Logo"
                width="200"
                height="100"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Nav className="justify-content-center">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <section id="about">
              <h2>About</h2>
              <p>This is the about section of the website.</p>
            </section>
          </Col>
        </Row>

        <Row>
          <Col>
            <section id="contact">
              <h2>Contact</h2>
              <p>
                For any inquiries, please contact us at example@example.com.
              </p>
            </section>
          </Col>
        </Row>
      </Container>

      <footer
        className="bg-light text-center"
        style={{ backgroundColor: "orange" }}
      >
        <p>© 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SimpleWeb;
