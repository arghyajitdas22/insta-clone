import React from 'react'
import Image from 'next/image'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import myPic from './images/IMG_20221001_203749.jpg'

function Footer() {
  return (
    <div className='flex justify-between items-center px-5 shadow-sm border-t fixed bottom-0 bg-white w-screen z-50 md:invisible'>
      <div className='footBtn' >
        <HomeOutlinedIcon className='footIcon' />
      </div>
      <div className='footBtn' >
        <ExploreOutlinedIcon className='footIcon' />
      </div>
      <div className='footBtn' >
        <OndemandVideoOutlinedIcon className='footIcon' />
      </div>
      <div className='footBtn' >
        <AddCircleOutlineOutlinedIcon className='footIcon' />
      </div>
      <div className='footBtn' >
        <ForumOutlinedIcon className='footIcon' />
        <div className='absolute h-4 w-4 top-0.5 right-21 text-xs bg-red-600 flex items-center justify-center rounded-full text-white'>3</div>
      </div>
      <div className='footBtn'>
        <Image className='footIcon rounded-full ' src={myPic} alt="profile-pic" />
      </div>
    </div>
  )
}

export default Footer
