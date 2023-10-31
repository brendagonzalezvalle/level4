import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function Footer(props){

    const {color} = useContext(ThemeContext)

    return (
        <footer  id="footer--container" className={`${color}-theme`}>
            <div id="footer--content">
                
                <h1 id="footer--city" style={{margin: 0}}> Salt Lake City, Utah </h1>
                
            </div>
        </footer>
    )
}