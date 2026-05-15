import React, { useEffect, useState } from "react";
import "../assets/HomePage.css";
import { FaUserCircle, FaCloud, FaBell } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();

  // CLIENTS STATE
  const [clients, setClients] = useState([]);

  // FILE STATE
  const [file, setFile] = useState(null);

  // USERNAME
  const email = localStorage.getItem("userEmail");

  const username = email
    ? email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)
    : "Guest";

  // LOGOUT
  const handleLogout = () => {
    localStorage.clear();

    navigate("/");
  };

  // FETCH CLIENTS
  const fetchClients = () => {
    axios
      .get("http://127.0.0.1:8000/client/client-selection/")
      .then((response) => {
        console.log(response.data);

        setClients(response.data.clients);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // PAGE LOAD
  useEffect(() => {
    fetchClients();
  }, []);

  // FILE CHANGE
  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // CSV UPLOAD
  const handleUpload = () => {
    if (!file) {
      alert("Please select CSV file");

      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    axios
      .post(
        "http://127.0.0.1:8000/client/upload/",

        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        console.log(file);

        alert("CSV Uploaded Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // OPEN DASHBOARD
  const handleClient = (clientId) => {
    localStorage.setItem("client_id", clientId);

    navigate("/dashboardclient");
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
            Welcome To Cloud FinOps Platform,
            <span> {username}</span> 👋
          </h1>
        </div>
      </div>

      {/* CSV UPLOAD */}
      <div className="upload-section">
        <h2>Upload CSV File</h2>

        <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />

        <button onClick={handleUpload}>Upload CSV</button>
      </div>

      {/* CLIENT SELECTION */}
      <div className="client-selection">
        <h1>Select Client</h1>

        <div className="client-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <h2>Client {client.client_id}</h2>

              <button onClick={() => handleClient(client.client_id)}>Open Dashboard</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
