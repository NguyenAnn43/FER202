import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

function MyForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    const isValidEmail = validateEmail(email);
    setEmailValid(isValidEmail);
    setEmailErrorMessage(
      isValidEmail ? "" : "Email không hợp lệ. Vui lòng nhập lại"
    );

    const isValidPassword = password.length >= 8;
    setPasswordValid(isValidPassword);
    setPasswordErrorMessage(
      isValidPassword ? "" : "Mật khẩu phải có ít nhất 8 ký tự"
    );

    setSubmitDisabled(!isValidEmail || !isValidPassword);
  }, [email, password]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isValid={emailValid}
                isInvalid={!emailValid}
              />
              <Form.Control.Feedback type="invalid">
                {emailErrorMessage}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isValid={passwordValid}
                isInvalid={!passwordValid}
              />
              <Form.Control.Feedback type="invalid">
                {passwordErrorMessage}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={submitDisabled}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default MyForm;
