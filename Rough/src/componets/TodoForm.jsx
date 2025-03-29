import {useState} from 'react'
import {useTodo} from '../Context/TodoComp.js'
function TodoForm() {
  const [text,setText]=useState("");
    const {addTodo}=useTodo();
    const add=(e)=>{
      e.preventDefault();
      if(text.length==0) return
      addTodo({text:text,checkmark:false})
      setText("")
    }
  return (
    <div className='w-full'>
        <form onSubmit={add} className='w-full flex' >
            <input type="text" 
                className='w-full rounded-l-3xl p-1 px-2 outline-none'
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <button
            
            className='p-1 px-2 bg-blue-600 text-center
            text-white rounded-r-3xl border-2 border-black'
            // onClick={add}
            >ADD</button>
        </form>
    </div>
  )
}

export default TodoForm