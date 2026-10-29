import {useState} from "react"
export  function useSwitch(){
    const [isOn, setIsOn] = useState(false)

    const toggle = ()=>{
        setIsOn(p=>!p)
    }
    return [isOn, toggle]
} 