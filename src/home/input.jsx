import React, { useState } from 'react'

import { CiLocationOn } from 'react-icons/ci'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { RiSearchEyeFill } from 'react-icons/ri'
import { WiDayCloudy } from 'react-icons/wi'

export default function Input({ city, setCity }) {
    const [search, setSearch] = useState(city)
    return (
        <div className=' flex justify-between items-center rounded-2xl bg-green-500 opacity-60 ml-10 w-250 p-2 hover:opacity-100 outline-none duration-300'>
            <span className='flex text-white justify-center items-center text-[17px] font-bold gap-2'><CiLocationOn /><h2>Uzbekistan,Bu</h2></span>
            <span className='flex justify-center items-center relative'>

                <input className=' text-white placeholder:text-white border w-100 rounded-2xl border-white p-2' type="search"
                    placeholder='Search Weather...'
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                />
                <RiSearchEyeFill onClick={() => {
                    setCity(search)
                    console.log(search, city);
                }} className=' absolute -right-5 text-white hover:cursor-pointer ' />
            </span>

            <div className="flex gap-1/2 items-center">
                <span className='hover:cursor-pointer flex gap-3 pr-4 text-xl text-white'><FaRegCalendarAlt /></span>
                <span className='hover:cursor-pointer flex gap-3 pr-4 text-2xl text-white'><WiDayCloudy /></span>
            </div>


        </div>
    )
}
