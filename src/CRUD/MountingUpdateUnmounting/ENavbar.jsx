import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import EmployeesClassComp from "./EmployeesClassComp";

const ENavbar = () => {
  return (
    <Router>
      <nav>
        <Link to="/index">Home</Link> | <Link to="/login">Login</Link> |{" "}
        <Link to="/employees">Employees</Link>
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
