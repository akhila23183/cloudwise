import React, { useState } from "react";
import "../assets/StatCard.css";

/* ---------- Stat Card ---------- */
const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="stat-card">
      <div>
        <p className="stat-title">{title}</p>
        <h2 className="stat-value" style={{ color }}>
          {value}
        </h2>
      </div>
      <div className="stat-icon">{icon}</div>
    </div>
  );
};

/* ---------- Reusable Card ---------- */
const Card = ({ data }) => {
  return (
    <div className="instance-card">
      <div className="instance-header">
        <div>
          <h3>{data.name}</h3>
          <p className="sub-text">
            {data.os} • {data.region}
          </p>
        </div>
        <span className="status">ACTIVE</span>
      </div>

      <div className="progress-section">
        <div className="progress-top">
          <span>Utilization</span>
          <span>{data.utilization}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${data.utilization}%` }}
          ></div>
        </div>
      </div>

      <div className="info-grid">
        <div>
          <p>Monthly Savings</p>
          <h4 className="green">{data.savings}</h4>
        </div>
        <div>
          <p>Term</p>
          <h4>{data.term}</h4>
        </div>
        <div>
          <p>Expires In</p>
          <h4>{data.expiresIn}</h4>
        </div>
        <div>
          <p>Purchased</p>
          <h4>{data.purchased}</h4>
        </div>
      </div>
    </div>
  );
};

/* ---------- Dashboard ---------- */
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("ri"); // ✅ single state

  const instances = [
    {
      name: "m5.2xlarge × 10",
      os: "Linux/UNIX",
      region: "us-east-1",
      utilization: 98.5,
      savings: "$8,900.00",
      term: "1-year • Partial Upfront",
      expiresIn: "83 days",
      purchased: "2025-06-15",
    },
    {
      name: "r5.xlarge × 5",
      os: "Linux/UNIX",
      region: "us-west-2",
      utilization: 87.3,
      savings: "$15,600.00",
      term: "3-year • All Upfront",
      expiresIn: "617 days",
      purchased: "2024-01-10",
    },
  ];

  const savings = [
    {
      name: "Savings Plan A",
      os: "Linux",
      region: "ap-south-1",
      utilization: 95,
      savings: "$12,000.00",
      term: "1-year",
      expiresIn: "120 days",
      purchased: "2025-01-01",
    },
  ];
  const Recommendations = [
    {
      name: "Savings Plan A",
      os: "Linux",
      region: "ap-south-1",
      utilization: 98,
      savings: "$12,000.00",
      term: "1-year",
      expiresIn: "120 days",
      purchased: "2025-01-01",
    },
    {
      name: "Savings Plan A",
      os: "Linux",
      region: "ap-south-1",
      utilization: 91,
      savings: "$12,000.00",
      term: "1-year",
      expiresIn: "120 days",
      purchased: "2025-01-01",
    },
  ];

  return (
    <div className="dashboard">
      <h1>Reserved Instances & Savings Plans</h1>
      <p className="subtitle">
        Manage commitments, track utilization, and optimize savings
      </p>

      {/* Stats */}
      <div className="stats">
        <StatCard
          title="Total Savings"
          value="$80,240.00"
          color="green"
          icon="💰"
        />
        <StatCard title="RI Utilization" value="83.7%" color="blue" icon="📊" />
        <StatCard
          title="SP Utilization"
          value="94.1%"
          color="purple"
          icon="⚡"
        />
        <StatCard title="SP Coverage" value="81.8%" color="indigo" icon="🛡️" />
        <StatCard title="Expiring Soon" value="1" color="red" icon="⚠️" />
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "ri" ? "active" : ""}
          onClick={() => setActiveTab("ri")}
        >
          Reserved Instances
        </button>

        <button
          className={activeTab === "sp" ? "active" : ""}
          onClick={() => setActiveTab("sp")}
        >
          Savings Plans
        </button>

        <button
          className={activeTab === "rec" ? "active" : ""}
          onClick={() => setActiveTab("rec")}
        >
          Recommendations
        </button>
      </div>

      {/* Content */}
      <div className="tab-content">
        {activeTab === "ri" && (
          <>
            <h2>Reserved Instances</h2>
            {instances.map((item, i) => (
              <Card key={i} data={item} />
            ))}
          </>
        )}

        {activeTab === "sp" && (
          <>
            <h2>Savings Plans</h2>
            {savings.map((item, i) => (
              <Card key={i} data={item} />
            ))}
          </>
        )}

        {activeTab === "rec" && (
          <>
            <h2>Recommendations</h2>
            {Recommendations.map((item, i) => (
              <Card key={i} data={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
