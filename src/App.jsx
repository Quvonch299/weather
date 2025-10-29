import React from 'react'
import Pages from './home/pages'
import Pages2 from './home/pages2'
export default function App() {
  return (
    <div className='bg-blue-950 h-screen '>
      <div className="max-w-7xl m-auto pt-9 flex">

        <Pages />
        <Pages2 />

      </div>
    </div>
  )
}
