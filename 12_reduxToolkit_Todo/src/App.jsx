import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <h1 className='bg-slate-50'>hii</h1>
    <AddTodo/>
    <Todos/>
    </Provider>
  )
}

export default App
