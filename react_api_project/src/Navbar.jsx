import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="nav--container">
            
            <Link to="/" style={{padding: 5}} className="nav--links">Home</Link>
            <Link to="/randomDogs" style={{padding: 5}} className="nav--links">Random Dogs</Link>
            <Link to="/funFacts" style={{padding: 5}} className="nav--links">Fun Facts</Link>
        </nav>
    )
}