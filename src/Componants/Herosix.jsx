import React from 'react'

const Herosix = () => {
  return (
    <div className='flex justify-evenly px-10 mx-32 mt-10 py-8 bg-green-400 rounded-xl cursor-pointer'>
      <div>
        <h1 className='font-semibold mx-8  hover:text-red-500'>Top Selling</h1>
        <img src='img30.jpg' className='h-36  rounded-xl   mt-2'/>
        
        <img src='img31.jpg' className='h-36 rounded-xl mt-8  '/>
        <img src='img32.jpg' className='h-36 mt-8  rounded-xl  '/>
      </div>

      <div>
        <h1 className='font-semibold mx-3 hover:text-red-500'>Trending Products</h1>
        <img src='img33.jpg' className='h-36  rounded-xl mt-2  '/>
        <img src='img34.jpg' className='h-36  rounded-xl  mt-8 '/>
        <img src='img35.jpg'className='h-36 rounded-xl  mt-8  '/>
      </div>

      <div>
      <h1 className='font-semibold mx-4 hover:text-red-500 '>Recently added</h1>
        <img src='img36.jpg'className='h-36  rounded-xl mt-2  '/>
        <img src='img37.jpg'className='h-36 mt-8 rounded-xl '/>
        <img src='img38.jpg'className='h-36 mt-8 rounded-xl'/>
      </div>

      <div>
        <h1 className='font-semibold mx-6 hover:text-red-500'>Top Rated</h1>
        <img src='img39.jpg'className='h-36 rounded-xl  mt-2 bg-white'/>
        <img src='img40.jpg'className='h-36 rounded-xl  mt-8  bg-white'/>
        <img src='img41.jpg'className='h-36 rounded-xl mt-8   bg-white'/>
</div>


    </div>
  )
}

export default Herosix
