import React, { useState } from "react";
import "../assets/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <form onSubmit={submit} className="login-form">
          <h2 className="title">Welcome Back 👋</h2>
          <p className="subtitle">Login to your CloudWise account</p>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>

          <div className="actions">
            <span className="forgot">Forgot Password?</span>
          </div>

          <button className="login-btn">Login</button>
          <p className="register-para">
            If You Don't have an account please?{" "}
            <Link to="/register">Register here? </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
