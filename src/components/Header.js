import React from "react";
import "../assets/Header.css";
import { FaCloud } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      {/* LEFT */}
      <div className="header-left">
        <h2><FaCloud/>Cloud Cost Optimisation Platform</h2>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        

        <div className="user">
          <div className="user-text">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "600",
              }}
            >
              <span className="name">Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
