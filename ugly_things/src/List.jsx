import React, {useContext, useState} from "react";
import { UglyContext} from "./UglyContext";
import ListItem from "./ListItem";

// I have imported the file that context was created in. We will use a useContext() Hook that consumes the entire context (file name that has context) 

export default function List(props){


    const {uglyThings} = useContext(UglyContext)
    console.log(uglyThings) //using object destructing pull values set in context provider

    // const [toggle, setToggle] = useState(false)

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