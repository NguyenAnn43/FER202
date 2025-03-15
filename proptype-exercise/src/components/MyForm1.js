import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Alert } from "react-bootstrap";

const MyForm1 = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "Nữ",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [showGeneralError, setShowGeneralError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Xóa lỗi khi thay đổi
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Tên không được để trống!";
      isValid = false;
    } else if (formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = "Tên phải có từ 3 đến 50 ký tự!";
      isValid = false;
    }

    if (!formData.age) {
      newErrors.age = "Tuổi không được để trống!";
      isValid = false;
    } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 100) {
      newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email không được để trống!";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)
    ) {
      newErrors.email = "Email không đúng định dạng!";
      isValid = false;
    }

    if (formData.phone && !/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không đúng định dạng!";
      isValid = false;
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Bạn phải đồng ý với điều khoản!";
      isValid = false;
    }

    setErrors(newErrors);
    setShowGeneralError(!isValid);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ width: "300px", margin: "20px auto" }}
    >
      {showGeneralError && (
        <Alert variant="danger">
          Lỗi: Vui lòng kiểm tra các trường hợp lỗi.
        </Alert>
      )}

      <Form.Group controlId="formName">
        <Form.Label>Tên:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formAge">
        <Form.Label>Tuổi:</Form.Label>
        <Form.Control
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          isInvalid={!!errors.age}
        />
        <Form.Control.Feedback type="invalid">
          {errors.age}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Số điện thoại:</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formGender">
        <Form.Label>Giới tính:</Form.Label>
        <Form.Control
          as="select"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
          <option value="Khác">Khác</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formAgreeTerms">
        <Form.Check
          type="checkbox"
          name="agreeTerms"
          label="Đồng ý với điều khoản"
          checked={formData.agreeTerms}
          onChange={handleChange}
          isInvalid={!!errors.agreeTerms}
        />
        <Form.Control.Feedback type="invalid">
          {errors.agreeTerms}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Gửi
      </Button>
    </Form>
  );
};

MyForm1.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MyForm1;
