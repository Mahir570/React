import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id55}=useParams();
  return (
    <div>User: {id55} </div>
  )
}

export default User