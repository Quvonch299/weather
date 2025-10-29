import React, { useState } from 'react'
import { FaBloggerB, FaCamera, FaHome, FaPhoneAlt, FaVideo, FaBars, FaTimes } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
import { LuLogOut } from 'react-icons/lu'
import { TiWeatherPartlySunny } from 'react-icons/ti'

export default function Pages() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="fixed top-11 left-4 z-50 p-2 rounded-full bg-yellow-300 text-black shadow-lg hover:bg-yellow-400 cursor-pointer"
      >
        {open ? <FaTimes /> : <FaBars />}
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${open ? 'opacity-40' : 'opacity-0 pointer-events-none'}`}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 h-full overflow-auto flex flex-col">
          <div className="flex justify-between items-center mb-18">
            <TiWeatherPartlySunny className='text-[50px]' />
            <IoClose 
              onClick={() => setOpen(false)} 
              className="text-[24px] cursor-pointer hover:text-yellow-400 transition-all" 
            />
          </div>

          <div className="grid gap-3 mb-10">
            <span className='flex items-center gap-5 text-[20px] mb-7'><FaHome className='text-yellow-300' /><a className='text-black hover:text-gray-700 transition-all' href="#">Home</a></span>
            <span className='flex items-center gap-5 text-[20px] mb-7'><FaBloggerB className='text-yellow-300' /><a className='text-black hover:text-gray-700 transition-all' href="#">Blog</a></span>
            <span className='flex items-center gap-5 text-[20px] mb-7'><FaMapLocationDot className='text-yellow-300' /><a className='text-black hover:text-gray-700 transition-all' href="#">Map</a></span>
            <span className='flex items-center gap-5 text-[20px] mb-7'><FaCamera className='text-yellow-300' /><a className='text-black hover:text-gray-700 transition-all' href="#">Photos</a></span>
            <span className='flex items-center gap-5 text-[20px] mb-7'><FaVideo className='text-yellow-300' /><a className='text-black hover:text-gray-700 transition-all' href="#">Videos</a></span>
            <span className='flex items-center gap-5 text-[20px]'><FaPhoneAlt className='text-yellow-300' /><a className='text-black hover:text-gray-700 transition-all' href="#">Phone</a></span>
          </div>

          <div className='mt-auto mb-4'>
            <span className='flex justify-center items-center gap-3 text-[18px] font-semibold'><LuLogOut /><a className='hover:text-red-500 duration-200' href="#">LOG OUT</a></span>
          </div>
        </div>
      </aside>
    </>
  )
}
