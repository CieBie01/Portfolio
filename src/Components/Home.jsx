import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='flex ml-5 hover:ring-2 hover:ring-blue-400  w-15 h-15 rounded-md justify-center items-center cursor-pointer mb-2'>
     <Link className='flex flex-col text-xl text-white  ' to='/Portfolio/'>
        Home <FaHome className='text-3xl hover:scale-105' /> 
     </Link> 
    </div>
  )
}
 
export default Home
