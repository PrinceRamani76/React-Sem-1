import Child from "./Child"

export default function Parent() {

    const sayHello = ()=>{
        alert("Hello")
    }
    return <Child sayHello={sayHello}/>
}