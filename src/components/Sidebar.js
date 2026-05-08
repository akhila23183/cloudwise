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
import "../assets/Sidebar.css";

function Sidebar() {
  const [costOpen, setCostOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [govOpen, setGovOpen] = useState(false);
  const [finopsOpen, setFinopsOpen] = useState(false);


  return (
    <>
      <div className="sidebar">
        {/* LOGO */}
        <div className="sidebar-logo">
          <div className="logo-icon">
            <FaCloud />
          </div>

          <div className="logo-text">
            <h2>Cloudwise</h2>
            <span>CLOUD FINOPS PLATFORM</span>
          </div>
        </div>

        {/* DASHBOARD */}
        <div className="menu-item">
          <div className="menu-left">
            <FaChartBar className="blue-icon" />
            IICL Dashboard
          </div>
        </div>

        {/* COST ANALYSIS */}
        <div className="menu-item" onClick={() => setCostOpen(!costOpen)}>
          <div className="menu-left">
            <FaChartBar className="blue-icon" />
            Cost Analysis
          </div>

          {costOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>

        {costOpen && (
          <div className="submenu">
            {/* SHOWBACK */}
            <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <div className={`menu-item ${isActive ? "active-menu" : ""}`}>
                  <div className="menu-left">
                    <FaChartBar className="blue-icon" />
                    Showback & Chargeback
                  </div>
                </div>
              )}
            </NavLink>

            {/* RESERVED */}
            <NavLink to="/statcard" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <div className={`menu-item ${isActive ? "active-menu" : ""}`}>
                  <div className="menu-left">
                    <FaBolt className="yellow-icon" />
                    Reserved Instances
                  </div>
                </div>
              )}
            </NavLink>

            {/* SPOT */}
            <NavLink to="/spot" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <div className={`menu-item ${isActive ? "active-menu" : ""}`}>
                  <div className="menu-left">
                    <FaCloud className="blue-icon" />
                    Spot Instances
                  </div>
                </div>
              )}
            </NavLink>
          </div>
        )}

        {/* FINOPS */}
        <div className="menu-item" onClick={() => setFinopsOpen(!finopsOpen)}>
          <div className="menu-left">
            <FaChartBar className="blue-icon" />
            FinOps Engine
          </div>

          {finopsOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>

        {finopsOpen && (
          <div className="submenu">
            {/* OPTIMIZATION */}
            <NavLink to="/optimization" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <div className={`menu-item ${isActive ? "active-menu" : ""}`}>
                  <div className="menu-left">
                    <FaBolt className="yellow-icon" />
                    Optimization
                  </div>
                </div>
              )}
            </NavLink>

            {/* RECOMMENDATIONS */}
            <NavLink to="/recommendations" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <div className={`menu-item ${isActive ? "active-menu" : ""}`}>
                  <div className="menu-left">
                    <FaCloud className="blue-icon" />
                    Recommendations
                  </div>
                </div>
              )}
            </NavLink>
          </div>
        )}

        {/* RESOURCES */}
        <div
          className="menu-item"
          onClick={() => setResourceOpen(!resourceOpen)}
        >
          <div className="menu-left">
            <FaCube className="blue-icon" />
            Resources
          </div>

          {resourceOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>

        {resourceOpen && (
          <div className="submenu">
            <div className="menu-item">
              <div className="menu-left">
                <FaLayerGroup className="green-icon" />
                Applications
              </div>
            </div>

            <div className="menu-item">
              <div className="menu-left">
                <FaExclamationTriangle className="orange-icon" />
                Idle Resources
              </div>
            </div>
          </div>
        )}

        {/* GOVERNANCE */}
        <div className="menu-item" onClick={() => setGovOpen(!govOpen)}>
          <div className="menu-left">
            <FaShieldAlt className="blue-icon" />
            Governance
          </div>

          {govOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>

        {govOpen && (
          <div className="submenu">
            <div className="menu-item">
              <div className="menu-left">
                <FaTags className="purple-icon" />
                Tags
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM */}
        <div className="menu-item">
          <div className="menu-left">
            <FaFileAlt className="blue-icon" />
            Reports
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-left">
            <FaBell className="alert-icon" />
            Alerts
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
