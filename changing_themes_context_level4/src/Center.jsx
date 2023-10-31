import React, {useContext}from "react";
import { ThemeContext } from "./themeContext";

export default function Center(props){

    const {color, changeTheme} = useContext(ThemeContext)

    return(
        <div id="center--container" className={`${color}-theme`}>
            <h2 id="center--header" style={{margin: 0}} >Click the below button to toggle the Theme!</h2>

            <img src="https://images.unsplash.com/photo-1504161586762-d87c49fa9065?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Mountains" className="center--image"/>

            <button id="container--button" onClick={changeTheme}>Click to go {color} </button>

        </div>
    )
}