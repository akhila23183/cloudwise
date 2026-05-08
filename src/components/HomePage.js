import React from "react";
import "../assets/HomePage.css";

const HomePage = () => {
  const email = localStorage.getItem("userEmail");

  const username = email
    ? email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)
    : "Guest";

  return (
    <div className="home-page">
      <h1>Welcome {username} 👋</h1>
    </div>
  );
};

export default HomePage;
