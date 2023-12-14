import React from "react";
import axios from "axios";


const UglyContext = React.createContext() //create context

function UglyContextProvider(props){

   
    const [uglyThings, setUglyThings] = React.useState([])
    console.log(uglyThings) //set ugly things state to an empty array

    const [formData, setFormData]= React.useState({
        title: "",
        imgUrl: "",
        description: ""

    }) //set form data state to an object with empty strings 

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)

        axios.post("https://api.vschool.io/brendaholman/thing", formData)
            .then(res => setUglyThings( prevUglyThings => [...prevUglyThings, res.data]))
            .catch(err => console.log(err))
    } //when handle submit event is submitted using axios post we are sending the formdata values saved from the handle change function below to the API, 

    React.useEffect(function(){
        axios.get("https://api.vschool.io/brendaholman/thing")
        .then(res => setUglyThings(res.data))
        .catch(err => console.log(err))
       
            
    },[]) //use effect will run as soon as the component loads (first render)
    // and On every re-render of the component since there are no dependencies in the array
    

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    } //setting formdata to values of event target and name properties

    function deleteThing(uglyId){
        axios.delete("https://api.vschool.io/brendaholman/thing/" + uglyId)
        .then(res => setUglyThings(prevUglyThings => prevUglyThings.filter(thing => thing._id !== uglyId)) )
        .catch(err => console.log(err))
    } // axios. delete request is calling api & passing uglyId as a parameter & comparing ._id if its not equal to ugly id to have it filter out

    function editThing(uglyId, update){
        axios.put("https://api.vschool.io/brendaholman/thing/" + uglyId, update)
        .then(res => setUglyThings(prevUglyThings => prevUglyThings.map(thing => thing._id !== uglyId ? thing : res.data)))
        .catch(err => console.log(err))
    }

    

    return(
        <UglyContext.Provider
        value={{
            handleChange,
            formData,
            handleSubmit,
            uglyThings,
            deleteThing,
            editThing
           
           
            
        }}>
            {props.children}

        </UglyContext.Provider>
        // within the provider we can pass values that can then be accessed by using useContext.
    )
}

export {UglyContext, UglyContextProvider}