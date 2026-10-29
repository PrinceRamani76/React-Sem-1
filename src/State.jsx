import {useState} from 'react'
export default function State(){
    const [count,setCount] = useState(0)

    return(
        <h1> count : {count} <br/>
         <button onClick={()=> setCount(prev=> prev+1)}>inc</button>
        </h1>
    )
}