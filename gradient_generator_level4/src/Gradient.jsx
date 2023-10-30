import React from "react";

export default function Gradient(){
    const [color1, setColor1] = React.useState("")

    const [color2, setColor2] = React.useState("")

    const [color3, setColor3] = React.useState("")

    const [angle, setAngle]= React.useState({
        number: 0
    })


    return (
        <div>
            <form>
                <label>Color 1 </label>
                <input type="color" name="color1" value={color1}/>
                <br/>

                <label>Color 2 </label>
                <input type="color" name="color2" value={color2}/>
                <br/>

                <label>Color 3 </label>
                <input type="color" name="color3" value={color3}/>
                <br/>

                <label>Angle</label>
                <input type="number" name="number" value={angle.number} />
                <br/>

                <textarea>
                    Text goes here!
                </textarea>
            </form>
           
        </div>
    )
}