import { useState,useEffect } from 'react'
import { TododProvider } from './context'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos,setTodos]=useState([]);

  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,{...todo}])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>
      (prevtodo.id==id?todo:prevtodo)
    ))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevtodo)=>prevtodo.id!=id));
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevtodo)=>{
      if(prevtodo.id==id){
        return {...prevtodo,completed:!prevtodo.completed}
      
      }
      return prevtodo;
    }))
  }

  useEffect(()=>{
   setTodos(JSON.parse(localStorage.getItem("todos")));
 
  },[]);
  useEffect(()=>{
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }  
  },[todos]);

  

  return (
    <TododProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className=" max-w-4xl  mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos </h1>
                    <div className=" mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => {
                          console.log(todo);
                          console.log(todos);
                          return(
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                           </div>
                          )
})}
                    </div>
                </div>
            </div>
    </TododProvider>
  )
}

export default App
