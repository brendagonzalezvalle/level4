import React, { useContext } from "react";
import { UglyContext} from "./UglyContext";
import axios from "axios";

// I have imported the file that context was created in. We will use a useContext() Hook that consumes the entire context (file name that has context) 

export default function Header(props){

    const {handleChange, formData, handleSubmit} = useContext(UglyContext) //using object destructing pull values set in context provider

   console.log(formData)

    return(
        <div className="header--container">
            <form onSubmit={handleSubmit}>
                <h1 className="header--title">Ugly Things</h1>
                <input className="header--inputs" onChange={handleChange} type="url" placeholder="Img URL" name="imgUrl" value={formData.imgUrl} />
                <input className="header--inputs" onChange={handleChange} type="text" placeholder="Title" name="title" value={formData.title}/>
                <input className="header--inputs" onChange={handleChange} type="text" placeholder="Description" name="description" value={formData.description}/>

                <div className="header--button">
                    <button >Submit</button>

                </div>
            </form>
        </div>
    )
}

// - Must have 3 input fields:
//     - Img url field (A url to an image of an ugly thing)
//     - Title field (The title of the image that the user wants to give)
//     - Description field (why the user thinks it is ugly)
// - Must have *Submit* button that submits the data