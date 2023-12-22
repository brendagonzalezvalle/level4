import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            
            <Link to="/" style={{padding: 5}}>Home</Link>
            <Link to="/recipes" style={{padding: 5}}>Recipes</Link>
            <Link to="/ownrecipes" style={{padding: 5}}>Own Recipes</Link>
        </nav>
    )
}