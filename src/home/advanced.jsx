import React, { useEffect, useState } from 'react'
import Card from '../ui/Card'
import RightCard from '../ui/rightCard'
import axios from 'axios'

export default function Advanced() {
  const [posts, setPosts] = useState(null)
 
   

  const GetData = async () => {
    try {
      const res = await axios.get(
        'https://api.openweathermap.org/data/2.5/forecast?q=bukhara&units=metric&appid=7ff55054f53ec5c371bb065ff9e9f223&lang=ru'
      )
      console.log(res.data )
      setPosts(res.data)
    } catch (e) {
      console.log('Error:', e)
    }
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <div className='ml-10 mt-9 flex justify-between '>
      {
        posts ? (
          <div className="left w-182">
            <div className="tepa flex p-3 bg-green-500 rounded-2xl opacity-70 hover:opacity-100 duration-300 items-center gap-20">
              <div className="left text-white">
                <div>
                  <img className='h-50' src="./bulut.png" alt="" />
                </div>
                <span className='flex justify-center items-center'>
                  <div className='text-[25px]'>
                    <p>Uzbekistan, {posts.city.name}</p>
                    <h2 className='text-[18px]'>
                      {posts.list[0].weather[0].description}
                    </h2>
                  </div>
                  <h2 className='text-[30px] ml-5'>
                    {Math.round(posts.list[0].main.temp)}°C
                  </h2>
                </span>
              </div>

              <div className='right flex gap-4'>
                {posts.list.slice(0, 2).map((day, index) => (
                  <div key={index} className='rounded-[20px] w-50 h-53 bg-white p-2 hover:bg-black hover:text-white duration-300'>
                    <h2 className='flex justify-center items-center text-[50px]'>
                      <img className='h-30' src="./bulut.png" alt="" /> {Math.round(day.main.temp)}
                    </h2>
                    <div className='text-center'>
                      <p className='text-[20px] font-bold'>
                        {new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}
                      </p>
                      <p className='text-[16px] font-medium'>{day.weather[0].main}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="past mt-10 bg-green-500 rounded-2xl opacity-70 hover:opacity-100 duration-300 p-9">
              <div>
                <h2 className='text-white mb-3 text-2xl'>Today's Highlight</h2>
              </div>
              <div className='grid grid-cols-3 gap-5 justify-center items-center'>
                <Card temp={posts.list[0].main.temp} wind={posts.list[0].wind.speed}/>
                <Card temp={posts.list[3].main.temp} wind={posts.list[1].wind.speed}/>
                <Card temp={posts.list[1].main.temp} wind={posts.list[2].wind.speed}/>
                <Card temp={posts.list[2].main.temp} wind={posts.list[6].wind.speed}/>
                <Card temp={posts.list[4].main.temp} wind={posts.list[10].wind.speed}/>
                <Card temp={posts.list[5].main.temp} wind={posts.list[20].wind.speed}/>
              </div>
            </div>
          </div>



        ) : (
          <p>Malumot yo`q</p>
        )
      }
      {
          posts ? (
      <div className="right p-3 ml-10 bg-green-500 rounded-2xl opacity-70 hover:opacity-100 duration-300 w-[260px]">
        <div className='mt-10 mb-10 text-3xl text-white'>
          <h2>Other city</h2>
        </div>
        <div className='grid grid-cols-1 gap-5'>
          <RightCard  temp={posts.list[0].main.temp} wind={posts.list[34].wind.speed}/>
          <RightCard temp={posts.list[1].main.temp} wind={posts.list[5].wind.speed} />
          <RightCard temp={posts.list[10].main.temp} wind={posts.list[23].wind.speed} />
          <RightCard temp={posts.list[30].main.temp} wind={posts.list[23].wind.speed} />
          <button className='w-60 text-white p-4 border-black hover:bg-green-500 hover:border duration-500 rounded-2xl bg-blue-600'>
            SEE MORE
          </button>
        </div>
      </div>

      

        ) : (
          <p>Malumot yo`q</p>
        )
      }

    </div>
  )
}
