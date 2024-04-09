import React from 'react'
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';



const Navbar = () => {

    const {toggleNav , setToggleNav} = useState(false);

    const clickhandler = ()=>{
        setToggleNav(!toggleNav)
    }
  return (

    <div className='flex flex-row justify-between items-centen bg-slate-950 p-3'>
        <h1 className=' font-bold text-2xl text-white'>Your Places</h1>
        <ul className='flex flex-row  gap-5'>
            <li className='font-medium text-base text-white hover:bg-yellow-400  rounded-sm border border-black hover:border-white'>All Users</li>
            <li className='font-medium text-base text-white hover:bg-yellow-400  rounded-sm border border-black hover:border-white'>My Places</li>
            <li className='font-medium text-base text-white hover:bg-yellow-400  rounded-sm border border-black hover:border-white'><Link to ="/AddPlace">Add Places</Link>
</li>
            <li className='font-medium text-base text-white hover:bg-yellow-400  rounded-sm border border-black hover:border-white'>Authenticate</li>
        </ul>

        <div className='hidden md:fixed	'>

        <MenuIcon className='text-white text-xl '/>

        </div>
    </div>
  )
}

export default Navbar