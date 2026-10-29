import {useRef} from "react"

export default function Ref(){
    const someone = useRef("")

    const handleClick = () =>{
        console.log(someone.current.value)
    }

    return <div>
        <input ref={someone} />
        <button onClick={handleClick}> enter </button>
    </div>
}