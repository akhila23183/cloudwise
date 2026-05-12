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
  FaFileExcel,
  FaFilePdf,
  FaDollarSign,
  FaBuilding,
  FaProjectDiagram,
  FaBoxes,
} from "react-icons/fa";

import * as XLSX from "xlsx";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
import "../assets/Dashboard.css";

function Dashboard() {
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
    fontSize: "15px",
  };

  // Excel Export
  const exportToExcel = () => {
    const data = [
      [
        "Department",
        "Total",
        "Compute",
        "Storage",
        "Network",
        "Database",
        "Resources",
        "%",
      ],
      ["Engineering", "106k", "63k", "22k", "11k", "7k", "323", "51%"],
      ["Data Science", "67k", "52k", "9k", "2k", "2k", "234", "33%"],
      ["Marketing", "18k", "9k", "4k", "3k", "1k", "45", "9%"],
      ["Finance", "12k", "7k", "3k", "1k", "350", "34", "6%"],
    ];

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    XLSX.writeFile(wb, "Cost_Report.xlsx");
  };

  // PDF Export
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Cost Allocation Report", 14, 10);

    doc.autoTable({
      head: [
        [
          "Department",
          "Total",
          "Compute",
          "Storage",
          "Network",
          "Database",
          "Resources",
          "%",
        ],
      ],
      body: [
        ["Engineering", "106k", "63k", "22k", "11k", "7k", "323", "51%"],
        ["Data Science", "67k", "52k", "9k", "2k", "2k", "234", "33%"],
        ["Marketing", "18k", "9k", "4k", "3k", "1k", "45", "9%"],
        ["Finance", "12k", "7k", "3k", "1k", "350", "34", "6%"],
      ],
    });

    doc.save("Cost_Report.pdf");
  };

  return (
    <div className="main-container">
      <div className="content">
        <div className="container">
          {/* TITLE */}
          <div className="title-bar">
            <div>
              <h2>Showback & Chargeback</h2>
              <p>
                Cost allocation and internal billing for Departments and teams
              </p>
            </div>

            <div className="export-buttons">
              <button onClick={exportToExcel} className="btn-primary">
                <FaFileExcel /> Export Excel
              </button>

              <button onClick={exportToPDF} className="btn-secondary">
                <FaFilePdf /> Export PDF
              </button>
            </div>
          </div>

          {/* FILTER */}
          <section className="filter-section">
            <div className="filter-row">
              <div className="filter-group">
                <h6>Billing Period</h6>
                <input type="date" className="input" />
              </div>

              <div className="filter-group">
                <h6>View By</h6>
                <select className="select">
                  <option>Department</option>
                  <option>Services</option>
                </select>
              </div>

              <div className="filter-group">
                <h6>Department Filter</h6>
                <select className="select">
                  <option>All Departments</option>
                  <option>Engineering</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>
          </section>

          {/* CARDS */}
          <div className="card-container">
            {[
              {
                title: "Total Allocated",
                value: "$205,222",
                icon: <FaDollarSign />,
              },
              { title: "Departments", value: "4", icon: <FaBuilding /> },
              {
                title: "Active Projects",
                value: "6",
                icon: <FaProjectDiagram />,
              },
              { title: "Total Resources", value: "636", icon: <FaBoxes /> },
            ].map((item, i) => (
              <div key={i} className="card">
                <div className="card-icon">{item.icon}</div>
                <div>
                  <p>{item.title}</p>
                  <h3>{item.value}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* TABLE */}
          <div className="table-container">
            <h3>Cost Allocation by Department</h3>

            <table className="table">
              <thead>
                <tr>
                  <th>DEPARTMENT</th>
                  <th>TOTAL</th>
                  <th>COMPUTE</th>
                  <th>STORAGE</th>
                  <th>NETWORK</th>
                  <th>DATABASE</th>
                  <th>RESOURCES</th>
                  <th>%</th>
                </tr>
              </thead>

              <tbody>
                {[
                  [
                    "Engineering",
                    "106k",
                    "63k",
                    "22k",
                    "11k",
                    "7k",
                    "323",
                    "51%",
                  ],
                  [
                    "Data Science",
                    "67k",
                    "52k",
                    "9k",
                    "2k",
                    "2k",
                    "234",
                    "33%",
                  ],
                  ["Marketing", "18k", "9k", "4k", "3k", "1k", "45", "9%"],
                  ["Finance", "12k", "7k", "3k", "1k", "350", "34", "6%"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
