import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className='flex justify-between gap-5 px-10 mx-6 mt-8'>
       <div>
            <img src='img12.png' className='rounded-xl'></img>
            <p className='-mt-44 w-40 ml-10'>Everyday Fresh &
Clean with Our
Products</p>

  
    <div className='flex'>
            <button className= 'bg-green-700 ml-10 mt-4 flex text-white  px-2 py-2 rounded font-semibold text-lg hover:bg-red-500 hover:text-black'>Shop Now 
          <IoIosArrowRoundForward className='mt-1.5 ml-1 text-2xl'/>
          </button>
    </div>
            
        </div>
        <div>
            <img src='img13.png' className='rounded-xl'></img>
            <p className='-mt-44 w-40 ml-10'>
            Make your Breakfast
Healthy and Easy
            </p>
           <div className='flex'>
            <button className= 'bg-green-700 ml-10 mt-4 flex text-white px-2 py-2 rounded font-semibold  text-lg  hover:bg-red-500 hover:text-black '>Shop Now 
          <IoIosArrowRoundForward className='mt-1.5 ml-1 text-2xl'/>
          </button>
    </div>
 </div>
        <div>
            <img src='img14.png' className='rounded-xl'></img>
            <p className='-mt-44 w-40 ml-10'>
            The best Organic
Products Online

            </p>



            <div className='flex'>
            <button className= 'bg-green-700 ml-10 mt-4 flex text-white px-2 py-2 rounded font-semibold  text-lg  hover:bg-red-500 hover:text-black'>Shop Now 
          <IoIosArrowRoundForward className='mt-1.5 ml-1 text-2xl'/>
          </button>
    </div>
        </div>
    </div>
  )
}

export default Hero
