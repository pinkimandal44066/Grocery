import React from 'react'
import { IoCartOutline } from "react-icons/io5";
const Herothree = () => {
  return (
    <div className='flex  justify-evenly mx-20 gap-32 mt-6  font-semibold cursor-pointer'>
      <div>
    <img src='img21.webp' className='border rounded-xl' />
    <h1 className='mt-2'>Vegetable </h1>
    <div className='flex bg bg-green-500 rounded-md  py-1 pb-2  hover:text-white '>
   <button className=' ml-2 text-2xl '><IoCartOutline /></button>
   <h1 >Add To cart</h1> </div>
  </div>

  <div>
    <img src='img22.webp'  className='border rounded-xl'/>
    <h1 className='ml-2 mt-2'>Vegetable </h1>
    <div className='flex bg bg-green-500 rounded-md  py-1 pb-2  font-semibold  hover:text-white'>
   <button className='ml-2 text-2xl '><IoCartOutline /></button>
   <h1>Add To cart</h1> </div>
  </div>
  <div>
    <img src='img23.webp'   className='border rounded-xl'/>
    <h1  className='ml-2 mt-2'>Vegetable </h1>
    <div className='flex bg bg-green-500 rounded-md  py-1 pb-2  font-semibold  hover:text-white'>
   <button className='ml-2 text-2xl'><IoCartOutline /></button>
   <h1 >Add To cart</h1> </div>
  </div>

  <div>
    <img src='img24.webp'  className='border rounded-xl ml-4' />
    <h1  className='ml-6 mt-2'>Vegetable </h1>
    <div className='flex bg bg-green-500 rounded-md  py-1 pb-2   ml-4 font-semibold  hover:text-white'>
   <button  className='ml-2 text-2xl'><IoCartOutline /></button>
   <h1>Add To cart</h1> </div>
  </div>

  <div className=''>
    <img src='img25.webp'  className='border rounded-xl ml-4'  />
    <h1 className='ml-6 mt-2'>Vegetable </h1>
    <div className='flex bg bg-green-500 rounded-md  py-1 pb-2   ml-4 font-semibold hover:text-white'>
   <button  className='ml-2 text-2xl'><IoCartOutline /></button>
   <h1>Add To cart</h1> </div>
  </div>
  
    </div>
  )
}

export default Herothree
