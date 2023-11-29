import { useState } from "react"

export default function ListItem(props){

    const {thing} = props

    const [toggle, setToggle] = useState(false)
    const [edit, setEdit] = useState({
        title: thing.title
    })

    return(
        <div>

                    {!toggle ? 
                    <div key={thing._id} className="list--container">
                        <h1>{thing.title}</h1>
                        <h3>{thing.description}</h3>
                        <img className="list--image" src={thing.imgUrl}/>
                        <button onClick={() => setToggle(prev => !prev)}>Edit</button>
                        

                    </div>
                    :
                    <div>
                        <input></input>
                        <button onClick={() => setToggle(prev => !prev)}>Delete</button>
                    </div>}
                </div>
    )
}