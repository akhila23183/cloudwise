import React, { useState } from "react";
import "../assets/Register.css";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    tel: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registered Successfully");
  };

  return (
    <div className="register-wrapper">
      <div className="register-box">
        <form className="register-form" onSubmit={submit}>
          <h2 className="title">Please Create Account</h2>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Mobile Number</label>

            <input
              type="tel"
              name="tel"
              value={form.tel}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button className="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
