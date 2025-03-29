import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Github ,{LoaderInf} from './components/Github/Github.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'


// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path :"",
//         element:<Home/>

//       },
//       {
//         path :"about",
//         element:<About/>

//       },
//       {
//         path :"contact",
//         element:<Contact/>

//       },
//     ]
//   }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}></Route>
       <Route path='About' element={<About/>}></Route>
       <Route path='contact' element={<Contact/>}></Route>
       <Route path='user/:id55' element={<User />}></Route>
       <Route loader={LoaderInf} path='github' element={<Github />}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
   
  </StrictMode>,
)
