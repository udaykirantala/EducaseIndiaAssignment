import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { MobileContainer } from "../../components/MobileContainer/MobileContainer";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log(formData);

      alert("Login Successful");

      setFormData({
        email: "",
        password: "",
      });

      setErrors({});
      navigate('/account-settings');
    }
  };

  return (
    <MobileContainer>
      <div className="signin-container">
        <h2 className="signin-heading">
          Signin to your <br /> PopX account
        </h2>

        <p className="signin-description">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <TextField
          fullWidth
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          className="custom-textfield"
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
          className="custom-textfield"
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          className={`login-btn ${
            formData.email && formData.password ? "active-btn" : ""
          }`}
        >
          Login
        </Button>
      </div>
    </MobileContainer>
  );
};