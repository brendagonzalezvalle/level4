import React from "react";
import axios from "axios";


export default function FunFacts(){

    const [funFacts, setFunFacts] = React.useState([])
    console.log(funFacts)

    React.useEffect(function(){
        axios.get("https://dogapi.dog/api/v1/facts")
        .then(res => setFunFacts(res.data.facts))
        .catch(err => console.log(err))
        
       
    },[]) 

    function handleFunFactChange(){
        axios.get("https://dogapi.dog/api/v1/facts")
        .then(res => setFunFacts(res.data.facts))
        .catch(err => console.log(err))
    }


    return(
        <div className="funfacts--container">
            <p className="funfacts--intro">Our dogs have always been our most loyal companions, so it's only natural that we want to know as much as we can about them. Stay on this page to learn more about dogs! </p>
            <h1 className="funfacts--randomizer">{funFacts}</h1>
            <button className="funfacts--button" onClick={handleFunFactChange} > Click here for a new fun fact!</button>
        </div>
    )
}