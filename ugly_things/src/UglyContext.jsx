import React from "react";


const UglyContext = React.createContext()

function UglyContextProvider(props){

   
    const [uglyThings, setUglyThings] = React.useState("")

    const [formData, setFormData]= React.useState({
        title: "",
        imgUrl: "",
        description: ""

    })
    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }


    return(
        <UglyContext.Provider
        value={{
            handleChange: handleChange
        }}>
            {props.children}

        </UglyContext.Provider>
    )
}

export {UglyContext, UglyContextProvider}