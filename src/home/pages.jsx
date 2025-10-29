import React from 'react'
import { FaBloggerB, FaCamera, FaHome, FaPhoneAlt, FaVideo } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { LuLogOut } from 'react-icons/lu'

export default function Pages() {
  return (
    <div className=''>
      <div className=" bg-green-400 flex flex-col max-w-50 opacity-60 rounded-2xl hover:opacity-100 duration-200">
        <img className='mb-30' src="./bulut.png" alt="" />

        <div className="grid justify-center gap-3 mb-20">
          <span className='flex  items-center gap-5 text-[25px]'><FaHome /><a className='text-white hover:text-black transition-all' href="#">Home</a></span>
          <span className='flex  items-center gap-5  text-[25px]'><FaBloggerB /><a className='text-white hover:text-black transition-all' href="#">Blog</a></span>
          <span className='flex  items-center gap-5 text-[25px]'><FaMapLocationDot /><a className='text-white hover:text-black transition-all' href="#">Map</a></span>
          <span className='flex  items-center gap-5 text-[25px]'><FaCamera /><a className='text-white hover:text-black transition-all' href="#">Photos</a></span>
          <span className='flex  items-center gap-5 text-[25px]'><FaVideo /><a className='text-white hover:text-black transition-all' href="#">Videos</a></span>
          <span className='flex  items-center gap-5 text-[25px]'><FaPhoneAlt /><a className='text-white hover:text-black transition-all' href="#">Phone</a></span>

        </div>
        <div className='mb-10 '>
          <span className='flex justify-center items-center gap-3 text-[20px] font-semibold '><LuLogOut /><a className='hover:text-red-500 duration-200' href="#">LOG OUT</a></span>
        </div>
      </div>

    </div>
  )
}
