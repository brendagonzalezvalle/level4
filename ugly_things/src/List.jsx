import React, {useContext, useState} from "react";
import { UglyContext} from "./UglyContext";
import ListItem from "./ListItem";


export default function List(props){


    // const [isShown, setIsShown] = useState(true)
    // const [showEdit, setShowEdit] = useState(false)

    // const [form, setForm] = React.useState({
    //     title:
    //     description:

    // })

    // Create a new handle change function

    const {uglyThings} = useContext(UglyContext)
    console.log(uglyThings)

    const [toggle, setToggle] = useState(false)

    const listUglyThings = uglyThings.map(thing => {
            return (
                <ListItem thing={thing}/>
            )
    })

    // function showEditInput() {
    //     // console.log('i work')
    //     setShowEdit(prevState => !prevState)
    // }

    // function deleteMeme() {
    //     return setIsShown(prevState => !prevState)
    // }

    return(
        <div>
            <h1>List</h1>
            {listUglyThings}
            
        </div>
    )
}