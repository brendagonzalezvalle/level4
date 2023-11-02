import React from "react";

export default function Gradient(){
    const [color1, setColor1] = React.useState("#f0f8ff")

    const [color2, setColor2] = React.useState("#0000ff")

    React.useEffect(()=>{
        const gradientStyle = `linear-gradient(#${color1}`;
        document.getElementById("test").style.background = gradientStyle
        

    }, [color1])

    

    const [angle, setAngle]= React.useState({
        number: 0
    })

    function handleChange(){
        console.log("its'working")
        setColor1(pre)
        
    }


    return (
        <div>
            <form>
                <div className="colorBox"></div>
                <label>Color 1 </label>
                <input type="color" name="color1" value={color1} onChange={handleChange}/>
                <br/>

                <label>Color 2 </label>
                <input type="color" name="color2" value={color2} onChange={handleChange}/>
                <br/>

                <label>Angle</label>
                <input type="number" name="number" value={angle.number} onChange={handleChange} />
                <br/>

                <textarea id="test"/>
                   
            </form>
           
        </div>
    )
}