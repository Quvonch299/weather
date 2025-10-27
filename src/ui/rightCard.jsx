import React from 'react'

export default function RightCard({temp}) {





  
  return (
    <div>
          <div className='flex items-center gap-3 bg-white w-60 rounded-2xl'>
              <span className='flex  items-center'>

              <img className='h-20' src="./bulut.png" alt=""/>
              <div>
                <h2>Bukhara</h2>
                <p>Cloud, Hight win..</p>
              </div>
              </span>
              <div>
               {Math.round(temp)}
              </div>
            </div>
    </div>
  )
}
