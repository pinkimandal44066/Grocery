import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";


const Footer = () => {
  return (
    <div className='flex justify-evenly mt-10 mx-5'>
<div className='mx-10 '>
    <img src='new pag.webp'/>
    <h1 className='ml-2 hover:text-green-500 '> Awesome grocery store website <br/> template</h1>
    <h1 className='flex mt-2 -ml-4 hover:text-green-500 '>  <CiLocationOn  className='mt-0.5 text-xl  ml-4 hover:text-green-500 '/> 
     Address: Postmaster, Post Office <br />
    ASANSOL (HEAD OFFICE), 
    <br />BARDHAMAN, WEST BENGAL (WB),
    <br /> India (IN), Pin Code:- 713301</h1>
    <h1 className='flex hover:text-green-500 '> <CiHeadphones className='mt-0.5 text-xl hover:text-green-500 ' /> Call Us:+911234567890 </h1>
    <h1 className='flex hover:text-green-500 '> <MdOutlineEmail className='mt-0.5 text-xl  '/>Email:abc@.com</h1>
    <h1 className='flex hover:text-green-500 '> <IoMdTime  className='mt-0.5 text-xl '/> Hours:10:00 - 18:00, Mon - Sat</h1>
</div>

<div className='mt-4'>
    <h1  className='hover:text-green-500 '>Company</h1>
    <h1  className='hover:text-green-500 '>About Us</h1>
    <h1  className='hover:text-green-500 '>Delivery Information</h1>
    <h1  className='hover:text-green-500 '>Privacy Policy</h1>
    <h1 className='hover:text-green-500 '>Terms & Conditions</h1>
    <h1  className='hover:text-green-500 '>Contact Us</h1>
    <h1  className='hover:text-green-500 '>Support Center</h1>
    <h1 className='hover:text-green-500 '>Careers</h1>
</div>

<div className='mt-4'>
    <h1 className='font-semibold'>Account</h1>
    <h1 className='hover:text-green-500 '>Sign In</h1>
    <h1 className='hover:text-green-500 '>View Cart</h1>
    <h1 className='hover:text-green-500 '>My Wishlist</h1>
    <h1 className='hover:text-green-500 '>Track My Order</h1>
    <h1 className='hover:text-green-500 '>Help Ticket</h1>
    <h1 className='hover:text-green-500 '>Shipping Details</h1>
    <h1 className='hover:text-green-500 '>Compare products</h1>
</div>

<div>
    <h1 className='font-semibold mt-4'>Corporate</h1>
    <h1 className='hover:text-green-500 '>Become a Vendor</h1>
    <h1 className='hover:text-green-500 '>Affiliate Program</h1>
    <h1 className='hover:text-green-500 '>Farm Business</h1>
    <h1 className='hover:text-green-500 '>Farm Careers</h1>
    <h1 className='hover:text-green-500 '>Our Suppliers</h1>
    <h1 className='hover:text-green-500 '>Accessibility</h1>
    <h1 className='hover:text-green-500 '>Promotions</h1>
</div>

<div>
    <h1 className='font-semibold mt-4'>Popular</h1>
    <h1  className='hover:text-green-500 '>Milk & Flavoured Milk</h1>
    <h1  className='hover:text-green-500 '>Butter and Margarine</h1>
    <h1  className='hover:text-green-500 '>Eggs Substitutes</h1>
    <h1  className='hover:text-green-500 '>Marmalades</h1>
    <h1  className='hover:text-green-500 '>Sour Cream and Dips</h1>
    <h1 className='hover:text-green-500 '>Tea & Kombucha</h1>
    <h1 className='hover:text-green-500 '>Cheese</h1>
</div>

<div>
    <h1 className='font-semibold mt-4 '>Install App</h1>
    <h1  className='hover:text-green-500 text-xl '>From App Store or Google Play</h1>
    <img src='img43.jpg' />
    <img src='img44.jpg'/>
<h1  className='hover:text-green-500 '>Secured Payment Gateways</h1>
<img src='img45.png'/>
</div>



    </div>
  )
}

export default Footer
