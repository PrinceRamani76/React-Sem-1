import ChildA from "./ChildA"
import ChildB from "./ChildB"

import {useState} from "react"

export default function Parent() {

    const [count, setCount] = useState(0)

    const sayHello = ()=>{
        alert("Hello")
    }
    return <><ChildA increment={setCount}/>
    <ChildB count={count}/></>
}