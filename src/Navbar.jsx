import React from "react";
import { Link } from "react-router-dom";
import "./Travel.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Trippy</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/price">Pricing</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
