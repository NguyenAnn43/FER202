import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  FormGroup,
  Navbar,
  Nav,
  FormControl,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar bg="light" expand="lg">
                <Container className="menu">
                  <Navbar.Brand>Pizza House</Navbar.Brand>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#about">About Us</Nav.Link>
                      <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Form inline>
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <img
                src="https://beslerun.com/images/news/upload/pizza-tarifi-bg-02.webp"
                alt="Pizza"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </header>

      <main>
        <Container>
          <h2>Our Menu</h2>
          <Row xs={1} md={2} lg={4}>
            <Col className="mb-4">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhVDYWVjgEL5fJKCSUe7xDXrYiQewbtG7qA&s"
                  alt="Margherita Pizza"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Margherita Pizza</h5>
                  <p className="card-text">$12.99</p>
                  <Button variant="primary">Buy</Button>
                </div>
              </div>
            </Col>
            <Col className="mb-4">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhVDYWVjgEL5fJKCSUe7xDXrYiQewbtG7qA&s"
                  alt="Margherita Pizza"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Margherita Pizza</h5>
                  <p className="card-text">$12.99</p>
                  <Button variant="primary">Buy</Button>
                </div>
              </div>
            </Col>
            <Col className="mb-4">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhVDYWVjgEL5fJKCSUe7xDXrYiQewbtG7qA&s"
                  alt="Margherita Pizza"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Margherita Pizza</h5>
                  <p className="card-text">$12.99</p>
                  <Button variant="primary">Buy</Button>
                </div>
              </div>
            </Col>
            <Col className="mb-4">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhVDYWVjgEL5fJKCSUe7xDXrYiQewbtG7qA&s"
                  alt="Margherita Pizza"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Margherita Pizza</h5>
                  <p className="card-text">$12.99</p>
                  <Button variant="primary">Buy</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <h2>Book Your Table</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter your name" />
              <Form.Control type="text" placeholder="Enter your Email" />
              <Form.Control type="text" placeholder="Enter your service" />
            </Form.Group>
            <Form>
              <Form.Control type="text" placeholder="Enter your comment" />
            </Form>
            {/* Các trường nhập liệu khác */}
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Container>
      </main>
    </div>
  );
}

export default App;
