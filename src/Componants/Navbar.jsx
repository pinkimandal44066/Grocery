import React from 'react'
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className='flex justify-between mt-4 mx-6'>
      <div>
        <img src='new pag.webp'></img>
      </div>
      
      <div>
      <input className='rounded border-2 size-14 w-full  px-48  mt-3 text-center border-green-700 text-xl font-semibold'type="text"placeholder='Search for items' />
      </div>
    <div className='flex mt-6'>
        <h1 className='mt-1'><IoIosGitCompare /></h1>
        <h1 className='mr-10'>Compare</h1>
        <h1 className='mt-1'><FaRegHeart /></h1>
        <h1 className='mr-10'>Wishlist</h1>
        <h1 className='mt-1'><FaShoppingCart /> </h1>
        <h1 className='mr-10'>Cart</h1>
        <h1 className='mt-1'><VscAccount /></h1>
        <h1 className='mr-10'>Account</h1> 
        </div>
        </div>
       
  )
}

export default Navbar
