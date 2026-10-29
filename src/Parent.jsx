export default function Parent({children}){
    return ( <div style={{border : "2px solid orange"}}>
        <h1> THis is parent </h1>
        <h2>Child  here </h2>
        {children}
    </div>)
}