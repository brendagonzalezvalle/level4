import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar-container">
        <Link to="/" style={{padding: 5} } className="nav-links">Home</Link>

        <Link to="/about" style={{padding: 5} }className="nav-links" >About</Link>

        <Link to="/services" style={{padding: 5} }className="nav-links" >Services</Link>

      </nav>
    )
}