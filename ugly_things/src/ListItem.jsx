import { useState, useContext } from "react"
import { UglyContext } from "./UglyContext"

export default function ListItem(props){

    const{deleteThing, editThing} = useContext(UglyContext)

    const {thing} = props

    const [toggle, setToggle] = useState(false)

    const [edit, setEdit] = useState({
        title: thing.title,
        imgUrl: thing.imgUrl,
        description: thing.description
    })

    function handleChange(event) {
        setEdit(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

console.log(edit)

 function handleSubmit(e){
    e.preventDefault()

    editThing(thing._id, edit)
    setToggle(prev => !prev)
 }

    return(
        <div>

                    {!toggle ? 
                    <div key={thing._id} className="list--container">
                        <h1>{thing.title}</h1>
                        <h3>{thing.description}</h3>
                        <img className="list--image" src={thing.imgUrl}/>
                        <button onClick={() => setToggle(prev => !prev)} className="listItemButtons">Edit</button>
                        <button onClick={() => deleteThing(thing._id)} className="listItemButtons">Delete</button>

                    </div>
                    :
                    <form className="listItemForm" onSubmit={handleSubmit}>
                        <input
                        value={edit.title}
                        name="title"
                        onChange={handleChange}
                        
                        />
                        <input
                        value={edit.description}
                        name="description"
                        onChange={handleChange}
                        />

                        <input
                        value={edit.imgUrl}
                        name="imgUrl"
                        onChange={handleChange}
                        />

                        <button className="listItemButtons" >Save</button>
                    </form>}
                </div>
    )
}