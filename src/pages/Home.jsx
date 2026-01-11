import React from 'react'
import { songsData } from '../songs'
import musicImg from '../assets/musicanim.webp'
import { CgPlayTrackPrev } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";



const Home = () => {
  return (
    <div className='w-full h-screen bg-black flex'>


      <div className='w-full md:w-[50%] h-full flex justify-start items-center pt-5 md:pt-30 flex-col gap-7.5'>
        <h1 className='text-white font-semibold text-[20px]'>Now Playing</h1>
        <div className='w-[80%] md:w-62.5 h-300px object-fill rounded-md overflow-hidden relative'>
          <img src={songsData[0].image} alt="" />
          <div className='w-full h-full flex justify-center items-center bg-black absolute top-0 opacity-[0.5]'>
            <img src={musicImg} alt="" className='w-[60%]' />
          </div>
        </div>
        <div>
          <div className='text-white text-[30px] font-bold text-center'>{songsData[0].name}</div>
          <div className='text-gray-700 text-[18px] text-center'>{songsData[0].singer}</div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <input type="range" className='appearance-none bg-gray-700 w-[50%] h-1.25 rounded-full' id='range' />
        </div>
        <div className='text-white flex justify-center items-center gap-5'>
          <CgPlayTrackPrev className='w-[28px] h-[28px]' />
          <div className='w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer'><FaPlay className='w-[20px] h-[20px]' /></div>
          <MdSkipNext className='w-[28px] h-[28px]' />
        </div>
      </div>

      <div className='w-[50%] h-full bg-slate-500 hidden md:flex'>

      </div>
    </div>
  )
}

export default Home