import {useState} from "react"
export default function CheckBox(){
   const [hobbies , setHobbies] = useState({
    reading : false,
    dancing : false,
    cricket : false
   })
    const [mess, setMess] = useState("")

    const handleSubmit = (e)=>{ 
        e.preventDefault()
        let selected = Object.keys(hobbies).filter(k=>hobbies[k] === true)
       const message = `You have selected ${selected.join(' ')}  `
        setMess(message)
    }

    const handleClick = (e)=>{
            setHobbies(prev=>  {
                return {...prev , [e.target.value] : e.target.checked }
            })
    }

     return (
    <div>
            <form onSubmit={handleSubmit}>

            Select Hobbies: <br/>
            Reading
            <input type="checkbox" onChange={handleClick} value = "reading"/> <br/>
            Dancing
            <input type="checkbox" onChange={handleClick} value = "dancing"/> <br/>
            Cricket
            <input type="checkbox" onChange={handleClick} value = "cricket"/> <br/><br/>
            <button type="submit">Ok</button>
            </form>
            <br/>
            {}
            {mess}    
      </div>
     )
} 