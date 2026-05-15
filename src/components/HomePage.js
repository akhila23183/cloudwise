import React, { useState } from "react";
import "../assets/HomePage.css";
import { FaUserCircle, FaCloud, FaBell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();

  const email = localStorage.getItem("userEmail");

  const username = email
    ? email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)
    : "Guest";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="home-page">
      {/* TOP BAR */}
      <div className="home-topbar">
        <div className="brand">
          <FaCloud className="cloud-icon" />
          <h2>Cloud Cost Optimisation</h2>
        </div>

        <div className="right-section">
          <FaBell className="icon bell-icon" />

          <div className="user-box">
            <FaUserCircle className="user-icon" />
            <span>{username}</span>
          </div>

          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-left">
          <h1>
            Welcome To Cloud FinOps Platform, <span>{username}</span> 👋
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
