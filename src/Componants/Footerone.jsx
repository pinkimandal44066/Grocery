import React from 'react'
import { LiaCopyrightSolid } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineCopyright } from "react-icons/ai";


const Footerone = () => {
  return (
    <div>

<hr className='border-green-400 w-full border-2 mt-4'/>


<div  className='flex justify-evenly mb-60'>


<div className='mt-6 flex ' > <AiOutlineCopyright className='mt-2 text-3xl'/>
2022, Nest - HTML Ecommerce  <br/>

All rights reserved
</div>

<div className='flex mt-6'>
<h1 className='text-3xl mt-3 '>
<FiPhoneCall /> </h1>
    +911234567890
    <br />
Working 8:00 - 22:00
</div>

<div className='flex mt-6'>
    <h1 className='text-3xl mt-3'><FiPhoneCall/></h1>  +911234567890 
    <br/>
24/7 Support Center
    
</div>

<div className=' gap-4 mt-6'>
    <h1 className=''>Follow Us</h1> <h1 className='flex -mt-6 ml-24 gap-4'>  <FaFacebook className='bg bg-green-600 rounded-2xl text-2xl'/> <FaTwitter className='bg bg-green-600 rounded-2xl text-2xl'/> 
    <RiInstagramFill  className='bg bg-green-600 rounded-2xl text-2xl'/> <IoLogoYoutube className='bg bg-green-600 rounded-2xl text-2xl'/> </h1> 
    <h1>Up to 15% discount on your first subscribe</h1>


</div>
    </div>
    </div>
  )
}

export default Footerone
