import React from "react";
import "../assets/Header.css";
import { FaBell } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      {/* LEFT */}
      <div className="header-left">
        <h2>Cloud Cost Optimisation Platform</h2>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        <div className="notification">
          <FaBell />
          <span>3</span>
        </div>

        <div className="user">
          <div className="avatar">IA</div>
          <div className="user-text">
            <span className="name">IICL Admin</span>
            <span className="role">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
