import {useState} from "react"
export default function Radioo(){
    const [color, setColor] = useState("white")

    return(
        <h1 style={{backgroundColor : color}}>
            <br/>
             <input type="radio" name="color" value="blue" 
             onChange={(e)=> setColor(e.target.value)} />
             Blue <br/> <br/>
            <input type="radio" name="color" value="red" 
             onChange={(e)=> setColor(e.target.value)} />
             Red <br/> <br/>
               <input type="radio" name="color" value="green" 
             onChange={(e)=> setColor(e.target.value)} />
             Green <br/> <br/>
        </h1>

    )
}