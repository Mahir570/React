import { useState } from 'react'



function App() {
  const [colour, setCount] = useState("red")
  let arr=["red","blue","pink","orange","green"];
  return (
  <div className=' flex justify-center w-full h-screen duration-1000  relative'
  style={{backgroundColor:colour}}
    
  >
    <button className='absolute bottom-16 bg-slate-400 rounded-3xl w-14 h-14  text-center'
     onClick={()=>arr.map((col,index)=>{
      setTimeout(()=>setCount(col),1000*index)})}>Click</button>
<div className="absolute bottom-0  w-80 h-14  flex justify-center px-4 py-2 bg-white rounded-full">   
     <button className=' mt-1 ml-2 bg-red-600 rounded-3xl shadow-xl h-8 w-20 text-black   ' onClick={()=>setCount("red")}> Red</button>
     <button className=' mt-1 ml-2 bg-red-600 rounded-3xl h-8 w-20 text-black ' onClick={()=>setCount("green")}> Green</button>
     <button className='mt-1 ml-2 bg-red-600 rounded-3xl h-8 w-20 text-black ' onClick={()=>setCount("blue")}> Blue</button>

     <button className='mt-1 ml-2 bg-red-600 rounded-3xl h-8 w-20 text-black ' onClick={()=>setCount("pink")}> Pink</button>

     <button className='mt-1 ml-2 bg-red-600 rounded-3xl h-8 w-20 text-black ' onClick={()=>setCount("orange")}> Orange</button>
     <button className='p-1 text-center mt-1 ml-2 bg-red-600 rounded-3xl  text-black ' onClick={()=>setCount("orange")}> Orange</button>
    </div>
   
  </div>
  )
}

export default App
