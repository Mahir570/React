import React, { useState } from 'react'
import { useTodo } from '../Context/TodoComp'

function TodoContent({todo}) {
     const {deleteTodo,updateTodo,togleTodo}=useTodo()
    const [text,setText]=useState(todo.text)
    const [editable,seEditable]=useState(false);
    const [checked,setChecked]=useState(false);
    const check=()=>{
        togleTodo(todo.id);
        setChecked((prev)=>!prev);
    }
    const update=()=>{
        updateTodo(todo.id,{...todo,text:text});
        seEditable(false);
    }

  return (
    <div className={`flex w-full mt-4 border-2 border-black p-2 rounded-3xl  bg-orange-100 ${todo.checkmark?"bg-pink-400":"bg-amber-200"}`}>
        <input type="checkbox"
        className=''
        checked={todo.checkmark}
        onChange={check}
        />
        <input type="text"
        className={`w-full mx-3 py-1 px-3 rounded-3xl border-2 border-black ${todo.checkmark?"line-through":""}`}
        value={text}
        onChange={(e)=>setText(e.target.value)}
        readOnly={!editable}
        disabled={todo.checkmark}
        />
        <button
        className='border-4 border-red-600 p-1 bg-black rounded-full'
        onClick={()=>{
            if(checked) return 
            if(editable){
                update();
            }
            else{
               seEditable((prev)=>!prev) 
            }
        }}
        >
        {editable ? "📁" : "✏️"}
        </button>
        <button
        className='mx-2 border-4 border-red-600 rounded-full px-1 bg-black'
        onClick={(e)=>{deleteTodo(todo.id)}}
        >
            {"❌"}
        </button>
    </div>
  )
}

export default TodoContent