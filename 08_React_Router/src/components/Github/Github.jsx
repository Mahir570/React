import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const datas=useLoaderData();
    // const [datas,setData]=useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/EricLBuehler')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='flex flex-col justify-center items-center max-w-full text-center m-4 mr-10 bg-gray-600 text-white p-4 text-3xl rounded-md '>Github Followers : {datas.followers}
        <img className='w-1/2 p-10' src={datas.avatar_url} alt="dd" />
     </div>
  )
}

export default Github

export  const LoaderInf=async ()=>{
    const res=await fetch('https://api.github.com/users/EricLBuehler');
    return res.json();
}