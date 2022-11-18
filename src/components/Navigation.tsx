import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
   <nav className='flex h-[50px] items-center justify-between px-5 bg-teal-500 text-white '>
    <span className='font-bold'>
    My React App
    </span>
    <span className='flex gap-5'>
        <Link className='hover:text-gray-200 transition' to="/">Products</Link>
        <Link className='hover:text-gray-200 transition' to="/about">About</Link>
    </span>
   </nav>
  )
}

export default Navigation