import {createContext, useState, useContext}  from 'react'

const UrProvider = createContext();

export default function ContextExample() {
    const [data,setData] = useState("MCA")
    return (
    <UrProvider.Provider value={{data,setData}}>
        <Comp1/>
        <Comp2/>
    </UrProvider.Provider>
    
    )
    
}

function Comp1(){
    const {setData} = useContext(UrProvider);
    return(
        <button onClick={()=> setData("Hello")}>set</button>
    )
}

function Comp2(){
     const {data} = useContext(UrProvider);
    return(
        <div> {data}</div>
    )
}