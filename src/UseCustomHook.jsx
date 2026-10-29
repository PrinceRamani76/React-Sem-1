import {useSwitch} from "./CustomHook"

export default function UseCustomHook(){
    const [ isOn, toggle] = useSwitch()
    return (
        <div>
            <div>
                isOn : {isOn? "ON" : "OFF"}
                </div>
            <button onClick={toggle} > toggle</button>
        </div>
    )
}