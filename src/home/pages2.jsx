import React, { useState } from 'react'
import Input from './input'
import Advanced from './advanced'
export default function Pages2() {
  const [city, setCity] = useState("bukhara")

  return (
    <div>
      <Input city={city} setCity={setCity} />
      <Advanced city={city} setCity={setCity} />
    </div>
  )
}
