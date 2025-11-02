import React, { useState } from 'react'
import Input from './input'
import Pages from './pages'
import Advanced from './advanced'

export default function All() {
    const [city, setCity] = useState("Bukhara")
  
  return (
    <div className='max-w-7xl m-auto pt-9' >
        <Input city={city} setCity={setCity} />
        <Advanced city={city} setCity={setCity} />
    </div>
  )
}
