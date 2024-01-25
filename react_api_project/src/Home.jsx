import React from "react";
import axios from "axios";

export default function Home(){


    const [survey, setSurvey] = React.useState([])
    console.log(survey)

    React.useEffect(function(){
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(res => setSurvey(res.data.message))
        .catch(err => console.log(err))
        
       
    },[]) 

    function handleHomeChange(){
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(res => setSurvey(res.data.message))
        .catch(err => console.log(err))
    }
    return(
        <div className="home--container">
            
            <h3 className="home-intro"> Hi , Welcome to this simple web application! This webpage is for you if you are looking to learn facts about dogs OR if you want to browse through different dog breeds. </h3>

            <h1 className="home--intro2">Welcome & Enjoy!</h1>
            
        </div>
    )
}