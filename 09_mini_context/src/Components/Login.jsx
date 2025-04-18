import React,{useState,useContext} from 'react';



import UserContext from '../context/UserContext';

function Login() {
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const {setUser}=useContext(UserContext);

    const handler=(e)=>{
        // e.preventDefault();
        if(username.length==0|| password.length==0) setUser('')

        else setUser({username,password});
    }
    return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        placeholder='UserName'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        
        />
        <input type="text" 
        placeholder='Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        
        />
        <button
        onClick={handler}
        >Submit</button>
    </div>
  )
}

export default Login