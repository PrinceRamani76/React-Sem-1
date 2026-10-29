import Child from "./Child"

export default function Parent() {

    const sayHello = (name)=>{
        alert("Hello",name)
    }
    return <Child sayHello={sayHello}/>
}