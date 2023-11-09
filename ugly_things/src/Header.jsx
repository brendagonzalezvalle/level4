import React, { useContext } from "react";
import { UglyContext} from "./UglyContext";


export default function Header(props){

    const {handleChange, formData} = useContext(UglyContext)

    // console.log(formData)
    // const [formData, setFormData]= React.useState({
    //     title: "",
    //     imgUrl: "",
    //     description: ""

    // })

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }
    

    return(
        <div>
            <form onSubmit={handleSubmit}>
              
                <input onChange={handleChange} type="url" placeholder="Img URL" name="imgUrl" value={formData.imgUrl} />
                <input onChange={handleChange} type="text" placeholder="Title" name="title" value={formData.title}/>
                <input onChange={handleChange} type="text" placeholder="Description" name="description" value={formData.description}/>
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