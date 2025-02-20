import React from "react";
import { Navbar, Container, Nav, Row, Image } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Row>
        <Navbar bg="warning" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQof9jvRs74TPZKrK8eTYU-C7yRIUDkDW9DcA&s" // Thay thế bằng đường dẫn tới logo của bạn
                alt="FPT Education Logo"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {" "}
                {/* Đẩy các liên kết sang phải */}
                <Nav.Link href="#home">Trang chủ</Nav.Link>
                <Nav.Link href="#major">Ngành học</Nav.Link>
                <Nav.Link href="#admission">Tuyển sinh</Nav.Link>
                <Nav.Link href="#student">Sinh viên</Nav.Link>
              </Nav>
              {/* Form tìm kiếm */}
              <form className="form-inline ml-auto">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQsdTr7bEmD_XIqdSqJxSikBZygd3uEhDRw&s/100px250"
          fluid
        />
      </Row>
    </div>
  );
}

export default Header;
