import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { RiPlayListLine } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';




const Nav = () => {
  return (
    <div className='w-full h-25 bg-black fixed md:top-0 bottom-1 text-white flex justify-around md:justify-center items-center gap-12.5 p-5'>
        <Link to={'/'} ><TiHome className='w-6.25 h-6.25'/></Link>
        <Link to={'/search'} ><IoSearch className='w-6.25 h-6.25'/></Link>
        <Link to={'/playlist'} ><RiPlayListLine className='w-6.25 h-6.25'/></Link>
        <Link to={'/liked'} ><IoMdHeart className='w-6.25 h-6.25'/></Link>
    </div>
  )
}

export default Nav