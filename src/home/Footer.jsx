import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:flex sm:items-center sm:justify-between">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-lg font-semibold">Weather App</h3>
          <p className="text-sm text-gray-300">Reliable local forecasts and insights.</p>
        </div>

        <nav className="flex gap-4 justify-center">
          <Link to="/" className="text-sm text-gray-200 hover:text-white">Home</Link>
          <Link to="/map" className="text-sm text-gray-200 hover:text-white">Map</Link>
          <a href="#" className="text-sm text-gray-200 hover:text-white">Contact</a>
        </nav>

        <div className="hidden sm:block text-right text-sm text-gray-400">
          <div>&copy; {new Date().getFullYear()} Weather App</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
