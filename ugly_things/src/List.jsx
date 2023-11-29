import React, {useContext, useState} from "react";
import { UglyContext} from "./UglyContext";
import ListItem from "./ListItem";


export default function List(props){


    const {uglyThings} = useContext(UglyContext)
    console.log(uglyThings)

    const [toggle, setToggle] = useState(false)

    const listUglyThings = uglyThings.map(thing => {
            return (
                <ListItem 
                key={thing._id}
                thing={thing}/>
            )
    })


    return(
        <div>
            
            {listUglyThings}
            
        </div>
    )
}