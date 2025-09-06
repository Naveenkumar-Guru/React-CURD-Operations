import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import EmployeesClassComp from "./EmployeesClassComp";

const ENavbar = () => {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <Link className="navbar-brand" to="/index">
          Logo
        </Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li>
              <Link className="nav-Link" to="/index">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-Link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-Link" to="/employees">
                Employees
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/index" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employees" element={<EmployeesClassComp />} />
      </Routes>
    </Router>
  );
};

export default ENavbar;
