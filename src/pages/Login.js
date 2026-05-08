import React, { useState } from "react";
import "../assets/login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaCloud, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        localStorage.setItem("userEmail", form.email);
        console.log(localStorage.getItem("userEmail"));
        navigate("/homepage");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
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
          <h2 className="title">Welcome Back 👋</h2>

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

          {/* REGISTER */}
          <p className="register-para">
            Don&apos;t have an account?{" "}
            <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
