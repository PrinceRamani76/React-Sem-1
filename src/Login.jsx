import {useState} from "react"
export default function Login() {
    const [username,setUsername] = useState()
    const [password, setPassword] = useState()
    const [mess,setMess] = useState()

    const check_submit = (e)=>{
        e.preventDefault()
        if (username === "admin" && password === "123"){
            setMess("Login successful!")
        }else{
            setMess("Invalid username and password.")
        }
    } 

    return(
        <form onSubmit={check_submit}>
            <h1>Login</h1>
            <label>Username :</label>
            <input type="text"e onChange={(e)=> setUsername(e.target.value)} placeholder="Enter Username"/> <br/>
             <label>Password :</label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password"/> <br/>
            <button type="submit" value="Submit"> Submit </button><br/>
        {mess}
        </form>
    )
}