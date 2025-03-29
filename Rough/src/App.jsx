import { useState } from 'react'
import {useTodo,TodoComponent} from './Context/TodoComp'
import { useEffect } from 'react'
import TodoForm from './componets/TodoForm'
import TodoContent from './componets/TodoContent'
function App() {
  const [todo, setTodo] = useState([])

  const addTodo=(newtodo)=>{
      setTodo((prev)=>[{id:Date.now(),...newtodo},...prev])
  }
  const updateTodo=(id,updatetodo)=>{
      setTodo((prev)=>prev.map((prevtodo)=>{
        if(prevtodo.id==id) return updatetodo
        return prevtodo
      }))
  }
  const deleteTodo=(id)=>{
    setTodo((prev)=>prev.filter((prevtodo)=>prevtodo.id!=id))
  }
  const togleTodo=(id)=>{
    setTodo((prev)=>prev.map((prevtodo)=>{
      if(prevtodo.id==id){
        return {...prevtodo,checkmark:!prevtodo.checkmark}
      }
      return prevtodo
    }))
  }
  console.log(todo)
  useEffect(()=>{
    const nt=JSON.parse(localStorage.getItem("todos"))
    if(nt!=null){
      setTodo(nt);
    }
  },[])
  useEffect(()=>{
    if(todo.length>0 || todo==null){
      localStorage.setItem("todos",JSON.stringify(todo))

    }
  },[todo])

  return (
    <TodoComponent value={{todo,addTodo,deleteTodo,togleTodo,updateTodo}}>
      <div className='w-full min-h-screen bg-slate-400
      space-y-10 p-5'>
        <p className='text-center text-white text-4xl
        whitespace-pre'> 
          {/* TODO  MAKER */}
        </p>
        <div className='h-[35rem] overflow-y-auto flex flex-col min-w-full border-2 rounded-xl m-auto border-black p-4 shadow-2xl bg-gray-500 mt-4'>
          <div>
            <TodoForm/>
          </div>
          <div className='mt-4 w-full'>
            {todo.map((todos)=>(
              <div key={todos.id}>
                <TodoContent todo={todos}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoComponent>
  )
}

export default App
