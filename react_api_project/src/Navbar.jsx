import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="nav--container">
            
            <Link to="/" style={{padding: 5}}>Home</Link>
            <Link to="/randomDogs" style={{padding: 5}}>Random Dogs</Link>
            <Link to="/funFacts" style={{padding: 5}}>Fun Facts</Link>
        </nav>
    )
}