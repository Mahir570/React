import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} =useContext(UserContext)
    if(!user) return <div>Please Enter details</div>
  return (
    <div> Hii {user.username} and your password {user.password}</div>
  )
}

export default Profile