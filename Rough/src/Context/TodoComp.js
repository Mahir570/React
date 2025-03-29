import {createContext,useContext} from "react"

const TodoComp=createContext([
    {
    todo:{
        id:1,
        text:"hii",
        checkmark:false,
    },
    addTodo:(newTodo)=>{},
    updateTodo:(id,updatetodo)=>{},
    deleteTodo:(id)=>{},
    togleTodo:(id)=>{},
}
]);
export const TodoComponent=TodoComp.Provider

export  const useTodo=()=>useContext(TodoComponent)