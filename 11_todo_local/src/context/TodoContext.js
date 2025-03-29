import {createContext,useContext} from "react"
export const TodoContext=createContext({
    todo:[
        {
        todo:"Todo msg",
        id:1,
        complete:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

});
export const TododProvider=TodoContext.Provider;
export const useTodo=()=>{
    return useContext(TodoContext);
}