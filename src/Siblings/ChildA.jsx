export default function Child({increment}){
    return <div>Increment using ChildA : <button onClick={()=>increment(p=> p+1)}>increment</button></div>
}