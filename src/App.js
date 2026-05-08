import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import StatCard from "./components/StatCard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Optimization from "./components/Optimization";
import Recommendations from "./components/Recommendations";
import HomePage from "./components/HomePage";

function AppWrapper() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && (
        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          <Sidebar />

          {/* Right side */}
          <div style={{ flex: 1 }}>
            {/* Header */}
            <Header />

            {/* Pages */}
            <div
              style={{
                padding: "20px",
                background: "#f8fafc",
                minHeight: "100vh",
              }}
            >
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/statcard" element={<StatCard />} />
                <Route path="/optimization" element={<Optimization />} />
                <Route path="/recommendations" element={<Recommendations />} />
                <Route path="/homepage" element={<HomePage />} />
              </Routes>
            </div>
          </div>
        </div>
      )}

      {/* Without Header & Sidebar */}
      {hideLayout && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </>
  );
}

function App() {
  return <AppWrapper />;
}

export default App;
