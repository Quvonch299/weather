import React from 'react'
import { BsThermometerHalf, BsGeoAlt, BsCloudsFill } from 'react-icons/bs'

export default function RightCard({temp}) {
  return (
    <div className='transform transition-all duration-300 hover:scale-105'>
      <div className='flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300'>
        <span className='flex items-center gap-4'>
          <div className='bg-emerald-500/20 p-3 rounded-lg'>
            <BsGeoAlt className='text-emerald-400 text-2xl' />
          </div>
          <div className='text-white'>
            <h2 className='text-lg font-semibold mb-1'>Bukhara</h2>
            <p className='flex items-center gap-2 text-sm opacity-90'>
              <BsCloudsFill className='text-blue-400' />
              <span>Partly Cloudy</span>
            </p>
          </div>
        </span>
        <div className='flex items-center gap-2 bg-emerald-500/20 px-3 py-2 rounded-lg'>
          <BsThermometerHalf className='text-red-400 text-xl' />
          <span className='text-white font-bold'>{Math.round(temp)}°</span>
        </div>
      </div>
    </div>
  )
}
