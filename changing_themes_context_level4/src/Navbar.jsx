import React, {useContext} from "react";
import {ThemeContext} from "./themeContext"

export default function Navbar(props){

    const {color, changeTheme} = useContext(ThemeContext)
 

    return(
        <nav id="nav--container" className={`${color}-theme`}>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Blog</h1>
            <h1>Contact</h1>

            
        </nav>
        
    )
}