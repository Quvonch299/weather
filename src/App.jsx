import { Route, Routes } from 'react-router'
import All from './home/All'
import Map1 from './home/Map1'
import Pages from './home/pages'
export default function App() {
  return (
    <div className='bg h-[120vh]  '>
      <div className="">

              <Pages />
      

        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/map' element={<Map1 />} />
        </Routes>


        

      </div>
    </div>
  )
}
