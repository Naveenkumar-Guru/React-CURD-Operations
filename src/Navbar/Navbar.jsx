import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link className="navbar-brand" to="/index">
          Logo
        </Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/index">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/index" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
      </Switch>
    </Router>
  );
};

export default Navbar;
