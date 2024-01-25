import React, { useContext } from "react";
import axios from "axios";
import { ContextAPI } from "./ContextAPI";

export default function RandomDogs(props){
    const {recipes} = useContext(ContextAPI)
    // console.log(recipes)


    const [picture, setPicture] = React.useState([])
    console.log(picture)

    React.useEffect(function(){
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(res => setPicture(res.data.message))
        .catch(err => console.log(err))
        
       
    },[]) 

    function handleChange(){
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(res => setPicture(res.data.message))
        .catch(err => console.log(err))
    }

    return(
        <div className="randomDogs--container">
            <h1>Random Dogs</h1>
            <img onClick={handleChange} className="image" src={picture}></img>
            <button className="funfacts--button" onClick={handleChange} > Click here to see a new image!</button>
        </div>
    )
}