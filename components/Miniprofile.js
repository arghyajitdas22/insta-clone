import React from 'react'
import Image from 'next/image'
import myPic from './images/IMG_20221001_203749.jpg'

function Miniprofile() {
  return (
    <div className='flex items-center justify-between cursor-pointer'>
      <Image src={myPic} className='w-16 h-16 rounded-full p-[2px] border' />
      <div className='flex-1 mx-4'>
        <p className='font-bold text-sm'>imarghyajit_2021</p>
        <p className='text-sm text-gray-400'>Arghyajit Das</p>
      </div>
      <button className='text-sm font-semibold text-blue-400 ml-16'>Sign Out</button>
    </div>
  )
}

export default Miniprofile
