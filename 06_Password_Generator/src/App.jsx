import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberallowed]=useState(false)
  const [CharAllowed,setCharallowed]=useState(false)
  const [Password,setPassword]=useState("ddddd")
  const [copy,setCopy]=useState(false);


  const passwordGenerator=useCallback(()=>{
      let pas="";
      let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
      if(numberAllowed){
        str+="123456789";
      }
        if(CharAllowed){
          str+="!@#$%^&*()_+=_?"
        }
        for(let i=1;i<=length;i++){
          let char=Math.floor(Math.random()*str.length+1);
          pas+=str.charAt(char);

        }
        setPassword(pas);
      
  },[length,numberAllowed,CharAllowed]);
  useEffect(()=>{passwordGenerator()},[length,numberAllowed,CharAllowed]);
const copyboard=() => {
 // setCopy(true);
    navigator.clipboard.writeText(Password).then(() => {
      setTimeout(()=>setCopy(false),100);
    })};
  
  

  return (
    <>
    
<div className='w-full max-w-md   px-4 py-4 rounded-3xl mt-8 border-2 border-black'>
    <h1 className='text-4xl text-center'>Password Generator</h1>
  <div className='flex justify-center '>
    <input type="text"  value={Password} className='outline-none text-black w-full px-3 my-4 rounded-3xl h-8 border-2 border-black ' placeholder='Password' readOnly >
    </input>
    <button onClick ={()=>{
      setCopy(true);
      copyboard();
    }} className= {`outline-none px-3 py-0.5 my-4 rounded-2xl ${copy ? "bg-green-400 ":"border-2 border-black"}`}>Copy</button>
  </div>
  <div className='flex text-sm gap-x-2 '>
    <input type='range' min={8} max={36} value={length}
    className=' cursor-pointer '
    onChange={(e)=>{setLength(e.target.value)}}
   
    >
      
    </input>
    <label className='text-slate-800 text-base'>Length:{length}</label>
    <input type='checkBox'
    defaultChecked={numberAllowed}
    onChange={()=>setNumberallowed((prev)=>!prev)}
    
    >
      
    </input>
    <label className='text-slate-800 text-base'>Numbers ?</label>
    <input type='checkBox'
    defaultChecked={false}
    onChange={()=>setCharallowed((prev)=>!prev)}
    
    >
      
    </input>
    <label className='text-slate-800 text-base'>Chars ?</label>
  </div>
  <div>
    <button 
    onClick={passwordGenerator}
    className='border-2 border-black rounded-3xl w-48 my-3'    
    >Generate</button>
  </div>
  
    
   
    
 
</div>
    
    </>
  )
}


export default App;
