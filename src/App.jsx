import { Route, Routes } from 'react-router'
import All from './home/All'
import Map from './pages/Map'
import Footer from './home/Footer'

export default function App() {
  return (
    <div className='bg h-[100vh]'>
      <div className="max-w-7xl m-auto pt-9">
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/map' element={<Map />} />
        </Routes>
      </div>

      {/* Footer stays outside main container so it's visible on all pages */}
      <Footer />
    </div>
  )
}
