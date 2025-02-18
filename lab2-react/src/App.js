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
  Card,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar bg="light" data-bs-theme="light">
                <Container>
                  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <br></br>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <br></br>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <br></br>
                  </Nav>
                </Container>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Image
                src="https://beslerun.com/images/news/upload/pizza-tarifi-bg-02.webp/100px250"
                fluid
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
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhVDYWVjgEL5fJKCSUe7xDXrYiQewbtG7qA&s/100px180"
                />
                <Card.Body>
                  <Card.Title>Margherita Pizza</Card.Title>
                  <Card.Text>$12.99</Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhVDYWVjgEL5fJKCSUe7xDXrYiQewbtG7qA&s/100px180"
                />
                <Card.Body>
                  <Card.Title>Margherita Pizza</Card.Title>
                  <Card.Text>$12.99</Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhVDYWVjgEL5fJKCSUe7xDXrYiQewbtG7qA&s/100px180"
                />
                <Card.Body>
                  <Card.Title>Margherita Pizza</Card.Title>
                  <Card.Text>$12.99</Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhVDYWVjgEL5fJKCSUe7xDXrYiQewbtG7qA&s/100px180"
                />
                <Card.Body>
                  <Card.Title>Margherita Pizza</Card.Title>
                  <Card.Text>$12.99</Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
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
