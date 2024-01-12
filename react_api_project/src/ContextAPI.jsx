import React from "react";
import axios from "axios";




// www.themealdb.com/api/json/v1/1/search.php?f=a

const ContextAPI = React.createContext() 

function ContextAPIProvider(props){
    
    const [recipes, setRecipes] = React.useState([])
    console.log(recipes)
    
    
    
    React.useEffect(function(){
        axios.get("https://dogapi.dog/api/v2/breeds")
        .then(res => setRecipes(res.data.data))
        .catch(err => console.log(err))
        
       
    },[]) 
    

    return(
        <div>
            <ContextAPI.Provider value={{
                recipes
            }}>
                
                {props.children}
            </ContextAPI.Provider>





        </div>
    )
}
export {ContextAPI, ContextAPIProvider}