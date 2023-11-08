import React from "react";

export default function Header(){
    return(
        <div>
            <form>
              
                <input type="url" placeholder="Img URL"/>
                <input type="text" placeholder="Title"/>
                <input type="text" placeholder="Description"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

// - Must have 3 input fields:
//     - Img url field (A url to an image of an ugly thing)
//     - Title field (The title of the image that the user wants to give)
//     - Description field (why the user thinks it is ugly)
// - Must have *Submit* button that submits the data