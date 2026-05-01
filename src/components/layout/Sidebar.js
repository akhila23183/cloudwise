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
  FaBell
} from "react-icons/fa";

function Sidebar() {
  const [costOpen, setCostOpen] = useState(true);
  const [resourceOpen, setResourceOpen] = useState(true);
  const [govOpen, setGovOpen] = useState(false);
  const [finopsOpen, setFinopsOpen] = useState(false);

  const menuStyle = {
    padding: "12px 14px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    borderRadius: "10px",
    marginBottom: "6px",
    fontSize: "15px"
  };

  return (
    <div
      style={{
        width: "270px",
        background: "#ffffff",
        borderRight: "1px solid #e5e7eb",
        padding: "18px",
        height: "100vh"
      }}
    >
      {/* Logo */}
      <h2 style={{ color: "#2563eb", marginBottom: "25px" }}>
        <FaCloud /> Cloudwise
      </h2>

      {/* Dashboard */}
      <div style={menuStyle}>
        <FaChartBar /> IICL Dashboard
      </div>

      {/* Cost Analysis */}
      <div
        style={{ ...menuStyle, justifyContent: "space-between" }}
        onClick={() => setCostOpen(!costOpen)}
      >
        <span><FaChartBar /> Cost Analysis</span>
        {costOpen ? <FaChevronDown /> : <FaChevronRight />}
      </div>

      {costOpen && (
        <div style={{ marginLeft: "15px" }}>
          <div
            style={{
              ...menuStyle,
              background: "#2563eb",
              color: "white"
            }}
          >
            Showback & Chargeback
          </div>

          <div style={menuStyle}>
            <FaBolt /> Reserved Instances
          </div>

          <div style={menuStyle}>
            <FaCloud /> Spot Instances
          </div>
        </div>
      )}

      {/* ✅ FinOps Engine */}
      <div
        style={{ ...menuStyle, justifyContent: "space-between" }}
        onClick={() => setFinopsOpen(!finopsOpen)}
      >
        <span><FaChartBar /> FinOps Engine</span>
        {finopsOpen ? <FaChevronDown /> : <FaChevronRight />}
      </div>

      {finopsOpen && (
        <div style={{ marginLeft: "15px" }}>
          <div style={menuStyle}>Optimization</div>
          <div style={menuStyle}>Recommendations</div>
        </div>
      )}

      {/* Resources */}
      <div
        style={{ ...menuStyle, justifyContent: "space-between" }}
        onClick={() => setResourceOpen(!resourceOpen)}
      >
        <span><FaCube /> Resources</span>
        {resourceOpen ? <FaChevronDown /> : <FaChevronRight />}
      </div>

      {resourceOpen && (
        <div style={{ marginLeft: "15px" }}>
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
        <span><FaShieldAlt /> Governance</span>
        {govOpen ? <FaChevronDown /> : <FaChevronRight />}
      </div>

      {govOpen && (
        <div style={{ marginLeft: "15px" }}>
          <div style={menuStyle}>
            <FaTags /> Tags
          </div>
        </div>
      )}

      {/* Bottom Items */}
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
