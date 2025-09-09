import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "../CRUD/MountingUpdateUnmounting/Home";
import Admin from "./Components/Admin";

const SampleNavbar = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
          <Link className="navbar-brand" to="/index">
            Logo
          </Link>
          <div className="nav ml-auto">
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link  " to="/index">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/index" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="*"
            element={
              <h1
                style={{
                  color: "blue",
                  display: "flex",
                  justifyContent: "center",
                  padding: "250px",
                }}
              >
                404 Error
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default SampleNavbar;
