import { Route, Routes } from 'react-router'
import All from './home/All'
import Map1 from './home/Map1'
export default function App() {
  return (
    <div className='bg h-[120vh] '>
      <div className="">

        <All />

        <Routes>
          <Route path='/map' element={<Map1 />} />
          <Route path='/' element={<></>} />
        </Routes>

      </div>
    </div>
  )
}
