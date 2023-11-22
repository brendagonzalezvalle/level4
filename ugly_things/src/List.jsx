import React, {useContext} from "react";
import { UglyContext} from "./UglyContext";


export default function List(props){

    const {uglyThings} = useContext(UglyContext)
    console.log(uglyThings)

    const listUglyThings = uglyThings.map(thing => {
            return (
                <div key={thing._id} className="list--container">
                    <h1>{thing.title}</h1>
                    <h3>{thing.description}</h3>
                    <img className="list--image" src={thing.imgUrl}/>

                </div>
               

            )
    })
    return(
        <div>
            <h1>List</h1>
            {listUglyThings}
        </div>
    )
}