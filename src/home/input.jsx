import React, { useState } from 'react'

import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { RiSearchEyeFill } from 'react-icons/ri'
import { WiDayCloudy } from 'react-icons/wi'

export default function Input({ city, setCity }) {
    const [search, setSearch] = useState(city)
    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = () => {
        setIsLoading(true)
        setCity(search)
        setTimeout(() => setIsLoading(false), 1000)
    }

    return (
        <div className='flex justify-between items-center bg-white/10 backdrop-blur-md rounded-xl border border-white/20 px-6 py-4 mx-auto max-w-4xl shadow-lg hover:bg-white/20 transition-all duration-300'>
            <span className='flex text-white items-center gap-3'>
                <div className='bg-blue-500/20 p-2 rounded-lg'>
                    <CiLocationOn className='text-2xl text-blue-400' />
                </div>
                <h2 className='text-lg font-semibold'>Uzbekistan</h2>
            </span>

            <span className='flex-1 mx-6 relative'>
                <input 
                    className='w-full bg-white/10 text-white placeholder:text-white/70 border border-white/20 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300' 
                    type="search"
                    placeholder='Search for a city...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && isLoading }
                />
                {isLoading ? (
                    <div className="absolute right-4 top-2.5">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    </div>
                ) : (
                    <CiSearch 
                        onClick={handleSearch}
                        className='absolute right-4 top-2.5 text-white text-2xl cursor-pointer hover:scale-110 transition-transform duration-300' 
                    />
                )}
                <RiSearchEyeFill className='absolute left-3 top-3 text-white/70 text-xl' />
            </span>

            <div className="flex items-center gap-4">
                <button className='bg-blue-500/20 p-2 rounded-lg hover:bg-blue-500/30 transition-all duration-300'>
                    <FaRegCalendarAlt className='text-xl text-blue-400' />
                </button>
                <button className='bg-blue-500/20 p-2 rounded-lg hover:bg-blue-500/30 transition-all duration-300'>
                    <WiDayCloudy className='text-2xl text-blue-400' />
                </button>
            </div>


        </div>
    )
}
