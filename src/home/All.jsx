import React, { useState } from 'react'
import Input from './input'
import Pages from './pages'
import Advanced from './advanced'

export default function All() {
    const [city, setCity] = useState("")
  
  return (
    <div >
        <Input city={city} setCity={setCity} />
        <Pages />
             <Advanced city={city} setCity={setCity} />
    </div>
  )
}
