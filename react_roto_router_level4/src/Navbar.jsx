import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
        <Link to="/" style={{padding: 5} }>Home</Link>

        <Link to="/about" style={{padding: 5} } >About</Link>

        <Link to="/services" style={{padding: 5} } >Services</Link>

      </nav>
    )
}