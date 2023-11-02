import React from "react";

export default function Contact(){
    return(
        <div className="contact--container">
            <h1>Contact</h1>
            <form>
                <div className="contact--inputs">
                    <input type="text" placeholder="Name"></input>
                    <input type="email" placeholder="Email"></input>

                </div>
                <textarea placeholder="Message" className="contact--message">  </textarea>
                <br/>
                <button className="contact--button">Send Message</button>
            </form>
        </div>
    )
}