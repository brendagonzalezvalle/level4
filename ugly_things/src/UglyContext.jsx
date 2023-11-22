import React from "react";
import axios from "axios";


const UglyContext = React.createContext()

function UglyContextProvider(props){

   
    const [uglyThings, setUglyThings] = React.useState([])
    console.log(uglyThings)

    const [formData, setFormData]= React.useState({
        title: "",
        imgUrl: "",
        description: ""

    })

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)

        axios.post("https://api.vschool.io/brendaholman/thing", formData)
            .then(res => setUglyThings( prevUglyThings => [...prevUglyThings, res.data]))
            .catch(err => console.log(err))
    }

    React.useEffect(function(){
        axios.get("https://api.vschool.io/brendaholman/thing")
        .then(res => setUglyThings(res.data))
        .catch(err => console.log(err))
       
            
    },[])
    

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    // function addToList (){
    //     console.log("add to list was clicked!!")
    //     setUglyThings(prev =>  {
    //     return [...prev, formData]
    // })
    // console.log(uglyThings)
    // }

    return(
        <UglyContext.Provider
        value={{
            handleChange: handleChange,
            formData: formData,
            handleSubmit,
            uglyThings,
           
           
            
        }}>
            {props.children}

        </UglyContext.Provider>
    )
}

export {UglyContext, UglyContextProvider}