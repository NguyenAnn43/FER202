import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function MyForm1() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [terms, setTerms] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [genderValid, setGenderValid] = useState(false);
  const [countryValid, setCountryValid] = useState(false);
  const [termsValid, setTermsValid] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    const isValidName = name.length >= 3;
    setNameValid(isValidName);

    const isValidGender = gender !== "";
    setGenderValid(isValidGender);

    const isValidCountry = country !== "";
    setCountryValid(isValidCountry);

    const isValidTerms = terms;
    setTermsValid(isValidTerms);

    setSubmitDisabled(
      !isValidName || !isValidGender || !isValidCountry || !isValidTerms
    );
  }, [name, gender, country, terms]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isValid={nameValid}
                isInvalid={!nameValid}
              />
              <Form.Control.Feedback type="invalid">
                Name must be at least 3 characters long.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <div className="d-flex">
                <Form.Check
                  type="radio"
                  label="Male"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                  isValid={genderValid}
                  isInvalid={!genderValid}
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                  isValid={genderValid}
                  isInvalid={!genderValid}
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="gender"
                  id="other"
                  value="other"
                  onChange={(e) => setGender(e.target.value)}
                  isValid={genderValid}
                  isInvalid={!genderValid}
                />
              </div>
              <Form.Control.Feedback type="invalid">
                Please select a gender.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                isValid={countryValid}
                isInvalid={!countryValid}
              >
                <option value="">Select a country</option>
                <option value="daNang">Đà Nẵng</option>
                <option value="hcm">Hồ Chí Minh</option>
                <option value="haNoi">Hà Nội</option>
                {/* Add more countries here */}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a country.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicTerms">
              <Form.Check
                type="checkbox"
                label="I agree to the terms and conditions"
                onChange={(e) => setTerms(e.target.checked)}
                isValid={termsValid}
                isInvalid={!termsValid}
              />
              <Form.Control.Feedback type="invalid">
                You must agree to the terms and conditions.
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

export default MyForm1;
