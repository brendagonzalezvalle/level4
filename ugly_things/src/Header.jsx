import React, { useContext } from "react";
import { UglyContext} from "./UglyContext";


export default function Header(props){

    const {handleChange} = useContext(UglyContext)

    // console.log(handleChange)
    // const [formData, setFormData]= React.useState({
    //     title: "",
    //     imgUrl: "",
    //     description: ""

    // })

   
    

    return(
        <div>
            <form>
              
                <input onChange={handleChange} type="url" placeholder="Img URL" name="imgURL"/>
                <input onChange={handleChange} type="text" placeholder="Title" name="title"/>
                <input onChange={handleChange} type="text" placeholder="Description" name="description"/>
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