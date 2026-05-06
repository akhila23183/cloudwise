import React, { useState } from "react";
import {
  FaCloud,
  FaChartBar,
  FaChevronDown,
  FaChevronRight,
  FaBolt,
  FaCube,
  FaLayerGroup,
  FaExclamationTriangle,
  FaShieldAlt,
  FaTags,
  FaFileAlt,
  FaBell,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [costOpen, setCostOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [govOpen, setGovOpen] = useState(false);
  const [finopsOpen, setFinopsOpen] = useState(false);

  const menuStyle = {
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    borderRadius: "8px",
    marginBottom: "6px",
    fontSize: "14px",
    color: "#cbd5e1",
    transition: "all 0.2s ease",
  };

  const hoverStyle = (e) => {
    e.currentTarget.style.background = "#1e293b";
  };

  const leaveStyle = (e) => {
    e.currentTarget.style.background = "transparent";
  };

  return (
    <div
      style={{
        width: "260px",
        background: "#0f172a",
        color: "#fff",
        padding: "20px",
        height: "100vh",
      }}
    >
      {/* Logo */}
      <h2 style={{ color: "#38bdf8", marginBottom: "30px" }}>
        <FaCloud /> Cloudwise
      </h2>

      {/* Dashboard */}
      <div
        style={menuStyle}
        onMouseEnter={hoverStyle}
        onMouseLeave={leaveStyle}
      >
        <FaChartBar /> IICL Dashboard
      </div>

      {/* Cost Analysis */}
      <div
        style={{ ...menuStyle, justifyContent: "space-between" }}
        onClick={() => setCostOpen(!costOpen)}
      >
        <span>
          <FaChartBar /> Cost Analysis
        </span>
        {costOpen ? <FaChevronDown /> : <FaChevronRight />}
      </div>

      {costOpen && (
        <div style={{ marginLeft: "10px" }}>
          {/* Showback */}
          <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <div
                style={{
                  ...menuStyle,
                  background: isActive ? "#2563eb" : "transparent",
                  color: isActive ? "#fff" : "#cbd5e1",
                }}
              >
                Showback & Chargeback
              </div>
            )}
          </NavLink>

          {/* Reserved */}
          <NavLink to="/statcard" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <div
                style={{
                  ...menuStyle,
                  background: isActive ? "#2563eb" : "transparent",
                  color: isActive ? "#fff" : "#cbd5e1",
                }}
              >
                <FaBolt /> Reserved Instances
              </div>
            )}
          </NavLink>

          {/* Spot */}
          <NavLink to="/spot" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <div
                style={{
                  ...menuStyle,
                  background: isActive ? "#2563eb" : "transparent",
                  color: isActive ? "#fff" : "#cbd5e1",
                }}
              >
                <FaCloud /> Spot Instances
              </div>
            )}
          </NavLink>
        </div>
      )}

      {/* FinOps */}
      <div
        style={{ ...menuStyle, justifyContent: "space-between" }}
        onClick={() => setFinopsOpen(!finopsOpen)}
      >
        <span>
          <FaChartBar /> FinOps Engine
        </span>
        {finopsOpen ? <FaChevronDown /> : <FaChevronRight />}
      </div>

      {finopsOpen && (
        <div style={{ marginLeft: "10px" }}>
          {/* Optimization */}
          <NavLink to="/optimization" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <div
                style={{
                  ...menuStyle,
                  background: isActive ? "#2563eb" : "transparent",
                  color: isActive ? "#fff" : "#cbd5e1",
                }}
              >
                Optimization
              </div>
            )}
          </NavLink>

          {/* Recommendations */}
          <NavLink to="/recommendations" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <div
                style={{
                  ...menuStyle,
                  background: isActive ? "#2563eb" : "transparent",
                  color: isActive ? "#fff" : "#cbd5e1",
                }}
              >
                Recommendations
              </div>
            )}
          </NavLink>
        </div>
      )}
      {/* Resources */}
      <div
        style={{ ...menuStyle, justifyContent: "space-between" }}
        onClick={() => setResourceOpen(!resourceOpen)}
      >
        <span>
          <FaCube /> Resources
        </span>
        {resourceOpen ? <FaChevronDown /> : <FaChevronRight />}
      </div>

      {resourceOpen && (
        <div style={{ marginLeft: "10px" }}>
          <div style={menuStyle}>
            <FaLayerGroup /> Applications
          </div>
          <div style={menuStyle}>
            <FaExclamationTriangle /> Idle Resources
          </div>
        </div>
      )}

      {/* Governance */}
      <div
        style={{ ...menuStyle, justifyContent: "space-between" }}
        onClick={() => setGovOpen(!govOpen)}
      >
        <span>
          <FaShieldAlt /> Governance
        </span>
        {govOpen ? <FaChevronDown /> : <FaChevronRight />}
      </div>

      {govOpen && (
        <div style={{ marginLeft: "10px" }}>
          <div style={menuStyle}>
            <FaTags /> Tags
          </div>
        </div>
      )}

      {/* Bottom */}
      <div style={menuStyle}>
        <FaFileAlt /> Reports
      </div>

      <div style={menuStyle}>
        <FaBell /> Alerts
      </div>
    </div>
  );
}

export default Sidebar;
