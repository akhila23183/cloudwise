import React, { useState } from "react";
import "../assets/login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaCloud, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log("button");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", form);

      console.log("LOGIN RESPONSE:", response.data);

      if (response.status === 200) {
        setMessage(response.data.message || "Login successful");

        // ✅ safe email store (important fix)
        const email = response.data.email || response.data.user?.email || form.email;

        localStorage.setItem("isLoggedIn", "true");

        localStorage.setItem("userEmail", email);

        console.log("Saved Email:", localStorage.getItem("userEmail"));
        console.log("before");

        setForm({
          email:"",
          password:""
        })

        setTimeout(() => {
          navigate("/homepage");
        }, 500);
      }

      console.log("after");
    } catch (error) {
      console.log("Login Error:", error.response?.data || error.message);
      setMessage(error.response?.data?.error || "Login failed");
    }
  };
  return (
    <div className="login-wrapper">
      {/* LOGIN CARD */}
      <div className="login-box">
        <form onSubmit={submit} className="login-form">
          {/* CLOUD LOGO */}
          <div className="cloud-logo">
            <FaCloud />
          </div>

          {/* TITLE */}
          <h2 className="title">Welcome to Cloud Cost Optimization Services</h2>

          <p className="subtitle">Login to your CloudWise account</p>

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

          {/* PASSWORD */}
          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {/* BUTTON */}
          <button className="login-btn" type="submit">
            Login
          </button>
          {message && (
            <p
              className="login-message"
              style={{ color: message.toLowerCase().includes("success") ? "green" : "red" }}
            >
              {message}
            </p>
          )}

          {/* REGISTER */}
          <p className="register-para">
            Don&apos;t have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
