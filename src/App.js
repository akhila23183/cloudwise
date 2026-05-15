import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import StatCard from "./components/StatCard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Optimization from "./components/Optimization";
import Recommendations from "./components/Recommendations";
import HomePage from "./components/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardClients from "./components/DashboardClients";

function AppWrapper() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/" ||
    location.pathname === "/register";

  const isHomePage = location.pathname === "/homepage";

  // AUTH PAGES (NO SIDEBAR / HEADER)
  if (isAuthPage) {
    return (
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* SIDEBAR ALWAYS */}
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* HEADER ONLY FOR NON-HOMEPAGE */}
        {!isHomePage && <Header />}

        {/* PAGE CONTENT */}
        <div
          style={{
            flex: 1,
            padding: "0px",
            background: "#f8fafc",
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route
              path="/homepage"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="/dashboardclient" element={<DashboardClients/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/statcard" element={<StatCard />} />
            <Route path="/optimization" element={<Optimization />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AppWrapper;  