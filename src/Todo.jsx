import {  useState} from "react";

export default function  Todo() {

    const [todos,setTodos] = useState([])
    const [text, setText] = useState()
    const [total, setTotal] = useState(0)
    const handleSubmit = (e)=>{
        e.preventDefault()

        if (text.trim()==""){
            return
        }else{
            setTodos((prev)=> [...prev, {text : text, isChecked : false}])
            setText("")
        }
    }

    const changeCheck = (e,idx)=>{
        let new_todos = todos.map((t,i)=> {
            if (i !== idx) return t
            else{
                if (e.target.checked)setTotal(prev=> prev+1)
                else setTotal((prev)=> prev-1)
                return {...t, isChecked : e.target.checked}
            }
        })
        setTodos(new_todos)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=> setText(e.target.value)} value={text}/><br/>
                <button type="submit" value="submit">Add</button>
            </form>

            <br/>

            {todos.map((todo, idx)=>{
                return <div key={idx}>
                <input type="checkbox"  onChange={(e)=> changeCheck(e,idx)}/> 
                <span style={{textDecoration : todo.isChecked ? "line-through" : "none"}}>
                    {todo.text} 
                </span>

                </div>
            })
        }
        <div>Task Completed : {total} </div>

        </div>
    )
}