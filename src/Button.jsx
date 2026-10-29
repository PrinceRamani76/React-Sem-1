export default function Button({color, text, oc}){
    return <button onClick={oc} style={{backgroundColor : color}}>{text}</button>
}