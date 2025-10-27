import React from 'react'

export default function Card({temp,wind}) {


  return (
    <div>
          <div className='flex items-center gap-6 bg-white w-50 rounded-2xl hover:bg-green-500 hover:border duration-500 hover:text-white'>
              <span className='flex  items-center'>

              <img className='h-20' src="./bulut.png" alt=""/>
              <div>
                <h2>Feel Like</h2>
                <p>Speed: {Math.round(wind)}</p>
              </div>
              </span>
              <div>
                {Math.round(temp)}
              </div>
            </div>
    </div>
  )
}
