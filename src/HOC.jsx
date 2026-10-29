export default function HOC(){

    const Greeting = ({name}) => <h1>Hello {name}</h1>;

    const withBorder = (Wrapped)=>{
        return (props)=>{
            return(
                <div style={{border : "2px solid blue"}} >

            <Wrapped {...props} />
            </div>
            )
        }
    }

    const GreetingWithBorder = withBorder(Greeting)

    return(
        <>

        <Greeting name="Abhi"/>
          <GreetingWithBorder name="shek"/>
          </>
    )
}