import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/LOgin'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-slate-500'> hii</h1> 
     <UserContextProvider>
      <Login/>
      <Profile/>
     </UserContextProvider>
    </>
  )
}

export default App
