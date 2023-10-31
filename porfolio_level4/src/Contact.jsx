import React from "react";

export default function Contact(){
    return(
        <div>
            <h1>Get In Touch</h1>
            <form>
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
                <input type="text" placeholder="Message"></input>
                <button>Send Message</button>
            </form>
        </div>
    )
}