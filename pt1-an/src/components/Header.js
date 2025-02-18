import React from "react";
import { Navbar, Button, Form, Container, Nav, Image } from "react-bootstrap";
import "./App.css";

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">FPT University</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Trang chủ</Nav.Link>
              <Nav.Link href="#link">Ngành học</Nav.Link>
              <Nav.Link href="#link">Tuyển sinh</Nav.Link>
              <Nav.Link href="#link">Sinh viên</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Image src="holder.js/100px250" fluid />
    </div>
  );
}
export default Header;
