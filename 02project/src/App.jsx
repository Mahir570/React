import React,{ useState } from 'react'

import './App.css'


function App() {
  let [count,setCount]=useState(0);
function Add(){
  if(count<20){
    setCount(count+1);
    //window.location.reload(); 

  }
  if(count==20){
    alert("Cant go beyond 20");
  }
  
}
function Sub(){
  if(count>0){
    setCount(count-1);
  }
  if(count==0){
    alert("Cant go below 0");
  }
 
}

  return (
   <>
   <h1>Value :{count}</h1>
   <button onClick={Add}> Add</button>
   <br></br>
   <button onClick={Sub}>Sub</button>
   </>
  )
}
// function App() {
//   const fruits = ["Apple", "Banana", "Cherry"];

//   return (
//     <ul>
//       {fruits.map((fruit, index) => (
//         <li key={index}>{fruit}</li>  // ✅ Unique key for each item
//       ))}
//     </ul>
//   );
// }


export default App
