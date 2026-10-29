import Button from "./Button"
export default function GenralizedComp(){
    return(
        <div>
            <Button text="Ok" color="Yellow" oc={()=>alert("You pressed Ok")}/>
            <Button text="Cancel" color="red" oc={()=>alert("You pressed Cancel")}/>
            <Button text="Submit" color="Blue" oc={()=>alert("You pressed Submit")}/>
        </div>
    )
} 