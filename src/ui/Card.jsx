import React from 'react'
import { BsThermometerHalf, BsWind, BsCalendarDay } from 'react-icons/bs'

export default function Card({temp, wind, name}) {
  return (
    <div className='transform transition-all duration-300 hover:scale-105'>
      <div className='flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300'>
        <span className='flex items-center gap-4'>
          <div className='bg-blue-500/20 p-3 rounded-lg'>
            <BsCalendarDay className='text-white text-2xl' />
          </div>
          <div className='text-white'>
            <h2 className='text-lg font-semibold mb-1'>{name}</h2>
            <p className='flex items-center gap-2 text-sm opacity-90'>
              <BsWind className='text-yellow-400' />
              <span>{Math.round(wind)} km/h</span>
            </p>
          </div>
        </span>
        <div className='flex items-center gap-2 bg-blue-500/20 px-3 py-2 rounded-lg'>
          <BsThermometerHalf className='text-red-400 text-xl' />
          <span className='text-white font-bold'>{Math.round(temp)}°</span>
        </div>
      </div>
    </div>
  )
}
