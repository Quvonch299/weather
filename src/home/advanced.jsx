import React, { useEffect, useState } from 'react'
import Card from '../ui/Card'
import RightCard from '../ui/rightCard'
import axios from 'axios'
import { BsSun, BsCloudFill, BsCloudRainFill, BsCloudSnowFill, BsCloudLightningRainFill, BsWind, BsCloudHazeFill, BsCloudsFill } from 'react-icons/bs'
import { GrLinkNext } from 'react-icons/gr'

export default function Advanced({ city,setCity }) {
  const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getWeatherIcon = (weatherMain, size = 30) => {
    const iconStyle = { fontSize: size, color: '#ffffff' }
    
    switch(weatherMain.toLowerCase()) {
      case 'clear':
        return <BsSun style={iconStyle} />
      case 'clouds':
        return <BsCloudsFill style={iconStyle} />
      case 'rain':
      case 'drizzle':
        return <BsCloudRainFill style={iconStyle} />
      case 'snow':
        return <BsCloudSnowFill style={iconStyle} />
      case 'thunderstorm':
        return <BsCloudLightningRainFill style={iconStyle} />
      case 'dust':
      case 'sand':
        return <BsWind style={iconStyle} />
      case 'haze':
      case 'mist':
      case 'fog':
        return <BsCloudHazeFill style={iconStyle} />
      default:
        return <BsCloudFill style={iconStyle} />
    }
  }


  const GetData = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(
        'https://api.openweathermap.org/data/2.5/forecast?q=buxoro&units=metric&appid=7ff55054f53ec5c371bb065ff9e9f223&lang=ru'
      )
      console.log(res.data)
      setPosts(res.data)
    } catch (e) {
      console.log('Error:', e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (city) {
      GetData()
setCity('')
    }
  }, [city])

  return (
    <div className='container mx-auto px-4 mt-9 flex justify-between'>
      {isLoading ? (
        <div className="flex items-center justify-center w-full min-h-[60vh]">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
            <p className="text-white text-lg">Loading weather data...</p>
          </div>
        </div>
      ) : posts ? (
          <div className="left flex-1">
            <div className="tepa flex p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl">
              <div className="left text-white flex-1">
                <div className="transform hover:scale-105 transition-transform duration-300 flex justify-center">
                  {getWeatherIcon(posts.list[0].weather[0].main, 100)}
                </div>
                <span className='flex justify-center items-center mt-4'>
                  <div className='text-2xl font-semibold'>
                    <p className="text-3xl mb-2">Uzbekistan, {posts.city.name}</p>
                    <h2 className='text-xl opacity-90 flex items-center gap-2'>
                      {getWeatherIcon(posts.list[0].weather[0].main, 24)}
                      {posts.list[0].weather[0].description}
                    </h2>
                  </div>
                  <h2 className='text-5xl ml-8 font-bold'>
                    {Math.round(posts.list[0].main.temp)}°C
                  </h2>
                </span>
              </div>

              <div className='right flex gap-6'>
                {posts.list.slice(0, 2).map((day, index) => (
                  <div key={index} className='rounded-2xl w-64 bg-white/10 backdrop-blur-md p-4 hover:bg-white/20 hover:transform hover:scale-105 transition-all duration-300 border border-white/20'>
                    <h2 className='flex justify-center items-center text-5xl text-white'>
                      <div className='mr-2 transform hover:scale-110 transition-transform duration-300'>
                        {getWeatherIcon(day.weather[0].main, 50)}
                      </div>
                      <span className="font-bold">{Math.round(day.main.temp)}°</span>
                    </h2>
                    <div className='text-center mt-4 text-white'>
                      <p className='text-xl font-bold mb-2'>
                        {new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}
                      </p>
                      <p className='text-lg opacity-90 flex items-center justify-center gap-2'>
                        {getWeatherIcon(day.weather[0].main, 20)}
                        {day.weather[0].main}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="past mt-12 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-md p-8 shadow-2xl border border-white/10">
              <div>
                <h2 className='text-white mb-6 text-3xl font-bold flex items-center'>
                  <span className="mr-3">🌤️</span>
                  Today's Highlight
                </h2>
              </div>
              <div className='grid grid-cols-3 gap-6 justify-center items-center'>
                <Card temp={posts.list[0].main.temp} wind={posts.list[0].wind.speed} name={'Dushanba'} />
                <Card temp={posts.list[3].main.temp} wind={posts.list[1].wind.speed} name={'Seshanba'} />
                <Card temp={posts.list[1].main.temp} wind={posts.list[2].wind.speed} name={'Chorshanba'} />
                <Card temp={posts.list[2].main.temp} wind={posts.list[6].wind.speed} name={'Payshanba'} />
                <Card temp={posts.list[4].main.temp} wind={posts.list[10].wind.speed} name={'Juma'}/>
                <Card temp={posts.list[5].main.temp} wind={posts.list[20].wind.speed} name={'Shanba'} />
              </div>
            </div>
          </div>



        ) : (
          <div className="flex items-center justify-center w-full min-h-[60vh]">
            <div className="bg-red-500/20 backdrop-blur-md border border-red-500/20 p-6 rounded-xl shadow-lg flex items-center gap-4 text-white">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg">Biron bir shahar nomini kiriting (masalan - Shofirkon)</p>
            </div>
          </div>
        )
      }
      {
        posts ? (
          <div className="right hidden lg:block p-6 mx-8 bg-gradient-to-bl from-emerald-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl hover:shadow-2xl transition-all duration-300 w-80 border border-white/10">
            <div className='mb-8 text-white'>
              <h2 className='text-3xl font-bold flex items-center'>
                <span className="mr-3">🌍</span>
                Other Cities
              </h2>
            </div>
            <div className='grid grid-cols-1 gap-6'>
              <RightCard temp={posts.list[0].main.temp} wind={posts.list[34].wind.speed} />
              <RightCard temp={posts.list[1].main.temp} wind={posts.list[5].wind.speed} />
              <RightCard temp={posts.list[10].main.temp} wind={posts.list[23].wind.speed} />
              <RightCard temp={posts.list[30].main.temp} wind={posts.list[23].wind.speed} />
              <button className='w-full text-white py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2'>
                <span>EXPLORE MORE</span>
                <GrLinkNext />
              </button>
            </div>
          </div>



        ) : (
          <p></p>
        )
      }
    </div>
  )
}
