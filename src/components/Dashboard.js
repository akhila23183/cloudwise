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
  FaBoxes
} from "react-icons/fa";
 
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
 
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
    fontSize: "15px"
  };
 
  // Excel Export
  const exportToExcel = () => {
    const data = [
      ["Department","Total","Compute","Storage","Network","Database","Resources","%"],
      ["Engineering","106k","63k","22k","11k","7k","323","51%"],
      ["Data Science","67k","52k","9k","2k","2k","234","33%"],
      ["Marketing","18k","9k","4k","3k","1k","45","9%"],
      ["Finance","12k","7k","3k","1k","350","34","6%"]
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
      head: [["Department","Total","Compute","Storage","Network","Database","Resources","%"]],
      body: [
        ["Engineering","106k","63k","22k","11k","7k","323","51%"],
        ["Data Science","67k","52k","9k","2k","2k","234","33%"],
        ["Marketing","18k","9k","4k","3k","1k","45","9%"],
        ["Finance","12k","7k","3k","1k","350","34","6%"]
      ]
    });
 
    doc.save("Cost_Report.pdf");
  };
 
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
 
      {/* SIDEBAR */}
      <div style={{
        width: "270px",
        background: "#fff",
        borderRight: "1px solid #e5e7eb",
        padding: "18px"
      }}>
        <h2 style={{ color: "#2563eb", marginBottom: "25px" }}>
          <FaCloud /> Cloudwise
        </h2>
 
        <div style={menuStyle}>
          <FaChartBar /> IICL Dashboard
        </div>
 
        <div style={{ ...menuStyle, justifyContent: "space-between" }} onClick={() => setCostOpen(!costOpen)}>
          <span><FaChartBar /> Cost Analysis</span>
          {costOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
 
        {costOpen && (
          <div style={{ marginLeft: "15px" }}>
            <div style={{ ...menuStyle, background: "#2563eb", color: "#fff" }}>
              Showback & Chargeback
            </div>
            <div style={menuStyle}><FaBolt /> Reserved Instances</div>
            <div style={menuStyle}><FaCloud /> Spot Instances</div>
          </div>
        )}
 
        <div style={{ ...menuStyle, justifyContent: "space-between" }} onClick={() => setFinopsOpen(!finopsOpen)}>
          <span><FaChartBar /> FinOps Engine</span>
          {finopsOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
 
        {finopsOpen && (
          <div style={{ marginLeft: "15px" }}>
            <div style={menuStyle}>Optimization</div>
            <div style={menuStyle}>Recommendations</div>
          </div>
        )}
 
        <div style={{ ...menuStyle, justifyContent: "space-between" }} onClick={() => setResourceOpen(!resourceOpen)}>
          <span><FaCube /> Resources</span>
          {resourceOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
 
        {resourceOpen && (
          <div style={{ marginLeft: "15px" }}>
            <div style={menuStyle}><FaLayerGroup /> Applications</div>
            <div style={menuStyle}><FaExclamationTriangle /> Idle Resources</div>
          </div>
        )}
 
        <div style={{ ...menuStyle, justifyContent: "space-between" }} onClick={() => setGovOpen(!govOpen)}>
          <span><FaShieldAlt /> Governance</span>
          {govOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
 
        {govOpen && (
          <div style={{ marginLeft: "15px" }}>
            <div style={menuStyle}><FaTags /> Tags</div>
          </div>
        )}
 
        <div style={menuStyle}><FaFileAlt /> Reports</div>
        <div style={menuStyle}><FaBell /> Alerts</div>
      </div>
 
      {/* MAIN */}
      <div style={{ flex: 1, background: "#f8fafc" }}>
 
        {/* HEADER */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 25px",
          background: "#fff",
          borderBottom: "1px solid #eee"
        }}>
          <h3>Cloud Cost Optimisation Platform</h3>
 
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ position: "relative" }}>
              <FaBell />
              <span style={{
                position: "absolute",
                top: "-5px",
                right: "-8px",
                background: "red",
                color: "#fff",
                borderRadius: "50%",
                fontSize: "10px",
                padding: "2px 5px"
              }}>3</span>
            </div>
 
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                background: "#2563eb",
                color: "#fff",
                padding: "8px",
                borderRadius: "50%"
              }}>IA</div>
              <p>IICL Admin</p>
            </div>
          </div>
        </div>
 
        {/* CONTENT */}
        <div style={{ padding: "25px" }}>
 
          {/* Title + Export */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h2>Showback & Chargeback</h2>
              <p>Cost allocation and internal billing for Departments and teams</p>
            </div>
 
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={exportToExcel} style={{
                padding: "8px 14px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}>
                <FaFileExcel /> Export Excel
              </button>
 
              <button onClick={exportToPDF} style={{
                padding: "8px 14px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}>
                <FaFilePdf /> Export PDF
              </button>
            </div>
          </div>
 
          {/* ✅ CARDS WITH ICONS */}
          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            {[
              { title: "Total Allocated", value: "$205,222", icon: <FaDollarSign /> },
              { title: "Departments", value: "4", icon: <FaBuilding /> },
              { title: "Active Projects", value: "6", icon: <FaProjectDiagram /> },
              { title: "Total Resources", value: "636", icon: <FaBoxes /> }
            ].map((item, i) => (
              <div key={i} style={{
                flex: 1,
                background: "#a0aeb4",
                padding: "20px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                gap: "15px"
              }}>
                <div style={{
                  background: "#335bb9",
                  color: "#fff",
                  padding: "12px",
                  borderRadius: "8px"
                }}>
                  {item.icon}
                </div>
 
                <div>
                  <p style={{ margin: 0 }}>{item.title}</p>
                  <h3 style={{ margin: 0 }}>{item.value}</h3>
                </div>
              </div>
            ))}
          </div>
 
           {/* COST ALLOCATION TABLE */}
          <div style={{
            marginTop: "20px",
            background: "#fff",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h3>Cost Allocation by Department</h3>

            <table style={{
              width: "100%",
              marginTop: "10px",
              borderCollapse: "separate",
              borderSpacing: "0 10px"
            }}>
              <thead>
                <tr style={{ background: "#e7eaec" }}>
                  <th style={{ padding: "12px" }}>DEPARTMENT</th>
                  <th style={{ padding: "12px" }}>TOTALCOST</th>
                  <th style={{ padding: "12px" }}>COMPUTE</th>
                  <th style={{ padding: "12px" }}>STORAGE</th>
                  <th style={{ padding: "12px" }}>NETWORK</th>
                  <th style={{ padding: "12px" }}>DATABASE</th>
                  <th style={{ padding: "12px" }}>RESOURCES</th>
                  <th style={{ padding: "12px" }}>% OF COST</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Engineering","106k","63k","22k","11k","7k","323","51%"],
                  ["Data Science","67k","52k","9k","2k","2k","234","33%"],
                  ["Marketing","18k","9k","4k","3k","1k","45","9%"],
                  ["Finance","12k","7k","3k","1k","350","34","6%"]
                ].map((row, i) => {
                  const highlight = row[0] === "Engineering" || row[0] === "Finance";

                  return (
                    <tr key={i} style={{ background: "white" }}>
                      {row.map((cell, j) => (
                        <td key={j} style={{
                          padding: "12px",
                          textAlign: j === 0 ? "left" : "center",
                          color: j === 0
                            ? (highlight ? "#070404e5" : "#020211")
                            : "#000",
                          fontWeight: j === 0 && highlight ? "600" : "normal"
                        }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
