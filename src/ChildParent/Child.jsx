export default function Child({sayHello}){
    return <button onClick={()=>sayHello("Abhi")}>Hello</button>
}