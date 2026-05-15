import React, { useState } from "react";
import axios from "axios";
import "../assets/Register.css";
import { FaCloud, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirm_password) {
      setMessage("Passwords do not match");
      return;
    }

    const payload = {
      email: form.email,
      password: form.password,
      confirm_password: form.confirm_password,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMessage(response.data.message || "Registration Successful");

      setForm({
        email: "",
        password: "",
        confirm_password: "",
      });
    } catch (error) {
      console.error(error);

      console.log(error.response?.data);

      const errorMsg = error.response?.data?.error || error.response?.data?.message || "Registration Failed";

      setMessage(errorMsg);
    }
  };

  return (
    <div className="register-wrapper">
      {/* CARD */}
      <div className="register-box">
        {/* LOGO */}
        <div className="cloud-logo">
          <FaCloud />
        </div>

        {/* TITLE */}
        <h2 className="title">Create CloudWise Account</h2>

        <p className="subtitle">Manage and optimize your cloud infrastructure efficiently.</p>

        {/* FORM */}
        <form className="register-form" onSubmit={submit}>
          {/* EMAIL */}
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              name="confirm_password"
              placeholder="Confirm Password"
              value={form.confirm_password}
              onChange={handleChange}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* BUTTON */}
          <button className="register-btn" type="submit">
            Create Account
          </button>

          {message && <p className="message">{message}</p>}

          {/* LOGIN */}
          <p className="register-para">
            Already have an account? <Link to="/">Login Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
